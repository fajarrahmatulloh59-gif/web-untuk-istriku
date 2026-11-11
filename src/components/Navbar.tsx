
import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Settings, Heart } from 'lucide-react';
import romanticBGM from '../utils/Batasi Rasa.mp3';

interface NavbarProps {
  onOpenCustomizer: () => void;
  wifeName: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCustomizer, wifeName }) => {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlayingMusic(true);
      } catch (error) {
        console.error('Gagal memutar musik:', error);
        setIsPlayingMusic(false);
      }
    } else {
      audio.pause();
      setIsPlayingMusic(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFF5F0]/85 backdrop-blur-md border-b border-[#F8B9C9]/30 transition-all">
      <audio
        ref={audioRef}
        src={romanticBGM}
        loop
        preload="auto"
        onEnded={() => setIsPlayingMusic(false)}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-8">

        {/* Zone 1: Brand title */}
        <a
          href="#welcome"
          className="text-base sm:text-lg font-bold tracking-tight text-[#4A3B43] hover:text-[#E86A8D] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 font-heading"
        >
          <span>A Little Apology</span>
          <Heart className="w-4 h-4 fill-[#F8B9C9] text-[#E86A8D] inline-block animate-pulse-subtle" />
        </a>

        {/* Zone 2: Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#7A646F]">
          <a href="#letter" className="hover:text-[#E86A8D] transition-colors whitespace-nowrap shrink-0">
            Surat Cinta
          </a>
          <a href="#memories" className="hover:text-[#E86A8D] transition-colors whitespace-nowrap shrink-0">
            Kenangan
          </a>
          <a href="#reasons" className="hover:text-[#E86A8D] transition-colors whitespace-nowrap shrink-0">
            Alasan Sayang
          </a>
          <a href="#surprise" className="hover:text-[#E86A8D] transition-colors whitespace-nowrap shrink-0">
            Kejutan Spesial
          </a>
          <a href="#promises" className="hover:text-[#E86A8D] transition-colors whitespace-nowrap shrink-0">
            Janji Suami
          </a>
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={toggleMusic}
            aria-label={isPlayingMusic ? "Matikan Musik" : "Putar Musik Romantis"}
            title={isPlayingMusic ? "Matikan Musik Romantis" : "Putar Musik Romantis (Music Box)"}
            className={`min-h-[44px] min-w-[44px] px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all shadow-sm ${
              isPlayingMusic
                ? 'bg-[#E86A8D] text-white shadow-pink-200'
                : 'bg-white/90 text-[#4A3B43] border border-[#F8B9C9]/50 hover:bg-[#FFF0F4]'
            }`}
          >
            {isPlayingMusic ? (
              <>
                <Volume2 className="w-4 h-4 animate-bounce" />
                <span className="hidden sm:inline">Melodi Aktif 🎵</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-[#7A646F]" />
                <span className="hidden sm:inline">Musik Romantis</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenCustomizer}
            aria-label="Sesuaikan Konten"
            title="Ubah Nama, Nominal Transfer & Foto"
            className="min-h-[44px] min-w-[44px] p-2 rounded-full text-[#7A646F] hover:text-[#E86A8D] hover:bg-white/80 transition-colors border border-transparent hover:border-[#F8B9C9]/40 flex items-center justify-center"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
