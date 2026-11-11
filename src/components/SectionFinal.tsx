import React, { useState } from 'react';
import { Heart, Sparkles, Smile, RefreshCw, Coffee, Utensils, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';

interface SectionFinalProps {
  wifeName: string;
  husbandName: string;
}

export const SectionFinal: React.FC<SectionFinalProps> = ({ wifeName, husbandName }) => {
  const [response, setResponse] = useState<'forgiven' | 'pouting' | null>(null);
  const [redeemedCoupon, setRedeemedCoupon] = useState<string | null>(null);

  const handleForgive = () => {
    setResponse('forgiven');

    // Confetti celebration
    try {
      const count = 200;
      const defaults = {
        origin: { y: 0.7 },
        colors: ['#FFDDE5', '#F8B9C9', '#E86A8D', '#FFE8A8', '#D8EEDB', '#FF6B8B'],
      };

      const fire = (particleRatio: number, opts: confetti.Options) => {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio),
        });
      };

      fire(0.25, { spread: 26, startVelocity: 55 });
      fire(0.2, { spread: 60 });
      fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
      fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
      fire(0.1, { spread: 120, startVelocity: 45 });
    } catch {
      // ignore
    }
  };

  const handlePout = () => {
    setResponse('pouting');
  };

  const resetResponse = () => {
    setResponse(null);
    setRedeemedCoupon(null);
  };

  return (
    <section id="final" className="py-20 sm:py-28 px-4 scroll-mt-14 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Header */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0F4] border border-[#F8B9C9] text-xs font-semibold text-[#E86A8D] mb-4">
          <Smile className="w-3.5 h-3.5" />
          <span>Satu Pertanyaan Terakhir</span>
        </div>

        {/* Main Question from PRD */}
        <h2 className="text-2xl sm:text-4xl font-bold text-[#4A3B43] font-heading leading-tight max-w-xl mx-auto text-balance">
          Jadi... apakah suamimu yang agak menyebalkan ini masih boleh mendapatkan{' '}
          <span className="text-[#E86A8D]">satu senyuman darimu?</span>
        </h2>

        <p className="mt-3 text-sm sm:text-base text-[#7A646F] max-w-md mx-auto">
          Pilihlah dengan sejujur-jujurnya dari hatimu, Sayang. Tidak ada paksaan sama sekali! 💕
        </p>

        {/* Two Interactive Buttons or Response View */}
        <div className="mt-8 sm:mt-10">
          <AnimatePresence mode="wait">
            {!response && (
              <motion.div
                key="buttons"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
              >
                {/* Button A: Aku Maafkan */}
                <button
                  onClick={handleForgive}
                  className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 rounded-full bg-[#E86A8D] hover:bg-[#D24D73] text-white font-bold text-base sm:text-lg shadow-lg shadow-pink-300/50 hover:shadow-pink-400/60 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Heart className="w-5 h-5 fill-white" />
                  <span>Aku Maafkan ❤️</span>
                </button>

                {/* Button B: Aku Masih Ngambek */}
                <button
                  onClick={handlePout}
                  className="w-full sm:w-auto min-h-[52px] px-8 py-3.5 rounded-full bg-white hover:bg-[#FFF0F4] text-[#7A646F] hover:text-[#4A3B43] font-bold text-base sm:text-lg border-2 border-[#F8B9C9] shadow-sm hover:shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Aku Masih Ngambek 😝</span>
                </button>
              </motion.div>
            )}

            {response === 'forgiven' && (
              <motion.div
                key="forgiven"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#E86A8D] shadow-2xl shadow-pink-200/80 max-w-xl mx-auto"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mx-auto border-3 border-[#F8B9C9] shadow-md animate-bounce">
                  <img
                    src="/src/assets/images/teddy_bear_flowers_1794364808925.jpg"
                    alt="Happy Teddy Bear"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="mt-5">
                  <span className="text-4xl">🎉🥳🥰</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#E86A8D] font-heading mt-2">
                    Yeayyy! Terima kasih, Sayang!
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[#4A3B43] font-body leading-relaxed max-w-md mx-auto">
                    Aku akan terus belajar menjadi suami yang lebih baik, lebih sabar, dan lebih membahagiakan untukmu setiap hari. Janji! ❤️
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-pink-100 flex justify-center">
                  <button
                    onClick={resetResponse}
                    className="inline-flex items-center gap-1.5 text-xs text-[#7A646F] hover:text-[#E86A8D] py-1 px-3 rounded-full hover:bg-[#FFF0F4] transition-colors"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Mau pilih lagi?</span>
                  </button>
                </div>
              </motion.div>
            )}

            {response === 'pouting' && (
              <motion.div
                key="pouting"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#F8B9C9] shadow-xl shadow-pink-100 max-w-xl mx-auto text-left"
              >
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 border-b border-pink-100 pb-5">
                  <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-[#FFE8A8] shadow-xs">
                    <img
                      src="/src/assets/images/teddy_bear_flowers_1794364808925.jpg"
                      alt="Pleading Teddy Bear"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#4A3B43] font-heading">
                      Yahhhh... 🥺
                    </h3>
                    <p className="text-sm text-[#7A646F] font-body mt-1 leading-relaxed">
                      Berarti suamimu ini harus berusaha lebih keras lagi nih. Tapi tenang, aku tetap sayang banget sama kamu dan gak akan nyerah!
                    </p>
                  </div>
                </div>

                {/* Playful Bribery Coupons */}
                <div className="mt-5">
                  <p className="text-xs font-bold text-[#8C5D70] uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFE8A8] fill-[#FFE8A8]" />
                    Sogokan Khusus Untuk Redakan Ngambek:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { id: 'boba', label: 'Traktir Minuman / Boba Favorit 🧋', icon: Coffee },
                      { id: 'food', label: 'Beli Makanan Enak Tanpa Dibatasi 🍜', icon: Utensils },
                      { id: 'massage', label: 'Voucher Pijat Kaki & Punggung 💆‍♀️', icon: Heart },
                      { id: 'free', label: 'Kupon Bebas Marahin Suami 1 Jam 📜', icon: Award },
                    ].map((coupon) => (
                      <button
                        key={coupon.id}
                        onClick={() => setRedeemedCoupon(coupon.label)}
                        className={`p-3 rounded-xl border text-xs text-left font-semibold transition-all flex items-center gap-2 ${
                          redeemedCoupon === coupon.label
                            ? 'bg-[#E86A8D] text-white border-[#E86A8D]'
                            : 'bg-[#FFF8F5] border-[#F8B9C9]/50 text-[#5E4854] hover:bg-white hover:border-[#E86A8D]'
                        }`}
                      >
                        <coupon.icon className="w-4 h-4 shrink-0" />
                        <span className="truncate">{coupon.label}</span>
                      </button>
                    ))}
                  </div>

                  {redeemedCoupon && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 p-3 rounded-xl bg-[#D8EEDB]/60 text-emerald-800 text-xs font-bold text-center border border-[#D8EEDB]"
                    >
                      ✓ Voucher tersimpan: "{redeemedCoupon}" siap ditagihkan langsung ke suamimu! 🏷️
                    </motion.div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-pink-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    onClick={handleForgive}
                    className="w-full sm:w-auto px-5 py-2 rounded-full bg-[#E86A8D] text-white text-xs font-bold hover:bg-[#D24D73] transition-colors shadow-xs"
                  >
                    Udah dimaafin deh ❤️
                  </button>
                  <button
                    onClick={resetResponse}
                    className="text-xs text-[#7A646F] hover:text-[#E86A8D] hover:underline"
                  >
                    Pilih ulang tombol
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Closing Message from PRD */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24 p-6 sm:p-10 rounded-3xl bg-white/70 backdrop-blur-xs border border-[#F8B9C9]/60 max-w-xl mx-auto shadow-md"
        >
          <div className="flex justify-center mb-3">
            <Heart className="w-6 h-6 fill-[#F8B9C9] text-[#E86A8D]" />
          </div>
          <p className="text-sm sm:text-base text-[#4A3B43] leading-relaxed font-body">
            Terima kasih sudah membaca sampai akhir.
          </p>
          <p className="mt-2 text-sm sm:text-base text-[#4A3B43] leading-relaxed font-body italic">
            "Aku mencintaimu, bukan hanya ketika semuanya baik-baik saja, tetapi juga ketika kita sedang belajar memahami satu sama lain."
          </p>
          <p className="mt-5 font-script text-2xl sm:text-3xl text-[#E86A8D] font-bold">
            With love, your husband. ❤️
          </p>
          {husbandName && (
            <p className="text-xs text-[#8C7580] font-heading mt-1">
              — {husbandName}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};
