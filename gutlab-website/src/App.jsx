import React from "react";

const ORDER_CALCULATOR_URL = "https://gutlab-order.netlify.app/";
const WHATSAPP_ORDER_URL =
  "https://wa.me/6584067441?text=Hi%20Gut%20Lab%20by%20Xaels%2C%20I%20would%20like%20to%20place%20an%20order.";
const INSTAGRAM_URL =
  "https://www.instagram.com/xaelsbakes?igsh=MTBicDlwZ3piMXdyNg==";
const TIKTOK_PROFILE_URL = "https://www.tiktok.com/@xaelsbakes";

const products = [
  {
    name: "Healthy Spread",
    price: "SGD 10",
    image: "/healthy_spread.jpeg",
    tagline: "A scientist recipe for everyday nutrition.",
    description:
      "A better-for-you everyday spread designed for toast, breakfast bowls, pancakes, and snack time.",
    story:
      "Built to feel familiar and comforting, while fitting naturally into breakfast and family routines.",
    tags: ["Family-friendly", "Everyday use", "Comfort food"],
    ways: ["Spread on toast", "Add to oats", "Use with pancakes"],
    ingredients: [
      "Butter",
      "Avocado oil",
      "Ragi (millet)",
      "Cocoa",
      "Date syrup",
      "Honey",
    ],
    order:
      "https://wa.me/6584067441?text=Hi%20Gut%20Lab%20by%20Xaels%2C%20I%20would%20like%20to%20order%20Healthy%20Spread.",
  },
  {
    name: "Coffee Reimagined",
    price: "SGD 10",
    image: "/coffee_spread.jpeg",
    tagline: "No sugar. No preservatives. Just smart energy.",
    description:
      "A rich coffee-inspired spread made for bread, crackers, waffles, and dessert moments.",
    story:
      "Made for people who love coffee flavor, but want it in a more playful, versatile everyday format.",
    tags: ["Coffee-forward", "Smart energy", "Snack use"],
    ways: ["Spread on toast", "Pair with crackers", "Use in desserts"],
    ingredients: [
      "Butter",
      "Avocado oil",
      "Ragi (millet)",
      "Espresso",
      "Date syrup",
      "Honey",
    ],
    order:
      "https://wa.me/6584067441?text=Hi%20Gut%20Lab%20by%20Xaels%2C%20I%20would%20like%20to%20order%20Coffee%20Reimagined.",
  },
  {
    name: "Cocoa Nut Mix",
    price: "SGD 18",
    image: "/cocoa_mix.jpeg",
    tagline: "Premium cocoa drink for everyday energy.",
    description:
      "A rich cocoa blend for warm drinks, smoothies, oats, and daily comfort moments.",
    story:
      "Positioned as the richer, more premium part of the range — something you keep coming back to morning or evening.",
    tags: ["Premium blend", "Daily ritual", "Comforting"],
    ways: ["Hot cocoa drink", "Blend into smoothies", "Stir into oats"],
    ingredients: [
      "Barley",
      "Oats",
      "Almonds",
      "Cashews",
      "Milk powder",
      "Cocoa",
    ],
    order:
      "https://wa.me/6584067441?text=Hi%20Gut%20Lab%20by%20Xaels%2C%20I%20would%20like%20to%20order%20Cocoa%20Nut%20Mix.",
  },
  {
    name: "Fudge Brownie (500g)",
    price: "SGD 50",
    image: "/brownie_500.jpg",
    tagline: "Rich, fudgy, small-batch brownie.",
    description:
      "A decadent brownie block that feels giftable, indulgent, and perfect for sharing.",
    story:
      "A smaller-format brownie for gifting, celebrations, or a premium treat at home.",
    tags: ["Giftable", "Small-batch", "Indulgent"],
    ways: ["Serve warm", "Share with family", "Gift to friends"],
    ingredients: [
      "Dark chocolate",
      "Butter",
      "Eggs",
      "Cocoa",
      "Millet Flour",
      "Dates",
    ],
    order:
      "https://wa.me/6584067441?text=Hi%20Gut%20Lab%20by%20Xaels%2C%20I%20would%20like%20to%20order%20the%20500g%20Fudge%20Brownie.",
  },
  {
    name: "Fudge Brownie (1100g)",
    price: "SGD 110",
    image: "/brownie_1100.jpg",
    tagline: "Large indulgent brownie slab.",
    description:
      "A celebration-sized brownie for gatherings, family sharing, gifting, and serious chocolate cravings.",
    story:
      "Created for bigger moments — generous, rich, and made to feel special.",
    tags: ["Celebration size", "Premium gift", "Shareable"],
    ways: ["Serve at gatherings", "Gift for occasions", "Share at home"],
    ingredients: [
      "Dark chocolate",
      "Butter",
      "Eggs",
      "Cocoa",
      "Millet Flour",
      "Dates",
    ],
    order:
      "https://wa.me/6584067441?text=Hi%20Gut%20Lab%20by%20Xaels%2C%20I%20would%20like%20to%20order%20the%201100g%20Fudge%20Brownie.",
  },
];

