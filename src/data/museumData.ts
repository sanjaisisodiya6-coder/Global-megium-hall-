export const EMBLEM_IMAGE_PATH = '/assets/aistudio/Screenshot_20261114_045551_b8b2a62e.jpg';

export type ExhibitHallCategory =
  | 'All Halls'
  | 'Sacred Rituals'
  | 'Sustainable Agriculture'
  | 'Sculpture & Craft'
  | 'Clean Fuel';

export type ProductCategory =
  | 'All'
  | 'Puja & Ritual'
  | 'Organic Garden'
  | 'Eco Idols'
  | 'Clean Fuel';

export type PlateKey =
  | 'diya'
  | 'incense'
  | 'fertilizer'
  | 'ganesha'
  | 'woodlogs'
  | 'havancup'
  | 'vibhuti'
  | 'vermicompost';

export interface MuseumExhibit {
  id: string;
  accessionNumber: string;
  hallNumber: string;
  hallCategory: Exclude<ExhibitHallCategory, 'All Halls'>;
  title: string;
  subtitle: string;
  maker: string;
  medium: string;
  dimensions: string;
  provenance: string;
  ecologicalNote: string;
  curatorSummary: string;
  curatorEssay: string;
  plateKey: PlateKey;
}

export interface ProductVariant {
  label: string;
  price: number;
  weightLabel: string;
}

export interface StoreProduct {
  id: string;
  sku: string;
  name: string;
  category: Exclude<ProductCategory, 'All'>;
  shortDescription: string;
  fullDescription: string;
  materials: string;
  ecoMetric: string;
  availability: 'In Stock' | 'Artisan Batch';
  plateKey: PlateKey;
  variants: ProductVariant[];
}

export interface CraftStep {
  stepNumber: string;
  title: string;
  duration: string;
  description: string;
}

export interface ImpactMetric {
  value: string;
  label: string;
  context: string;
}

export interface Testimonial {
  name: string;
  role: string;
  organization: string;
  quote: string;
}

export const EXHIBITS: MuseumExhibit[] = [
  {
    id: 'exhibit-diya',
    accessionNumber: 'ACC. GMH-2026-01',
    hallNumber: 'Hall I',
    hallCategory: 'Sacred Rituals',
    title: 'Solar-Cured Panchagavya Diyas & Ritual Vessels',
    subtitle: 'Hand-pressed earthen lamps engineered to return cleanly to garden soil',
    maker: 'Manju Mitti Artisan Collective',
    medium: 'Indigenous Gir cow dung, natural gum acacia, turmeric & multani mitti',
    dimensions: '7.5 × 7.5 × 3.2 cm (individual lamp)',
    provenance: 'Acquired 2026 · Rural Craft Archive, Gobar Museum Hall Collection',
    ecologicalNote: 'Dissolves completely into organic humus within 72 hours of post-festival watering.',
    curatorSummary:
      'Replacing single-use kiln-fired clay and paraffin holders, these hand-pressed lamps burn gently with cow ghee while releasing aromatic herbal notes.',
    curatorEssay:
      'Each diya in Hall I begins with sun-dried indigenous cow dung milled to a fine botanical fiber. Blended with natural plant resins and shaped on traditional wooden moulds by Manju Mitti and local women artisans, the vessel resists oil seepage during worship and decomposes into nitrogen-rich soil amendment once placed in a planter.',
    plateKey: 'diya',
  },
  {
    id: 'exhibit-fertilizer',
    accessionNumber: 'ACC. GMH-2026-02',
    hallNumber: 'Hall II',
    hallCategory: 'Sustainable Agriculture',
    title: 'Living Soil: Microbial Gobar Khad & Panchagavya',
    subtitle: 'Regenerative microbial compost restoring depleted topsoil structure',
    maker: 'Gobar Museum Agrarian Lab',
    medium: 'Composted desi cow manure, earthworm castings, neem cake & jaggery culture',
    dimensions: 'Archival specimen sack 42 × 28 × 12 cm (5 kg reference)',
    provenance: 'Field Study 2026 · Zero-Chemical Farming Demonstration Plot',
    ecologicalNote: 'Increases topsoil water retention by up to 34% across seasonal vegetable beds.',
    curatorSummary:
      'An exhibition on how traditional Indian pastoral composting cycles eliminate synthetic urea dependency while reviving beneficial soil microbes.',
    curatorEssay:
      'Hall II documents the 45-day aerobic turning and vermiculture enrichment cycle practiced at our demonstration farm. By pairing aged cow dung with natural neem and microbial cultures, farmers and urban terrace gardeners rebuild porous, carbon-sequestering soil without chemical runoff.',
    plateKey: 'fertilizer',
  },
  {
    id: 'exhibit-ganesha',
    accessionNumber: 'ACC. GMH-2026-03',
    hallNumber: 'Hall III',
    hallCategory: 'Sculpture & Craft',
    title: 'Sacred Bio-Sculpture: Hand-Carved Eco Ganesha',
    subtitle: 'Plaster-of-Paris-free ceremonial murti infused with native wildflower seeds',
    maker: 'Manju Mitti & Sculptor Guild',
    medium: 'Sieved cow dung pulp, natural chalk clay, herbal mineral pigments & basil seeds',
    dimensions: '20.5 × 14.0 × 12.5 cm',
    provenance: 'Inaugural Exhibition 2026 · Gobar Museum Hall Permanent Collection',
    ecologicalNote: 'Zero heavy metals or synthetic Plaster of Paris; safe for home bucket immersion.',
    curatorSummary:
      'Demonstrating that devotional sculpture can honor sacred iconography while protecting freshwater lakes and rivers from toxic immersion sludge.',
    curatorEssay:
      'Conventional festival idols coated in chemical paints and gypsum plaster choke aquatic ecosystems every autumn. Hall III preserves hand-sculpted moulds crafted from breathable cow dung pulp and natural earth pigments. Upon home immersion, the dissolved slurry nourishes potted Tulsi or marigold saplings.',
    plateKey: 'ganesha',
  },
  {
    id: 'exhibit-woodlogs',
    accessionNumber: 'ACC. GMH-2026-04',
    hallNumber: 'Hall IV',
    hallCategory: 'Clean Fuel',
    title: 'Green Timber: Compressed Gobar Samidha Logs',
    subtitle: 'High-density biomass logs replacing felled forest hardwood in ceremonial hearths',
    maker: 'Rural Biomass Innovation Unit',
    medium: 'Extruded dry cow dung fiber, husk binder & aromatic camphor-herb traces',
    dimensions: '26.0 × 5.8 × 5.8 cm (octagonal extruded log)',
    provenance: 'Commissioned 2026 · Clean Hearth & Forestry Conservation Archive',
    ecologicalNote: 'Every 10 kg of Gobar Samidha saves approximately 14 kg of seasoned forest timber.',
    curatorSummary:
      'Mechanical extrusion transforms loose pasture waste into dense, low-smoke fuel logs for havan rituals, community kitchens, and winter hearths.',
    curatorEssay:
      'Hall IV bridges village energy self-reliance and forest preservation. Using low-energy screw extrusion, fibrous cow dung is compressed into uniform octagonal logs that ignite cleanly, maintain steady ember heat, and leave behind fine potash-rich ash prized by orchardists.',
    plateKey: 'woodlogs',
  },
];

