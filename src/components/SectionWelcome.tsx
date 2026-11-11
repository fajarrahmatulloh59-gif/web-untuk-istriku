import React, { useState } from 'react';
import { Heart, Sparkles, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SectionWelcomeProps {
  wifeName: string;
  onOpenLetter: () => void;
  isLetterOpened: boolean;
}

export const SectionWelcome: React.FC<SectionWelcomeProps> = ({
  wifeName,
  onOpenLetter,
  isLetterOpened,
}) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpenLetter();
    }, 700);
  };

  return (
    <section
      id="welcome"
      className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-10 pb-16 overflow-hidden"
    >
      {/* Decorative Pastel Clouds / Orbs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-gradient-to-tr from-[#FFDDE5]/60 via-[#FFE8A8]/40 to-[#D8EEDB]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-2xl mx-auto flex flex-col items-center"
      >
        {/* Subtle cute decorative pill tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#F8B9C9] text-xs font-semibold text-[#E86A8D] shadow-xs mb-4">
          <Sparkles className="w-3.5 h-3.5 fill-[#FFE8A8] text-[#E86A8D]" />
          <span>Surat Spesial Penuh Cinta</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#4A3B43] font-heading leading-tight max-w-xl text-balance">
          A Little Something for{' '}
          <span className="text-[#E86A8D] relative inline-block">
            My Favorite Person
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-[#F8B9C9] fill-current"
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
            >
              <path d="M0,7 Q25,12 50,7 T100,7" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#6E5562] font-body max-w-lg leading-relaxed">
          Hai, <span className="font-bold text-[#E86A8D]">{wifeName || 'Sayang'}</span>! Ada sebuah pesan kecil dari lubuk hatiku yang paling dalam yang ingin aku sampaikan...
        </p>

        {/* Teddy Bear Illustration Card */}
        <div className="relative mt-6 sm:mt-8 mb-4">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden p-2.5 bg-white/90 shadow-xl shadow-pink-100/70 border-2 border-[#FFDDE5] transform hover:scale-[1.02] transition-transform duration-300">
            <img
              src="/src/assets/images/teddy_bear_flowers_1794364808925.jpg"
              alt="Cute fluffy teddy bear holding pastel flowers for wife"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-2xl"
            />
            {/* Tiny animated floating heart sticker */}
            <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#E86A8D] text-white flex items-center justify-center shadow-md animate-bounce">
              <Heart className="w-5 h-5 fill-white" />
            </div>
          </div>
        </div>

        {/* Interactive Envelope Button */}
        <div className="mt-4">
          <AnimatePresence mode="wait">
            {!isLetterOpened ? (
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ repeat: Infinity, duration: 2.4 }}
              >
                <button
                  onClick={handleOpenClick}
                  disabled={isOpening}
                  className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#E86A8D] hover:bg-[#D24D73] text-white font-bold text-base sm:text-lg shadow-lg shadow-pink-300/50 hover:shadow-pink-400/60 active:scale-95 transition-all cursor-pointer"
                >
                  <span className="text-xl">💌</span>
                  <span>{isOpening ? 'Membuka Surat...' : 'Buka Pesanku ❤️'}</span>
                  <Sparkles className="w-4 h-4 text-[#FFE8A8] group-hover:rotate-12 transition-transform" />
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-2"
              >
                <a
                  href="#letter"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#E86A8D] border-2 border-[#F8B9C9] font-bold text-sm shadow-sm hover:bg-[#FFF0F4] transition-all"
                >
                  <span>Surat Sudah Terbuka</span>
                  <ChevronDown className="w-4 h-4 animate-bounce" />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};
