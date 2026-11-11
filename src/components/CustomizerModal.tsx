import React, { useState } from 'react';
import { X, Save, Upload, RotateCcw, Image as ImageIcon } from 'lucide-react';
import { AppConfig, MemoryItem } from '../types';

interface CustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: AppConfig;
  onSaveConfig: (newConfig: AppConfig) => void;
  memories: MemoryItem[];
  onSaveMemories: (newMemories: MemoryItem[]) => void;
  onResetDefaults: () => void;
}

export const CustomizerModal: React.FC<CustomizerModalProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig,
  memories,
  onSaveMemories,
  onResetDefaults,
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'transfer' | 'photos'>('profile');
  const [formData, setFormData] = useState<AppConfig>(config);
  const [memoryList, setMemoryList] = useState<MemoryItem[]>(memories);

  if (!isOpen) return null;

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    target: 'transfer' | number
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      if (target === 'transfer') {
        setFormData((prev) => ({
          ...prev,
          transfer: {
            ...prev.transfer,
            customImage: result,
          },
        }));
      } else {
        setMemoryList((prev) =>
          prev.map((item, idx) => (idx === target ? { ...item, image: result } : item))
        );
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    onSaveConfig(formData);
    onSaveMemories(memoryList);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div
        className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl border-2 border-[#F8B9C9] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-pink-100 flex items-center justify-between bg-[#FFF5F0]">
          <div>
            <h2 className="text-lg font-bold text-[#4A3B43] font-heading">
              Personalisasi Website Apology 🛠️
            </h2>
            <p className="text-xs text-[#7A646F]">
              Ubah nama, nominal transfer, foto kenangan, dan pesan rahasia
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="min-h-[44px] min-w-[44px] rounded-full hover:bg-white text-[#7A646F] flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-pink-100 bg-[#FFF8F5] px-4 gap-2 pt-2">
          <button
            onClick={() => setActiveTab('profile')}
            className={`min-h-[44px] px-4 text-xs font-bold border-b-2 transition-all ${
              activeTab === 'profile'
                ? 'border-[#E86A8D] text-[#E86A8D]'
                : 'border-transparent text-[#7A646F] hover:text-[#4A3B43]'
            }`}
          >
            Nama & Panggilan
          </button>
          <button
            onClick={() => setActiveTab('transfer')}
            className={`min-h-[44px] px-4 text-xs font-bold border-b-2 transition-all ${
              activeTab === 'transfer'
                ? 'border-[#E86A8D] text-[#E86A8D]'
                : 'border-transparent text-[#7A646F] hover:text-[#4A3B43]'
            }`}
          >
            Bukti Transfer
          </button>
          <button
            onClick={() => setActiveTab('photos')}
            className={`min-h-[44px] px-4 text-xs font-bold border-b-2 transition-all ${
              activeTab === 'photos'
                ? 'border-[#E86A8D] text-[#E86A8D]'
                : 'border-transparent text-[#7A646F] hover:text-[#4A3B43]'
            }`}
          >
            Foto Kenangan ({memoryList.length})
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4">
          {activeTab === 'profile' && (
            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Panggilan / Nama Istri
                </label>
                <input
                  type="text"
                  value={formData.wifeName}
                  onChange={(e) =>
                    setFormData({ ...formData, wifeName: e.target.value })
                  }
                  placeholder="Misal: Sayang / Dinda / Dhea"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#E86A8D] text-sm"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Nama Suami
                </label>
                <input
                  type="text"
                  value={formData.husbandName}
                  onChange={(e) =>
                    setFormData({ ...formData, husbandName: e.target.value })
                  }
                  placeholder="Misal: Fajar / Suamimu"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#E86A8D] text-sm"
                />
              </div>
            </div>
          )}

          {activeTab === 'transfer' && (
            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Nama Bank / E-Wallet
                </label>
                <input
                  type="text"
                  value={formData.transfer.bankName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      transfer: { ...formData.transfer, bankName: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#E86A8D] text-sm"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Nominal Transfer
                </label>
                <input
                  type="text"
                  value={formData.transfer.amount}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      transfer: { ...formData.transfer, amount: e.target.value },
                    })
                  }
                  placeholder="Rp 5.000.000"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#E86A8D] text-sm font-mono"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Pesan / Catatan Kasih Sayang
                </label>
                <textarea
                  rows={2}
                  value={formData.transfer.notes}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      transfer: { ...formData.transfer, notes: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#E86A8D] text-sm"
                />
              </div>

              <div className="pt-2 border-t border-slate-100">
                <label className="block font-bold text-slate-700 mb-1">
                  Atau Upload File Gambar Screenshot Transfer Asli (Opsional)
                </label>
                <p className="text-[11px] text-slate-500 mb-2">
                  Jika diupload, gambar ini akan langsung menggantikan slip digital.
                </p>
                <div className="flex items-center gap-3">
                  <label className="cursor-pointer min-h-[44px] px-4 py-2 rounded-xl bg-[#FFF0F4] hover:bg-[#FFE0E9] text-[#E86A8D] border border-[#F8B9C9] font-bold flex items-center gap-2">
                    <Upload className="w-4 h-4" />
                    <span>Pilih Gambar Screenshot</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageUpload(e, 'transfer')}
                    />
                  </label>

                  {formData.transfer.customImage && (
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          transfer: { ...formData.transfer, customImage: undefined },
                        })
                      }
                      className="text-xs text-rose-500 hover:underline"
                    >
                      Hapus screenshot
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'photos' && (
            <div className="space-y-4 text-xs">
              <p className="text-slate-600">
                Ganti foto memori polaroid dengan foto kenangan kalian berdua:
              </p>
              <div className="space-y-3">
                {memoryList.map((item, idx) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 bg-[#FFFDF9]"
                  >
                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                      <img
                        src={item.image}
                        alt={item.caption}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-slate-800 text-xs truncate">
                        {item.caption}
                      </div>
                      <div className="text-[11px] text-slate-500">Foto #{idx + 1}</div>
                    </div>
                    <label className="cursor-pointer min-h-[44px] px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-semibold flex items-center gap-1.5 shrink-0">
                      <ImageIcon className="w-3.5 h-3.5" />
                      <span>Ganti</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleImageUpload(e, idx)}
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-pink-100 bg-[#FFF5F0] flex items-center justify-between">
          <button
            onClick={onResetDefaults}
            className="text-xs text-[#7A646F] hover:text-[#4A3B43] flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset ke Awal</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-white"
            >
              Batal
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2 rounded-xl text-xs font-bold bg-[#E86A8D] text-white hover:bg-[#D24D73] shadow-xs flex items-center gap-1.5"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Simpan Perubahan</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
