import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1567529684892-09290a1b2d05?w=1600&h=900&fit=crop')",
                }}
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/70 via-[#0D0D0D]/50 to-[#0D0D0D]" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                {/* Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C0922F] font-semibold mb-6 border border-[#C0922F]/30 rounded-full px-4 py-1.5 bg-[#C0922F]/5">
                        ✦ Authentic Ethiopian Cuisine · Gondar
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="font-heading text-5xl md:text-7xl lg:text-8xl text-[#F9F5EE] leading-tight mb-6"
                >
                    Where Every{" "}
                    <span className="text-[#C0922F] italic">Meal</span>
                    <br />
                    Tells a Story
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-[#9a9a9a] text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
                >
                    Experience the rich traditions of Ethiopian hospitality — from
                    slow-cooked wots and fresh injera to the warmth of a true coffee ceremony.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#menu"
                        className="px-8 py-4 bg-[#C0922F] text-[#0D0D0D] font-semibold rounded-full hover:bg-[#D4A843] hover:shadow-xl hover:shadow-[#C0922F]/30 transition-all duration-300 active:scale-95 text-sm tracking-wide"
                    >
                        Explore Our Menu
                    </a>
                    <a
                        href="#reservations"
                        className="px-8 py-4 border border-[#F9F5EE]/30 text-[#F9F5EE] font-semibold rounded-full hover:border-[#C0922F] hover:text-[#C0922F] transition-all duration-300 text-sm tracking-wide"
                    >
                        Reserve a Table
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#9a9a9a]"
            >
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
        </section>
    );
}
