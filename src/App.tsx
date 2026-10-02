import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ComparisonSection } from './components/ComparisonSection';
import { JalurKerjaSection } from './components/JalurKerjaSection';
import { ProgramsSection } from './components/ProgramsSection';
import { WorkflowSection } from './components/WorkflowSection';
import { EvidenceSection } from './components/EvidenceSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { PhotoTicker } from './components/PhotoTicker';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] font-sans flex flex-col">
      {/* 1. Navbar (Kenapa Kami, Tiga Program, Alur 7 Langkah, Bukti, FAQ) */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero: janji + CTA + foto */}
        <Hero />

        {/* 2b. Strip Foto (pengganti brand ticker) */}
        <PhotoTicker />

        {/* 3. Tiga Program: apa yang dikerjakan (dipindah ke atas setelah Hero) */}
        <ProgramsSection />

        {/* 4. Kenapa Kami (Tabel perbandingan) */}
        <ComparisonSection />

        {/* 4b. Kenapa Kami (Foto berpenanda) */}
        <JalurKerjaSection />

        {/* 5. Alur 7 Langkah: bagaimana prosesnya (garis vertikal scroll progress tanpa kartu + stepper jika trackingLive) */}
        <WorkflowSection />

        {/* 6. Bukti: kolase foto asimetris + 1 kutipan besar bergantian + logo partner */}
        <EvidenceSection />

        {/* 7. FAQ: akordeon polos tanpa kartu */}
        <FaqSection />

        {/* 8. CTA WhatsApp: blok hijau penuh dengan preview pesan WA */}
        <CtaSection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Tombol melayang hanya di mobile (md:hidden) */}
      <FloatingWhatsApp />
    </div>
  );
}
