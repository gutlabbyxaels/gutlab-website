import React from "react";

const products = [
  {
    name: "Healthy Spread",
    price: "SGD 10",
    image: "/healthy_spread.jpeg",
    desc: "A scientist recipe for everyday nutrition.",
  },
  {
    name: "Coffee Reimagined",
    price: "SGD 10",
    image: "/coffee_spread.jpeg",
    desc: "No sugar. No preservatives. Just smart energy.",
  },
  {
    name: "Cocoa Nut Mix",
    price: "SGD 18",
    image: "/cocoa_mix.jpeg",
    desc: "Premium cocoa drink for everyday energy.",
  },
];

export default function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: 30, background: "#f8f5ef" }}>
      
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <img src="/logo.png" width="80" />
        <h1>Gut Lab by Xaels</h1>
        <p>Smart food. Real ingredients. Everyday nutrition.</p>
      </div>

      {/* PRODUCTS */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: 20
      }}>
        {products.map((p, i) => (
          <div key={i} style={{
            background: "white",
            borderRadius: 20,
            padding: 20,
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
          }}>
            <img src={p.image} style={{ width: "100%", borderRadius: 12 }} />
            <h2>{p.name}</h2>
            <p style={{ color: "#666" }}>{p.desc}</p>
            <h3>{p.price}</h3>
          </div>
        ))}
      </div>

      {/* COMBO OFFER */}
      <div style={{
        marginTop: 50,
        padding: 30,
        background: "#fff3d6",
        borderRadius: 20,
        textAlign: "center"
      }}>
        <h2>🔥 Bundle Offer</h2>
        <p>Any 3 products for SGD 28</p>
      </div>

      {/* CTA */}
      <div style={{ marginTop: 40, textAlign: "center" }}>
        <a href="https://vt.tiktok.com/ZSH2SPbE4/" target="_blank">
          <button style={{
            padding: "15px 30px",
            fontSize: 18,
            borderRadius: 12,
            background: "#2e7d32",
            color: "white",
            border: "none"
          }}>
            Shop on TikTok
          </button>
        </a>
      </div>

    </div>
  );
}
