import React, { useState } from 'react';
import { Camera, X, Heart, Sparkles, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MemoryItem } from '../types';

interface SectionMemoriesProps {
  memories: MemoryItem[];
  onOpenCustomizer: () => void;
}

export const SectionMemories: React.FC<SectionMemoriesProps> = ({
  memories,
  onOpenCustomizer,
}) => {
  const [selectedMemory, setSelectedMemory] = useState<MemoryItem | null>(null);

  return (
    <section id="memories" className="py-16 sm:py-24 px-4 scroll-mt-14 bg-gradient-to-b from-transparent via-[#FFF0F4]/40 to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0F4] border border-[#F8B9C9] text-xs font-semibold text-[#E86A8D] mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Galeri Scrapbook Kenangan</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#4A3B43] font-heading">
            Little Memories
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#7A646F] max-w-md mx-auto">
            Momen-momen manis yang selalu membuatku bersyukur memiliki kamu di sampingku
          </p>
        </div>

        {/* Polaroid Scrapbook Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-2">
          {memories.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
              whileHover={{ scale: 1.03, rotate: 0 }}
              style={{ rotate: `${item.rotation}deg` }}
              onClick={() => setSelectedMemory(item)}
              className="group cursor-pointer bg-white p-3.5 pb-5 rounded-2xl shadow-lg hover:shadow-xl shadow-pink-200/50 border border-[#F8B9C9]/40 transition-all duration-300 relative flex flex-col"
            >
              {/* Cute Washi Tape sticker */}
              <div
                className={`absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 ${
                  idx % 2 === 0 ? 'bg-[#FFE8A8]/90' : 'bg-[#D8EEDB]/90'
                } -rotate-2 opacity-90 shadow-2xs border border-white/60 pointer-events-none`}
              />

              {/* Polaroid Photo Frame */}
              <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden bg-[#FFF5F0] border border-slate-100 mb-3">
                <img
                  src={item.image}
                  alt={item.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-2">
                  <span className="text-[11px] text-white font-semibold bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-xs flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-[#F8B9C9]" /> Buka
                  </span>
                </div>
              </div>

              {/* Handwritten style caption */}
              <div className="text-center pt-1 px-1">
                <p className="font-handwriting text-lg sm:text-xl text-[#4A3B43] font-bold leading-snug">
                  {item.caption}
                </p>
                {item.date && (
                  <p className="text-[11px] text-[#A08894] font-body mt-1">
                    {item.date}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Customization helper pill */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenCustomizer}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-[#FFF0F4] text-xs font-semibold text-[#7A646F] hover:text-[#E86A8D] border border-[#F8B9C9]/50 transition-all shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Ganti Foto / Tambah Kenangan Sendiri</span>
          </button>
        </div>
      </div>

      {/* Zoom Modal for Polaroid */}
      <AnimatePresence>
        {selectedMemory && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            onClick={() => setSelectedMemory(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-5 sm:p-7 rounded-3xl max-w-lg w-full shadow-2xl relative border-2 border-[#F8B9C9]"
            >
              <button
                onClick={() => setSelectedMemory(null)}
                aria-label="Tutup"
                className="absolute top-3 right-3 min-h-[44px] min-w-[44px] rounded-full bg-[#FFF0F4] text-[#7A646F] hover:text-[#E86A8D] flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="rounded-2xl overflow-hidden aspect-4/3 w-full bg-[#FFF5F0] border border-slate-100 shadow-inner">
                <img
                  src={selectedMemory.image}
                  alt={selectedMemory.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-4 text-center">
                <h3 className="font-handwriting text-2xl sm:text-3xl font-bold text-[#E86A8D]">
                  "{selectedMemory.caption}"
                </h3>
                {selectedMemory.subCaption && (
                  <p className="mt-2 text-sm text-[#5E4854] font-body leading-relaxed">
                    {selectedMemory.subCaption}
                  </p>
                )}
                <div className="mt-4 pt-3 border-t border-pink-100 flex items-center justify-center gap-1.5 text-xs text-[#8C7580]">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFE8A8] fill-[#FFE8A8]" />
                  <span>Momen abadi yang selalu tersimpan rapi di hatiku</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