const bundles = [
  {
    title: "Starter Trio",
    price: "SGD 35",
    badge: "Best Value",
    desc: "Any 3 products for SGD 35",
    note: "Perfect first purchase to try the Gut Lab range.",
    order:
      "https://wa.me/6584067441?text=Hi%20Gut%20Lab%20by%20Xaels%2C%20I%20would%20like%20to%20order%20the%20Starter%20Trio%20bundle%20for%20SGD%2038.",
  },
  {
    title: "Spread Duo",
    price: "SGD 18",
    badge: "Daily Favorite",
    desc: "Healthy Spread + Coffee Reimagined",
    note: "Great for breakfast lovers and everyday toast routines.",
    order:
      "https://wa.me/6584067441?text=Hi%20Gut%20Lab%20by%20Xaels%2C%20I%20would%20like%20to%20order%20the%20Spread%20Duo%20bundle%20for%20SGD%2018.",
  },
  {
    title: "Cocoa + Spread Set",
    price: "SGD 27",
    badge: "Premium Pick",
    desc: "Cocoa Nut Mix + Healthy Spread",
    note: "A rich breakfast and snack pairing with premium cocoa.",
    order:
      "https://wa.me/6584067441?text=Hi%20Gut%20Lab%20by%20Xaels%2C%20I%20would%20like%20to%20order%20the%20Cocoa%20%2B%20Spread%20Set%20for%20SGD%2027.",
  },
];

const reasons = [
  {
    title: "Made for everyday use",
    text: "These products fit naturally into breakfast, snack time, lunchboxes, and small daily rituals.",
    icon: "☀️",
  },
  {
    title: "Comfort food, upgraded",
    text: "Familiar flavors like chocolate, coffee, and cocoa reworked into more thoughtful everyday choices.",
    icon: "🍫",
  },
  {
    title: "Easy to gift and repeat",
    text: "The range works for self-use, family purchase, gifting, and bundle-based repeat buying.",
    icon: "🎁",
  },
];

const dailyCards = [
  {
    image: "/use_toast.jpg",
    title: "Morning toast before work or school",
    text: "An easy breakfast habit that fits busy mornings and school routines.",
  },
  {
    image: "/use_snack.jpg",
    title: "Quick snack with crackers or fruit",
    text: "A simple afternoon snack idea that feels light, fun, and shareable.",
  },
  {
    image: "/use_pancake.jpg",
    title: "Add to pancakes, waffles, or oats",
    text: "A cheerful upgrade for breakfast bowls, weekend brunches, or evening treats.",
  },
  {
    image: "/use_cocoa.jpg",
    title: "Enjoy Cocoa Nut Mix as a warm evening drink",
    text: "A cozy premium cocoa ritual for winding down at the end of the day.",
  },
  {
    image: "/use_gift.jpg",
    title: "Perfect as a thoughtful gift bundle",
    text: "A friendly, giftable format that feels personal and easy to share.",
  },
  {
    image: "/use_pantry.jpg",
    title: "Keep as a pantry staple for daily use",
    text: "Made to be the kind of product you naturally keep stocked at home.",
  },
];

