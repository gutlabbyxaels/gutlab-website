export default function App() {
  const products = [
    {
      name: "Healthy Spread",
      price: "SGD 10",
      size: "150 g",
      tagline: "A scientist recipe for everyday nutrition.",
      description:
        "A better-for-you chocolate-style spread made for breakfast, lunchboxes, and daily snacking.",
      image: "/healthy_spread.jpeg",
      uses: ["Spread on toast", "Dip fruits", "Add to oats or pancakes"],
      whatsapp:
        "https://wa.me/6584067441?text=Hi%20Gut%20Lab%20by%20Xaels%2C%20I%20would%20like%20to%20order%20Healthy%20Spread.",
    },
    {
      name: "Coffee Reimagined",
      price: "SGD 10",
      size: "150 g",
      tagline: "No sugar. No preservatives. Just smart energy.",
      description:
        "A coffee-inspired spread for bold flavor lovers. Great with bread, crackers, waffles, and desserts.",
      image: "/coffee_spread.jpeg",
      uses: ["Spread on toast", "Pair with crackers", "Use in desserts"],
      whatsapp:
        "https://wa.me/6584067441?text=Hi%20Gut%20Lab%20by%20Xaels%2C%20I%20would%20like%20to%20order%20Coffee%20Reimagined.",
    },
    {
      name: "Cocoa Nut Mix",
      price: "SGD 12",
      size: "250 g",
      tagline: "Healthy drink powder for better mornings.",
      description:
        "A comforting cocoa drink powder for daily rituals. Enjoy it hot, cold, or blended into smoothies and oats.",
      image: "/cocoa_mix.jpeg",
      uses: ["Hot cocoa drink", "Blend into smoothies", "Stir into oats"],
      whatsapp:
        "https://wa.me/6584067441?text=Hi%20Gut%20Lab%20by%20Xaels%2C%20I%20would%20like%20to%20order%20Cocoa%20Nut%20Mix.",
    },
  ];

  const section = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "24px",
  };

  const card = {
    background: "#ffffff",
    borderRadius: "24px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    overflow: "hidden",
  };

  const buttonPrimary = {
    display: "inline-block",
    background: "#21451f",
    color: "#fff",
    textDecoration: "none",
    padding: "14px 20px",
    borderRadius: "16px",
    fontWeight: 700,
  };

  const buttonSecondary = {
    display: "inline-block",
    background: "#c58a2f",
    color: "#fff",
    textDecoration: "none",
    padding: "12px 18px",
    borderRadius: "14px",
    fontWeight: 700,
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(180deg, #fff6ea 0%, #fffaf4 35%, #f7efe5 100%)",
        color: "#222",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          background: "rgba(255,255,255,0.9)",
          borderBottom: "1px solid #eee",
          position: "sticky",
          top: 0,
          zIndex: 10,
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            ...section,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img
              src="/logo.png"
              alt="Gut Lab by Xaels logo"
              style={{
                width: "56px",
                height: "56px",
                objectFit: "contain",
                borderRadius: "16px",
                background: "#fff",
                padding: "6px",
                boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
              }}
            />
            <div>
              <div style={{ fontWeight: 800, fontSize: "20px", color: "#21451f" }}>
                Gut Lab by Xaels
              </div>
              <div style={{ fontSize: "12px", color: "#666" }}>
                Joyful everyday nourishment
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="#products" style={{ color: "#21451f", textDecoration: "none", fontWeight: 600 }}>
              Products
            </a>
            <a href="#contact" style={{ color: "#21451f", textDecoration: "none", fontWeight: 600 }}>
              Order
            </a>
          </div>
        </div>
      </header>

      <section style={section}>
        <div
          style={{
            ...card,
            padding: "32px",
            background: "linear-gradient(135deg, #fff8ef 0%, #fff1de 45%, #ffe6c9 100%)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "28px",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-block",
                  background: "#fff",
                  color: "#9b6918",
                  padding: "8px 14px",
                  borderRadius: "999px",
                  fontSize: "12px",
                  fontWeight: 700,
                  marginBottom: "16px",
                }}
              >
                ✨ Selling Collection
              </div>

              <h1
                style={{
                  fontSize: "48px",
                  lineHeight: 1.1,
                  margin: "0 0 16px 0",
                  color: "#21451f",
                }}
              >
                Tasty, cheerful, family-friendly foods made to brighten everyday routines.
              </h1>

              <p style={{ fontSize: "18px", lineHeight: 1.6, color: "#555", maxWidth: "600px" }}>
                Gut Lab by Xaels brings playful, premium, story-rich packaging together with products
                people can enjoy every day — from breakfast toast to warm cocoa moments.
              </p>

              <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a href="#products" style={buttonPrimary}>
                  Shop the range
                </a>
                <a
                  href="https://wa.me/6584067441?text=Hi%20Gut%20Lab%20by%20Xaels%2C%20I%20would%20like%20to%20place%20an%20order."
                  style={{
                    ...buttonSecondary,
                    background: "#fff",
                    color: "#21451f",
                    border: "1px solid #ddd",
                  }}
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>

            <div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <img
                  src="/healthy_spread.jpeg"
                  alt="Healthy Spread"
                  style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "24px", gridRow: "span 2" }}
                />
                <img
                  src="/coffee_spread.jpeg"
                  alt="Coffee Reimagined"
                  style={{ width: "100%", height: "204px", objectFit: "cover", borderRadius: "24px" }}
                />
                <img
                  src="/cocoa_mix.jpeg"
                  alt="Cocoa Nut Mix"
                  style={{ width: "100%", height: "204px", objectFit: "cover", borderRadius: "24px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" style={section}>
        <div style={{ marginBottom: "24px" }}>
          <div style={{ color: "#9b6918", fontWeight: 700, fontSize: "12px", letterSpacing: "1px" }}>
            SHOP PRODUCTS
          </div>
          <h2 style={{ fontSize: "36px", margin: "8px 0", color: "#21451f" }}>
            Our first key products
          </h2>
          <p style={{ color: "#666", fontSize: "16px" }}>
            Easy to understand, easy to use, and easy to reorder.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {products.map((product) => (
            <div key={product.name} style={card}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: "280px", objectFit: "cover" }}
              />

              <div style={{ padding: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "start" }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: "24px", color: "#21451f" }}>{product.name}</h3>
                    <div style={{ fontSize: "13px", color: "#777", marginTop: "4px" }}>{product.size}</div>
                  </div>
                  <div
                    style={{
                      background: "#21451f",
                      color: "#fff",
                      padding: "8px 14px",
                      borderRadius: "999px",
                      fontWeight: 700,
                      fontSize: "14px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {product.price}
                  </div>
                </div>

                <div style={{ color: "#9b6918", fontWeight: 700, marginTop: "12px", fontSize: "14px" }}>
                  {product.tagline}
                </div>

                <p style={{ color: "#555", lineHeight: 1.6, fontSize: "15px" }}>{product.description}</p>

                <div style={{ marginTop: "14px" }}>
                  <div style={{ fontWeight: 700, marginBottom: "8px", color: "#21451f" }}>How to enjoy</div>
                  <ul style={{ margin: 0, paddingLeft: "18px", color: "#555", lineHeight: 1.8 }}>
                    {product.uses.map((use) => (
                      <li key={use}>{use}</li>
                    ))}
                  </ul>
                </div>

                <a href={product.whatsapp} style={{ ...buttonSecondary, width: "100%", textAlign: "center", marginTop: "18px" }}>
                  {product.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={section}>
        <div
          style={{
            ...card,
            padding: "32px",
            background: "linear-gradient(135deg, #21451f 0%, #315d2f 100%)",
            color: "#fff",
          }}
        >
          <div style={{ color: "#f3d28a", fontWeight: 700, fontSize: "12px", letterSpacing: "1px" }}>
            WHY BUY AGAIN
          </div>
          <h2 style={{ fontSize: "34px", margin: "10px 0 12px 0" }}>
            Built for everyday use, not one-time curiosity
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "18px", marginTop: "20px" }}>
            {reasons.map((reason) => (
              <div
                key={reason.title}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: "20px",
                  padding: "20px",
                }}
              >
                <div style={{ fontWeight: 800, marginBottom: "10px" }}>{reason.title}</div>
                <div style={{ lineHeight: 1.7, color: "#f0f0f0" }}>{reason.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={section}>
        <div
          style={{
            ...card,
            padding: "32px",
            background: "linear-gradient(135deg, #fff7eb 0%, #ffeccf 100%)",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "20px", alignItems: "center" }}>
            <div>
              <div style={{ color: "#9b6918", fontWeight: 700, fontSize: "12px", letterSpacing: "1px" }}>
                READY TO ORDER?
              </div>
              <h2 style={{ fontSize: "34px", margin: "10px 0", color: "#21451f" }}>
                Message us directly and place your order today
              </h2>
              <p style={{ color: "#666", lineHeight: 1.7, maxWidth: "700px" }}>
                Perfect for breakfast, smart snacking, gifting, and pantry stocking.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href="https://wa.me/6584067441?text=Hi%20Gut%20Lab%20by%20Xaels%2C%20I%20would%20like%20to%20place%20an%20order."
                style={buttonPrimary}
              >
                Order via WhatsApp
              </a>
              <a
                href="https://www.instagram.com/xaelsbakes?igsh=MTBicDlwZ3piMXdyNg=="
                style={{
                  ...buttonSecondary,
                  background: "#fff",
                  color: "#21451f",
                  border: "1px solid #ddd",
                }}
              >
                Visit Instagram
              </a>
              <a
                href="https://vt.tiktok.com/ZSH2SPbE4/?page=TikTokShop"
                style={{
                  ...buttonSecondary,
                  background: "#fff",
                  color: "#21451f",
                  border: "1px solid #ddd",
                }}
              >
                Visit TikTok Shop
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
