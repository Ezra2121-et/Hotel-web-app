import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { menuCategories, menuItems } from "../data/menuData";
import { Star } from "lucide-react";

export default function Menu() {
    const [activeCategory, setActiveCategory] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const filtered =
        activeCategory === "All"
            ? menuItems
            : menuItems.filter((item) => item.category === activeCategory);

    return (
        <section id="menu" className="py-24 bg-[#F9F5EE]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="text-xs uppercase tracking-[0.25em] text-[#C0922F] font-semibold mb-3">
                        What We Serve
                    </p>
                    <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A] leading-tight">
                        Our <span className="text-[#C0922F] italic">Menu</span>
                    </h2>
                    <p className="text-[#6b6b6b] mt-4 max-w-lg mx-auto leading-relaxed">
                        Freshly prepared every day using traditional recipes passed down through generations.
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {menuCategories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${activeCategory === cat
                                    ? "bg-[#C0922F] text-white shadow-lg shadow-[#C0922F]/30"
                                    : "bg-white text-[#6b6b6b] border border-[#e0d9cf] hover:border-[#C0922F] hover:text-[#C0922F]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Menu Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.05 * i }}
                            layout
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {item.tag && (
                                    <span className="absolute top-3 right-3 bg-[#C0922F] text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        {item.tag}
                                    </span>
                                )}
                            </div>

                            {/* Details */}
                            <div className="p-5">
                                <div className="flex items-start justify-between gap-3 mb-2">
                                    <h3 className="font-heading text-lg text-[#1A1A1A] font-semibold leading-snug">
                                        {item.name}
                                    </h3>
                                    <span className="text-[#C0922F] font-bold text-sm whitespace-nowrap mt-0.5">
                                        {item.price}
                                    </span>
                                </div>
                                <p className="text-[#6b6b6b] text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
