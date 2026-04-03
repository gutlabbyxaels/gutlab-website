import React from "react";

const products = [
  {
    name: "Healthy Spread",
    price: "SGD 10",
    size: "150 g",
    image: "/healthy_spread.jpeg",
    desc: "A scientist recipe for everyday nutrition.",
    details:
      "A better-for-you everyday spread for toast, breakfast bowls, pancakes, and snack time.",
    tags: ["No refined sugar", "Family-friendly", "Daily breakfast use"],
    order:
      "https://wa.me/6584067441?text=Hi%20Gut%20Lab%20by%20Xaels%2C%20I%20would%20like%20to%20order%20Healthy%20Spread.",
  },
  {
    name: "Coffee Reimagined",
    price: "SGD 10",
    size: "150 g",
    image: "/coffee_spread.jpeg",
    desc: "No sugar. No preservatives. Just smart energy.",
    details:
      "A rich coffee-inspired spread designed for bread, crackers, waffles, and dessert moments.",
    tags: ["Coffee-forward", "Smart energy", "Snack & dessert use"],
    order:
      "https://wa.me/6584067441?text=Hi%20Gut%20Lab%20by%20Xaels%2C%20I%20would%20like%20to%20order%20Coffee%20Reimagined.",
  },
  {
    name: "Cocoa Nut Mix",
    price: "SGD 18",
    size: "250 g",
    image: "/cocoa_mix.jpeg",
    desc: "Premium cocoa drink for everyday energy.",
    details:
      "A rich cocoa blend designed for warm drinks, smoothies, oats, and a comforting daily ritual.",
    tags: ["Premium blend", "No refined sugar", "Morning ritual"],
    order:
      "https://wa.me/6584067441?text=Hi%20Gut%20Lab%20by%20Xaels%2C%20I%20would%20like%20to%20order%20Cocoa%20Nut%20Mix.",
  },
];

const bundles = [
  {
    title: "Starter Trio",
    price: "SGD 28",
    badge: "Best Value",
    desc: "Any 3 products for SGD 28",
    note: "Perfect first purchase to try the Gut Lab range.",
    order:
      "https://wa.me/6584067441?text=Hi%20Gut%20Lab%20by%20Xaels%2C%20I%20would%20like%20to%20order%20the%20Starter%20Trio%20bundle%20for%20SGD%2028.",
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
    price: "SGD 24",
    badge: "Premium Pick",
    desc: "Cocoa Nut Mix + Healthy Spread",
    note: "A rich breakfast and snack pairing with premium cocoa.",
    order:
      "https://wa.me/6584067441?text=Hi%20Gut%20Lab%20by%20Xaels%2C%20I%20would%20like%20to%20order%20the%20Cocoa%20%2B%20Spread%20Set%20for%20SGD%2024.",
  },
];

const benefits = [
  {
    title: "Made for everyday use",
    text: "Designed for breakfast, snack time, gifting, and repeat home use.",
  },
  {
    title: "Comfort food, upgraded",
    text: "Familiar chocolate, coffee, and cocoa flavors with better positioning.",
  },
  {
    title: "Social-commerce ready",
    text: "Easy to sell through TikTok Shop, WhatsApp, and Instagram.",
  },
];