export const PRODUCTS: StoreProduct[] = [
  {
    id: 'prod-diya-set',
    sku: 'GMH-PUJ-01',
    name: 'Handcrafted Panchagavya Diyas',
    category: 'Puja & Ritual',
    shortDescription: 'Sun-dried cow dung oil lamps crafted with natural acacia gum for clean-burning daily worship.',
    fullDescription:
      'Hand-molded by Manju Mitti artisans using purified desi cow dung, multani mitti, and organic plant binders. Designed to hold cow ghee or sesame oil cleanly without cracking, and compostable in home flowerpots after use.',
    materials: 'Desi Cow Dung, Multani Mitti, Acacia Gum, Natural Turmeric',
    ecoMetric: '100% Plastic-Free · Dissolves into garden manure',
    availability: 'In Stock',
    plateKey: 'diya',
    variants: [
      { label: 'Set of 12 Diyas', price: 240, weightLabel: '420 g' },
      { label: 'Festive Box of 24 Diyas', price: 440, weightLabel: '840 g' },
      { label: 'Temple Pack of 60 Diyas', price: 980, weightLabel: '2.1 kg' },
    ],
  },
  {
    id: 'prod-incense',
    sku: 'GMH-PUJ-02',
    name: 'Pure Cow Dung & Loban Agarbatti',
    category: 'Puja & Ritual',
    shortDescription: 'Charcoal-free aromatic incense sticks rolled with pure cow dung, sandalwood dust, and loban resin.',
    fullDescription:
      'Free from synthetic DEP phthalates and bamboo-charcoal soot. Each stick burns smoothly for 40 minutes, gently purifying indoor air with traditional havan herbs, Kapoor, and sandalwood.',
    materials: 'Aged Cow Dung Powder, Loban Resin, Sandalwood Dust, Cow Ghee',
    ecoMetric: 'Zero Synthetic Fragrance · Charcoal-Free',
    availability: 'In Stock',
    plateKey: 'incense',
    variants: [
      { label: '60 Sticks Box', price: 180, weightLabel: '150 g' },
      { label: '150 Sticks Archival Tube', price: 390, weightLabel: '375 g' },
    ],
  },
  {
    id: 'prod-organic-fertilizer',
    sku: 'GMH-AGR-01',
    name: 'Gobar Museum Organic Fertilizer',
    category: 'Organic Garden',
    shortDescription: '45-day aerobically matured cow dung manure enriched with neem cake and beneficial soil microbes.',
    fullDescription:
      'Sieved, odor-neutral, and weed-seed-free organic manure formulated for kitchen gardens, potted ornamentals, and organic farms. Balances soil pH while promoting steady root growth and flowering.',
    materials: 'Matured Desi Cow Manure, Neem Khali, Beneficial Microbial Culture',
    ecoMetric: 'NPK Rich · Safe for edible herbs & vegetables',
    availability: 'In Stock',
    plateKey: 'fertilizer',
    variants: [
      { label: '5 kg Craft Sack', price: 350, weightLabel: '5 kg' },
      { label: '10 kg Garden Sack', price: 640, weightLabel: '10 kg' },
      { label: '25 kg Farm Bag', price: 1420, weightLabel: '25 kg' },
    ],
  },
  {
    id: 'prod-eco-ganesha',
    sku: 'GMH-IDL-01',
    name: 'Eco-Friendly Cow Dung Ganesha Murti',
    category: 'Eco Idols',
    shortDescription: 'Hand-sculpted 8-inch ceremonial Ganesha idol finished with earth pigments and Tulsi seeds.',
    fullDescription:
      'Crafted without Plaster of Paris or chemical varnish. After home visarjan in a bucket of water, the nutrient-dense clay and cow dung slurry can be poured directly into your garden bed to sprout sacred Tulsi.',
    materials: 'Fine Cow Dung Pulp, Natural Chalk Clay, Earth Pigments, Tulsi Seeds',
    ecoMetric: 'Zero Water Pollution · Embedded Tulsi Seeds',
    availability: 'Artisan Batch',
    plateKey: 'ganesha',
    variants: [
      { label: '6 Inch Home Edition', price: 480, weightLabel: '650 g' },
      { label: '8 Inch Signature Edition', price: 680, weightLabel: '1.1 kg' },
      { label: '12 Inch Courtyard Murti', price: 1250, weightLabel: '2.4 kg' },
    ],
  },
  {
    id: 'prod-wood-logs',
    sku: 'GMH-FUL-01',
    name: 'Compressed Gobar Samidha Logs',
    category: 'Clean Fuel',
    shortDescription: 'Dense, low-smoke cow dung fuel logs engineered for sacred havans and clean biomass hearths.',
    fullDescription:
      'Extruded under high mechanical pressure and sun-cured for moisture below 8%. Replaces felled forest wood during Vedic havans, Lohri bonfires, and winter community hearths.',
    materials: '100% Pure Desi Cow Dung Fiber & Natural Rice Husk Binder',
    ecoMetric: 'Saves 1.4 kg Forest Timber per kg burned',
    availability: 'In Stock',
    plateKey: 'woodlogs',
    variants: [
      { label: '5 kg Starter Bundle', price: 190, weightLabel: '5 kg' },
      { label: '10 kg Ritual Crate', price: 320, weightLabel: '10 kg' },
      { label: '25 kg Temple Supply', price: 740, weightLabel: '25 kg' },
    ],
  },
  {
    id: 'prod-havan-cups',
    sku: 'GMH-PUJ-03',
    name: 'Sambrani Havan Cups with Camphor',
    category: 'Puja & Ritual',
    shortDescription: 'Ready-to-light cow dung dhoop cups pre-filled with pure Bhimseni camphor, guggal, and herbs.',
    fullDescription:
      'Each hand-pressed cup serves as both incense vessel and aromatic fuel. Light the rim for a gentle 25-minute sacred fragrance that naturally deters mosquitoes and freshens living spaces.',
    materials: 'Cow Dung Cup, Guggal, Loban, Bhimseni Camphor, Dry Rose Petals',
    ecoMetric: 'Ash doubles as potassium-rich plant tonic',
    availability: 'In Stock',
    plateKey: 'havancup',
    variants: [
      { label: 'Box of 12 Cups + Holder', price: 175, weightLabel: '220 g' },
      { label: 'Box of 24 Cups + Holder', price: 290, weightLabel: '420 g' },
    ],
  },
  {
    id: 'prod-vibhuti',
    sku: 'GMH-PUJ-04',
    name: 'Sacred Gomaya Vibhuti & Havan Powder',
    category: 'Puja & Ritual',
    shortDescription: 'Finely sieved traditional cow dung powder and sacred ash prepared in pure Vedic earthen kilns.',
    fullDescription:
      'Prepared strictly from pasture-fed indigenous cow dung calcined gently with dried neem and bel leaves, yielding soft, cooling mineral ash for daily tilak and ritual offerings.',
    materials: 'Calcined Indigenous Cow Dung, Bel Leaves, Pure Cow Ghee Trace',
    ecoMetric: 'Micro-Sieved 200-Mesh · Pure Botanical Process',
    availability: 'Artisan Batch',
    plateKey: 'vibhuti',
    variants: [
      { label: '250 g Ceramic Jar', price: 160, weightLabel: '250 g' },
      { label: '500 g Archival Tin', price: 280, weightLabel: '500 g' },
    ],
  },
  {
    id: 'prod-vermicompost',
    sku: 'GMH-AGR-02',
    name: 'Enriched Vermicompost & Humus Blend',
    category: 'Organic Garden',
    shortDescription: 'Earthworm-digested cow manure castings packed with humic acid for rapid terrace & bonsai nutrition.',
    fullDescription:
      'Produced in shaded vermi-beds at the Gobar Museum Hall demonstration garden. Rich in slow-release nitrogen, phosphorus, and trace micronutrients for indoor foliage, roses, and fruit saplings.',
    materials: 'Eisenia Fetida Castings, Aged Cow Manure, Dry Leaf Humus',
    ecoMetric: 'Lab-Checked Moisture & Humic Balance',
    availability: 'In Stock',
    plateKey: 'vermicompost',
    variants: [
      { label: '5 kg Resealable Pouch', price: 310, weightLabel: '5 kg' },
      { label: '10 kg Estate Sack', price: 540, weightLabel: '10 kg' },
    ],
  },
];

