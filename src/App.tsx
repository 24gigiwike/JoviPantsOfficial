/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  ShoppingBag, 
  Truck, 
  Users, 
  CheckCircle2, 
  Instagram, 
  Twitter, 
  MessageSquare, 
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
  Music2
} from "lucide-react";

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1 .05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
  </svg>
);
import { useState, useRef } from "react";
import React from "react";

const CATEGORIES = [
  { id: 'men', name: "Men's", image: "https://picsum.photos/seed/jovi-men/800/1000" },
  { id: 'women', name: "Women's", image: "https://picsum.photos/seed/jovi-women/800/1000" },
  { id: 'cargo', name: "Cargo", image: "https://picsum.photos/seed/jovi-cargo/800/1000" },
  { id: 'tailored', name: "Tailored", image: "https://picsum.photos/seed/jovi-tailored/800/1000" },
  { id: 'streetwear', name: "Streetwear", image: "https://picsum.photos/seed/jovi-street/800/1000" },
];

const BEST_SELLERS = [
  { 
    id: 1, 
    name: "Classic Cargo V1", 
    price: "₦25,000", 
    image: "https://picsum.photos/seed/pants1/600/800",
    tag: "Best Seller"
  },
  { 
    id: 2, 
    name: "Urban Street Joggers", 
    price: "₦18,500", 
    image: "https://picsum.photos/seed/pants2/600/800",
    tag: "Trending"
  },
  { 
    id: 3, 
    name: "Tailored Slim Trousers", 
    price: "₦30,000", 
    image: "https://picsum.photos/seed/pants3/600/800",
    tag: "Premium"
  },
  { 
    id: 4, 
    name: "Utility Combat Pants", 
    price: "₦22,000", 
    image: "https://picsum.photos/seed/pants4/600/800",
    tag: "Most Affordable"
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const targetRef = useRef(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Jovi Pants Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:edetjoshua92@gmail.com?subject=${subject}&body=${body}`;
  };
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-lime selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-brand-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-white flex items-center justify-center font-bold text-black text-xl tracking-tighter group-hover:bg-brand-lime transition-colors">
              JP
            </div>
            <span className="font-bold text-2xl tracking-tighter uppercase hidden sm:block">Jovi Pants</span>
          </a>

          <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
            <a href="#categories" className="hover:text-brand-lime transition-colors">Categories</a>
            <a href="#best-sellers" className="hover:text-brand-lime transition-colors">Visit Store</a>
            <a href="#about" className="hover:text-brand-lime transition-colors">About</a>
            <a href="#contact" className="hover:text-brand-lime transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="brutal-btn-accent hidden sm:block">
              Visit Store
            </button>
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-20 left-0 w-full bg-brand-charcoal border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            <a href="#categories" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold uppercase">Categories</a>
            <a href="#best-sellers" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold uppercase">Visit Store</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold uppercase">About</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold uppercase">Contact</a>
            <button className="brutal-btn-accent w-full">Visit Store</button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.div 
          style={{ opacity, scale }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://picsum.photos/seed/jovi-hero/1920/1080" 
            alt="Hero" 
            className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-9xl font-black leading-[0.85] mb-6">
              Step Up Your <br />
              <span className="text-brand-lime">Style Game</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-10 font-medium">
              Stylish trousers for every occasion — from tailored fits to trendy streetwear. 
              Premium quality without the premium price tag.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="brutal-btn-accent px-10 py-5 text-lg">
                Visit Store
              </button>
              <button className="brutal-btn px-10 py-5 text-lg">
                Elevate Wardrobe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: [-48, 48] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-full bg-brand-lime"
            />
          </div>
        </motion.div>
      </section>

      {/* Value Props */}
      <section className="py-20 border-y border-white/10 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <ShoppingBag className="w-8 h-8" />, title: "Most Affordable", desc: "Premium cargo pants at prices that won't break the bank." },
              { icon: <Truck className="w-8 h-8" />, title: "Nationwide Delivery", desc: "Fast and reliable shipping across all states in Nigeria." },
              { icon: <Users className="w-8 h-8" />, title: "Unisex Styles", desc: "Trendy fits designed for both men and women." },
            ].map((prop, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center text-center gap-4 group"
              >
                <div className="w-16 h-16 border border-white/10 flex items-center justify-center group-hover:border-brand-lime group-hover:bg-brand-lime group-hover:text-black transition-all duration-300">
                  {prop.icon}
                </div>
                <h3 className="text-xl font-bold">{prop.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{prop.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section id="categories" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <h2 className="text-5xl md:text-7xl font-black leading-none">
              Shop by <br /> <span className="text-brand-coral">Category</span>
            </h2>
            <p className="max-w-md text-white/50 font-mono text-xs uppercase tracking-widest text-right">
              Explore our diverse range of styles curated for the modern urban dweller.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Asymmetric Grid Layout */}
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-8 h-[500px] relative overflow-hidden group border border-white/10"
            >
              <img src={CATEGORIES[0].image} alt={CATEGORIES[0].name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-4xl font-black mb-4">{CATEGORIES[0].name}</h3>
                <button className="brutal-btn-accent flex items-center gap-2">Explore <ArrowRight size={16} /></button>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-4 h-[500px] relative overflow-hidden group border border-white/10"
            >
              <img src={CATEGORIES[1].image} alt={CATEGORIES[1].name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-4xl font-black mb-4">{CATEGORIES[1].name}</h3>
                <button className="brutal-btn flex items-center gap-2">Explore <ArrowRight size={16} /></button>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-4 h-[400px] relative overflow-hidden group border border-white/10"
            >
              <img src={CATEGORIES[2].image} alt={CATEGORIES[2].name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-black mb-2">{CATEGORIES[2].name}</h3>
                <span className="font-mono text-[10px] text-brand-lime uppercase tracking-widest">Most Popular</span>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-4 h-[400px] relative overflow-hidden group border border-white/10"
            >
              <img src={CATEGORIES[3].image} alt={CATEGORIES[3].name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-black mb-2">{CATEGORIES[3].name}</h3>
                <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest">Classic Fit</span>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-4 h-[400px] relative overflow-hidden group border border-white/10"
            >
              <img src={CATEGORIES[4].image} alt={CATEGORIES[4].name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-black mb-2">{CATEGORIES[4].name}</h3>
                <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest">Urban Edge</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section id="best-sellers" className="py-32 bg-brand-charcoal relative overflow-hidden">
        {/* Marquee */}
        <div className="absolute top-0 left-0 w-full overflow-hidden border-y border-white/5 py-4 bg-brand-black z-20">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-20"
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/40">
                Jovi Pants — Streetwear Edge — Tailored Sophistication — Nationwide Delivery — 
              </span>
            ))}
          </motion.div>
        </div>

        {/* Background Text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full pointer-events-none opacity-[0.02] select-none">
          <h2 className="text-[20vw] font-black whitespace-nowrap leading-none">JOVI PANTS JOVI PANTS</h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-5xl md:text-7xl font-black">Best <span className="text-brand-lime">Sellers</span></h2>
            <button className="hidden sm:flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:text-brand-lime transition-colors">
              View All <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BEST_SELLERS.map((product) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="sharp-card group"
              >
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-brand-lime text-black px-3 py-1 text-[10px] font-bold uppercase tracking-tighter">
                    {product.tag}
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6">
                    <button className="brutal-btn-accent w-full">Quick Add</button>
                  </div>
                </div>
                <div className="p-6 border-t border-white/10">
                  <h4 className="text-lg font-bold mb-1 group-hover:text-brand-lime transition-colors">{product.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / TikTok */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="font-mono text-xs text-brand-coral uppercase tracking-[0.3em] mb-4 block">Community</span>
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Seen on <br /> <span className="italic">TikTok</span>
              </h2>
              <p className="text-white/60 text-lg mb-10 leading-relaxed">
                Join thousands of style enthusiasts showcasing their Jovi Pants fits. 
                Tag us <span className="text-white font-bold">@_jovipants</span> to be featured.
              </p>
              <div className="flex flex-wrap gap-8">
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Followers</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Likes</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Mentions</span>
                </div>
              </div>
              <a 
                href="https://www.tiktok.com/_jovipants" 
                target="_blank" 
                rel="noreferrer"
                className="brutal-btn mt-12 inline-flex items-center gap-3"
              >
                Follow on TikTok <ArrowRight size={18} />
              </a>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-brand-lime opacity-50" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r border-b border-brand-coral opacity-50" />
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[9/16] bg-brand-charcoal border border-white/10 overflow-hidden">
                    <img src="https://picsum.photos/seed/tiktok1/400/711" alt="TikTok 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-square bg-brand-charcoal border border-white/10 overflow-hidden">
                    <img src="https://picsum.photos/seed/tiktok2/400/400" alt="TikTok 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="aspect-square bg-brand-charcoal border border-white/10 overflow-hidden">
                    <img src="https://picsum.photos/seed/tiktok3/400/400" alt="TikTok 3" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-[9/16] bg-brand-charcoal border border-white/10 overflow-hidden">
                    <img src="https://picsum.photos/seed/tiktok4/400/711" alt="TikTok 4" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="bg-brand-charcoal border-t border-white/10 pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
            <div>
              <h2 className="text-5xl md:text-8xl font-black mb-12">Get in <br /> <span className="text-brand-lime">Touch</span></h2>
              <div className="space-y-8">
                <a href="tel:09047862650" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 border border-white/10 flex items-center justify-center group-hover:bg-brand-lime group-hover:text-black transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-1">WhatsApp / Call</span>
                    <span className="text-2xl font-bold">09047862650</span>
                  </div>
                </a>
                <a href="mailto:edetjoshua92@gmail.com" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 border border-white/10 flex items-center justify-center group-hover:bg-brand-coral group-hover:text-black transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-1">Email Support</span>
                    <span className="text-2xl font-bold">edetjoshua92@gmail.com</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-brand-black p-10 border border-white/10">
              <h3 className="text-2xl font-bold mb-8 uppercase tracking-tighter">Order Now</h3>
              <form className="space-y-6" onSubmit={handleInquirySubmit}>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Full Name</label>
                  <input 
                    name="name"
                    required
                    type="text" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 focus:border-brand-lime outline-none transition-colors" 
                    placeholder="Enter your name" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Email Address</label>
                  <input 
                    name="email"
                    required
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 focus:border-brand-lime outline-none transition-colors" 
                    placeholder="Enter your email" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Message / Order Details</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 focus:border-brand-lime outline-none transition-colors h-32 resize-none" 
                    placeholder="What are you looking for?" 
                  />
                </div>
                <button type="submit" className="brutal-btn-accent w-full py-5 text-lg">Send Inquiry</button>
              </form>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white flex items-center justify-center font-bold text-black text-sm tracking-tighter">JP</div>
              <span className="font-bold text-xl tracking-tighter uppercase">Jovi Pants</span>
            </div>

            <div className="flex items-center gap-6">
              <a href="https://www.tiktok.com/_jovipants" target="_blank" rel="noreferrer" className="text-white/40 hover:text-brand-lime transition-colors flex items-center gap-2">
                <TikTokIcon size={20} />
                <span className="font-mono text-[10px] uppercase tracking-widest">TikTok</span>
              </a>
            </div>

            <div className="text-center md:text-right">
              <p className="font-mono text-[10px] text-white/20 uppercase tracking-widest">
                &copy; {new Date().getFullYear()} Jovi Pants. All rights reserved.
              </p>
              <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest mt-1">
                Built by <a href="https://www.webdesignking.online" target="_blank" rel="noreferrer" className="text-white hover:text-brand-lime transition-colors">WDK</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
