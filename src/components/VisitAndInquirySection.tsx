import React, { useState } from 'react';
import { Calendar, CheckCircle2, Mail, MapPin, Phone, Printer, Users } from 'lucide-react';
import { SealImageWithFallback } from './ArtifactPlates';

export interface VisitorPass {
  passCode: string;
  visitorName: string;
  phone: string;
  date: string;
  slot: string;
  guests: number;
  program: string;
}

export interface BulkInquiry {
  referenceId: string;
  contactName: string;
  organization: string;
  phoneOrEmail: string;
  productInterest: string;
  quantityNote: string;
}

interface VisitAndInquirySectionProps {
  savedPasses: VisitorPass[];
  onBookPass: (pass: VisitorPass) => void;
  savedInquiries: BulkInquiry[];
  onSubmitInquiry: (inquiry: BulkInquiry) => void;
}

export const VisitAndInquirySection: React.FC<VisitAndInquirySectionProps> = ({
  savedPasses,
  onBookPass,
  savedInquiries,
  onSubmitInquiry,
}) => {
  const [activeTab, setActiveTab] = useState<'visit' | 'bulk'>('visit');

  // Visit form state
  const [visitorName, setVisitorName] = useState('');
  const [visitorPhone, setVisitorPhone] = useState('');
  const [visitDate, setVisitDate] = useState('2026-11-20');
  const [visitSlot, setVisitSlot] = useState('10:30 AM – 12:00 PM');
  const [guests, setGuests] = useState(2);
  const [program, setProgram] = useState('Guided Museum Hall Tour');
  const [visitError, setVisitError] = useState('');
  const [latestPass, setLatestPass] = useState<VisitorPass | null>(null);

  // Bulk inquiry form state
  const [contactName, setContactName] = useState('');
  const [organization, setOrganization] = useState('');
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [productInterest, setProductInterest] = useState('Festive Panchagavya Diyas (Bulk)');
  const [quantityNote, setQuantityNote] = useState('');
  const [bulkError, setBulkError] = useState('');
  const [latestInquiry, setLatestInquiry] = useState<BulkInquiry | null>(null);

  const handleBookVisit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName.trim() || !visitorPhone.trim()) {
      setVisitError('Please enter your full name and phone number to reserve a museum pass.');
      return;
    }
    setVisitError('');
    const pass: VisitorPass = {
      passCode: `GMH-PASS-${Math.floor(1000 + Math.random() * 9000)}`,
      visitorName: visitorName.trim(),
      phone: visitorPhone.trim(),
      date: visitDate,
      slot: visitSlot,
      guests,
      program,
    };
    onBookPass(pass);
    setLatestPass(pass);
    setVisitorName('');
    setVisitorPhone('');
  };

  const handleBulkSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !phoneOrEmail.trim() || !quantityNote.trim()) {
      setBulkError('Please complete your name, contact details, and estimated order requirement.');
      return;
    }
    setBulkError('');
    const inquiry: BulkInquiry = {
      referenceId: `GMH-INQ-${Math.floor(1000 + Math.random() * 9000)}`,
      contactName: contactName.trim(),
      organization: organization.trim() || 'Individual / Community Buyer',
      phoneOrEmail: phoneOrEmail.trim(),
      productInterest,
      quantityNote: quantityNote.trim(),
    };
    onSubmitInquiry(inquiry);
    setLatestInquiry(inquiry);
    setContactName('');
    setOrganization('');
    setPhoneOrEmail('');
    setQuantityNote('');
  };

  return (
    <section id="visit" className="py-16 lg:py-20 bg-transparent border-b border-[#DDD6C7]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FBF9F5]/90 backdrop-blur-xs border border-[#DDD6C7] rounded-lg p-6">
              <p className="text-xs font-medium tracking-widest uppercase text-[#8C4A1C] mb-2">
                Plan Your Visit &amp; Partnerships
              </p>
              <h2
                className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1917] tracking-tight mb-4"
                style={{ textWrap: 'balance' }}
              >
                Visit Gobar Museum Hall or Request Bulk Supply
              </h2>
              <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
                Experience live cow-dung diya molding, organic composting demonstrations, and our
                four permanent exhibition halls—or partner with Manju Mitti for temple, school, and
                eco-festival supply.
              </p>
            </div>

            <div id="contact" className="bg-[#FBF9F5]/95 backdrop-blur-xs border border-[#DDD6C7] rounded-lg p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#1B4332] mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#78716C] font-medium">
                    Museum Location
                  </p>
                  <p className="text-sm text-[#1C1917] mt-0.5">
                    Gobar Museum Hall · Heritage Craft Complex, Rural Eco Park
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-[#1B4332] mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#78716C] font-medium">
                    Visiting Hours
                  </p>
                  <p className="text-sm text-[#1C1917] tabular-nums mt-0.5">
                    Tuesday – Sunday · 10:00 AM to 6:00 PM IST (Closed Mondays)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#1B4332] mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#78716C] font-medium">
                    Official Website &amp; Desk
                  </p>
                  <p className="text-sm text-[#1C1917] font-mono mt-0.5">
                    hello@gobarmuseumhall.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#1B4332] mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#78716C] font-medium">
                    Artisan Workshop Desk
                  </p>
                  <p className="text-sm text-[#1C1917] font-mono tabular-nums mt-0.5">
                    +91 98000 20260
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive Booking / Wholesale Form */}
          <div className="lg:col-span-7 bg-[#FBF9F5] border border-[#DDD6C7] rounded-lg p-6 sm:p-8">
            <div
              role="tablist"
              aria-label="Booking and inquiry options"
              className="inline-flex items-center gap-1 p-1 bg-[#EFEAE0] border border-[#DDD6C7] rounded-lg mb-6"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'visit'}
                onClick={() => setActiveTab('visit')}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === 'visit'
                    ? 'bg-[#1B4332] text-[#F7F4EE]'
                    : 'text-[#57534E] hover:text-[#1C1917]'
                }`}
              >
                Book Museum Visit
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'bulk'}
                onClick={() => setActiveTab('bulk')}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === 'bulk'
                    ? 'bg-[#1B4332] text-[#F7F4EE]'
                    : 'text-[#57534E] hover:text-[#1C1917]'
                }`}
              >
                Bulk &amp; Temple Inquiry
              </button>
            </div>

            {activeTab === 'visit' ? (
              <div>
                <form onSubmit={handleBookVisit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="visitor-name" className="block text-xs font-medium text-[#1C1917] mb-1.5">
                        Full Name
                      </label>
                      <input
                        id="visitor-name"
                        type="text"
                        value={visitorName}
                        onChange={(e) => setVisitorName(e.target.value)}
                        placeholder="e.g. Ananya Sharma"
                        className="w-full px-3 py-2 text-sm bg-[#F7F4EE] border border-[#D4CCB9] rounded-md text-[#1C1917] focus:outline-none focus:border-[#1B4332]"
                      />
                    </div>
                    <div>
                      <label htmlFor="visitor-phone" className="block text-xs font-medium text-[#1C1917] mb-1.5">
                        Mobile Number
                      </label>
                      <input
                        id="visitor-phone"
                        type="tel"
                        value={visitorPhone}
                        onChange={(e) => setVisitorPhone(e.target.value)}
                        placeholder="+91 98XXX XXXXX"
                        className="w-full px-3 py-2 text-sm bg-[#F7F4EE] border border-[#D4CCB9] rounded-md text-[#1C1917] focus:outline-none focus:border-[#1B4332]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="visit-date" className="block text-xs font-medium text-[#1C1917] mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        id="visit-date"
                        type="date"
                        value={visitDate}
                        onChange={(e) => setVisitDate(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-[#F7F4EE] border border-[#D4CCB9] rounded-md text-[#1C1917] focus:outline-none focus:border-[#1B4332]"
                      />
                    </div>

                    <div>
                      <label htmlFor="visit-slot" className="block text-xs font-medium text-[#1C1917] mb-1.5">
                        Time Slot
                      </label>
                      <select
                        id="visit-slot"
                        value={visitSlot}
                        onChange={(e) => setVisitSlot(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-[#F7F4EE] border border-[#D4CCB9] rounded-md text-[#1C1917] focus:outline-none focus:border-[#1B4332]"
                      >
                        <option>10:30 AM – 12:00 PM</option>
                        <option>02:00 PM – 03:30 PM</option>
                        <option>04:30 PM – 05:45 PM</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="visit-guests" className="block text-xs font-medium text-[#1C1917] mb-1.5">
                        Visitors
                      </label>
                      <div className="relative">
                        <Users className="w-4 h-4 text-[#78716C] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          id="visit-guests"
                          type="number"
                          min={1}
                          max={40}
                          value={guests}
                          onChange={(e) => setGuests(Math.max(1, Number(e.target.value) || 1))}
                          className="w-full pl-9 pr-3 py-2 text-sm bg-[#F7F4EE] border border-[#D4CCB9] rounded-md text-[#1C1917] font-mono tabular-nums focus:outline-none focus:border-[#1B4332]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="visit-program" className="block text-xs font-medium text-[#1C1917] mb-1.5">
                      Experience Program
                    </label>
                    <select
                      id="visit-program"
                      value={program}
                      onChange={(e) => setProgram(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-[#F7F4EE] border border-[#D4CCB9] rounded-md text-[#1C1917] focus:outline-none focus:border-[#1B4332]"
                    >
                      <option>Guided Museum Hall Tour (Complimentary)</option>
                      <option>Diya &amp; Ganesha Molding Workshop with Manju Mitti</option>
                      <option>Organic Composting &amp; School Field Study</option>
                    </select>
                  </div>

                  {visitError && (
                    <p role="alert" className="text-xs font-medium text-[#9A3412]">
                      {visitError}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="px-6 py-2.5 text-sm font-semibold text-[#F7F4EE] bg-[#1B4332] hover:bg-[#143326] rounded-md transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Generate Visitor Pass
                  </button>
                </form>

                {/* Latest Pass Receipt */}
                {latestPass && (
                  <div className="mt-6 p-5 bg-[#F7F4EE] border border-[#1B4332]/40 rounded-lg">
                    <div className="flex items-start justify-between gap-4 pb-3 border-b border-[#DDD6C7]">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full overflow-hidden bg-[#18221D] shrink-0">
                          <SealImageWithFallback className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1B4332]">
                            <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                            <span>Confirmed Museum Entry Pass</span>
                          </div>
                          <p className="font-mono text-sm font-semibold text-[#1C1917] mt-0.5">
                            {latestPass.passCode}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => window.print()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1C1917] bg-[#FBF9F5] border border-[#CFC7B5] hover:border-[#1C1917] rounded-md cursor-pointer whitespace-nowrap shrink-0"
                      >
                        <Printer className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Print Pass</span>
                      </button>
                    </div>

                    <dl className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                      <div>
                        <dt className="text-[#78716C]">Visitor</dt>
                        <dd className="font-medium text-[#1C1917] mt-0.5">{latestPass.visitorName}</dd>
                      </div>
                      <div>
                        <dt className="text-[#78716C]">Date</dt>
                        <dd className="font-mono text-[#1C1917] mt-0.5 tabular-nums">{latestPass.date}</dd>
                      </div>
                      <div>
                        <dt className="text-[#78716C]">Slot</dt>
                        <dd className="text-[#1C1917] mt-0.5">{latestPass.slot}</dd>
                      </div>
                      <div>
                        <dt className="text-[#78716C]">Party Size</dt>
                        <dd className="font-mono text-[#1C1917] mt-0.5 tabular-nums">
                          {latestPass.guests} {latestPass.guests === 1 ? 'Guest' : 'Guests'}
                        </dd>
                      </div>
                    </dl>
                  </div>
                )}

                {savedPasses.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-[#EAE4D7]">
                    <p className="text-xs font-medium text-[#57534E] mb-2">
                      Recent Reservations ({savedPasses.length})
                    </p>
                    <div className="space-y-1.5">
                      {savedPasses.slice(0, 3).map((p) => (
                        <div
                          key={p.passCode}
                          className="flex items-center justify-between text-xs text-[#44403C]"
                        >
                          <span>
                            <strong className="font-mono text-[#1C1917]">{p.passCode}</strong> ·{' '}
                            {p.visitorName}
                          </span>
                          <span className="font-mono tabular-nums text-[#78716C]">
                            {p.date} · {p.guests}p
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <form onSubmit={handleBulkSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="bulk-name" className="block text-xs font-medium text-[#1C1917] mb-1.5">
                        Contact Person
                      </label>
                      <input
                        id="bulk-name"
                        type="text"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Full name"
                        className="w-full px-3 py-2 text-sm bg-[#F7F4EE] border border-[#D4CCB9] rounded-md text-[#1C1917] focus:outline-none focus:border-[#1B4332]"
                      />
                    </div>
                    <div>
                      <label htmlFor="bulk-org" className="block text-xs font-medium text-[#1C1917] mb-1.5">
                        Temple / Nursery / Organization
                      </label>
                      <input
                        id="bulk-org"
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="Optional organization name"
                        className="w-full px-3 py-2 text-sm bg-[#F7F4EE] border border-[#D4CCB9] rounded-md text-[#1C1917] focus:outline-none focus:border-[#1B4332]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="bulk-contact" className="block text-xs font-medium text-[#1C1917] mb-1.5">
                        Phone or Email
                      </label>
                      <input
                        id="bulk-contact"
                        type="text"
                        value={phoneOrEmail}
                        onChange={(e) => setPhoneOrEmail(e.target.value)}
                        placeholder="Phone number or email address"
                        className="w-full px-3 py-2 text-sm bg-[#F7F4EE] border border-[#D4CCB9] rounded-md text-[#1C1917] focus:outline-none focus:border-[#1B4332]"
                      />
                    </div>
                    <div>
                      <label htmlFor="bulk-product" className="block text-xs font-medium text-[#1C1917] mb-1.5">
                        Primary Product Category
                      </label>
                      <select
                        id="bulk-product"
                        value={productInterest}
                        onChange={(e) => setProductInterest(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-[#F7F4EE] border border-[#D4CCB9] rounded-md text-[#1C1917] focus:outline-none focus:border-[#1B4332]"
                      >
                        <option>Festive Panchagavya Diyas (Bulk)</option>
                        <option>Organic Fertilizer &amp; Vermicompost (Farm Tons)</option>
                        <option>Compressed Gobar Samidha Logs (Temple Supply)</option>
                        <option>Eco-Friendly Ganesha Murtis (Community Orders)</option>
                        <option>Corporate Eco-Gifting Hampers</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="bulk-qty" className="block text-xs font-medium text-[#1C1917] mb-1.5">
                      Estimated Quantity &amp; Delivery Location
                    </label>
                    <textarea
                      id="bulk-qty"
                      rows={3}
                      value={quantityNote}
                      onChange={(e) => setQuantityNote(e.target.value)}
                      placeholder="Specify units, kilograms, target festival date, or city..."
                      className="w-full px-3 py-2 text-sm bg-[#F7F4EE] border border-[#D4CCB9] rounded-md text-[#1C1917] focus:outline-none focus:border-[#1B4332]"
                    />
                  </div>

                  {bulkError && (
                    <p role="alert" className="text-xs font-medium text-[#9A3412]">
                      {bulkError}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="px-6 py-2.5 text-sm font-semibold text-[#F7F4EE] bg-[#1B4332] hover:bg-[#143326] rounded-md transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Submit Wholesale Inquiry
                  </button>
                </form>

                {latestInquiry && (
                  <div className="mt-6 p-4 bg-[#F7F4EE] border border-[#1B4332]/40 rounded-lg">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#1B4332]">
                      <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                      <span>Inquiry Logged · Reference {latestInquiry.referenceId}</span>
                    </div>
                    <p className="text-xs text-[#44403C] mt-1.5">
                      Manju Mitti’s dispatch team has recorded your inquiry for{' '}
                      <strong>{latestInquiry.productInterest}</strong> and will respond within 24
                      working hours.
                    </p>
                  </div>
                )}

                {savedInquiries.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-[#EAE4D7]">
                    <p className="text-xs font-medium text-[#57534E] mb-2">
                      Logged Bulk Inquiries ({savedInquiries.length})
                    </p>
                    <div className="space-y-1.5">
                      {savedInquiries.slice(0, 3).map((inq) => (
                        <div
                          key={inq.referenceId}
                          className="flex items-center justify-between text-xs text-[#44403C]"
                        >
                          <span>
                            <strong className="font-mono text-[#1C1917]">{inq.referenceId}</strong> ·{' '}
                            {inq.organization}
                          </span>
                          <span className="text-[#78716C] truncate max-w-[180px]">
                            {inq.productInterest}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
