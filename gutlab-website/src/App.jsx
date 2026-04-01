import { motion } from "framer-motion";
import {
  Sparkles,
  Gift,
  Coffee,
  ShoppingBag,
  Stars,
  Heart,
  CupSoda,
} from "lucide-react";

export default function GutLabByXaelsWebsite() {
  const products = [
    {
      name: "Healthy Spread",
      shortName: "Healthy Spread",
      price: "SGD 10",
      size: "150 g",
      tagline: "A scientist recipe for everyday nutrition.",
      description:
        "A better-for-you chocolate-style spread made for breakfast, lunchboxes, and daily snacking. Warm, family-friendly, and easy to enjoy every day.",
      image: "/healthy_spread.jpeg",
      icon: Heart,
      notes: ["No refined sugar", "Family-friendly", "Daily breakfast use"],
      uses: ["Spread on toast", "Dip fruits", "Add to oats or pancakes"],
      cta: "Order Healthy Spread",
      glow: "from-orange-200 via-amber-100 to-yellow-100",
    },
    {
      name: "Coffee Reimagined",
      shortName: "Coffee Spread",
      price: "SGD 10",
      size: "150 g",
      tagline: "No sugar. No preservatives. Just smart energy.",
      description:
        "A coffee-inspired spread designed for people who love bold flavor and versatile everyday use. Great with bread, crackers, waffles, and dessert pairings.",
      image: "/coffee_spread.jpeg",
      icon: Coffee,
      notes: ["Coffee-forward", "Smart energy", "Snack and dessert use"],
      uses: ["Spread on toast", "Pair with crackers", "Use in desserts"],
      cta: "Order Coffee Spread",
      glow: "from-amber-200 via-orange-100 to-rose-100",
    },
    {
      name: "Cocoa Nut Mix",
      shortName: "Cocoa Nut Mix",
      price: "SGD 12",
      size: "250 g",
      tagline: "Healthy drink powder for better mornings.",
      description:
        "A comforting cocoa drink powder for daily rituals. Enjoy it hot, cold, or blended into smoothies and oats for an easy better-morning routine.",
      image: "/cocoa_mix.jpeg",
      icon: CupSoda,
      notes: ["Drink powder", "No refined sugar", "Morning ritual"],
      uses: ["Hot cocoa drink", "Blend into smoothies", "Stir into oats"],
      cta: "Order Cocoa Nut Mix",
      glow: "from-yellow-100 via-orange-100 to-amber-200",
    },
  ];

  const bundles = [
    {
      title: "Starter Trio",
      price: "SGD 30",
      detail: "1 Healthy Spread + 1 Coffee Spread + 1 Cocoa Nut Mix",
      badge: "Best for first-time buyers",
      icon: Sparkles,
    },
    {
      title: "Breakfast Duo",
      price: "SGD 20",
      detail: "Healthy Spread + Coffee Spread",
      badge: "Daily toast combo",
      icon: Gift,
    },
    {
      title: "Morning Ritual Set",
      price: "SGD 22",
      detail: "Coffee Spread + Cocoa Nut Mix",
      badge: "Coffee and cocoa lovers",
      icon: Stars,
    },
  ];

  const dailyUse = [
    "Morning toast before work or school",
    "Quick snack with fruits or crackers",
    "Pancake, waffle, or oats topping",
    "Warm cocoa ritual in the evening",
    "Gift set for family and friends",
    "Easy pantry staple for repeat buying",
  ];

  const reasons = [
    {
      title: "Made for everyday use",
      text: "These are designed to fit naturally into breakfast, snack time, and home routines — not just occasional treats.",
    },
    {
      title: "Comfort food with better positioning",
      text: "Familiar flavors like chocolate, cocoa, and coffee reworked into products people can feel good about choosing more often.",
    },
    {
      title: "Easy to gift, easy to repeat",
      text: "The range works for self-use, family purchase, bundle offers, and social-commerce gifting moments.",
    },
  ];

  const floating = [
    "top-24 left-6",
    "top-32 right-10",
    "bottom-16 left-10",
    "bottom-24 right-8",
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#fff6ea_0%,#fffaf4_35%,#f7efe5_100%)] text-stone-900">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-16 left-[-80px] h-72 w-72 rounded-full bg-orange-200/35 blur-3xl" />
        <div className="absolute right-[-90px] top-20 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute bottom-[-60px] left-1/4 h-72 w-72 rounded-full bg-rose-200/20 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/50 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-[1.4rem] border border-amber-100 bg-white shadow-[0_8px_25px_rgba(0,0,0,0.08)]">
              <img
                src="/logo.png"
                alt="Gut Lab by Xaels logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <p className="text-lg font-black tracking-tight text-[#21451f]">
                Gut Lab by Xaels
              </p>
              <p className="text-xs text-stone-500">
                Joyful everyday nourishment
              </p>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm font-medium text-stone-600 md:flex">
            <a href="#products" className="transition hover:text-[#21451f]">
              Products
            </a>
            <a href="#bundles" className="transition hover:text-[#21451f]">
              Bundles
            </a>
            <a href="#daily-use" className="transition hover:text-[#21451f]">
              Daily Use
            </a>
            <a href="#contact" className="transition hover:text-[#21451f]">
              Order
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-[linear-gradient(135deg,#fff8ef_0%,#fff1de_45%,#ffe6c9_100%)] p-8 shadow-[0_20px_80px_rgba(164,112,42,0.18)] lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.8),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,220,180,0.55),transparent_25%)]" />

            {floating.map((pos, index) => (
              <motion.div
                key={pos}
                className={`absolute ${pos} hidden h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-white/60 shadow-lg backdrop-blur md:flex`}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {index % 2 === 0 ? (
                  <Sparkles className="h-6 w-6 text-amber-500" />
                ) : (
                  <Stars className="h-6 w-6 text-orange-400" />
                )}
              </motion.div>
            ))}

            <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9b6918] shadow-sm">
                  <Sparkles className="h-4 w-4" />
                  Selling collection
                </div>

                <h1 className="max-w-3xl text-4xl font-black tracking-tight text-[#21451f] sm:text-5xl lg:text-6xl">
                  Tasty, cheerful, family-friendly foods made to brighten
                  everyday routines.
                </h1>

                <p className="mt-5 max-w-xl text-base leading-7 text-stone-600 sm:text-lg">
                  Gut Lab by Xaels brings playful, premium, story-rich packaging
                  together with products people can enjoy every day — from
                  breakfast toast to warm cocoa moments.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#products"
                    className="rounded-2xl bg-[#21451f] px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(33,69,31,0.25)] transition hover:-translate-y-1"
                  >
                    Shop the range
                  </a>
                  <a
                    href="#bundles"
                    className="rounded-2xl border border-amber-200 bg-white px-6 py-3 text-sm font-bold text-[#21451f] shadow-sm transition hover:-translate-y-1"
                  >
                    See bundles
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 text-sm">
                  {[
                    "No refined sugar",
                    "No preservatives",
                    "Gift-worthy packaging",
                    "Made for repeat buying",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/70 bg-white/75 px-4 py-2 font-medium text-stone-700 shadow-sm backdrop-blur"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="grid gap-4 sm:grid-cols-2"
                >
                  <div className="sm:row-span-2 overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.08)] backdrop-blur">
                    <img
                      src="/healthy_spread.jpeg"
                      alt="Healthy Spread"
                      className="h-full w-full rounded-[1.4rem] object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.08)] backdrop-blur">
                    <img
                      src="/coffee_spread.jpeg"
                      alt="Coffee Reimagined"
                      className="h-full w-full rounded-[1.4rem] object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.08)] backdrop-blur">
                    <img
                      src="/cocoa_mix.jpeg"
                      alt="Cocoa Nut Mix"
                      className="h-full w-full rounded-[1.4rem] object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-8 lg:px-10">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              ["Breakfast hero", "Easy on toast, oats, pancakes"],
              ["Giftable", "Cute, premium-looking products"],
              ["Family-friendly", "Comforting everyday flavor cues"],
              ["Social-commerce ready", "Made for bundles and repeat buys"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-[1.8rem] border border-white/70 bg-white/75 p-5 shadow-[0_12px_35px_rgba(0,0,0,0.05)] backdrop-blur"
              >
                <p className="text-sm font-black text-[#21451f]">{title}</p>
                <p className="mt-2 text-sm leading-6 text-stone-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#9b6918]">
                Shop products
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#21451f] sm:text-4xl">
                A more magical-looking storefront that still feels like your
                brand
              </h2>
              <p className="mt-4 text-base leading-7 text-stone-600">
                This version uses original playful 3D-inspired layouts, soft
                gradients, floating accents, and rounded candy-like cards to
                create an attractive storybook-style shopping feel.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex rounded-2xl border border-amber-200 bg-white px-5 py-3 text-sm font-bold text-[#21451f] shadow-sm"
            >
              Quick order
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {products.map((product, idx) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: idx * 0.1 }}
                  className="group overflow-hidden rounded-[2.2rem] border border-white/70 bg-white/80 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur"
                >
                  <div className={`relative bg-gradient-to-br ${product.glow} p-4`}>
                    <div className="absolute right-4 top-4 rounded-full bg-white/80 p-2 shadow-md">
                      <Icon className="h-5 w-5 text-[#9b6918]" />
                    </div>
                    <div className="overflow-hidden rounded-[1.7rem] border border-white/70 bg-white/80 p-3 shadow-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-72 w-full rounded-[1.25rem] object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-black tracking-tight text-[#21451f]">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-stone-500">
                          {product.size}
                        </p>
                      </div>
                      <div className="rounded-full bg-[#21451f] px-4 py-2 text-sm font-bold text-white shadow-lg">
                        {product.price}
                      </div>
                    </div>

                    <p className="mt-3 text-sm font-bold text-[#9b6918]">
                      {product.tagline}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-stone-600">
                      {product.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {product.notes.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-xs font-medium text-stone-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 rounded-[1.4rem] bg-stone-50 p-4">
                      <p className="text-sm font-bold text-[#21451f]">
                        How to enjoy
                      </p>
                      <ul className="mt-3 space-y-2 text-sm text-stone-600">
                        {product.uses.map((idea) => (
                          <li key={idea} className="flex items-start gap-2">
                            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#c58a2f]" />
                            <span>{idea}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={`https://wa.me/6584067441?text=${encodeURIComponent(
                        `Hi Gut Lab by Xaels, I would like to order ${product.shortName}.`
                      )}`}
                      className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#d99534_0%,#b8751b_100%)] px-5 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(197,138,47,0.35)] transition hover:-translate-y-1"
                    >
                      {product.cta}
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="bundles" className="mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-16">
          <div className="overflow-hidden rounded-[2.4rem] border border-white/70 bg-[linear-gradient(135deg,#21451f_0%,#315d2f_100%)] p-8 text-white shadow-[0_25px_70px_rgba(33,69,31,0.25)] lg:p-10">
            <div className="mb-8 max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-200">
                Bundles
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Cute bundle cards help your page feel richer and more shoppable
              </h2>
              <p className="mt-4 text-sm leading-7 text-stone-200">
                Bundle options make the storefront more attractive and guide
                customers toward larger basket sizes.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {bundles.map((bundle, idx) => {
                const Icon = bundle.icon;
                return (
                  <motion.div
                    key={bundle.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: idx * 0.08 }}
                    className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur"
                  >
                    <div className="flex items-center justify-between">
                      <p className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-amber-100">
                        {bundle.badge}
                      </p>
                      <div className="rounded-full bg-white/15 p-2">
                        <Icon className="h-5 w-5 text-amber-100" />
                      </div>
                    </div>
                    <h3 className="mt-4 text-2xl font-black tracking-tight">
                      {bundle.title}
                    </h3>
                    <p className="mt-2 text-3xl font-black text-amber-200">
                      {bundle.price}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-stone-100">
                      {bundle.detail}
                    </p>
                    <a
                      href={`https://wa.me/6584067441?text=${encodeURIComponent(
                        `Hi Gut Lab by Xaels, I would like to order the ${bundle.title}.`
                      )}`}
                      className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-bold text-[#21451f] shadow-lg transition hover:-translate-y-1"
                    >
                      Order this bundle
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="daily-use" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#9b6918]">
                Daily use
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#21451f] sm:text-4xl">
                The page now explains why people would buy again.
              </h2>
              <p className="mt-4 text-base leading-7 text-stone-600">
                A good selling website needs to show not just what the product
                is, but how it fits real life. This section gives your products
                repeat-purchase logic.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {dailyUse.map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  className="rounded-[1.8rem] border border-white/70 bg-white/80 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.06)] backdrop-blur"
                >
                  <div className="mb-3 inline-flex rounded-full bg-orange-50 p-2">
                    <ShoppingBag className="h-4 w-4 text-[#c58a2f]" />
                  </div>
                  <p className="text-sm font-medium text-stone-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.05)] backdrop-blur"
              >
                <h3 className="text-xl font-black tracking-tight text-[#21451f]">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
          <div className="overflow-hidden rounded-[2.5rem] border border-white/70 bg-[linear-gradient(135deg,#fff7eb_0%,#ffeccf_100%)] p-8 shadow-[0_20px_70px_rgba(197,138,47,0.18)] lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#9b6918]">
                  Ready to order?
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-[#21451f] sm:text-4xl">
                  Message us directly and turn this page into a real sales
                  channel.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600">
                  The design is now much more playful, premium, and eye-catching.
                  Replace the WhatsApp and social links with your real details
                  and this becomes a strong storefront for direct selling.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/6584067441?text=Hi%20Gut%20Lab%20by%20Xaels%2C%20I%20would%20like%20to%20place%20an%20order."
                  className="inline-flex items-center justify-center rounded-2xl bg-[#21451f] px-6 py-4 text-sm font-bold text-white shadow-[0_14px_30px_rgba(33,69,31,0.25)] transition hover:-translate-y-1"
                >
                  Order via WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/xaelsbakes?igsh=MTBicDlwZ3piMXdyNg=="
                  className="inline-flex items-center justify-center rounded-2xl border border-amber-200 bg-white px-6 py-4 text-sm font-bold text-[#21451f] shadow-sm transition hover:-translate-y-1"
                >
                  Visit Instagram
                </a>
                <a
                  href="https://vt.tiktok.com/ZSH2SPbE4/?page=TikTokShop"
                  className="inline-flex items-center justify-center rounded-2xl border border-amber-200 bg-white px-6 py-4 text-sm font-bold text-[#21451f] shadow-sm transition hover:-translate-y-1"
                >
                  Visit TikTok Shop
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/60 bg-white/70 backdrop-blur">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-2 lg:px-10">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-[1.4rem] border border-amber-100 bg-white shadow-sm">
              <img
                src="/logo.png"
                alt="Gut Lab by Xaels logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <p className="text-2xl font-black tracking-tight text-[#21451f]">
                Gut Lab by Xaels
              </p>
              <p className="mt-3 max-w-md text-sm leading-6 text-stone-600">
                A cheerful, modern storefront for science-led everyday
                nourishment.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm font-black text-[#21451f]">Shop</p>
              <ul className="mt-3 space-y-2 text-sm text-stone-600">
                <li>Healthy Spread</li>
                <li>Coffee Spread</li>
                <li>Cocoa Nut Mix</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-black text-[#21451f]">Order channels</p>
              <ul className="mt-3 space-y-2 text-sm text-stone-600">
                <li>WhatsApp</li>
                <li>Instagram</li>
                <li>TikTok Shop</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
