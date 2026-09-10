import React, { useState, useEffect } from 'react';
import { Reservation as ReservationType } from '../types';
import { Calendar, Clock, Users, Sparkles, CheckCircle2, BookmarkCheck } from 'lucide-react';

const RESERVATIONS_STORAGE_KEY = 'the_last_bowl_reservations_v1';

export const Reservation: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('23:30');
  const [guests, setGuests] = useState(2);
  const [seating, setSeating] = useState<ReservationType['seatingPreference']>('Counter Bar');
  const [specialRequest, setSpecialRequest] = useState('');

  const [confirmedReservation, setConfirmedReservation] = useState<ReservationType | null>(null);
  const [pastReservations, setPastReservations] = useState<ReservationType[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(RESERVATIONS_STORAGE_KEY);
      if (saved) {
        setPastReservations(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReservation: ReservationType = {
      id: `TLB-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      name,
      phone,
      email,
      date,
      time,
      guests,
      seatingPreference: seating,
      specialRequest,
      createdAt: new Date().toISOString(),
      status: 'Confirmed',
    };

    const updated = [newReservation, ...pastReservations];
    setPastReservations(updated);
    try {
      localStorage.setItem(RESERVATIONS_STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }

    setConfirmedReservation(newReservation);
  };

  const handleBookAnother = () => {
    setConfirmedReservation(null);
    setName('');
    setSpecialRequest('');
  };

  return (
    <section id="reservation" className="py-24 sm:py-32 bg-cream-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
          <p className="text-[11px] uppercase tracking-widest text-lavender-600 font-semibold">
            SANCTUARY RESERVATION
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-plum-900 font-normal">
            Book Your Bowl
          </h2>
          <p className="text-xs sm:text-sm text-plum-600 font-light">
            Reserve your seat at our counter under the amber lantern light. We hold a limited number of quiet tables each night.
          </p>
        </div>

        {/* Confirmation State */}
        {confirmedReservation ? (
          <div className="p-8 sm:p-12 rounded-3xl bg-cream-50 border border-cream-400 shadow-warm-lg text-center space-y-6 animate-in fade-in duration-300">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-lavender-600 font-semibold">
                CONFIRMATION #{confirmedReservation.id}
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif text-plum-900 font-normal">
                Your bowl is waiting.
              </h3>
              <p className="text-xs sm:text-sm text-plum-600 max-w-md mx-auto leading-relaxed">
                We have saved your counter space for a quiet midnight meal. A confirmation receipt has been generated.
              </p>
            </div>

            {/* Summary Ticket */}
            <div className="max-w-md mx-auto p-6 bg-cream-100/90 rounded-2xl border border-cream-300 text-left text-xs space-y-2.5">
              <div className="flex justify-between border-b border-cream-200 pb-2">
                <span className="text-plum-500">Reserved For:</span>
                <span className="font-semibold text-plum-900">{confirmedReservation.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-plum-500">Date:</span>
                <span className="font-medium text-plum-900">{confirmedReservation.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-plum-500">Time:</span>
                <span className="font-medium text-plum-900">{confirmedReservation.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-plum-500">Party Size:</span>
                <span className="font-medium text-plum-900">{confirmedReservation.guests} Guests</span>
              </div>
              <div className="flex justify-between border-t border-cream-200 pt-2">
                <span className="text-plum-500">Seating:</span>
                <span className="font-medium text-plum-900">{confirmedReservation.seatingPreference}</span>
              </div>
              {confirmedReservation.specialRequest && (
                <div className="border-t border-cream-200 pt-2 text-[11px] text-plum-600 italic">
                  Note: "{confirmedReservation.specialRequest}"
                </div>
              )}
            </div>

            <div className="pt-2">
              <button
                onClick={handleBookAnother}
                className="px-6 py-2.5 rounded-full bg-cream-200 hover:bg-cream-300 text-plum-800 text-xs uppercase tracking-widest font-medium transition-colors"
              >
                Book Another Table
              </button>
            </div>
          </div>
        ) : (
          /* Reservation Form */
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-12 rounded-3xl bg-cream-50 border border-cream-300 shadow-warm-lg space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-plum-800 mb-1.5">
                  Guest Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Maya Chen"
                  className="w-full px-3.5 py-2.5 text-xs bg-cream-100 border border-cream-300 rounded-xl text-plum-900 focus:outline-none focus:ring-1 focus:ring-plum-800"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-plum-800 mb-1.5">
                  Contact Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +1 (555) 392-8190"
                  className="w-full px-3.5 py-2.5 text-xs bg-cream-100 border border-cream-300 rounded-xl text-plum-900 focus:outline-none focus:ring-1 focus:ring-plum-800"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-plum-800 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. maya@domain.com"
                  className="w-full px-3.5 py-2.5 text-xs bg-cream-100 border border-cream-300 rounded-xl text-plum-900 focus:outline-none focus:ring-1 focus:ring-plum-800"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-plum-800 mb-1.5">
                  Number of Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 text-xs bg-cream-100 border border-cream-300 rounded-xl text-plum-900 focus:outline-none focus:ring-1 focus:ring-plum-800"
                >
                  <option value={1}>1 Guest (Solo Midnight Retreat)</option>
                  <option value={2}>2 Guests (Intimate Counter)</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests (Tatami Booth)</option>
                  <option value={5}>5 Guests</option>
                  <option value={6}>6 Guests (Shared Bench)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-plum-800 mb-1.5">
                  Reservation Date *
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-cream-100 border border-cream-300 rounded-xl text-plum-900 focus:outline-none focus:ring-1 focus:ring-plum-800"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-plum-800 mb-1.5">
                  Late-Night Time Slot *
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-cream-100 border border-cream-300 rounded-xl text-plum-900 focus:outline-none focus:ring-1 focus:ring-plum-800"
                >
                  <option value="18:30">6:30 PM — Twilight Opening</option>
                  <option value="20:00">8:00 PM — Evening Lanterns</option>
                  <option value="21:30">9:30 PM — Nightfall Simmer</option>
                  <option value="23:00">11:00 PM — Quiet Hours Begin</option>
                  <option value="23:30">11:30 PM — Pre-Midnight Warmth</option>
                  <option value="00:30">12:30 AM — Midnight Peak</option>
                  <option value="01:30">1:30 AM — 1AM Bowl Ritual</option>
                  <option value="02:30">2:30 AM — Deep Night Comfort</option>
                  <option value="03:15">3:15 AM — Last Call Before Dawn</option>
                </select>
              </div>
            </div>

            {/* Seating Preference */}
            <div>
              <label className="block text-xs font-medium text-plum-800 mb-2">
                Seating Preference
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['Counter Bar', 'Window Lantern', 'Tatami Booth', 'Quiet Corner'] as const).map(
                  (pref) => (
                    <button
                      type="button"
                      key={pref}
                      onClick={() => setSeating(pref)}
                      className={`p-2.5 rounded-xl border text-xs font-medium transition-all ${
                        seating === pref
                          ? 'bg-plum-800 text-cream-100 border-plum-800'
                          : 'bg-cream-100 text-plum-700 border-cream-300 hover:border-cream-400'
                      }`}
                    >
                      {pref}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Special Request */}
            <div>
              <label className="block text-xs font-medium text-plum-800 mb-1.5">
                Special Dietary or Seating Notes (Optional)
              </label>
              <textarea
                rows={2}
                value={specialRequest}
                onChange={(e) => setSpecialRequest(e.target.value)}
                placeholder="Celebrating a quiet moment, dietary requests, or need a serene quiet corner..."
                className="w-full px-3.5 py-2.5 text-xs bg-cream-100 border border-cream-300 rounded-xl text-plum-900 focus:outline-none focus:ring-1 focus:ring-plum-800"
              />
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-plum-800 hover:bg-plum-900 text-cream-100 text-xs uppercase tracking-widest font-medium transition-all shadow-warm-sm hover:shadow-warm-md text-center"
              >
                Confirm Midnight Reservation
              </button>
            </div>
          </form>
        )}

      </div>
    </section>
  );
};