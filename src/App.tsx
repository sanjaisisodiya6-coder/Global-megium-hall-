/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { ExhibitsSection } from './components/ExhibitsSection';
import { CollectionSection } from './components/CollectionSection';
import { StorySection } from './components/StorySection';
import {
  BulkInquiry,
  VisitAndInquirySection,
  VisitorPass,
} from './components/VisitAndInquirySection';
import { CartDrawer, CartItem, ConfirmedOrder } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { EMBLEM_IMAGE_PATH, ProductVariant, StoreProduct } from './data/museumData';

function loadStored<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => loadStored<CartItem[]>('gmh_cart', []));
  const [orderHistory, setOrderHistory] = useState<ConfirmedOrder[]>(() =>
    loadStored<ConfirmedOrder[]>('gmh_orders', [])
  );
  const [visitorPasses, setVisitorPasses] = useState<VisitorPass[]>(() =>
    loadStored<VisitorPass[]>('gmh_passes', [])
  );
  const [bulkInquiries, setBulkInquiries] = useState<BulkInquiry[]>(() =>
    loadStored<BulkInquiry[]>('gmh_inquiries', [])
  );
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem('gmh_cart', JSON.stringify(cart));
    } catch {
      // Ignore storage quota errors
    }
  }, [cart]);

  useEffect(() => {
    try {
      window.localStorage.setItem('gmh_orders', JSON.stringify(orderHistory));
    } catch {
      // Ignore storage quota errors
    }
  }, [orderHistory]);

  useEffect(() => {
    try {
      window.localStorage.setItem('gmh_passes', JSON.stringify(visitorPasses));
    } catch {
      // Ignore storage quota errors
    }
  }, [visitorPasses]);

  useEffect(() => {
    try {
      window.localStorage.setItem('gmh_inquiries', JSON.stringify(bulkInquiries));
    } catch {
      // Ignore storage quota errors
    }
  }, [bulkInquiries]);

  const handleAddToCart = (product: StoreProduct, variant: ProductVariant, quantity: number) => {
    const key = `${product.id}__${variant.label}`;
    setCart((prev) => {
      const existing = prev.find((item) => item.key === key);
      if (existing) {
        return prev.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prev,
        {
          key,
          productId: product.id,
          name: product.name,
          variantLabel: variant.label,
          weightLabel: variant.weightLabel,
          price: variant.price,
          quantity,
          plateKey: product.plateKey,
        },
      ];
    });
  };

  const handleUpdateQuantity = (key: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (key: string) => {
    setCart((prev) => prev.filter((item) => item.key !== key));
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#1E2A22] text-[#1C1917]">
      {/* Vivid Full-Color Full-Screen Background Image Layer */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 w-full h-full pointer-events-none select-none overflow-hidden bg-[#E8E2D5]"
      >
        <img
          src={EMBLEM_IMAGE_PATH}
          alt=""
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-90 saturate-110 contrast-105"
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <TopBar cartCount={totalCartCount} onOpenCart={() => setCartOpen(true)} />

        <main className="flex-1">
          <HeroSection />
          <ExhibitsSection />
          <CollectionSection onAddToCart={handleAddToCart} />
          <StorySection />
          <VisitAndInquirySection
            savedPasses={visitorPasses}
            onBookPass={(pass) => setVisitorPasses((prev) => [pass, ...prev])}
            savedInquiries={bulkInquiries}
            onSubmitInquiry={(inquiry) => setBulkInquiries((prev) => [inquiry, ...prev])}
          />
        </main>

        <Footer />
      </div>

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={() => setCart([])}
        orderHistory={orderHistory}
        onPlaceOrder={(order) => setOrderHistory((prev) => [order, ...prev])}
      />
    </div>
  );
}
