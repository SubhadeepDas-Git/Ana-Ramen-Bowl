import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'max-w-2xl',
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-plum-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        ref={modalRef}
        className={`relative w-full ${maxWidth} bg-cream-50 border border-cream-400/80 rounded-2xl shadow-warm-lg overflow-hidden z-10 my-8 transition-all animate-in fade-in zoom-in-95 duration-200`}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 sm:p-8 border-b border-cream-300 bg-cream-100/50">
          <div>
            {subtitle && (
              <p className="text-[11px] uppercase tracking-widest text-lavender-500 font-medium mb-1">
                {subtitle}
              </p>
            )}
            {title && (
              <h3 className="text-2xl sm:text-3xl font-serif text-plum-900 font-normal">
                {title}
              </h3>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 -mr-2 -mt-2 rounded-full text-plum-500 hover:text-plum-900 hover:bg-cream-200 transition-colors focus:outline-none focus:ring-2 focus:ring-lavender-400"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};