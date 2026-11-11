import React, { useState } from 'react';
import { ShieldCheck, Check, Sparkles, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface PromiseData {
  id: number;
  text: string;
  subtext: string;
}

const defaultPromises: PromiseData[] = [
  {
    id: 1,
    text: 'Aku akan belajar lebih peka terhadap perasaanmu.',
    subtext: 'Membaca bahasa tubuhmu, menyadari saat kamu lelah atau sedih, dan selalu ada sebelum kamu meminta.',
  },
  {
    id: 2,
    text: 'Aku akan berusaha mendengarkan sebelum menjelaskan.',
    subtext: 'Mendengarkan dengan penuh empati, tanpa memotong atau langsung membela diri.',
  },
  {
    id: 3,
    text: 'Aku tidak akan membiarkan ego mengalahkan rasa sayang.',
    subtext: 'Bagi suamimu ini, kebahagiaan dan kenyamanan hatimu jauh lebih berharga daripada merasa paling benar.',
  },
  {
    id: 4,
    text: 'Aku akan belajar meminta maaf tanpa harus menunggu semuanya membaik sendiri.',
    subtext: 'Berani mengakui kesalahan lebih awal dan berinisiatif meredakan suasana dengan penuh kehangatan.',
  },
  {
    id: 5,
    text: 'Aku ingin terus bertumbuh bersamamu.',
    subtext: 'Menjadi pasangan, sahabat, dan pendamping hidup yang selalu bisa kamu andalkan setiap hari.',
  },
];

export const SectionPromises: React.FC = () => {
  const [stampedIds, setStampedIds] = useState<number[]>([1]);

  const toggleStamp = (id: number) => {
    setStampedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const stampAll = () => {
    setStampedIds(defaultPromises.map((p) => p.id));
  };

  return (
    <section id="promises" className="py-16 sm:py-24 px-4 scroll-mt-14 bg-gradient-to-b from-[#FFF5F0]/50 to-white/70">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0F4] border border-[#F8B9C9] text-xs font-semibold text-[#E86A8D] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Komitmen Dari Hati</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#4A3B43] font-heading">
            A Little Promise
          </h2>
          <p className="mt-2 text-base sm:text-lg text-[#E86A8D] font-bold font-handwriting text-2xl">
            "Aku ingin belajar menjadi lebih baik untukmu."
          </p>
        </div>

        {/* Teddy Bear Couple Illustration */}
        <div className="flex flex-col sm:flex-row items-center gap-8 mb-10 bg-white/90 p-5 sm:p-7 rounded-3xl border border-[#F8B9C9]/50 shadow-lg shadow-pink-100/50">
          <div className="w-40 sm:w-48 h-40 sm:h-48 rounded-2xl overflow-hidden shrink-0 border-2 border-[#FFDDE5] shadow-xs">
            <img
              src="/src/assets/images/teddy_bear_couple_1794364810123.jpg"
              alt="Cute fluffy teddy bear couple embracing"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-[#4A3B43] font-heading flex items-center gap-2">
              <span>Janji Setia Suamimu</span>
              <Heart className="w-4 h-4 fill-[#E86A8D] text-[#E86A8D]" />
            </h3>
            <p className="text-sm text-[#6C5562] font-body leading-relaxed">
              Hubungan kita adalah hal yang paling berharga untukku. Setiap poin di bawah ini bukan sekadar kata-kata manis, tapi tekad nyata yang ingin selalu kuusahakan setiap hari bersamamu.
            </p>
            <div className="pt-2">
              <button
                onClick={stampAll}
                className="text-xs font-bold text-[#E86A8D] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#FFE8A8] fill-[#FFE8A8]" />
                Meterai Semua Janji Sekaligus ✨
              </button>
            </div>
          </div>
        </div>

        {/* Promises List */}
        <div className="space-y-4">
          {defaultPromises.map((p, idx) => {
            const isStamped = stampedIds.includes(p.id);

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                onClick={() => toggleStamp(p.id)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  isStamped
                    ? 'bg-white border-[#E86A8D] shadow-md ring-1 ring-[#F8B9C9]/60'
                    : 'bg-white/80 border-[#F8B9C9]/40 hover:bg-white hover:border-[#E86A8D]/50'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold mt-0.5 ${
                      isStamped ? 'bg-[#E86A8D] text-white' : 'bg-[#FFDDE5] text-[#8A5265]'
                    }`}
                  >
                    {isStamped ? <Check className="w-4 h-4" /> : p.id}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#4A3B43] font-heading leading-snug">
                      {p.text}
                    </h4>
                    <p className="text-xs text-[#7A646F] font-body mt-1 leading-relaxed">
                      {p.subtext}
                    </p>
                  </div>
                </div>

                {/* Stamp Action Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleStamp(p.id);
                  }}
                  className={`self-end sm:self-auto min-h-[40px] px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
                    isStamped
                      ? 'bg-[#FFF0F4] text-[#E86A8D] border border-[#F8B9C9]'
                      : 'bg-[#FFDDE5]/60 hover:bg-[#FFDDE5] text-[#5A384A]'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${isStamped ? 'fill-[#E86A8D] text-[#E86A8D]' : 'text-[#8A5265]'}`} />
                  <span>{isStamped ? 'Disegel Cinta ❤️' : 'Meterai Janji'}</span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
