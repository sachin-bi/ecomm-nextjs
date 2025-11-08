"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="bg-zinc-950 text-zinc-100 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/imgs/home/hero-dark.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="z-10 text-center space-y-5 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Style Meets Simplicity
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-zinc-400 max-w-xl mx-auto text-lg"
          >
            Discover premium clothing, elegant cups, and creative stickers – all designed for the modern lifestyle.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Link href="/products">
              <Button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl text-lg">
                Shop Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="py-20 px-6 md:px-16">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Explore Our Collections
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              title: "Clothing",
              image: "/imgs/categories/clothing.jpg",
              link: "/products?category=clothing",
            },
            {
              title: "Cups & Mugs",
              image: "/imgs/categories/cups.jpg",
              link: "/products?category=cup",
            },
            {
              title: "Stickers",
              image: "/imgs/categories/stickers.jpg",
              link: "/products?category=sticker",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="object-cover w-full h-72 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              </div>
              <Link href={item.link} className="absolute inset-0"></Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 px-6 md:px-16 bg-zinc-900">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Trending Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((p) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-zinc-800 p-4 rounded-xl hover:shadow-lg hover:shadow-indigo-600/10 transition-all"
            >
              <Image
                src={`/imgs/products/p${p}.jpg`}
                alt={`Product ${p}`}
                width={300}
                height={300}
                className="rounded-xl object-cover mb-4"
              />
              <h3 className="font-medium text-lg">Product {p}</h3>
              <p className="text-zinc-400 text-sm mt-1">₹{p * 499}</p>
              <Button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-500">
                Add to Cart
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DISCOUNT / OFFER SECTION */}
      <section className="py-20 px-6 md:px-16 bg-linear-to-r from-indigo-700 to-indigo-500 text-center rounded-t-3xl">
        <h2 className="text-4xl font-bold mb-4">Seasonal Sale</h2>
        <p className="text-zinc-200 mb-6">
          Up to <span className="text-white font-semibold">50% OFF</span> on selected products.  
          Limited time only!
        </p>
        <Link href="/products">
          <Button className="bg-zinc-950 text-white hover:bg-zinc-900 text-lg px-6 py-3">
            Shop the Sale
          </Button>
        </Link>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Stay Updated</h2>
        <p className="text-zinc-400 mb-6">
          Subscribe for exclusive offers, product launches, and style tips.
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-zinc-800 border border-zinc-700 px-4 py-3 rounded-l-lg w-64 text-white focus:outline-none"
          />
          <Button className="bg-indigo-600 hover:bg-indigo-500 rounded-l-none">
            Subscribe
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-900 py-10 text-center text-zinc-400 border-t border-zinc-800">
        <p>© {new Date().getFullYear()} Ecomm Store. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4 text-zinc-500">
          <Link href="/privacy" className="hover:text-white">Privacy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>
      </footer>
    </main>
  );
}
