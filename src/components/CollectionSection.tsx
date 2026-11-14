import React, { useMemo, useState } from 'react';
import { Check, Minus, Plus, Search, ShoppingBag, X } from 'lucide-react';
import {
  PRODUCTS,
  ProductCategory,
  ProductVariant,
  StoreProduct,
} from '../data/museumData';
import { ArtifactPlate } from './ArtifactPlates';

const PRODUCT_CATEGORIES: ProductCategory[] = [
  'All',
  'Puja & Ritual',
  'Organic Garden',
  'Eco Idols',
  'Clean Fuel',
];

type SortOrder = 'featured' | 'price-asc' | 'price-desc';

interface CollectionSectionProps {
  onAddToCart: (product: StoreProduct, variant: ProductVariant, quantity: number) => void;
}

export const CollectionSection: React.FC<CollectionSectionProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('featured');
  const [activeProduct, setActiveProduct] = useState<StoreProduct | null>(null);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [modalQuantity, setModalQuantity] = useState(1);
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const list = PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      const matchesQuery =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query) ||
        product.materials.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });

    if (sortOrder === 'price-asc') {
      return [...list].sort((a, b) => a.variants[0].price - b.variants[0].price);
    }
    if (sortOrder === 'price-desc') {
      return [...list].sort((a, b) => b.variants[0].price - a.variants[0].price);
    }
    return list;
  }, [selectedCategory, searchQuery, sortOrder]);

  const handleQuickAdd = (product: StoreProduct) => {
    onAddToCart(product, product.variants[0], 1);
    setRecentlyAddedId(product.id);
    window.setTimeout(() => {
      setRecentlyAddedId((current) => (current === product.id ? null : current));
    }, 1400);
  };

  const openProductModal = (product: StoreProduct) => {
    setActiveProduct(product);
    setSelectedVariantIndex(0);
    setModalQuantity(1);
  };

  return (
    <section id="collection" className="py-16 lg:py-20 border-b border-[#DDD6C7] bg-transparent">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading + Filter Controls */}
        <div className="bg-[#FBF9F5]/90 backdrop-blur-xs border border-[#DDD6C7] rounded-lg p-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#DDD6C7]">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-[#8C4A1C] mb-2">
                Eco-Friendly Cow Dung Store
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1917] tracking-tight">
                Artisanal Products by Manju Mitti
              </h2>
              <p className="text-sm sm:text-base text-[#57534E] mt-2 max-w-2xl">
                Pure Panchagavya diyas, charcoal-free incense, organic farm fertilizer, biodegradable
                Ganesha murtis, and clean Samidha fuel logs dispatched directly from our hall.
              </p>
            </div>

            <div className="text-xs text-[#57534E] font-mono tabular-nums">
              Showing {filteredProducts.length} of {PRODUCTS.length} items
            </div>
          </div>

          {/* Filter, Search & Sort Controls */}
          <div className="mt-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div
              role="tablist"
              aria-label="Product categories"
              className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EFEAE0] border border-[#DDD6C7] rounded-lg self-start"
            >
              {PRODUCT_CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-[#1B4332] text-[#F7F4EE]'
                        : 'text-[#57534E] hover:text-[#1C1917]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative">
                <Search
                  className="w-4 h-4 text-[#78716C] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search diyas, manure, logs..."
                  aria-label="Search eco-friendly products"
                  className="w-full sm:w-64 pl-9 pr-3 py-2 text-sm bg-[#F7F4EE] border border-[#D4CCB9] rounded-md text-[#1C1917] placeholder:text-[#78716C] focus:outline-none focus:border-[#1B4332]"
                />
              </div>

              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as SortOrder)}
                aria-label="Sort products"
                className="px-3 py-2 text-sm bg-[#F7F4EE] border border-[#D4CCB9] rounded-md text-[#1C1917] focus:outline-none focus:border-[#1B4332] cursor-pointer"
              >
                <option value="featured">Sort: Curated Order</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="mt-10 py-14 px-6 bg-[#F7F4EE]/95 border border-[#DDD6C7] rounded-lg text-center">
            <p className="font-serif text-2xl text-[#1C1917]">No matching products found</p>
            <p className="text-sm text-[#57534E] mt-2">
              Try clearing your search term or switching back to all product categories.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-5 px-4 py-2 text-xs font-semibold text-[#F7F4EE] bg-[#1B4332] hover:bg-[#143326] rounded-md cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product) => {
              const baseVariant = product.variants[0];
              const isAdded = recentlyAddedId === product.id;

              return (
                <article
                  key={product.id}
                  className="bg-[#F7F4EE]/95 backdrop-blur-xs border border-[#DDD6C7] rounded-lg overflow-hidden flex flex-col transition-transform duration-150 hover:-translate-y-0.5"
                >
                  <button
                    type="button"
                    onClick={() => openProductModal(product)}
                    className="aspect-[4/3] w-full border-b border-[#DDD6C7] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#1B4332]"
                    aria-label={`View details for ${product.name}`}
                  >
                    <ArtifactPlate
                      plateKey={product.plateKey}
                      title={product.name}
                      code={product.sku}
                    />
                  </button>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 text-xs text-[#78716C] mb-1.5">
                        <span className="uppercase tracking-wider">{product.category}</span>
                        <span>{product.availability}</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => openProductModal(product)}
                        className="text-left cursor-pointer group"
                      >
                        <h3 className="text-base font-semibold text-[#1C1917] group-hover:text-[#1B4332] transition-colors">
                          {product.name}
                        </h3>
                      </button>

                      <p className="text-xs text-[#57534E] mt-1.5 leading-relaxed">
                        {product.shortDescription}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-[#E4DEC9]">
                      <div className="flex items-baseline justify-between gap-3 mb-3">
                        <div>
                          <span className="font-mono text-base font-semibold text-[#1C1917] tabular-nums">
                            ₹{baseVariant.price}
                          </span>
                          <span className="text-xs text-[#78716C] ml-1.5">
                            · {baseVariant.label}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-[#57534E] tabular-nums">
                          {baseVariant.weightLabel}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleQuickAdd(product)}
                          className={`flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                            isAdded
                              ? 'bg-[#2D6A4F] text-white'
                              : 'bg-[#1B4332] text-[#F7F4EE] hover:bg-[#143326]'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" aria-hidden="true" />
                              <span>Added to Bag</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="w-3.5 h-3.5" aria-hidden="true" />
                              <span>Add to Bag</span>
                            </>
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => openProductModal(product)}
                          className="px-3.5 py-2 text-xs font-medium text-[#1C1917] bg-[#FBF9F5] border border-[#CFC7B5] hover:border-[#1C1917] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                        >
                          Options
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Product Detail & Pack Selection Modal */}
      {activeProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeProduct.name}
          onClick={() => setActiveProduct(null)}
        >
          <div
            className="bg-[#FBF9F5] border border-[#DDD6C7] rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-[#FBF9F5] border-b border-[#DDD6C7] px-6 py-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-[#78716C] uppercase tracking-wider">
                  {activeProduct.category} · <span className="font-mono">{activeProduct.sku}</span>
                </p>
                <h3 className="font-serif text-2xl font-semibold text-[#1C1917]">
                  {activeProduct.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveProduct(null)}
                aria-label="Close product modal"
                className="w-10 h-10 inline-flex items-center justify-center rounded-md border border-[#DDD6C7] text-[#1C1917] hover:bg-[#EFEAE0] cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-5 aspect-[4/3] md:aspect-auto md:min-h-[280px] border border-[#DDD6C7] rounded-md overflow-hidden">
                <ArtifactPlate
                  plateKey={activeProduct.plateKey}
                  title={activeProduct.name}
                  code={activeProduct.sku}
                />
              </div>

              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-[#44403C] leading-relaxed">
                    {activeProduct.fullDescription}
                  </p>

                  <div className="mt-4 pt-4 border-t border-[#EAE4D7] space-y-1.5 text-xs">
                    <p className="text-[#57534E]">
                      <strong className="text-[#1C1917]">Ingredients:</strong> {activeProduct.materials}
                    </p>
                    <p className="text-[#1B4332] font-medium">
                      <strong className="text-[#1C1917]">Sustainability:</strong> {activeProduct.ecoMetric}
                    </p>
                  </div>

                  {/* Pack / Variant Selection */}
                  <div className="mt-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-[#57534E] mb-2">
                      Select Pack Size
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {activeProduct.variants.map((variant, idx) => {
                        const active = selectedVariantIndex === idx;
                        return (
                          <button
                            key={variant.label}
                            type="button"
                            onClick={() => setSelectedVariantIndex(idx)}
                            className={`px-3 py-2 text-xs rounded-md border text-left transition-colors cursor-pointer ${
                              active
                                ? 'bg-[#1B4332] text-[#F7F4EE] border-[#1B4332]'
                                : 'bg-[#F7F4EE] text-[#1C1917] border-[#CFC7B5] hover:border-[#1C1917]'
                            }`}
                          >
                            <span className="font-medium block">{variant.label}</span>
                            <span className="font-mono text-[11px] opacity-85 tabular-nums">
                              ₹{variant.price} · {variant.weightLabel}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Purchase Module */}
                <div className="mt-6 pt-4 border-t border-[#DDD6C7] flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-[#78716C] block">Selected Total</span>
                    <span className="font-mono text-2xl font-semibold text-[#1C1917] tabular-nums">
                      ₹{activeProduct.variants[selectedVariantIndex].price * modalQuantity}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center border border-[#CFC7B5] rounded-md bg-[#F7F4EE]">
                      <button
                        type="button"
                        onClick={() => setModalQuantity((q) => Math.max(1, q - 1))}
                        aria-label="Decrease quantity"
                        className="w-9 h-9 inline-flex items-center justify-center text-[#1C1917] hover:bg-[#EFEAE0] cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center font-mono text-sm tabular-nums">
                        {modalQuantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setModalQuantity((q) => q + 1)}
                        aria-label="Increase quantity"
                        className="w-9 h-9 inline-flex items-center justify-center text-[#1C1917] hover:bg-[#EFEAE0] cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        onAddToCart(
                          activeProduct,
                          activeProduct.variants[selectedVariantIndex],
                          modalQuantity
                        );
                        setActiveProduct(null);
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#F7F4EE] bg-[#1B4332] hover:bg-[#143326] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <ShoppingBag className="w-4 h-4" aria-hidden="true" />
                      <span>Add to Bag</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
