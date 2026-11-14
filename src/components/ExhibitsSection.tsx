import React, { useMemo, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { EXHIBITS, ExhibitHallCategory, MuseumExhibit } from '../data/museumData';
import { ArtifactPlate } from './ArtifactPlates';

const HALL_FILTERS: ExhibitHallCategory[] = [
  'All Halls',
  'Sacred Rituals',
  'Sustainable Agriculture',
  'Sculpture & Craft',
  'Clean Fuel',
];

export const ExhibitsSection: React.FC = () => {
  const [selectedHall, setSelectedHall] = useState<ExhibitHallCategory>('All Halls');
  const [activeExhibit, setActiveExhibit] = useState<MuseumExhibit | null>(null);

  const filteredExhibits = useMemo(() => {
    if (selectedHall === 'All Halls') return EXHIBITS;
    return EXHIBITS.filter((item) => item.hallCategory === selectedHall);
  }, [selectedHall]);

  return (
    <section id="exhibits" className="py-16 lg:py-20 border-b border-[#DDD6C7] bg-transparent">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Filter Tabs */}
        <div className="bg-[#FBF9F5]/88 backdrop-blur-xs border border-[#DDD6C7] rounded-lg p-6 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-[#8C4A1C] mb-2">
              Permanent Exhibition Catalogue
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1917] tracking-tight">
              Inside the Four Museum Halls
            </h2>
            <p className="text-sm sm:text-base text-[#57534E] mt-2 max-w-2xl">
              Explore documented specimens illustrating how rural Indian cow-dung craft replaces plastics,
              chemical fertilizers, and felled forest timber.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter museum halls"
            className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EFEAE0] border border-[#DDD6C7] rounded-lg self-start lg:self-auto"
          >
            {HALL_FILTERS.map((hall) => {
              const isActive = selectedHall === hall;
              return (
                <button
                  key={hall}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedHall(hall)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#1B4332] text-[#F7F4EE]'
                      : 'text-[#57534E] hover:text-[#1C1917]'
                  }`}
                >
                  {hall}
                </button>
              );
            })}
          </div>
        </div>

        {/* Exhibit Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredExhibits.map((exhibit) => (
            <article
              key={exhibit.id}
              className="group bg-[#FBF9F5]/95 backdrop-blur-xs border border-[#DDD6C7] rounded-lg overflow-hidden flex flex-col transition-transform duration-150 hover:-translate-y-0.5"
            >
              <div className="aspect-[16/10] border-b border-[#DDD6C7]">
                <ArtifactPlate
                  plateKey={exhibit.plateKey}
                  title={exhibit.title}
                  code={exhibit.accessionNumber}
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#78716C] mb-2">
                    <span className="font-mono">{exhibit.hallNumber}</span>
                    <span aria-hidden="true">·</span>
                    <span>{exhibit.hallCategory}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{exhibit.accessionNumber}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-[#1C1917] leading-snug">
                    {exhibit.title}
                  </h3>
                  <p className="text-sm text-[#57534E] mt-2 leading-relaxed">
                    {exhibit.curatorSummary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EAE4D7] flex items-center justify-between gap-4">
                  <span className="text-xs text-[#57534E] truncate">{exhibit.maker}</span>
                  <button
                    type="button"
                    onClick={() => setActiveExhibit(exhibit)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B4332] hover:text-[#143326] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332]"
                  >
                    <span>Inspect Specimen</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Museum Accession Detail Modal */}
      {activeExhibit && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeExhibit.title}
          onClick={() => setActiveExhibit(null)}
        >
          <div
            className="bg-[#FBF9F5] border border-[#DDD6C7] rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-[#FBF9F5] border-b border-[#DDD6C7] px-6 py-4 flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs text-[#78716C] uppercase">
                  {activeExhibit.hallNumber} · {activeExhibit.accessionNumber}
                </p>
                <h3 className="font-serif text-2xl font-semibold text-[#1C1917]">
                  {activeExhibit.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveExhibit(null)}
                aria-label="Close specimen detail"
                className="w-10 h-10 inline-flex items-center justify-center rounded-md border border-[#DDD6C7] text-[#1C1917] hover:bg-[#EFEAE0] cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-5 aspect-[4/3] md:aspect-auto md:min-h-[260px] border border-[#DDD6C7] rounded-md overflow-hidden">
                <ArtifactPlate
                  plateKey={activeExhibit.plateKey}
                  title={activeExhibit.title}
                  code={activeExhibit.accessionNumber}
                />
              </div>

              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  <p className="text-sm font-medium text-[#8C4A1C] mb-2">{activeExhibit.subtitle}</p>
                  <p className="text-sm text-[#44403C] leading-relaxed">{activeExhibit.curatorEssay}</p>
                </div>

                <dl className="mt-6 border-t border-[#DDD6C7] divide-y divide-[#EAE4D7] text-xs">
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="font-medium text-[#78716C] uppercase tracking-wider shrink-0">Maker</dt>
                    <dd className="text-[#1C1917] text-right">{activeExhibit.maker}</dd>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="font-medium text-[#78716C] uppercase tracking-wider shrink-0">Medium</dt>
                    <dd className="text-[#1C1917] text-right">{activeExhibit.medium}</dd>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="font-medium text-[#78716C] uppercase tracking-wider shrink-0">Dimensions</dt>
                    <dd className="text-[#1C1917] font-mono text-right">{activeExhibit.dimensions}</dd>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="font-medium text-[#78716C] uppercase tracking-wider shrink-0">Provenance</dt>
                    <dd className="text-[#1C1917] text-right">{activeExhibit.provenance}</dd>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="font-medium text-[#78716C] uppercase tracking-wider shrink-0">Eco Impact</dt>
                    <dd className="text-[#1B4332] font-medium text-right">{activeExhibit.ecologicalNote}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