export const CRAFT_STEPS: CraftStep[] = [
  {
    stepNumber: '01',
    title: 'Ethical Gaushala Sourcing',
    duration: 'Day 01',
    description:
      'Fresh cow dung is collected daily from pasture-grazed indigenous cows at partner rural gaushalas, creating dignified circular income for village caretakers.',
  },
  {
    stepNumber: '02',
    title: 'Solar Curing & Fine Sieving',
    duration: 'Days 02 – 07',
    description:
      'Spread across clean terracotta drying yards under natural sunlight, moisture is reduced before milling and sieving into uniform botanical fiber.',
  },
  {
    stepNumber: '03',
    title: 'Hand-Molding & Botanical Binding',
    duration: 'Days 08 – 12',
    description:
      'Led by founder Manju Mitti, artisans blend the fiber with acacia resin, neem, sandalwood, and multani mitti—shaping diyas, murtis, logs, and incense without plastics.',
  },
  {
    stepNumber: '04',
    title: 'Museum Inspection & Zero-Waste Pack',
    duration: 'Day 14',
    description:
      'Every finished batch is inspected for burn stability, structural integrity, and moisture balance before being packed in unbleached kraft paper and jute twine.',
  },
];

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    value: '1,850 kg',
    label: 'Forest Timber Saved Monthly',
    context: 'Displaced by compressed Gobar Samidha logs across regional havan & hearth orders',
  },
  {
    value: '420 hrs',
    label: 'Rural Women Artisan Hours / Month',
    context: 'Fair-wage molding, carving, and herbal compounding led by Manju Mitti’s collective',
  },
  {
    value: '100%',
    label: 'Zero-Plastic Soil Return',
    context: 'Every diya, murti, and incense base biodegrades safely into garden humus within 72 hours',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Acharya Raghavendra Tiwari',
    role: 'Head Priest & Ritual Coordinator',
    organization: 'Shri Kashi Eco-Mandir Trust',
    quote:
      'Before switching to Gobar Museum Hall Samidha logs and Sambrani cups, indoor havan smoke lingered heavily and wood sourcing was inconsistent. Now every ceremony burns evenly with clean herbal aroma and saves dozens of trees each month.',
  },
  {
    name: 'Dr. Kavita Deshmukh',
    role: 'Urban Agro-Ecologist',
    organization: 'GreenTerrace Collective, Pune',
    quote:
      'We tested the Organic Fertilizer and Vermicompost blend across 40 rooftop vegetable beds over one monsoon season. Soil porosity improved visibly and our tomato yield rose 28% without a single gram of synthetic NPK.',
  },
  {
    name: 'Suresh & Meera Kulkarni',
    role: 'Festival Heritage Visitors',
    organization: 'Annual Eco-Ganeshotsav Initiative',
    quote:
      'Visiting the Museum Hall showed our children how traditional craft solves modern river pollution. Our 8-inch cow dung Ganesha dissolved cleanly at home, and the embedded Tulsi seeds sprouted in our courtyard pot within a week.',
  },
];
