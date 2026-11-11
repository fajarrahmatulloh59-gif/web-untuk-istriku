/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { FloatingParticles } from './components/FloatingParticles';
import { Navbar } from './components/Navbar';
import { SectionWelcome } from './components/SectionWelcome';
import { SectionLetter } from './components/SectionLetter';
import { SectionMemories } from './components/SectionMemories';
import { SectionWhyLove } from './components/SectionWhyLove';
import { SectionSurprise } from './components/SectionSurprise';
import { SectionPromises } from './components/SectionPromises';
import { SectionFinal } from './components/SectionFinal';
import { CustomizerModal } from './components/CustomizerModal';
import { AppConfig, MemoryItem } from './types';
import { Heart } from 'lucide-react';

const DEFAULT_CONFIG: AppConfig = {
  wifeName: 'Sayang',
  husbandName: 'Suamimu',
  specialCall: 'My Favorite Person',
  transfer: {
    bankName: 'BCA Mobile / QRIS Kasih Sayang',
    recipientName: 'Istri Tercinta ❤️',
    recipientAccount: 'Rekening **** 8829',
    amount: 'Rp 5.000.000',
    date: '11 Nov 2026, 10:30 WIB',
    transferId: 'TRX-LOVE-99281729',
    notes: 'Uang jajan, skincare, & belanja sesuka hati Sayang 🥰 Maafkan suamimu ya!',
  },
};

const DEFAULT_MEMORIES: MemoryItem[] = [
  {
    id: 'mem-1',
    image: '/src/assets/images/polaroid_sunset_date_1794364810073.jpg',
    caption: 'My favorite person.',
    subCaption: 'Setiap senja terasa jauh lebih indah saat kamu bersandar di pundakku.',
    date: 'Golden Hour Memories',
    rotation: -2,
  },
  {
    id: 'mem-2',
    image: '/src/assets/images/polaroid_cafe_coffee_1794364809946.jpg',
    caption: 'Partner in life & crime.',
    subCaption: 'Teman ketawa bareng, makan enak bareng, dan cerita apa saja tanpa rasa canggung.',
    date: 'Cozy Morning Coffee',
    rotation: 2.5,
  },
  {
    id: 'mem-3',
    image: '/src/assets/images/teddy_bear_couple_1794364810123.jpg',
    caption: 'Tempat pulang terbaik.',
    subCaption: 'Pelukanmu adalah rumah yang selalu menenangkan badai selelah apa pun hariku.',
    date: 'Always My Safe Place',
    rotation: -1.5,
  },
  {
    id: 'mem-4',
    image: '/src/assets/images/teddy_bear_flowers_1794364808925.jpg',
    caption: 'Masih orang yang sama...',
    subCaption: '...yang ingin terus aku cintai dan aku ajak menua bersama hingga rambut memutih.',
    date: 'Forever & Always',
    rotation: 2,
  },
];

export default function App() {
  const [config, setConfig] = useState<AppConfig>(() => {
    try {
      const saved = localStorage.getItem('apology_app_config');
      return saved ? JSON.parse(saved) : DEFAULT_CONFIG;
    } catch {
      return DEFAULT_CONFIG;
    }
  });

  const [memories, setMemories] = useState<MemoryItem[]>(() => {
    try {
      const saved = localStorage.getItem('apology_app_memories');
      return saved ? JSON.parse(saved) : DEFAULT_MEMORIES;
    } catch {
      return DEFAULT_MEMORIES;
    }
  });

  const [isLetterOpened, setIsLetterOpened] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('apology_app_config', JSON.stringify(config));
    } catch {
      // ignore
    }
  }, [config]);

  useEffect(() => {
    try {
      localStorage.setItem('apology_app_memories', JSON.stringify(memories));
    } catch {
      // ignore
    }
  }, [memories]);

  const handleOpenLetter = () => {
    setIsLetterOpened(true);
    // Smooth scroll down to letter
    const letterElem = document.getElementById('letter');
    if (letterElem) {
      letterElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetDefaults = () => {
    setConfig(DEFAULT_CONFIG);
    setMemories(DEFAULT_MEMORIES);
    localStorage.removeItem('apology_app_config');
    localStorage.removeItem('apology_app_memories');
  };

  return (
    <div className="min-h-screen bg-[#FFF8F5] text-[#4A3B43] relative selection:bg-[#F8B9C9] selection:text-[#5A384A]">
      {/* Gentle Floating Petals & Hearts Background */}
      <FloatingParticles />

      {/* Top Navigation */}
      <Navbar
        wifeName={config.wifeName}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        {/* Section 01: Welcome Screen */}
        <SectionWelcome
          wifeName={config.wifeName}
          isLetterOpened={isLetterOpened}
          onOpenLetter={handleOpenLetter}
        />

        {/* Section 02: The Apology Letter */}
        <SectionLetter
          wifeName={config.wifeName}
          husbandName={config.husbandName}
        />

        {/* Section 03: Little Memories */}
        <SectionMemories
          memories={memories}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        {/* Section 04: Why I Love You */}
        <SectionWhyLove />

        {/* Section 05: A Little Surprise (Transfer Envelope) */}
        <SectionSurprise
          transfer={config.transfer}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        {/* Section 06: A Little Promise */}
        <SectionPromises />

        {/* Section 07: Final Interaction */}
        <SectionFinal
          wifeName={config.wifeName}
          husbandName={config.husbandName}
        />
      </main>

      {/* Quiet Romantic Footer */}
      <footer className="relative z-10 py-10 border-t border-[#F8B9C9]/30 text-center text-xs text-[#8C7580] bg-[#FFF5F0]/60">
        <div className="max-w-md mx-auto px-4 flex flex-col items-center gap-2">
          <p className="flex items-center gap-1.5 font-medium">
            <span>Dibuat dengan sepenuh hati & rasa cinta untuk</span>
            <span className="font-bold text-[#E86A8D]">{config.wifeName || 'Istriku'}</span>
            <Heart className="w-3.5 h-3.5 fill-[#E86A8D] text-[#E86A8D] inline-block" />
          </p>
          <p className="text-[11px] text-[#A08894]">
            A Little Apology for You &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>

      {/* Customizer Modal for Husband */}
      <CustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        config={config}
        onSaveConfig={setConfig}
        memories={memories}
        onSaveMemories={setMemories}
        onResetDefaults={handleResetDefaults}
      />
    </div>
  );
}