const waysToUse = [
  "Spread on toast before work or school",
  "Pair with crackers or fruit for quick snacking",
  "Add to pancakes, waffles, or oats",
  "Enjoy Cocoa Nut Mix as a warm evening ritual",
  "Gift as a cheerful small-batch bundle",
  "Keep as a pantry staple for repeat buying",
];

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(180deg, #fff6ea 0%, #fffaf4 35%, #f7efe5 100%)",
    color: "#1f2f1c",
    minHeight: "100vh",
  },
  container: {
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "0 24px",
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: "rgba(255,255,255,0.88)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid #eee2d0",
  },
  hero: {
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: "28px",
    alignItems: "center",
    background: "linear-gradient(135deg, #fff8ef 0%, #fff1de 45%, #ffe6c9 100%)",
    border: "1px solid #f0dfc8",
    borderRadius: "32px",
    padding: "40px",
    boxShadow: "0 20px 50px rgba(164,112,42,0.10)",
  },
  card: {
    background: "#ffffff",
    borderRadius: "26px",
    border: "1px solid #efe3d4",
    boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
    overflow: "hidden",
  },
  buttonPrimary: {
    display: "inline-block",
    background: "#21451f",
    color: "#fff",
    textDecoration: "none",
    padding: "14px 22px",
    borderRadius: "16px",
    fontWeight: 700,
    border: "none",
    cursor: "pointer",
  },
  buttonGold: {
    display: "inline-block",
    background: "#c58a2f",
    color: "#fff",
    textDecoration: "none",
    padding: "14px 22px",
    borderRadius: "16px",
    fontWeight: 700,
    border: "none",
    cursor: "pointer",
  },
  buttonLight: {
    display: "inline-block",
    background: "#fff",
    color: "#21451f",
    textDecoration: "none",
    padding: "14px 22px",
    borderRadius: "16px",
    fontWeight: 700,
    border: "1px solid #e7d7c1",
    cursor: "pointer",
  },
};

