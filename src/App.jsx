import React from "react";
import Button from "./components/Button";

const categories = [
  { name: "Juicy Burgers", img: "/images/burger.jpg" },
  { name: "Grilled Chicken", img: "/images/chicken.jpg" },
  { name: "Hot Noodles", img: "/images/noodles.jpg" },
  { name: "Sweet Desserts", img: "/images/dessert.jpg" },
  { name: "Refreshing Drinks", img: "/images/drink.jpg" }
];

const chefSpecials = [
  { name: "Signature Double Stack", desc: "Two patties, special sauce, crisp lettuce", img: "/images/burger.jpg" },
  { name: "Smoky Grilled Chicken", desc: "Marinated, flame-grilled, served hot", img: "/images/chicken.jpg" },
  { name: "Chili Garlic Noodles", desc: "Wok-tossed, punchy sauce & veggies", img: "/images/noodles.jpg" }
];

export default function App() {
  return (
    <div className="antialiased text-gray-900">
      {/* HEADER with top-left logo */}
      <header className="fixed top-6 left-6 z-50">
        <a href="/">
          <img src="/images/logo.png" alt="F2 Logo" className="w-28 h-auto rounded-md shadow-md" />
        </a>
      </header>

      {/* HERO */}
      <section
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Fusion Foods. Pure Fun.
          </h1>
          <p className="text-white/90 mt-4 max-w-2xl mx-auto">
            Handcrafted fusion dishes, fast friendly service and a dash of fun in every bite.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Button href="#menu" variant="primary">View Menu</Button>
            <Button href="#reserve" variant="secondary">Reserve a Table</Button>
          </div>
        </div>
      </section>

      {/* ABOUT + Quality & Kitchen */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">About F2 (Food & Fun)</h2>
            <p className="text-gray-700 mb-4">
              F2 is a cozy fusion kitchen in Pondicherry serving curated comfort food with creative twists.
              We believe every dish should be a small celebration — bold flavours, fresh ingredients and heartful service.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="p-4 border rounded-xl">
                <h4 className="font-semibold mb-2">Our Quality Promise</h4>
                <p className="text-sm text-gray-600">Locally sourced produce, carefully inspected and prepared with hygiene-first kitchen practices.</p>
              </div>

              <div className="p-4 border rounded-xl">
                <h4 className="font-semibold mb-2">Our Kitchen</h4>
                <p className="text-sm text-gray-600">An open kitchen model where chefs craft each plate to order — flame-grilled, wok-finished and plated with love.</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="/images/hero.jpg" alt="About F2" className="w-full h-80 object-cover" />
          </div>
        </div>
      </section>

      {/* OUR CHEF SPECIALS */}
      <section id="specials" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Chef Specials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {chefSpecials.map((s) => (
              <div key={s.name} className="bg-white rounded-2xl overflow-hidden shadow-md">
                <img src={s.img} alt={s.name} className="w-full h-44 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{s.name}</h3>
                  <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
                  <div className="mt-4">
                    <Button variant="primary" href="#reserve">Book Table</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / BOOK YOUR TABLE — two-column like screenshot */}
      <section id="reserve" className="py-12 bg-red-600 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            {/* left info */}
            <div className="p-10 bg-red-600 text-white">
              <h3 className="text-3xl font-bold mb-4">Reach Out to Plan Your Visit!</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <div className="font-semibold">+91 9442069355</div>
                    <div className="text-sm text-white/90">Call us for quick reservations</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <div className="font-semibold">f2foodsxx@gmail.com</div>
                    <div className="text-sm text-white/90">Questions? Send an email</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <div className="font-semibold">Pondicherry</div>
                    <div className="text-sm text-white/90">Address will be updated soon</div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="w-full h-36 bg-white rounded-md overflow-hidden">
                  {/* Placeholder for small map image - keep as visual */}
                  <iframe
                    title="map"
                    className="w-full h-full border-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.389!2d79.8273!3d11.933"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* right: booking form */}
            <div className="p-8 bg-white text-gray-900">
              <h3 className="text-2xl font-semibold text-center mb-6 text-red-600">Book Your Table — Get Exciting Offers</h3>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Enter your name</label>
                  <input className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="Name" />
                </div>

                <div>
                  <label className="block text-sm font-medium">Phone Number</label>
                  <input className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="+91 9xxxxxxxxx" />
                </div>

                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="you@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium">Date & Time</label>
                  <input type="datetime-local" className="mt-1 w-full border rounded-lg px-3 py-2" />
                </div>

                <div>
                  <label className="block text-sm font-medium">Number of Guests</label>
                  <input type="number" min="1" className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="2" />
                </div>

                <div className="pt-2">
                  <button type="submit" className="w-full bg-red-600 text-white rounded-lg py-3 font-semibold hover:bg-red-700">
                    Book your Table Today
                  </button>
                </div>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">We will call to confirm your booking. For large events call +91 9655080809.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} F2 (Food & Fun). All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
