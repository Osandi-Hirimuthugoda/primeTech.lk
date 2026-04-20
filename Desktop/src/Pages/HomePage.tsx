import React from "react";
import { type Page } from '../Types';

// ─── Types ────────────────────────────────────────────────────────────────────
interface Product {
  id: string;
  brand: string;
  name: string;
  price: string;
  rating: string;
  reviews: string;
  image: string;
  bg: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const latestDrop: Product[] = [
  {
    id: "1",
    brand: "SAMSUNG",
    name: "Samsung Galaxy S26 Ultra",
    price: "$1,199",
    rating: "4.9",
    reviews: "1.2k",
    image:
      "https://images.unsplash.com/photo-1610945264803-c22b62831454?w=200&h=200&fit=crop&auto=format",
    bg: "#F7F7F9",
  },
  {
    id: "2",
    brand: "MSI",
    name: "Stealth A16 AI",
    price: "$1,499",
    rating: "4.8",
    reviews: "858",
    image:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=200&h=200&fit=crop&auto=format",
    bg: "#1A1A1A",
  },
  {
    id: "3",
    brand: "APPLE",
    name: "Watch X",
    price: "$799",
    rating: "5.0",
    reviews: "2.1k",
    image:
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=200&h=200&fit=crop&auto=format",
    bg: "#111111",
  },
  {
    id: "4",
    brand: "HAURORA",
    name: "Pod Studio Max",
    price: "$349",
    rating: "4.7",
    reviews: "422",
    image:
      "https://images.unsplash.com/photo-1606741965326-cb990ae01bb2?w=200&h=200&fit=crop&auto=format",
    bg: "#F7F7F9",
  },
];

const appleProducts: Product[] = [
  {
    id: "a1",
    brand: "APPLE",
    name: "iPhone 17 Pro",
    price: "$1,099",
    rating: "4.9",
    reviews: "1.2k",
    image:
      "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=200&h=200&fit=crop&auto=format",
    bg: "#F7F7F9",
  },
  {
    id: "a2",
    brand: "APPLE",
    name: "MacBook Neo",
    price: "$599",
    rating: "4.8",
    reviews: "858",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200&h=200&fit=crop&auto=format",
    bg: "#F0FFF0",
  },
  {
    id: "a3",
    brand: "APPLE",
    name: "Apple Watch Series 11",
    price: "$799",
    rating: "5.0",
    reviews: "2.1k",
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=200&h=200&fit=crop&auto=format",
    bg: "#FFF0F5",
  },
  {
    id: "a4",
    brand: "HAURORA",
    name: "AirPods Max 2",
    price: "$549",
    rating: "4.7",
    reviews: "422",
    image:
      "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=200&h=200&fit=crop&auto=format",
    bg: "#FFF8F0",
  },
];

const stats = [
  { value: "200+", label: "DEVICE RATED" },
  { value: "1.2M", label: "REVIEWS" },
  { value: "15", label: "GLOBAL LABS" },
  { value: "0", label: "TOXINS" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const StarIcon: React.FC<{ color?: string }> = ({ color = "#F59E0B" }) => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill={color}>
    <path d="M6 1l1.39 2.82L10.5 4.24l-2.25 2.19.53 3.09L6 7.96l-2.78 1.46.53-3.09L1.5 4.24l3.11-.42L6 1z" />
  </svg>
);

const ProductCard: React.FC<{ product: Product; onNavigate: (page: Page) => void }> = ({ product, onNavigate }) => {
  return (
    <div style={cardStyles.wrapper} onClick={() => onNavigate('productdetails')}>
      {/* Image area */}
      <div
        style={{
          ...cardStyles.imgBox,
          background: product.bg,
        }}
      >
        <img src={product.image} alt={product.name} style={cardStyles.img} />
      </div>
      {/* Info */}
      <div style={cardStyles.info}>
        <p style={cardStyles.brand}>{product.brand}</p>
        <p style={cardStyles.name}>{product.name}</p>
        <div style={cardStyles.priceRow}>
          <span style={cardStyles.price}>{product.price}</span>
          <div style={cardStyles.ratingRow}>
            <StarIcon />
            <span style={cardStyles.ratingText}>
              {product.rating} ({product.reviews})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const cardStyles: Record<string, React.CSSProperties> = {
  wrapper: {
    background: "#fff",
    borderRadius: 16,
    border: "1.5px solid #EFEFEF",
    overflow: "hidden",
    cursor: "pointer",
    transition: "box-shadow 0.2s",
  },
  imgBox: {
    height: 160,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  info: {
    padding: "14px 16px 16px",
  },
  brand: {
    fontSize: 10,
    fontWeight: 700,
    color: "#9CA3AF",
    letterSpacing: "0.08em",
    margin: "0 0 4px",
    fontFamily: "'DM Sans', sans-serif",
  },
  name: {
    fontSize: 14,
    fontWeight: 700,
    color: "#0A0A0A",
    margin: "0 0 10px",
    lineHeight: 1.3,
    fontFamily: "'DM Sans', sans-serif",
  },
  priceRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 16,
    fontWeight: 800,
    color: "#2563EB",
    fontFamily: "'DM Sans', sans-serif",
    letterSpacing: "-0.3px",
  },
  ratingRow: {
    display: "flex",
    alignItems: "center",
    gap: 3,
  },
  ratingText: {
    fontSize: 11,
    color: "#9CA3AF",
    fontWeight: 500,
    fontFamily: "'DM Sans', sans-serif",
  },
};

// ─── Main HomePage ─────────────────────────────────────────────────────────────
interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..900;1,9..40,300..900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; background: #fff; }
      `}</style>

      <div style={s.root}>

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section style={s.hero}>
          {/* Left text */}
          <div style={s.heroLeft}>
            <p style={s.heroEyebrow}>THE NEXT EVOLUTION</p>
            <h1 style={s.heroHeading}>
              iPhone 17{" "}
              <span style={s.heroHeadingBlock}>
                Pro
              </span>
              <br />
              <span style={s.heroMax}>Max</span>
            </h1>
            <p style={s.heroDesc}>
              Experience the most advanced iPhone yet, forged in Grade 5
              Titanium for unparalleled strength and weight.
            </p>
            <div style={s.heroBtns}>
              <button style={s.btnPrimary} onClick={() => onNavigate('collection')}>Pre-order Now</button>
              <button style={s.btnGhost} onClick={() => onNavigate('ecosystem')}>
                Learn more&nbsp;›
              </button>
            </div>
          </div>

          {/* Right image — dark panel */}
          <div style={s.heroRight}>
            <img
              src="https://images.unsplash.com/photo-1592286927505-1def25115558?w=700&h=600&fit=crop&auto=format"
              alt="iPhone 17 Pro Max"
              style={s.heroImg}
            />
          </div>
        </section>

        {/* ── LATEST DROP ──────────────────────────────────────────────────── */}
        <section style={s.section}>
          <p style={s.sectionEyebrow}>CURATED SELECTION</p>
          <div style={s.sectionHeader}>
            <h2 style={s.sectionTitle}>The Latest Drop</h2>
            <a href="#" style={s.viewAll}>View All Collections →</a>
          </div>
          <div style={s.grid4}>
            {latestDrop.map((p) => (
              <ProductCard key={p.id} product={p} onNavigate={onNavigate} />
            ))}
          </div>
        </section>

        {/* ── APPLE PRODUCTS ───────────────────────────────────────────────── */}
        <section style={{ ...s.section, paddingTop: 0 }}>
          <p style={s.sectionEyebrow}>ECOSYSTEM SPOTLIGHT</p>
          <h2 style={s.sectionTitle}>Apple Products</h2>
          <div style={{ ...s.grid4, marginTop: 20 }}>
            {appleProducts.map((p) => (
              <ProductCard key={p.id} product={p} onNavigate={onNavigate} />
            ))}
          </div>
        </section>

        {/* ── FOLDABLE FLAGSHIP ────────────────────────────────────────────── */}
        <section style={s.foldable}>
          {/* Left image panel */}
          <div style={s.foldLeft}>
            <img
              src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=500&fit=crop&auto=format"
              alt="Foldable phones"
              style={s.foldImg}
            />
            {/* SYNC TECH badge */}
            <div style={s.syncBadge}>
              <span style={s.syncDot} />
              SYNC TECH<br />
              <span style={s.syncSub}>120Hz Adaptive Flux</span>
            </div>
            {/* Innovation Lab pill */}
            <div style={s.innovPill}>
              <span style={s.innovDot} />
              <div>
                <div style={s.innovLabel}>INNOVATION LAB</div>
                <div style={s.innovValue}>0.3mm Bend Radius</div>
              </div>
            </div>
          </div>

          {/* Right text */}
          <div style={s.foldRight}>
            <p style={s.foldEyebrow}>BEYOND THE HORIZON</p>
            <h2 style={s.foldTitle}>
              The Foldable{" "}
              <span style={s.foldAccent}>Flagship.</span>
            </h2>
            <ol style={s.foldList}>
              <li style={s.foldListItem}>
                <span style={s.foldNum}>1</span>
                <div>
                  <p style={s.foldListTitle}>Self-Healing Display</p>
                  <p style={s.foldListDesc}>
                    Self-healing pixel layers that eliminate crease visibility over time.
                  </p>
                </div>
              </li>
              <li style={s.foldListItem}>
                <span style={s.foldNum}>2</span>
                <div>
                  <p style={s.foldListTitle}>Crystal Filament Hinge</p>
                  <p style={s.foldListDesc}>
                    Rated for 1,000,000 folds with silent, zero-friction mechanics.
                  </p>
                </div>
              </li>
            </ol>
            <button style={s.watchBtn}>
              <span style={s.watchIcon}>▶</span>
              Watch the Reveal
            </button>
          </div>
        </section>

        {/* ── EXPERIENCE LABS ──────────────────────────────────────────────── */}
        <section style={s.labs}>
          <p style={s.labsEyebrow}>CLASSIFIED ACCESS ONLY</p>
          <h2 style={s.labsTitle}>Experience Labs.</h2>
          <p style={s.labsDesc}>
            Enter the crucible of digital evolution. Get early access to beta hardware and
            <br />define the next decade of technology.
          </p>
          <button style={s.labsBtn}>Enter the Lab</button>

          {/* Stats row */}
          <div style={s.statsRow}>
            {stats.map((stat) => (
              <div key={stat.label} style={s.statItem}>
                <span style={s.statValue}>{stat.value}</span>
                <span style={s.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
};

// ─── Styles ───────────────────────────────────────────────────────────────────
const s: Record<string, React.CSSProperties> = {
  root: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#fff",
    color: "#0A0A0A",
    overflowX: "hidden",
  },

  /* HERO */
  hero: {
    display: "flex",
    alignItems: "stretch",
    minHeight: 480,
    background: "#F4F4F6",
    overflow: "hidden",
    position: "relative",
  },
  heroLeft: {
    flex: "0 0 50%",
    padding: "72px 56px 72px 72px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    zIndex: 2,
  },
  heroEyebrow: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.12em",
    color: "#2563EB",
    marginBottom: 14,
    textTransform: "uppercase" as const,
  },
  heroHeading: {
    fontSize: 64,
    fontWeight: 900,
    lineHeight: 1.0,
    color: "#0A0A0A",
    letterSpacing: "-2px",
    marginBottom: 0,
  },
  heroHeadingBlock: {
    display: "block",
  },
  heroMax: {
    fontSize: 64,
    fontWeight: 900,
    color: "#2563EB",
    letterSpacing: "-2px",
    fontStyle: "italic",
  },
  heroDesc: {
    fontSize: 14,
    color: "#555",
    lineHeight: 1.65,
    maxWidth: 320,
    marginTop: 18,
    marginBottom: 28,
    fontWeight: 400,
  },
  heroBtns: {
    display: "flex",
    gap: 12,
    alignItems: "center",
  },
  btnPrimary: {
    background: "#2563EB",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "12px 22px",
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
  },
  btnGhost: {
    background: "transparent",
    color: "#0A0A0A",
    border: "none",
    padding: "12px 8px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
  },
  heroRight: {
    flex: "0 0 50%",
    background: "#0A0A0A",
    overflow: "hidden",
    position: "relative",
  },
  heroImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    display: "block",
  },

  /* SECTIONS */
  section: {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "52px 24px 40px",
  },
  sectionEyebrow: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.12em",
    color: "#2563EB",
    marginBottom: 8,
    textTransform: "uppercase" as const,
  },
  sectionHeader: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 800,
    color: "#0A0A0A",
    letterSpacing: "-0.5px",
    margin: 0,
  },
  viewAll: {
    fontSize: 13,
    fontWeight: 600,
    color: "#2563EB",
    textDecoration: "none",
    whiteSpace: "nowrap" as const,
  },
  grid4: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 16,
  },

  /* FOLDABLE */
  foldable: {
    display: "flex",
    alignItems: "stretch",
    background: "#0D1117",
    minHeight: 460,
    overflow: "hidden",
  },
  foldLeft: {
    flex: "0 0 52%",
    position: "relative",
    overflow: "hidden",
  },
  foldImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    opacity: 0.9,
  },
  syncBadge: {
    position: "absolute",
    bottom: 24,
    left: 24,
    background: "#1D6358",
    color: "#5EFDE5",
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.08em",
    padding: "8px 12px",
    borderRadius: 8,
    lineHeight: 1.4,
    display: "flex",
    gap: 6,
    alignItems: "flex-start",
  },
  syncDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#5EFDE5",
    marginTop: 2,
    flexShrink: 0,
  },
  syncSub: {
    fontWeight: 400,
    opacity: 0.8,
  },
  innovPill: {
    position: "absolute",
    top: 28,
    right: 28,
    background: "#fff",
    borderRadius: 10,
    padding: "10px 14px",
    display: "flex",
    gap: 8,
    alignItems: "center",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
  },
  innovDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#2563EB",
    flexShrink: 0,
  },
  innovLabel: {
    fontSize: 8,
    fontWeight: 700,
    letterSpacing: "0.1em",
    color: "#9CA3AF",
    textTransform: "uppercase" as const,
  },
  innovValue: {
    fontSize: 11,
    fontWeight: 700,
    color: "#0A0A0A",
    marginTop: 1,
  },
  foldRight: {
    flex: 1,
    padding: "64px 56px 64px 64px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  foldEyebrow: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.12em",
    color: "#6B7280",
    marginBottom: 14,
    textTransform: "uppercase" as const,
  },
  foldTitle: {
    fontSize: 44,
    fontWeight: 900,
    color: "#F9FAFB",
    lineHeight: 1.1,
    letterSpacing: "-1px",
    marginBottom: 32,
  },
  foldAccent: {
    color: "#2563EB",
    fontStyle: "italic",
  },
  foldList: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 32px",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  foldListItem: {
    display: "flex",
    gap: 14,
    alignItems: "flex-start",
  },
  foldNum: {
    width: 22,
    height: 22,
    borderRadius: "50%",
    border: "1.5px solid #374151",
    color: "#9CA3AF",
    fontSize: 11,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    marginTop: 1,
  },
  foldListTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: "#F9FAFB",
    marginBottom: 3,
  },
  foldListDesc: {
    fontSize: 12,
    color: "#6B7280",
    lineHeight: 1.5,
  },
  watchBtn: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    background: "transparent",
    border: "none",
    color: "#F9FAFB",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    padding: 0,
    fontFamily: "'DM Sans', sans-serif",
  },
  watchIcon: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    background: "#2563EB",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    color: "#fff",
    flexShrink: 0,
  },

  /* LABS */
  labs: {
    background: "#060A10",
    textAlign: "center",
    padding: "88px 24px 0",
  },
  labsEyebrow: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "0.14em",
    color: "#4B5563",
    marginBottom: 16,
    textTransform: "uppercase" as const,
  },
  labsTitle: {
    fontSize: 56,
    fontWeight: 900,
    color: "#F9FAFB",
    letterSpacing: "-2px",
    marginBottom: 16,
  },
  labsDesc: {
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 1.7,
    marginBottom: 36,
  },
  labsBtn: {
    background: "transparent",
    border: "1.5px solid #F9FAFB",
    color: "#F9FAFB",
    borderRadius: 100,
    padding: "14px 36px",
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    marginBottom: 72,
  },
  statsRow: {
    display: "flex",
    borderTop: "1px solid #1F2937",
  },
  statItem: {
    flex: 1,
    padding: "32px 24px",
    display: "flex",
    flexDirection: "column",
    gap: 6,
    borderRight: "1px solid #1F2937",
  },
  statValue: {
    fontSize: 28,
    fontWeight: 900,
    color: "#F9FAFB",
    letterSpacing: "-0.5px",
  },
  statLabel: {
    fontSize: 9,
    fontWeight: 700,
    color: "#4B5563",
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
  },
};

export default HomePage;
