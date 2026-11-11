import React, { useState } from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface ReasonItem {
  id: number;
  title: string;
  detail: string;
  iconBg: string;
}

const defaultReasons: ReasonItem[] = [
  {
    id: 1,
    title: 'Karena senyummu selalu membuat hariku lebih baik.',
    detail: 'Sesulit atau secapek apa pun hariku, begitu melihat senyumanmu, semua rasa lelah itu langsung menguap begitu saja.',
    iconBg: 'bg-[#FFDDE5]',
  },
  {
    id: 2,
    title: 'Karena kamu adalah rumah untukku.',
    detail: 'Bukan tempat atau bangunan, tapi keberadaanmu yang selalu membuatku merasa aman, tenang, dan diterima apa adanya.',
    iconBg: 'bg-[#FFE8A8]',
  },
  {
    id: 3,
    title: 'Karena hal-hal kecil darimu selalu berarti.',
    detail: 'Perhatian kecilmu, caramu menyiapkan kopi atau makanan, dan tawa manismu saat kita bercanda hal-hal receh.',
    iconBg: 'bg-[#D8EEDB]',
  },
  {
    id: 4,
    title: 'Karena kamu adalah teman hidup yang ingin terus aku perjuangkan.',
    detail: 'Dalam suka maupun duka, dalam senang maupun saat ada perbedaan, aku selalu ingin memperjuangkan kebahagiaan kita.',
    iconBg: 'bg-[#F8B9C9]',
  },
  {
    id: 5,
    title: 'Karena sampai hari ini, aku masih memilih kamu.',
    detail: 'Dan besok, lusa, hingga selamanya, hatiku akan selalu memilihmu lagi dan lagi tanpa ragu sedikit pun.',
    iconBg: 'bg-[#FFDDE5]',
  },
];

export const SectionWhyLove: React.FC = () => {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setActiveCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="reasons" className="py-16 sm:py-24 px-4 scroll-mt-14">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0F4] border border-[#F8B9C9] text-xs font-semibold text-[#E86A8D] mb-3">
            <Heart className="w-3.5 h-3.5 fill-[#E86A8D]" />
            <span>Alasan Mengapa Begitu Berarti</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#4A3B43] font-heading">
            Why I Love You
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#7A646F] max-w-md mx-auto">
            Sentuh setiap kartu untuk membaca rahasia kecil di balik setiap alasan
          </p>
        </div>

        {/* Reasons Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {defaultReasons.map((item, idx) => {
            const isExpanded = activeCardId === item.id;
            const isLastSingle = idx === defaultReasons.length - 1 && defaultReasons.length % 2 !== 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                onClick={() => toggleCard(item.id)}
                className={`cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 border ${
                  isExpanded
                    ? 'bg-white border-[#E86A8D] shadow-xl shadow-pink-100 ring-2 ring-[#F8B9C9]/50'
                    : 'bg-white/90 border-[#F8B9C9]/40 hover:border-[#E86A8D]/60 hover:shadow-md hover:bg-white'
                } ${isLastSingle ? 'md:col-span-2 md:max-w-xl md:mx-auto w-full' : ''}`}
              >
                <div className="flex items-start gap-4">
                  {/* Badge Number / Icon */}
                  <div
                    className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0 text-[#4A3B43] font-bold text-sm shadow-xs`}
                  >
                    <span>0{item.id}</span>
                  </div>

                  {/* Title & Interactive Detail */}
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-[#4A3B43] font-heading leading-snug">
                      {item.title}
                    </h3>

                    {/* Expandable heartfelt note */}
                    <motion.div
                      initial={false}
                      animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-sm text-[#6A5260] font-body leading-relaxed bg-[#FFF8F5] p-3 rounded-xl border border-[#F8B9C9]/30">
                        {item.detail}
                      </p>
                    </motion.div>

                    <div className="mt-3 flex items-center justify-between text-xs text-[#A08894]">
                      <span className="flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#E86A8D]" />
                        {isExpanded ? 'Klik untuk menutup' : 'Klik untuk membaca selengkapnya'}
                      </span>
                      <Heart
                        className={`w-4 h-4 transition-colors ${
                          isExpanded ? 'fill-[#E86A8D] text-[#E86A8D]' : 'text-[#D0B8C4]'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Sweet reminder quote */}
        <div className="mt-12 text-center">
          <div className="inline-block p-4 sm:p-6 rounded-2xl bg-[#FFF5F0] border border-[#F8B9C9]/60 max-w-lg mx-auto shadow-xs">
            <p className="font-handwriting text-xl sm:text-2xl text-[#E86A8D] font-bold">
              "Dan sejuta alasan lainnya yang tidak akan pernah cukup dituliskan dalam kata-kata..."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