export default function App() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div
          style={{
            ...styles.container,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 16,
            paddingBottom: 16,
            gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 18,
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                overflow: "hidden",
              }}
            >
              <img
                src="/logo.png"
                alt="Gut Lab by Xaels logo"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            <div>
              <div style={{ fontSize: 28, fontWeight: 800, lineHeight: 1.1 }}>
                Gut Lab by Xaels
              </div>
              <div style={{ fontSize: 13, color: "#666" }}>
                Joyful everyday nourishment
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            <a href="#products" style={{ color: "#21451f", textDecoration: "none", fontWeight: 600 }}>
              Products
            </a>
            <a href="#bundles" style={{ color: "#21451f", textDecoration: "none", fontWeight: 600 }}>
              Bundles
            </a>
            <a href="#contact" style={{ color: "#21451f", textDecoration: "none", fontWeight: 600 }}>
              Order
            </a>
          </div>
        </div>
      </header>

      <main>
        <section style={{ ...styles.container, paddingTop: 44, paddingBottom: 30 }}>
          <div style={styles.hero}>
            <div>
              <div
                style={{
                  display: "inline-block",
                  background: "#fff",
                  color: "#9b6918",
                  fontSize: 12,
                  letterSpacing: 1.4,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  padding: "10px 14px",
                  borderRadius: 999,
                  boxShadow: "0 6px 14px rgba(0,0,0,0.05)",
                }}
              >
                Signature Collection
              </div>

              <h1
                style={{
                  fontSize: 52,
                  lineHeight: 1.05,
                  margin: "18px 0 14px 0",
                  color: "#21451f",
                }}
              >
                Cheerful, giftable foods made for everyday routines.
              </h1>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.7,
                  color: "#5f5f5f",
                  maxWidth: 620,
                  margin: 0,
                }}
              >
                Explore Healthy Spread, Coffee Reimagined, and Cocoa Nut Mix — a
                playful, premium collection for breakfast, snack time, and warm
                daily rituals.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
                <a href="#products" style={styles.buttonPrimary}>
                  Shop products
                </a>
                <a href="#bundles" style={styles.buttonLight}>
                  View combo offers
                </a>
              </div>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 22 }}>
                {["No refined sugar", "Gift-worthy", "Small-batch feel", "Repeat-buy friendly"].map((item) => (
                  <span
                    key={item}
                    style={{
                      background: "rgba(255,255,255,0.8)",
                      border: "1px solid #efdfc7",
                      padding: "10px 14px",
                      borderRadius: 999,
                      fontSize: 14,
                      color: "#555",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
              }}
            >
              <img
                src="/healthy_spread.jpeg"
                alt="Healthy Spread"
                style={{
                  width: "100%",
                  height: 430,
                  objectFit: "cover",
                  borderRadius: 26,
                  gridRow: "span 2",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
                  background: "#fff",
                }}
              />
              <img
                src="/coffee_spread.jpeg"
                alt="Coffee Reimagined"
                style={{
                  width: "100%",
                  height: 208,
                  objectFit: "cover",
                  borderRadius: 26,
                  boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
                  background: "#fff",
                }}
              />
              <img
                src="/cocoa_mix.jpeg"
                alt="Cocoa Nut Mix"
                style={{
                  width: "100%",
                  height: 208,
                  objectFit: "cover",
                  borderRadius: 26,
                  boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
                  background: "#fff",
                }}
              />
            </div>
          </div>
        </section>

        <section style={{ ...styles.container, paddingBottom: 20 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 16,
            }}
          >
            {[
              ["Breakfast hero", "Easy on toast, oats, and pancakes"],
              ["Giftable", "Playful, premium-looking products"],
              ["Family-friendly", "Comforting everyday flavor cues"],
              ["Social-commerce ready", "Built for bundles and repeat buys"],
            ].map(([title, text]) => (
              <div key={title} style={{ ...styles.card, padding: 20 }}>
                <div style={{ fontWeight: 800, color: "#21451f", marginBottom: 8 }}>{title}</div>
                <div style={{ fontSize: 14, color: "#666", lineHeight: 1.6 }}>{text}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="products" style={{ ...styles.container, paddingTop: 36, paddingBottom: 36 }}>
          <div style={{ marginBottom: 24 }}>
            <div
              style={{
                color: "#9b6918",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: 1.4,
                textTransform: "uppercase",
              }}
            >
              Our products
            </div>
            <h2 style={{ fontSize: 40, margin: "10px 0 8px 0", color: "#21451f" }}>
              Simple, clean, and ready to sell
            </h2>
            <p style={{ color: "#666", fontSize: 16, lineHeight: 1.7, maxWidth: 760 }}>
              A lightweight storefront with clear pricing, product benefits, and direct order flow.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 22,
            }}
          >
            {products.map((p) => (
              <div key={p.name} style={styles.card}>
                <img
                  src={p.image}
                  alt={p.name}
                  style={{
                    width: "100%",
                    height: 270,
                    objectFit: "cover",
                    display: "block",
                    background: "#f4efe8",
                  }}
                />

                <div style={{ padding: 22 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 12,
                    }}
                  >
                    <div>
                      <h3 style={{ margin: 0, fontSize: 22, color: "#21451f" }}>{p.name}</h3>
                      <div style={{ marginTop: 6, color: "#777", fontSize: 14 }}>{p.size}</div>
                    </div>

                    <div
                      style={{
                        background: "#21451f",
                        color: "#fff",
                        padding: "8px 14px",
                        borderRadius: 999,
                        fontWeight: 800,
                        fontSize: 14,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {p.price}
                    </div>
                  </div>

                  <div style={{ color: "#a06a1b", fontWeight: 800, marginTop: 14, fontSize: 15 }}>
                    {p.desc}
                  </div>

                  <p style={{ color: "#666", lineHeight: 1.7, fontSize: 15, marginTop: 12 }}>
                    {p.details}
                  </p>

                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14 }}>
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          background: "#fff6ea",
                          border: "1px solid #f0debf",
                          color: "#665",
                          fontSize: 13,
                          padding: "8px 12px",
                          borderRadius: 999,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a href={p.order} style={{ ...styles.buttonGold, width: "100%", textAlign: "center", marginTop: 18 }}>
                    Order now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="bundles" style={{ ...styles.container, paddingBottom: 36 }}>
          <div
            style={{
              background: "linear-gradient(135deg, #21451f 0%, #355e31 100%)",
              borderRadius: 30,
              padding: 32,
              color: "#fff",
              boxShadow: "0 18px 40px rgba(33,69,31,0.22)",
            }}
          >
            <div style={{ marginBottom: 22 }}>
              <div
                style={{
                  color: "#f3d28a",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                }}
              >
                Combo offers
              </div>
              <h2 style={{ fontSize: 38, margin: "10px 0 10px 0" }}>
                Easy bundle choices for higher orders
              </h2>
              <p style={{ color: "#edf3eb", maxWidth: 740, lineHeight: 1.7 }}>
                Bundle offers make it easier for customers to try more, gift more, and buy again.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 18,
              }}
            >
              {bundles.map((b) => (
                <div
                  key={b.title}
                  style={{
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 24,
                    padding: 22,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      background: "rgba(255,255,255,0.12)",
                      color: "#ffe6ad",
                      fontWeight: 800,
                      fontSize: 12,
                      borderRadius: 999,
                      padding: "8px 12px",
                    }}
                  >
                    {b.badge}
                  </div>

                  <h3 style={{ margin: "16px 0 6px 0", fontSize: 24 }}>{b.title}</h3>
                  <div style={{ color: "#f3d28a", fontWeight: 900, fontSize: 30 }}>{b.price}</div>
                  <div style={{ marginTop: 10, fontWeight: 700, lineHeight: 1.5 }}>{b.desc}</div>
                  <div style={{ marginTop: 10, color: "#e6ece4", lineHeight: 1.6, fontSize: 14 }}>
                    {b.note}
                  </div>

                  <a
                    href={b.order}
                    style={{
                      ...styles.buttonLight,
                      width: "100%",
                      textAlign: "center",
                      marginTop: 18,
                      border: "none",
                    }}
                  >
                    Order this combo
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ ...styles.container, paddingBottom: 36 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "0.95fr 1.05fr",
              gap: 24,
              alignItems: "start",
            }}
          >
            <div>
              <div
                style={{
                  color: "#9b6918",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                }}
              >
                Daily use
              </div>
              <h2 style={{ fontSize: 38, margin: "10px 0 10px 0", color: "#21451f" }}>
                Why people can buy again
              </h2>
              <p style={{ color: "#666", fontSize: 16, lineHeight: 1.7 }}>
                A good selling website should show how the products fit real life, not just what they are.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: 16,
              }}
            >
              {waysToUse.map((item) => (
                <div key={item} style={{ ...styles.card, padding: 18 }}>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 34,
                      height: 34,
                      borderRadius: 999,
                      background: "#fff0d8",
                      marginBottom: 10,
                    }}
                  >
                    🛍️
                  </div>
                  <div style={{ fontSize: 15, color: "#444", lineHeight: 1.6 }}>{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ ...styles.container, paddingBottom: 36 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 18,
            }}
          >
            {benefits.map((b) => (
              <div key={b.title} style={{ ...styles.card, padding: 24 }}>
                <h3 style={{ margin: "0 0 10px 0", fontSize: 22, color: "#21451f" }}>{b.title}</h3>
                <p style={{ margin: 0, color: "#666", lineHeight: 1.7 }}>{b.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" style={{ ...styles.container, paddingBottom: 60 }}>
          <div
            style={{
              background: "linear-gradient(135deg, #fff7eb 0%, #ffeccf 100%)",
              borderRadius: 30,
              padding: 34,
              border: "1px solid #f0dfc8",
              boxShadow: "0 18px 40px rgba(197,138,47,0.12)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 24,
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    color: "#9b6918",
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: 1.4,
                    textTransform: "uppercase",
                  }}
                >
                  Ready to order?
                </div>
                <h2 style={{ fontSize: 40, margin: "10px 0 10px 0", color: "#21451f" }}>
                  Message us directly and start selling from this page.
                </h2>
                <p style={{ color: "#666", lineHeight: 1.7, maxWidth: 780 }}>
                  Use WhatsApp for direct orders, Instagram for discovery, and TikTok Shop for social commerce.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 240 }}>
                <a
                  href="https://wa.me/6584067441?text=Hi%20Gut%20Lab%20by%20Xaels%2C%20I%20would%20like%20to%20place%20an%20order."
                  style={{ ...styles.buttonPrimary, textAlign: "center" }}
                >
                  Order via WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/xaelsbakes?igsh=MTBicDlwZ3piMXdyNg=="
                  target="_blank"
                  rel="noreferrer"
                  style={{ ...styles.buttonLight, textAlign: "center" }}
                >
                  Visit Instagram
                </a>
                <a
                  href="https://vt.tiktok.com/ZSH2SPbE4/?page=TikTokShop"
                  target="_blank"
                  rel="noreferrer"
                  style={{ ...styles.buttonLight, textAlign: "center" }}
                >
                  Visit TikTok Shop
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
