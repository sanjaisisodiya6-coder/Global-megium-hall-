import React from 'react';
import { CRAFT_STEPS, IMPACT_METRICS, TESTIMONIALS } from '../data/museumData';
import { SealImageWithFallback } from './ArtifactPlates';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-16 lg:py-20 border-b border-[#DDD6C7] bg-transparent">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Heritage Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7 bg-[#FBF9F5]/90 backdrop-blur-xs border border-[#DDD6C7] rounded-lg p-6 sm:p-8">
            <p className="text-xs font-medium tracking-widest uppercase text-[#8C4A1C] mb-2">
              Tradition &amp; Innovation · Since 2026
            </p>
            <h2
              className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1917] tracking-tight mb-6"
              style={{ textWrap: 'balance' }}
            >
              Manju Mitti &amp; The Living Heritage of Panchagavya Craft
            </h2>

            <div className="space-y-4 text-[#44403C] text-base leading-relaxed max-w-prose">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-semibold first-letter:text-[#1C1917] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                Founded in 2026 by artisan-curator Manju Mitti, Gobar Museum Hall began with a
                straightforward conviction: rural India already holds the blueprint for circular,
                plastic-free living. Inside our exhibition rooms and adjacent solar drying yards,
                humble cow dung is elevated from overlooked agricultural byproduct into archival
                ceremonial objects and high-performance organic inputs.
              </p>
              <p>
                Every morning, fresh dung from pasture-grazed indigenous cows is milled, blended
                with natural acacia resin, neem, sandalwood, and native wildflower seeds, and pressed
                into moulds carved by village woodworkers. Nothing synthetic enters the workshop,
                and every finished piece is designed to nourish soil or purify air at the end of its
                use.
              </p>
            </div>

            {/* Pull Quote with subtle top/bottom hairline rules */}
            <blockquote className="mt-8 pt-6 border-t border-[#CFC7B5]">
              <p className="font-serif italic text-xl sm:text-2xl text-[#1C1917] leading-snug">
                “When a festive diya or Ganesha returns peacefully to a garden pot instead of
                polluting a river, tradition becomes an act of ecological repair.”
              </p>
              <footer className="mt-3 text-xs uppercase tracking-wider text-[#57534E]">
                Manju Mitti · Founder &amp; Lead Artisan, Gobar Museum Hall
              </footer>
            </blockquote>
          </div>

          {/* Right Margin Monograph & Heritage Seal Card */}
          <div className="lg:col-span-5 bg-[#FBF9F5]/95 backdrop-blur-xs border border-[#DDD6C7] rounded-lg p-6 sm:p-8">
            <div className="flex items-center gap-4 pb-5 border-b border-[#EAE4D7]">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-[#18221D] border border-[#DDD6C7] shrink-0">
                <SealImageWithFallback className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-serif text-xl font-semibold text-[#1C1917]">Manju Mitti</p>
                <p className="text-xs text-[#57534E] mt-0.5">
                  Founder · Heritage Curator &amp; Master Artisan
                </p>
                <p className="font-mono text-[11px] text-[#8C4A1C] mt-1">
                  ESTD. 2026 · WWW.GOBARMUSEUMHALL.COM
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              {IMPACT_METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="pb-4 border-b border-[#EAE4D7] last:border-b-0 last:pb-0"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-mono text-2xl font-semibold text-[#1B4332] tabular-nums">
                      {metric.value}
                    </span>
                    <span className="text-xs font-semibold text-[#1C1917] text-right">
                      {metric.label}
                    </span>
                  </div>
                  <p className="text-xs text-[#57534E] mt-1 leading-relaxed">{metric.context}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Four-Stage Craft Process */}
        <div className="mt-14 pt-12 border-t border-[#DDD6C7]">
          <div className="mb-8 bg-[#FBF9F5]/85 backdrop-blur-xs border border-[#DDD6C7] rounded-lg px-6 py-4 inline-block">
            <p className="text-xs font-medium tracking-widest uppercase text-[#78716C] mb-1">
              Workshop Methodology
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1C1917]">
              From Gaushala Pasture to Finished Object
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CRAFT_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-[#FBF9F5]/95 backdrop-blur-xs border border-[#DDD6C7] rounded-lg p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#78716C] mb-3">
                    <span>{step.stepNumber}.</span>
                    <span>{step.duration}</span>
                  </div>
                  <h4 className="text-base font-semibold text-[#1C1917] mb-2">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Attributable Testimonials (Adjacent Proof) */}
        <div className="mt-14 pt-12 border-t border-[#DDD6C7]">
          <div className="mb-8 bg-[#FBF9F5]/85 backdrop-blur-xs border border-[#DDD6C7] rounded-lg px-6 py-4 inline-block">
            <p className="text-xs font-medium tracking-widest uppercase text-[#78716C] mb-1">
              Community &amp; Field Notes
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1C1917]">
              Trusted by Temples, Growers &amp; Families
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((item) => (
              <figure
                key={item.name}
                className="bg-[#FBF9F5]/95 backdrop-blur-xs border border-[#DDD6C7] rounded-lg p-6 flex flex-col justify-between"
              >
                <blockquote className="text-sm text-[#44403C] leading-relaxed">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-5 pt-4 border-t border-[#EAE4D7]">
                  <p className="text-sm font-semibold text-[#1C1917]">{item.name}</p>
                  <p className="text-xs text-[#57534E] mt-0.5">
                    {item.role} · {item.organization}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
