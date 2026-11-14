import React, { useState } from 'react';
import { CheckCircle2, Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { PlateKey } from '../data/museumData';
import { ArtifactPlate } from './ArtifactPlates';

export interface CartItem {
  key: string;
  productId: string;
  name: string;
  variantLabel: string;
  weightLabel: string;
  price: number;
  quantity: number;
  plateKey: PlateKey;
}

export interface ConfirmedOrder {
  orderNumber: string;
  customerName: string;
  phone: string;
  cityPin: string;
  paymentMethod: string;
  total: number;
  itemCount: number;
  createdAt: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (key: string, delta: number) => void;
  onRemoveItem: (key: string) => void;
  onClearCart: () => void;
  orderHistory: ConfirmedOrder[];
  onPlaceOrder: (order: ConfirmedOrder) => void;
}

const FREE_SHIPPING_THRESHOLD = 999;
const SHIPPING_FEE = 80;

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  orderHistory,
  onPlaceOrder,
}) => {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery (COD)');
  const [formError, setFormError] = useState('');
  const [confirmedReceipt, setConfirmedReceipt] = useState<ConfirmedOrder | null>(null);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !phone.trim() || !address.trim() || !pinCode.trim()) {
      setFormError('Please fill in your full name, mobile number, delivery address, and PIN code.');
      return;
    }
    setFormError('');
    const order: ConfirmedOrder = {
      orderNumber: `GMH-${Math.floor(10000 + Math.random() * 90000)}`,
      customerName: customerName.trim(),
      phone: phone.trim(),
      cityPin: pinCode.trim(),
      paymentMethod,
      total,
      itemCount,
      createdAt: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
    };
    onPlaceOrder(order);
    onClearCart();
    setConfirmedReceipt(order);
    setCheckoutOpen(false);
    setCustomerName('');
    setPhone('');
    setAddress('');
    setPinCode('');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Bag and Checkout"
      onClick={onClose}
    >
      <aside
        className="w-full max-w-md bg-[#FBF9F5] h-full flex flex-col border-l border-[#DDD6C7]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="px-6 py-4 border-b border-[#DDD6C7] flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-[#1C1917]">Shopping Bag</h2>
            <p className="text-xs text-[#57534E] font-mono tabular-nums">
              {itemCount} {itemCount === 1 ? 'item' : 'items'} · Direct Museum Dispatch
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close shopping bag"
            className="w-10 h-10 inline-flex items-center justify-center rounded-md border border-[#DDD6C7] text-[#1C1917] hover:bg-[#EFEAE0] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Delivery Progress */}
        {items.length > 0 && (
          <div className="px-6 py-3 bg-[#EFEAE0] border-b border-[#DDD6C7]">
            <p className="text-xs text-[#1C1917]">
              {remainingForFreeShipping === 0 ? (
                <span className="font-medium text-[#1B4332]">
                  Your order qualifies for complimentary pan-India shipping.
                </span>
              ) : (
                <span>
                  Add <strong className="font-mono tabular-nums">₹{remainingForFreeShipping}</strong> more
                  for free shipping (standard ₹{SHIPPING_FEE}).
                </span>
              )}
            </p>
            <div className="mt-2 h-1.5 w-full bg-[#DDD6C7] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#1B4332] transition-transform duration-200"
                style={{
                  width: `${Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100))}%`,
                }}
              />
            </div>
          </div>
        )}

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
          {confirmedReceipt && (
            <div className="p-5 bg-[#F7F4EE] border border-[#1B4332]/40 rounded-lg">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#1B4332]">
                <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                <span>Order #{confirmedReceipt.orderNumber} Confirmed</span>
              </div>
              <p className="text-xs text-[#44403C] mt-2 leading-relaxed">
                Thank you, <strong>{confirmedReceipt.customerName}</strong>. Your eco-friendly batch (
                {confirmedReceipt.itemCount} items ·{' '}
                <span className="font-mono">₹{confirmedReceipt.total}</span> via{' '}
                {confirmedReceipt.paymentMethod}) is now preparing for dispatch to PIN{' '}
                <span className="font-mono">{confirmedReceipt.cityPin}</span>.
              </p>
              <button
                type="button"
                onClick={() => setConfirmedReceipt(null)}
                className="mt-3 text-xs font-medium text-[#1B4332] underline cursor-pointer"
              >
                Dismiss receipt
              </button>
            </div>
          )}

          {items.length === 0 ? (
            <div className="py-12 text-center">
              <ShoppingBag className="w-10 h-10 text-[#A8A29E] mx-auto mb-3" aria-hidden="true" />
              <p className="font-serif text-xl text-[#1C1917]">Your shopping bag is empty</p>
              <p className="text-xs text-[#57534E] mt-1.5 max-w-xs mx-auto">
                Add Panchagavya diyas, organic fertilizer, Samidha logs, or an eco Ganesha murti from
                our collection.
              </p>

              {orderHistory.length > 0 && (
                <div className="mt-8 pt-6 border-t border-[#DDD6C7] text-left">
                  <p className="text-xs font-medium uppercase tracking-wider text-[#78716C] mb-3">
                    Recent Orders
                  </p>
                  <div className="space-y-2">
                    {orderHistory.slice(0, 3).map((ord) => (
                      <div
                        key={ord.orderNumber}
                        className="p-3 bg-[#F7F4EE] border border-[#DDD6C7] rounded text-xs flex items-center justify-between"
                      >
                        <div>
                          <p className="font-mono font-semibold text-[#1C1917]">{ord.orderNumber}</p>
                          <p className="text-[#57534E]">
                            {ord.createdAt} · {ord.paymentMethod}
                          </p>
                        </div>
                        <span className="font-mono font-semibold text-[#1B4332] tabular-nums">
                          ₹{ord.total}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : checkoutOpen ? (
            <form id="checkout-form" onSubmit={handleCheckoutSubmit} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#EAE4D7]">
                <h3 className="text-sm font-semibold text-[#1C1917]">Delivery &amp; Payment</h3>
                <button
                  type="button"
                  onClick={() => setCheckoutOpen(false)}
                  className="text-xs text-[#57534E] hover:text-[#1C1917] underline cursor-pointer"
                >
                  Back to items
                </button>
              </div>

              <div>
                <label htmlFor="chk-name" className="block text-xs font-medium text-[#1C1917] mb-1">
                  Recipient Name
                </label>
                <input
                  id="chk-name"
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Full name"
                  className="w-full px-3 py-2 text-sm bg-[#F7F4EE] border border-[#D4CCB9] rounded-md"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="chk-phone" className="block text-xs font-medium text-[#1C1917] mb-1">
                    Mobile Number
                  </label>
                  <input
                    id="chk-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98XXX XXXXX"
                    className="w-full px-3 py-2 text-sm bg-[#F7F4EE] border border-[#D4CCB9] rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="chk-pin" className="block text-xs font-medium text-[#1C1917] mb-1">
                    Postal PIN Code
                  </label>
                  <input
                    id="chk-pin"
                    type="text"
                    value={pinCode}
                    onChange={(e) => setPinCode(e.target.value)}
                    placeholder="e.g. 221001"
                    className="w-full px-3 py-2 text-sm bg-[#F7F4EE] border border-[#D4CCB9] rounded-md font-mono"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="chk-address" className="block text-xs font-medium text-[#1C1917] mb-1">
                  Full Delivery Address
                </label>
                <textarea
                  id="chk-address"
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="House / Street / Landmark / City"
                  className="w-full px-3 py-2 text-sm bg-[#F7F4EE] border border-[#D4CCB9] rounded-md"
                />
              </div>

              <div>
                <label htmlFor="chk-pay" className="block text-xs font-medium text-[#1C1917] mb-1">
                  Payment Method
                </label>
                <select
                  id="chk-pay"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-[#F7F4EE] border border-[#D4CCB9] rounded-md"
                >
                  <option>Cash on Delivery (COD)</option>
                  <option>UPI QR on Dispatch Confirmation</option>
                  <option>Museum Pickup &amp; Pay</option>
                </select>
              </div>

              {formError && (
                <p role="alert" className="text-xs font-medium text-[#9A3412]">
                  {formError}
                </p>
              )}
            </form>
          ) : (
            <div className="divide-y divide-[#EAE4D7]">
              {items.map((item) => (
                <div key={item.key} className="py-4 first:pt-0 flex gap-4">
                  <div className="w-20 h-20 rounded border border-[#DDD6C7] overflow-hidden shrink-0">
                    <ArtifactPlate plateKey={item.plateKey} title={item.name} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-semibold text-[#1C1917] truncate">{item.name}</h3>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.key)}
                        aria-label={`Remove ${item.name}`}
                        className="text-[#78716C] hover:text-[#9A3412] cursor-pointer shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-[#57534E] mt-0.5">
                      {item.variantLabel} · {item.weightLabel}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-[#D4CCB9] rounded bg-[#F7F4EE]">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.key, -1)}
                          aria-label={`Decrease ${item.name} quantity`}
                          className="w-7 h-7 inline-flex items-center justify-center hover:bg-[#EFEAE0] cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 text-center font-mono text-xs tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.key, 1)}
                          aria-label={`Increase ${item.name} quantity`}
                          className="w-7 h-7 inline-flex items-center justify-center hover:bg-[#EFEAE0] cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-mono text-sm font-semibold text-[#1C1917] tabular-nums">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {items.length > 0 && (
          <div className="px-6 py-4 border-t border-[#DDD6C7] bg-[#F7F4EE] space-y-3">
            <div className="space-y-1 text-xs text-[#57534E]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono tabular-nums text-[#1C1917]">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Eco Packaging &amp; Shipping</span>
                <span className="font-mono tabular-nums text-[#1C1917]">
                  {shipping === 0 ? 'Free' : `₹${shipping}`}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#DDD6C7] text-sm font-semibold text-[#1C1917]">
                <span>Total Payable</span>
                <span className="font-mono tabular-nums">₹{total}</span>
              </div>
            </div>

            {checkoutOpen ? (
              <button
                type="submit"
                form="checkout-form"
                className="w-full py-3 text-sm font-semibold text-[#F7F4EE] bg-[#1B4332] hover:bg-[#143326] rounded-md transition-colors cursor-pointer"
              >
                Confirm Order · ₹{total}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setConfirmedReceipt(null);
                  setCheckoutOpen(true);
                }}
                className="w-full py-3 text-sm font-semibold text-[#F7F4EE] bg-[#1B4332] hover:bg-[#143326] rounded-md transition-colors cursor-pointer"
              >
                Proceed to Checkout
              </button>
            )}
          </div>
        )}
      </aside>
    </div>
  );
};
