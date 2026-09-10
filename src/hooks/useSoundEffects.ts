import { useState, useRef, useEffect } from 'react';

/**
 * Procedural Web Audio API sound generator for atmospheric late-night ambiance:
 * - Gentle rain/night hum
 * - Soft wooden chime when adding items
 * Zero external audio files required!
 */
export function useSoundEffects() {
  const [isAmbientPlaying, setIsAmbientPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const ambientNodesRef = useRef<{ gainNode: GainNode; intervalId?: number } | null>(null);

  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  // Play a soft wooden bell/chime on interaction
  const playChime = () => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.6);
    } catch {
      // Audio not permitted or supported, silent fallback
    }
  };

  // Toggle procedural nighttime ambient hum (soft filtered pink noise + warm drone)
  const toggleAmbient = () => {
    const ctx = getAudioContext();
    if (!ctx) return;

    if (isAmbientPlaying) {
      if (ambientNodesRef.current) {
        ambientNodesRef.current.gainNode.gain.setTargetAtTime(0, ctx.currentTime, 0.5);
        if (ambientNodesRef.current.intervalId) {
          clearInterval(ambientNodesRef.current.intervalId);
        }
        setTimeout(() => {
          setIsAmbientPlaying(false);
        }, 500);
      }
    } else {
      try {
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.03, ctx.currentTime + 1.2);
        masterGain.connect(ctx.destination);

        // Warm drone oscillator (low F#)
        const drone = ctx.createOscillator();
        drone.type = 'triangle';
        drone.frequency.setValueAtTime(92.5, ctx.currentTime); // F#2

        const droneFilter = ctx.createBiquadFilter();
        droneFilter.type = 'lowpass';
        droneFilter.frequency.setValueAtTime(180, ctx.currentTime);

        drone.connect(droneFilter);
        droneFilter.connect(masterGain);
        drone.start();

        // White/pink noise buffer for night rain breeze
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = (Math.random() * 2 - 1) * 0.08;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const noiseFilter = ctx.createBiquadFilter();
        noiseFilter.type = 'bandpass';
        noiseFilter.frequency.setValueAtTime(450, ctx.currentTime);
        noiseFilter.Q.setValueAtTime(1.2, ctx.currentTime);

        whiteNoise.connect(noiseFilter);
        noiseFilter.connect(masterGain);
        whiteNoise.start();

        ambientNodesRef.current = { gainNode: masterGain };
        setIsAmbientPlaying(true);
      } catch (err) {
        console.error('Ambient audio could not be started', err);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (ambientNodesRef.current) {
        try {
          ambientNodesRef.current.gainNode.disconnect();
        } catch {
          // cleanup
        }
      }
    };
  }, []);

  return {
    playChime,
    toggleAmbient,
    isAmbientPlaying,
  };
}