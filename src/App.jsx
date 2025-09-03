import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-black text-white text-center">
      <img
        src="/images/hero.jpg"
        alt="Restaurant Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="relative z-10">
        <img
          src="/images/logo.png"
          alt="F2 Logo"
          className="mx-auto mb-6 w-32 drop-shadow-lg"
        />
        <h1 className="text-6xl font-extrabold drop-shadow-lg">
          F2 Restaurant
        </h1>
        <p className="text-xl mt-4 mb-6 drop-shadow">
          Fusion of Food & Fun – A unique dining experience
        </p>
        <Link
          to="/menu"
          className="px-8 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
        >
          Explore Menu
        </Link>
      </div>
    </section>
  );
}

function Menu() {
  const dishes = [
    { name: "Burger", price: "₹220", img: "/images/burger.jpg" },
    { name: "Chicken Steak", price: "₹280", img: "/images/chicken.jpg" },
    { name: "Dessert", price: "₹180", img: "/images/dessert.jpg" },
    { name: "Noodles", price: "₹200", img: "/images/noodles.jpg" },
    { name: "Mocktail", price: "₹150", img: "/images/drink.jpg" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {dishes.map((dish, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="bg-white rounded-xl shadow hover:shadow-xl overflow-hidden"
          >
            <img
              src={dish.img}
              alt={dish.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{dish.name}</h3>
              <p className="text-gray-600">{dish.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-r from-red-600 to-orange-500 text-white text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="mb-6">📍 Pondicherry | ☎️ +91 98765 43210</p>
      <a
        href="mailto:info@f2restaurant.com"
        className="px-6 py-3 bg-white text-red-600 font-semibold rounded-lg shadow hover:bg-gray-100"
      >
        Email Us
      </a>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Menu />
              <Contact />
            </>
          }
        />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}