function ProductCard({ product }) {
  return (
    <div className="card product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-body">
        <div className="product-head">
          <h3>{product.name}</h3>
          <span className="price-pill">{product.price}</span>
        </div>

        <p className="tagline">{product.tagline}</p>
        <p className="muted">{product.description}</p>

        <div className="soft-box">
          <strong>Why it matters</strong>
          <p>{product.story}</p>
        </div>

        <div className="tag-row">
          {product.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>

        <div className="soft-box">
          <strong>Simple ways to enjoy</strong>
          <ul>
            {product.ways.map((way) => (
              <li key={way}>{way}</li>
            ))}
          </ul>
        </div>

        <details className="ingredients">
          <summary>View Ingredients</summary>
          <ul>
            {product.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>

        <div className="action-row">
          <a
            href={ORDER_CALCULATOR_URL}
            target="_blank"
            rel="noreferrer"
            className="btn btn-gold"
          >
            Check Total & Order
          </a>
          <a href={product.order} className="btn btn-light">
            WhatsApp Order
          </a>
        </div>
      </div>
    </div>
  );
}

function DailyUseCard({ item }) {
  return (
    <div className="card daily-card">
      <img src={item.image} alt={item.title} className="daily-image" />
      <div className="daily-body">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(180deg, #fff7ee 0%, #fffaf6 40%, #f7efe6 100%);
          color: #1f2f1c;
        }
        a { text-decoration: none; }

        .page {
          min-height: 100vh;
          overflow-x: hidden;
        }

        .container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255,255,255,0.88);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid #efe1cf;
        }

        .header-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding: 16px 0;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-box {
          width: 58px;
          height: 58px;
          border-radius: 18px;
          background: #fff;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-box img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .brand-title {
          font-size: 28px;
          font-weight: 800;
          line-height: 1.05;
        }

        .brand-sub {
          font-size: 13px;
          color: #666;
          margin-top: 3px;
        }

        .nav {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }

        .nav a {
          color: #21451f;
          font-weight: 700;
          font-size: 15px;
        }

        .hero {
          padding: 44px 0 30px;
        }

        .hero-box {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 28px;
          align-items: center;
          border-radius: 34px;
          padding: 40px;
          background: linear-gradient(135deg, #fff9f0 0%, #fff2e0 45%, #ffe5c4 100%);
          border: 1px solid #f1ddc4;
          box-shadow: 0 24px 55px rgba(164,112,42,0.12);
        }

        .eyebrow {
          display: inline-block;
          background: #fff;
          color: #9b6918;
          font-size: 12px;
          letter-spacing: 1.5px;
          font-weight: 800;
          text-transform: uppercase;
          padding: 10px 14px;
          border-radius: 999px;
          box-shadow: 0 8px 16px rgba(0,0,0,0.05);
        }

        .hero h1 {
          margin: 18px 0 14px 0;
          font-size: 54px;
          line-height: 1.03;
          color: #21451f;
        }

        .hero-copy {
          margin: 0;
          max-width: 620px;
          font-size: 18px;
          line-height: 1.75;
          color: #5f5f5f;
        }

        .hero-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 24px;
        }

        .btn {
          display: inline-block;
          padding: 14px 22px;
          border-radius: 16px;
          font-weight: 700;
          text-align: center;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .btn:hover { transform: translateY(-2px); }

        .btn-primary {
          background: #21451f;
          color: #fff;
          box-shadow: 0 12px 24px rgba(33,69,31,0.18);
        }

        .btn-light {
          background: #fff;
          color: #21451f;
          border: 1px solid #e7d7c1;
        }

        .btn-gold {
          background: linear-gradient(135deg, #d69a39 0%, #b6761e 100%);
          color: #fff;
          box-shadow: 0 14px 28px rgba(197,138,47,0.22);
        }

        .btn-white {
          background: #fff;
          color: #21451f;
        }

        .hero-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }

        .badge {
          padding: 8px 14px;
          background: #f1efe9;
          border-radius: 999px;
          font-size: 14px;
          color: #333;
          border: 1px solid #e5dccf;
        }

        .hero-images {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .hero-big,
        .hero-small {
          width: 100%;
          border-radius: 26px;
          background: #fff;
          box-shadow: 0 14px 26px rgba(0,0,0,0.08);
          display: block;
        }

        .hero-big {
          height: 430px;
          grid-row: span 2;
          object-fit: contain;
          object-position: center;
          padding: 8px;
          background: linear-gradient(180deg, #f8efe3 0%, #f4efe8 100%);
        }

        .hero-small {
          height: 208px;
          object-fit: contain;
          object-position: center;
          padding: 6px;
          background: linear-gradient(180deg, #f8efe3 0%, #f4efe8 100%);
        }

        .section {
          padding: 36px 0;
        }

        .section-eyebrow {
          color: #9b6918;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .section h2 {
          margin: 12px 0 10px 0;
          color: #21451f;
          font-size: 42px;
          line-height: 1.06;
        }

        .section-copy {
          max-width: 760px;
          color: #666;
          line-height: 1.75;
          font-size: 16px;
          margin: 0;
        }

        .mini-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
          margin-bottom: 16px;
        }

        .card {
          background: rgba(255,255,255,0.9);
          border: 1px solid #efe2d2;
          box-shadow: 0 10px 24px rgba(0,0,0,0.06);
          backdrop-filter: blur(8px);
        }

        .mini-card {
          border-radius: 24px;
          padding: 20px;
        }

        .mini-card h4 {
          margin: 0 0 8px 0;
          color: #21451f;
          font-size: 18px;
        }

        .mini-card p {
          margin: 0;
          color: #666;
          line-height: 1.6;
          font-size: 14px;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 22px;
          margin-top: 24px;
        }

        .product-card {
          border-radius: 28px;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 34px rgba(0,0,0,0.09);
        }

        .product-image {
          width: 100%;
          height: 380px;
          object-fit: contain;
          display: block;
          background: linear-gradient(180deg, #f8efe3 0%, #f4efe8 100%);
          padding: 20px;
        }

        .product-body { padding: 22px; }

        .product-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
        }

        .product-head h3 {
          margin: 0;
          font-size: 24px;
          color: #21451f;
        }

        .price-pill {
          background: #21451f;
          color: #fff;
          padding: 8px 14px;
          border-radius: 999px;
          font-weight: 800;
          font-size: 14px;
          white-space: nowrap;
        }

        .tagline {
          color: #a06a1b;
          font-weight: 800;
          margin-top: 14px;
          font-size: 15px;
        }

        .muted,
        .soft-box p,
        .daily-body p,
        .info-card p,
        .story-panel p,
        .about-panel p,
        .contact-copy p {
          color: #666;
          line-height: 1.72;
        }

        .soft-box {
          margin-top: 14px;
          padding: 14px 16px;
          border-radius: 18px;
          background: linear-gradient(135deg, #fff8ef 0%, #fff3e1 100%);
          border: 1px solid #f0dfc7;
        }

        .soft-box strong {
          color: #21451f;
          display: block;
          margin-bottom: 6px;
          font-size: 14px;
        }

        .tag-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 14px;
        }

        .chip {
          background: #fff6ea;
          border: 1px solid #f0debf;
          color: #665;
          font-size: 13px;
          padding: 8px 12px;
          border-radius: 999px;
        }

        .ingredients {
          margin-top: 14px;
          border-radius: 14px;
          background: #faf6ef;
          border: 1px solid #eee0c9;
          padding: 12px 14px;
        }

        .ingredients summary {
          cursor: pointer;
          font-weight: 700;
          color: #21451f;
        }

        .ingredients ul,
        .soft-box ul {
          margin: 10px 0 0 0;
          padding-left: 18px;
          color: #666;
          font-size: 14px;
          line-height: 1.7;
        }

        .action-row {
          display: flex;
          gap: 10px;
          margin-top: 18px;
          flex-wrap: wrap;
        }

        .action-row a {
          flex: 1;
        }

        .bundle-wrap {
          border-radius: 32px;
          padding: 32px;
          color: #fff;
          background: linear-gradient(135deg, #1f5420 0%, #356f2f 100%);
          box-shadow: 0 18px 40px rgba(33,69,31,0.22);
        }

        .bundle-eyebrow {
          color: #f3d28a;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .bundle-wrap h2 {
          margin: 12px 0 10px 0;
          font-size: 42px;
          color: #000 !important;
        }

        .top-copy {
          margin: 0 0 22px 0;
          max-width: 760px;
          line-height: 1.7;
          color: #edf3eb;
        }

        .bundle-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .bundle-card {
          border-radius: 26px;
          padding: 22px;
          background: rgba(255,255,255,0.11);
          border: 1px solid rgba(255,255,255,0.14);
        }

        .bundle-badge {
          display: inline-block;
          background: rgba(255,255,255,0.12);
          color: #ffe6ad;
          font-weight: 800;
          font-size: 12px;
          border-radius: 999px;
          padding: 8px 12px;
        }

        .bundle-card h3 {
          margin: 16px 0 6px 0;
          font-size: 28px;
        }

        .bundle-price {
          color: #f3d28a;
          font-weight: 900;
          font-size: 34px;
        }

        .bundle-desc {
          margin-top: 10px;
          font-weight: 700;
          line-height: 1.5;
          font-size: 16px;
        }

        .bundle-note {
          margin-top: 10px;
          color: #e6ece4;
          line-height: 1.6;
          font-size: 14px;
        }

        .daily-header {
          max-width: 760px;
          margin-bottom: 22px;
        }

        .daily-story-list {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .daily-card {
          border-radius: 28px;
          overflow: hidden;
        }

        .daily-image {
          width: 100%;
          height: 220px;
          display: block;
          object-fit: cover;
          background: #f4efe8;
        }

        .daily-body {
          padding: 20px;
        }

        .daily-body h3 {
          margin: 0 0 8px 0;
          font-size: 19px;
          line-height: 1.45;
          color: #21451f;
        }

        .story-layout,
        .about-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }

        .story-panel,
        .about-panel {
          border-radius: 30px;
          padding: 28px;
        }

        .story-panel h3,
        .about-panel h3 {
          margin: 0 0 12px 0;
          font-size: 28px;
          color: #21451f;
        }

        .about-values {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 18px;
        }

        .about-value {
          background: #fff6ea;
          border: 1px solid #f0debf;
          color: #21451f;
          border-radius: 18px;
          padding: 14px;
          font-weight: 700;
        }

        .benefit-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .info-card {
          border-radius: 26px;
          padding: 24px;
        }

        .info-emoji {
          width: 44px;
          height: 44px;
          border-radius: 999px;
          background: linear-gradient(135deg, #fff0d8 0%, #ffe8bc 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
          font-size: 22px;
        }

        .info-card h3 {
          margin: 0 0 10px 0;
          font-size: 22px;
          color: #21451f;
        }

        .contact-wrap {
          background: linear-gradient(135deg, #fff8ef 0%, #ffeccf 100%);
          border-radius: 32px;
          padding: 34px;
          border: 1px solid #f0dfc8;
          box-shadow: 0 18px 40px rgba(197,138,47,0.12);
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 32px;
          align-items: start;
          margin-top: 14px;
        }

        .contact-copy h2 {
          margin: 10px 0;
          font-size: 42px;
          color: #21451f;
        }

        .contact-note {
          margin-top: 18px !important;
          font-size: 14px;
          color: #7a6c58 !important;
        }

        .contact-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }

        @media (max-width: 1024px) {
          .hero-box,
          .story-layout,
          .about-layout,
          .contact-layout {
            grid-template-columns: 1fr;
          }

          .mini-grid,
          .bundle-grid,
          .benefit-grid,
          .daily-story-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .container { padding: 0 16px; }

          .header-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .hero-box,
          .story-panel,
          .about-panel,
          .bundle-wrap,
          .contact-wrap {
            padding: 24px;
          }

          .hero h1,
          .section h2,
          .bundle-wrap h2,
          .contact-copy h2 {
            font-size: 34px;
          }

          .hero-images,
          .mini-grid,
          .products-grid,
          .bundle-grid,
          .daily-story-list,
          .benefit-grid,
          .about-values {
            grid-template-columns: 1fr;
          }

          .hero-big,
          .hero-small {
            height: 220px;
            grid-row: auto;
            object-fit: contain;
            padding: 6px;
          }

          .action-row {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="page">
        <header className="header">
          <div className="container header-inner">
            <div className="brand">
              <div className="logo-box">
                <img src="/logo.png" alt="Gut Lab by Xaels logo" />
              </div>
              <div>
                <div className="brand-title">Gut Lab by Xaels</div>
                <div className="brand-sub">Joyful everyday nourishment</div>
              </div>
            </div>

            <nav className="nav">
              <a href="#products">Products</a>
              <a href="#bundles">Bundles</a>
              <a href="#daily">Daily Use</a>
              <a href="#brand-story">Story</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="container">
              <div className="hero-box">
                <div className="hero-content">
                  <div className="eyebrow">Signature Collection</div>
                  <h1>A better everyday alternative to ultra-processed food.</h1>
                  <p className="hero-copy">
                    Built on the science of the gut–brain axis and designed for family morning routines.
                    Simple foods that fit into breakfast, snacks, and daily life — without compromising on what matters
                  </p>

                  <div className="hero-buttons">
                    <a
                      href={ORDER_CALCULATOR_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      Order with Calculator
                    </a>
                    <a href="#bundles" className="btn btn-light">
                      View combo offers
                    </a>
                  </div>
                </div>

                <div className="hero-images">
                  <img className="hero-big" src="/healthy_spread.jpeg" alt="Healthy Spread" />
                  <img className="hero-small" src="/coffee_spread.jpeg" alt="Coffee Reimagined" />
                  <img className="hero-small" src="/cocoa_mix.jpeg" alt="Cocoa Nut Mix" />
                </div>
              </div>
            </div>
          </section>

          <section id="products" className="section">
            <div className="container">
              <div className="section-eyebrow">Our Products</div>
              <h2>Simple products that fit naturally into daily life</h2>
              <p className="section-copy">
                A clean, easy-to-shop range with clear pricing, simple benefits, and everyday use cases.
              </p>

              <div className="products-grid">
                {products.map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
              </div>
            </div>
          </section>

          <section id="bundles" className="section">
            <div className="container">
              <div className="bundle-wrap">
                <div className="bundle-eyebrow">Combo Offers</div>
                <h2>Easy bundle choices for higher orders</h2>
                <p className="top-copy">
                  Bundle offers make it easier for customers to try more, gift more, and buy again.
                </p>

                <div className="bundle-grid">
                  {bundles.map((bundle) => (
                    <div key={bundle.title} className="bundle-card">
                      <div className="bundle-badge">{bundle.badge}</div>
                      <h3>{bundle.title}</h3>
                      <div className="bundle-price">{bundle.price}</div>
                      <div className="bundle-desc">{bundle.desc}</div>
                      <div className="bundle-note">{bundle.note}</div>
                      <a href={bundle.order} className="btn btn-white">
                        Order this combo
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="daily" className="section">
            <div className="container">
              <div className="daily-header">
                <div className="section-eyebrow">Daily Use</div>
                <h2>Simple ways to enjoy every day</h2>
                <p className="section-copy">
                  Designed to fit into real routines — breakfast, snacks, and daily comfort moments.
                </p>
              </div>

              <div className="daily-story-list">
                {dailyCards.map((item) => (
                  <DailyUseCard key={item.title} item={item} />
                ))}
              </div>
            </div>
          </section>

          <section id="brand-story" className="section">
            <div className="container">
              <div className="section-eyebrow">Brand Story</div>
              <h2>Science-led food, made for everyday family life</h2>

              <div className="story-layout" style={{ marginTop: 24 }}>
                <div className="card story-panel">
                  <h3>Why Gut Lab by Xaels exists</h3>
                  <p>
                    What we eat every day shapes how we feel, think, and function. 
                    Gut Lab by Xaels is built on the science of the gut–brain axis the understanding 
                    that everyday food choices directly influence our health, mood, and long-term well-being. 
                    We are not here to create niche health products. We are here to rethink everyday foods.
                  </p>
                  <p>
                    By designing familiar formats spreads, drinks, and simple staples with more thoughtful 
                    ingredients, we aim to offer a practical alternative that fits into real life, not just ideal 
                    scenarios. Because real change doesn’t come from occasional choices. It comes from what we eat every day.
                  </p>
                </div>

                <div className="card story-panel">
                  <h3>What makes the range special</h3>
                  <p>
                    We use ancient millets, naturally sweeten where possible with dates, and build
                    products around warmth, familiarity, and repeat use.
                  </p>
                  <p>
                    Our approach is simple: make food that families can trust, children can enjoy, and
                    parents can feel good about buying again.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="section">
            <div className="container">
              <div className="section-eyebrow">About Us</div>
              <h2>Built by science, made for kids and families</h2>

              <div className="about-layout" style={{ marginTop: 24 }}>
                <div className="card about-panel">
                  <h3>Who we are</h3>
                  <p>
                    Gut Lab by Xaels began from both science and personal experience. As scientists, we’ve 
                    spent years understanding the microbiome and the gut–brain axis how what we eat every day 
                    can quietly influence how we feel, think, and function. But it was only after the birth of 
                    our child that this knowledge became personal. We started paying closer attention to the small, 
                    everyday changes mood, energy, focus the subtle shifts between feeling calm, irritable, 
                    or simply not at our best. 
                  </p>
                  <p>
                    And we began to question the role of the foods we consume daily, especially the growing reliance 
                    on ultra-processed options. That’s where Gut Lab began. At Gut Lab by Xaels, we believe the 
                    best products are the ones people can use consistently simple to incorporate, enjoyable to eat, 
                    and thoughtfully made with long-term well-being in mind.
                  </p>
                </div>

                <div className="card about-panel">
                  <h3>What we value</h3>
                  <div className="about-values">
                    <div className="about-value">Thoughtful ingredients</div>
                    <div className="about-value">Everyday usability</div>
                    <div className="about-value">Family-friendly ideas</div>
                    <div className="about-value">Joyful product design</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="benefit-grid">
                {reasons.map((reason) => (
                  <div key={reason.title} className="card info-card">
                    <div className="info-emoji">{reason.icon}</div>
                    <h3>{reason.title}</h3>
                    <p>{reason.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="section" style={{ paddingBottom: 60 }}>
            <div className="container">
              <div className="contact-wrap">
                <div className="section-eyebrow">Contact</div>

                <div className="contact-layout">
                  <div className="contact-copy">
                    <h2>Let’s help you choose the right order</h2>
                    <p>
                      Whether you want to try a single product, build a bundle, or ask a question
                      before ordering, we’d love to hear from you.
                    </p>
                    <p className="contact-note">
                      For custom bundle requests or bulk gifting orders, message us directly on
                      WhatsApp.
                    </p>
                  </div>

                  <div className="contact-actions">
                    <a
                      href={ORDER_CALCULATOR_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      Order with Calculator
                    </a>

                    <a href={WHATSAPP_ORDER_URL} className="btn btn-light">
                      Order via WhatsApp
                    </a>

                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-light"
                    >
                      Visit Instagram
                    </a>

                    <a
                      href={TIKTOK_PROFILE_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-light"
                    >
                      Visit TikTok
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
