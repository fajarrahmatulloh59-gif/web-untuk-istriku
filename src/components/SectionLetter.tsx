import React, { useState } from 'react';
import { Heart, Flower2, Sparkles, Feather } from 'lucide-react';
import { motion } from 'motion/react';

interface SectionLetterProps {
  wifeName: string;
  husbandName: string;
}

export const SectionLetter: React.FC<SectionLetterProps> = ({ wifeName, husbandName }) => {
  const [heartCount, setHeartCount] = useState(0);

  const handleHeartClick = () => {
    setHeartCount((prev) => prev + 1);
  };

  return (
    <section id="letter" className="py-16 sm:py-24 px-4 relative scroll-mt-14">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0F4] border border-[#F8B9C9] text-xs font-semibold text-[#E86A8D] mb-3">
            <Feather className="w-3.5 h-3.5" />
            <span>Surat Dari Lubuk Hati</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#4A3B43] font-heading">
            The Apology Letter
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#7A646F]">
            Setiap kata di sini ditulis dengan kejujuran dan rasa sayang yang tulus
          </p>
        </div>

        {/* Romantic Letter Paper Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative paper-texture rounded-3xl p-6 sm:p-12 shadow-2xl shadow-pink-100/60 border-2 border-[#F8B9C9]/50 overflow-hidden"
        >
          {/* Top Washi Tape Decoration */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#FFE8A8]/80 backdrop-blur-xs rotate-[-1.5deg] shadow-xs border border-[#FFE8A8] flex items-center justify-center">
            <span className="text-[10px] text-[#8C6D23] font-medium tracking-wider uppercase">Untuk Istriku</span>
          </div>

          {/* Corner Floral Accents */}
          <div className="absolute top-4 right-4 text-[#F8B9C9] opacity-40 pointer-events-none">
            <Flower2 className="w-10 h-10 rotate-12" />
          </div>
          <div className="absolute bottom-4 left-4 text-[#F8B9C9] opacity-40 pointer-events-none">
            <Flower2 className="w-10 h-10 -rotate-12" />
          </div>

          {/* Letter Salutation */}
          <div className="font-handwriting text-2xl sm:text-3xl text-[#E86A8D] font-bold mb-6">
            Sayangku{wifeName ? ` (${wifeName})` : ''}...
          </div>

          {/* Letter Body Paragraphs */}
          <div className="space-y-5 text-base sm:text-lg text-[#4A3B43] leading-relaxed font-body">
            <p>
              Aku tahu terkadang sikapku membuatmu kecewa. Ada hal-hal yang mungkin tidak selalu bisa aku ungkapkan dengan baik.
            </p>

            <p className="text-xl sm:text-2xl font-bold text-[#E86A8D] font-heading my-4 text-center sm:text-left">
              Maaf ya, Sayang.
            </p>

            <p>
              Aku tidak ingin egoku lebih besar daripada rasa sayangku kepadamu. Aku masih belajar menjadi suami yang lebih baik, lebih peka, dan lebih bisa memahami perasaanmu.
            </p>

            <p>
              Aku mungkin belum sempurna, tapi aku tidak ingin berhenti berusaha untukmu.
            </p>

            <p className="font-medium text-[#5E3F4E]">
              Terima kasih sudah menjadi bagian terindah dalam hidupku.
            </p>
          </div>

          {/* Closing & Signature */}
          <div className="mt-8 pt-6 border-t border-[#F8B9C9]/40 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="font-script text-2xl sm:text-3xl text-[#E86A8D] font-bold">
                I love you, my favorite person. ❤️
              </p>
              <p className="text-xs text-[#8C7580] mt-1">
                Dari suamimu yang selalu menyayangimu, {husbandName || 'Suamimu'}
              </p>
            </div>

            {/* Interactive Love Tap Button */}
            <button
              onClick={handleHeartClick}
              className="inline-flex items-center gap-2 self-start sm:self-auto px-4 py-2 rounded-full bg-[#FFF0F4] hover:bg-[#FFE0E9] border border-[#F8B9C9] text-xs font-bold text-[#E86A8D] transition-transform active:scale-90 cursor-pointer shadow-xs"
            >
              <Heart className={`w-4 h-4 fill-[#E86A8D] ${heartCount > 0 ? 'animate-ping' : ''}`} />
              <span>Kirim Pelukan ({heartCount})</span>
              <Sparkles className="w-3.5 h-3.5 text-[#FFE8A8]" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
