import React, { useState } from 'react';
import { Sparkles, Gift, ZoomIn, X, CheckCircle2, Heart, Edit3 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { TransferDetails } from '../types';

interface SectionSurpriseProps {
  transfer: TransferDetails;
  onOpenCustomizer: () => void;
}

export const SectionSurprise: React.FC<SectionSurpriseProps> = ({
  transfer,
  onOpenCustomizer,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleOpenEnvelope = () => {
    setIsOpen(true);
    // Fire festive sparkle confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#FFDDE5', '#F8B9C9', '#FFE8A8', '#E86A8D'],
      });
    } catch {
      // ignore
    }
  };

  return (
    <section id="surprise" className="py-16 sm:py-24 px-4 scroll-mt-14 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-r from-[#FFDDE5]/50 to-[#FFE8A8]/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0F4] border border-[#F8B9C9] text-xs font-semibold text-[#E86A8D] mb-3">
            <Gift className="w-3.5 h-3.5" />
            <span>Kejutan Manis Spesial</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#4A3B43] font-heading">
            Pssttt... Ada sesuatu untukmu!
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#7A646F]">
            Jangan lupa dibuka ya, Sayang. Hehehe. 💌
          </p>
        </div>

        {/* Envelope Container */}
        <div className="relative my-8 sm:my-12 flex flex-col items-center">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              /* Closed Envelope with Bobbing Animation */
              <motion.div
                key="closed-envelope"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="flex flex-col items-center"
              >
                <div className="relative group cursor-pointer animate-gentle-bounce" onClick={handleOpenEnvelope}>
                  {/* Cute Envelope Graphic */}
                  <div className="w-72 sm:w-80 h-48 sm:h-52 bg-gradient-to-b from-[#FFDDE5] to-[#F8B9C9] rounded-2xl shadow-xl shadow-pink-200/60 border-2 border-white relative overflow-hidden flex items-center justify-center">
                    {/* Envelope Flap Lines */}
                    <div className="absolute inset-0 border-t-[80px] sm:border-t-[90px] border-t-white/30 border-l-[144px] sm:border-l-[160px] border-l-transparent border-r-[144px] sm:border-r-[160px] border-r-transparent pointer-events-none" />

                    {/* Wax Seal with Heart */}
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-14 h-14 rounded-full bg-[#E86A8D] border-2 border-white text-white flex items-center justify-center shadow-md z-10"
                    >
                      <Heart className="w-7 h-7 fill-white" />
                    </motion.div>

                    {/* Cute text label */}
                    <div className="absolute bottom-3 text-xs font-handwriting text-[#5A384A] font-bold tracking-wider">
                      Khusus Untuk Istri Tercinta
                    </div>
                  </div>

                  {/* Little Companion Teddy Bear Peeking */}
                  <div className="absolute -bottom-4 -right-6 sm:-right-8 w-20 sm:w-24 h-20 sm:h-24 rounded-full overflow-hidden border-2 border-white shadow-md bg-white">
                    <img
                      src="/src/assets/images/teddy_bear_flowers_1794364808925.jpg"
                      alt="Teddy Bear companion peeking"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={handleOpenEnvelope}
                    className="min-h-[48px] px-8 py-3.5 rounded-full bg-[#E86A8D] hover:bg-[#D24D73] text-white font-bold text-base sm:text-lg shadow-lg shadow-pink-300/50 hover:shadow-pink-400/60 transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
                  >
                    <span>Buka Kejutan 💌</span>
                    <Sparkles className="w-4 h-4 text-[#FFE8A8]" />
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Opened Envelope Revealing Transfer Screenshot Card */
              <motion.div
                key="opened-envelope"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-full max-w-md mx-auto"
              >
                {/* Transfer Card Container */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-2xl shadow-pink-200/70 border-2 border-[#F8B9C9] relative">
                  {/* Decorative flower pin */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFF0F4] border border-[#F8B9C9] px-3 py-0.5 rounded-full text-[11px] font-bold text-[#E86A8D] flex items-center gap-1 shadow-2xs">
                    <Sparkles className="w-3 h-3 text-[#FFE8A8] fill-[#FFE8A8]" />
                    <span>Tanda Cinta & Sayang</span>
                  </div>

                  {/* Transfer Screenshot / Digital Receipt */}
                  <div
                    onClick={() => setIsZoomed(true)}
                    className="cursor-pointer group relative rounded-2xl overflow-hidden border border-slate-100 bg-[#FDFBF7] p-5 text-left transition-all hover:border-[#E86A8D]/60"
                  >
                    {transfer.customImage ? (
                      /* Custom uploaded screenshot */
                      <div className="relative rounded-xl overflow-hidden">
                        <img
                          src={transfer.customImage}
                          alt="Bukti Transfer Asli"
                          className="w-full h-auto object-contain max-h-[380px] mx-auto rounded-xl"
                        />
                      </div>
                    ) : (
                      /* High-Fidelity Indonesian Digital Transfer Receipt */
                      <div className="space-y-4 font-body">
                        {/* Header of Receipt */}
                        <div className="flex items-center justify-between border-b border-dashed border-slate-200 pb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-[#D8EEDB] text-emerald-600 flex items-center justify-center">
                              <CheckCircle2 className="w-5 h-5 fill-emerald-600 text-white" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-800 tracking-wide uppercase">
                                {transfer.bankName}
                              </div>
                              <div className="text-[10px] text-emerald-600 font-semibold">
                                Transaksi Berhasil
                              </div>
                            </div>
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono">
                            {transfer.date}
                          </div>
                        </div>

                        {/* Nominal Amount */}
                        <div className="text-center py-2 bg-gradient-to-b from-[#FFF5F0] to-white rounded-xl border border-[#F8B9C9]/30">
                          <div className="text-[11px] text-[#8C7580] font-medium">Total Transfer</div>
                          <div className="text-2xl sm:text-3xl font-extrabold text-[#E86A8D] font-mono tabular-nums tracking-tight mt-0.5">
                            {transfer.amount}
                          </div>
                        </div>

                        {/* Transfer Details (Privacy Compliant) */}
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between py-1 border-b border-slate-100">
                            <span className="text-slate-400">Penerima</span>
                            <span className="font-bold text-slate-700">{transfer.recipientName}</span>
                          </div>
                          <div className="flex justify-between py-1 border-b border-slate-100">
                            <span className="text-slate-400">Rekening Tujuan</span>
                            <span className="font-mono text-slate-600 font-medium">{transfer.recipientAccount}</span>
                          </div>
                          <div className="flex justify-between py-1 border-b border-slate-100">
                            <span className="text-slate-400">No. Referensi</span>
                            <span className="font-mono text-slate-400 text-[11px]">{transfer.transferId}</span>
                          </div>
                          <div className="pt-1">
                            <span className="text-slate-400 block text-[11px] mb-0.5">Catatan Kasih Sayang:</span>
                            <div className="p-2.5 rounded-lg bg-[#FFF0F4] text-[#7A4056] text-xs font-medium italic">
                              "{transfer.notes}"
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Zoom overlay hint */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl pointer-events-none">
                      <span className="bg-black/70 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 font-semibold backdrop-blur-xs">
                        <ZoomIn className="w-3.5 h-3.5" /> Klik untuk perbesar
                      </span>
                    </div>
                  </div>

                  {/* Supporting Message per PRD */}
                  <div className="mt-5 text-left p-4 rounded-2xl bg-[#FFF8F5] border border-[#F8B9C9]/40">
                    <p className="font-handwriting text-xl text-[#E86A8D] font-bold mb-1">
                      Hehehe... Surprise!
                    </p>
                    <p className="text-xs sm:text-sm text-[#5C4552] leading-relaxed">
                      Bukan cuma kata-kata manis yang ingin aku kasih. Ada sedikit tanda sayang juga buat kamu.
                    </p>
                    <p className="text-xs sm:text-sm text-[#5C4552] mt-2 font-medium">
                      Semoga bisa bikin kamu tersenyum hari ini.
                    </p>
                    <p className="text-xs sm:text-sm text-[#E86A8D] font-bold mt-2 flex items-center gap-1 font-script text-base">
                      You deserve all the happiness, Sayang. ❤️
                    </p>
                  </div>

                  {/* Husband customizer trigger button */}
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <button
                      onClick={onOpenCustomizer}
                      className="inline-flex items-center gap-1.5 text-xs text-[#7A646F] hover:text-[#E86A8D] py-1.5 px-3 rounded-full hover:bg-[#FFF0F4] transition-colors"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Sesuaikan Nominal / Upload Foto Sendiri</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Zoom Modal for Transfer Proof (FR-07) */}
      <AnimatePresence>
        {isZoomed && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs"
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-6 rounded-3xl max-w-md w-full relative shadow-2xl border-2 border-[#F8B9C9]"
            >
              <button
                onClick={() => setIsZoomed(false)}
                aria-label="Tutup"
                className="absolute top-3 right-3 min-h-[44px] min-w-[44px] rounded-full bg-[#FFF0F4] text-[#7A646F] hover:text-[#E86A8D] flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-lg font-bold text-[#4A3B43] mb-4 text-center font-heading">
                Bukti Tanda Kasih Sayang 💳
              </h3>

              {transfer.customImage ? (
                <div className="rounded-xl overflow-hidden max-h-[70vh] flex items-center justify-center">
                  <img
                    src={transfer.customImage}
                    alt="Bukti Transfer Asli"
                    className="max-h-[70vh] w-auto object-contain rounded-xl"
                  />
                </div>
              ) : (
                <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-slate-200 font-body space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-dashed border-slate-200">
                    <span className="font-bold text-sm text-slate-800">{transfer.bankName}</span>
                    <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
                      ✓ Sukses
                    </span>
                  </div>
                  <div className="text-center py-3 bg-[#FFF5F0] rounded-xl border border-pink-100">
                    <span className="text-xs text-slate-500">Nominal Transfer</span>
                    <p className="text-3xl font-extrabold text-[#E86A8D] font-mono tabular-nums mt-1">
                      {transfer.amount}
                    </p>
                  </div>
                  <div className="text-xs space-y-2 text-slate-600">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Penerima:</span>
                      <span className="font-bold">{transfer.recipientName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Rekening:</span>
                      <span className="font-mono">{transfer.recipientAccount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Tanggal:</span>
                      <span>{transfer.date}</span>
                    </div>
                    <div className="mt-2 pt-2 border-t border-slate-100">
                      <span className="text-slate-400 block mb-1">Catatan:</span>
                      <p className="p-3 bg-pink-50 rounded-lg text-[#7A4056] font-medium">
                        "{transfer.notes}"
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <p className="text-center text-xs text-slate-400 mt-4">
                Informasi rekening telah disamarkan demi menjaga privasi & keamanan.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
