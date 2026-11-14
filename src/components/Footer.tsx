import React from 'react';
import { SealImageWithFallback } from './ArtifactPlates';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#18221D] text-[#D6CEBE] py-12 border-t border-[#2F3E36]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#2F3E36]">
          <div className="md:col-span-5 flex items-start gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-[#0F1713] border border-[#D6CEBE]/30 shrink-0">
              <SealImageWithFallback className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-serif text-2xl font-semibold text-[#F7F4EE]">
                Gobar Museum Hall
              </p>
              <p className="text-xs text-[#D6CEBE]/80 mt-1 leading-relaxed max-w-sm">
                Estd. 2026 · Tradition &amp; Innovation. Eco-friendly cow dung exhibition hall and
                artisanal product house curated by Manju Mitti.
              </p>
              <p className="font-mono text-xs text-[#D6CEBE] mt-2">
                WWW.GOBARMUSEUMHALL.COM
              </p>
            </div>
          </div>

          <div className="md:col-span-3 space-y-2 text-xs">
            <p className="uppercase tracking-wider text-[#F7F4EE] font-semibold mb-3">
              Navigation
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#exhibits" className="hover:text-white transition-colors">
                  Museum Halls
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-white transition-colors">
                  Eco-Friendly Products
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  Manju Mitti Heritage
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-white transition-colors">
                  Plan Your Visit
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-2 text-xs">
            <p className="uppercase tracking-wider text-[#F7F4EE] font-semibold mb-3">
              Hours &amp; Dispatch
            </p>
            <p className="tabular-nums">Tuesday – Sunday: 10:00 AM – 6:00 PM IST</p>
            <p>Closed Mondays &amp; National Holidays</p>
            <p className="font-mono pt-1">hello@gobarmuseumhall.com · +91 98000 20260</p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#D6CEBE]/75">
          <p>© 2026 Gobar Museum Hall · Manju Mitti. All rights reserved.</p>
          <p>100% Natural · Plastic-Free · Rural Artisan Craft</p>
        </div>
      </div>
    </footer>
  );
};
