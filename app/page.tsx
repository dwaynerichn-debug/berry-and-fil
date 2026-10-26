
const products = [
  {
    name: "The Everyday Crochet Bag",
    category: "HANDMADE CROCHET",
    price: "KSh 2,500",
    image:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Soft Touch Yarn",
    category: "YARN & MATERIALS",
    price: "KSh 450",
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Creative Crochet Kit",
    category: "KITS & TOOLS",
    price: "KSh 1,200",
    image:
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=800&q=85",
  },
];

const collections = [
  {
    title: "Handmade Crochet",
    description: "One-of-a-kind pieces, thoughtfully made.",
    number: "01",
  },
  {
    title: "Yarn & Materials",
    description: "Beautiful fibres for your next creation.",
    number: "02",
  },
  {
    title: "Hooks & Crochet Kits",
    description: "Everything you need to begin creating.",
    number: "03",
  },
];

function BerryBranch() {
  return (
    <svg
      viewBox="0 0 120 120"
      width="82"
      height="82"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="Berry branch emblem"
      role="img"
    >
      <path d="M27 96 Q55 65 91 22" />
      <path d="M43 79 Q27 53 13 61 Q17 80 43 79Z" />
      <path d="M55 65 Q78 70 82 87 Q61 89 55 65Z" />
      <path d="M68 49 Q51 26 35 34 Q43 53 68 49Z" />
      <path d="M77 39 Q96 43 105 28 Q89 19 77 39Z" />
      <circle cx="92" cy="53" r="8" />
      <circle cx="104" cy="66" r="7" />
      <circle cx="80" cy="68" r="7" />
      <path d="M88 46 L91 38 M100 60 L98 52 M76 61 L72 55" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6F0E8] text-[#202D49]">
      <div className="bg-[#50304F] px-4 py-2 text-center text-xs tracking-[0.18em] text-[#F6F0E8]">
        THOUGHTFULLY MADE · BEAUTIFULLY CREATED
      </div>

      <header className="border-b border-[#202D49]/10 bg-[#F6F0E8]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
          <a href="#" className="flex items-center gap-2">
            <span className="text-[#C6A66B]">
              <BerryBranch />
            </span>
            <span>
              <span className="block font-serif text-xl tracking-[0.13em] md:text-2xl">
                BERRY & FIL
              </span>
              <span className="mt-1 block text-[9px] tracking-[0.2em]">
                THE ART OF HANDMADE
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-xs tracking-[0.13em] md:flex">
            <a href="#collections" className="hover:text-[#50304F]">COLLECTIONS</a>
            <a href="#shop" className="hover:text-[#50304F]">SHOP</a>
            <a href="#story" className="hover:text-[#50304F]">OUR STORY</a>
          </nav>

          <a
            href="#shop"
            className="border border-[#202D49] px-4 py-3 text-xs tracking-wider transition hover:bg-[#202D49] hover:text-[#F6F0E8]"
          >
            SHOP NOW
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#202D49] text-[#F6F0E8]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24">
          <div className="relative z-10">
            <p className="mb-6 text-xs tracking-[0.28em] text-[#C6A66B]">
              THE BEAUTY OF EVERY LOOP
            </p>
            <h1 className="max-w-xl font-serif text-5xl leading-[1.08] md:text-7xl">
              Where Every
              <br />
              Loop Becomes
              <br />
              <span className="italic text-[#C6A66B]">Art.</span>
            </h1>
            <p className="mt-6 max-w-md text-sm leading-7 text-[#F6F0E8]/75">
              Discover thoughtfully handmade crochet creations and beautiful
              supplies for your next project. Made with care, chosen with love.
            </p>
            <a
              href="#shop"
              className="mt-8 inline-block bg-[#C6A66B] px-7 py-4 text-xs tracking-[0.15em] text-[#202D49] transition hover:bg-[#F6F0E8]"
            >
              EXPLORE THE COLLECTION
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -right-3 -top-3 h-full w-full border border-[#C6A66B]/60" />
            <img
              src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=90"
              alt="Beautiful handmade craft materials"
              className="relative h-[340px] w-full object-cover md:h-[470px]"
            />
            <div className="absolute bottom-5 left-5 bg-[#F6F0E8] px-5 py-4 text-[#202D49]">
              <p className="font-serif text-lg italic">Made by hand.</p>
              <p className="mt-1 text-[9px] tracking-[0.18em]">LOVED FOR A LIFETIME</p>
            </div>
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs tracking-[0.22em] text-[#50304F]">EXPLORE BERRY & FIL</p>
            <h2 className="font-serif text-3xl md:text-4xl">Made for your creativity.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#202D49]/70">
            From unique handmade treasures to the tools that bring your ideas to life.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {collections.map((item) => (
            <a
              key={item.number}
              href="#shop"
              className="group border border-[#202D49]/15 p-7 transition hover:border-[#C6A66B] hover:bg-white/50"
            >
              <span className="text-xs tracking-widest text-[#C6A66B]">{item.number}</span>
              <h3 className="mt-7 font-serif text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#202D49]/70">{item.description}</p>
              <span className="mt-6 inline-block text-xs tracking-widest text-[#50304F]">
                DISCOVER COLLECTION ↗
              </span>
            </a>
          ))}
        </div>
      </section>

      <section id="shop" className="bg-white/50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs tracking-[0.22em] text-[#50304F]">THE EDIT</p>
            <h2 className="font-serif text-3xl md:text-4xl">A few things we love.</h2>
            <p className="mt-3 text-sm text-[#202D49]/65">
              Sample products — update the prices and photos before launch.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3">
            {products.map((product) => (
              <article key={product.name} className="group">
                <div className="overflow-hidden bg-[#F6F0E8]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-[10px] tracking-[0.2em] text-[#50304F]">
                  {product.category}
                </p>
                <h3 className="mt-2 font-serif text-xl">{product.name}</h3>
                <p className="mt-2 text-sm">{product.price}</p>
                <a
                  href="mailto:hello@berryandfil.com?subject=Product%20enquiry"
                  className="mt-4 inline-block border-b border-[#C6A66B] pb-1 text-xs tracking-widest"
                >
                  ENQUIRE ABOUT THIS ITEM ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="bg-[#50304F] px-6 py-16 text-center text-[#F6F0E8] md:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 flex justify-center text-[#C6A66B]">
            <BerryBranch />
          </div>
          <p className="text-xs tracking-[0.22em] text-[#C6A66B]">OUR PHILOSOPHY</p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl">
            Every stitch tells a story.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#F6F0E8]/80">
            We believe the most beautiful things are made with patience,
            imagination and care. BERRY & FIL brings handmade crochet and
            thoughtfully selected supplies together in one creative home.
          </p>
        </div>
      </section>

      <footer className="bg-[#202D49] px-6 py-8 text-center text-[#F6F0E8]">
        <p className="font-serif text-xl tracking-[0.16em]">BERRY & FIL</p>
        <p className="mt-2 text-sm italic text-[#C6A66B]">
          Where Every Loop Becomes Art.
        </p>
        <p className="mt-5 text-[10px] tracking-widest text-[#F6F0E8]/60">
          HANDMADE WITH CARE · CREATED WITH LOVE
        </p>
        <p className="mt-6 text-xs text-[#F6F0E8]/50">
          © {new Date().getFullYear()} BERRY & FIL
        </p>
      </footer>
    </main>
  );
}

