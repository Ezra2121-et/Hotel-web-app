import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [current, setCurrent] = useState(0);

    // Auto-advance every 4s
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((c) => (c + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    const next = () => setCurrent((c) => (c + 1) % testimonials.length);

    const t = testimonials[current];

    return (
        <section id="reviews" className="py-24 bg-[#0D0D0D] border-t border-[#2a2a2a]">
            <div className="max-w-4xl mx-auto px-6 text-center">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-xs uppercase tracking-[0.25em] text-[#C0922F] font-semibold mb-3">
                        What People Say
                    </p>
                    <h2 className="font-heading text-4xl md:text-5xl text-[#F9F5EE]">
                        Guest <span className="text-[#C0922F] italic">Reviews</span>
                    </h2>
                </motion.div>

                {/* Card */}
                <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#161616] border border-[#2a2a2a] rounded-3xl p-8 md:p-12 mb-8"
                >
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                        {Array.from({ length: t.rating }).map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-[#C0922F] text-[#C0922F]" />
                        ))}
                    </div>

                    <p className="font-heading text-xl md:text-2xl text-[#F9F5EE] italic leading-relaxed mb-8">
                        "{t.review}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#C0922F]/20 border border-[#C0922F]/40 flex items-center justify-center text-[#C0922F] font-bold font-heading text-lg">
                            {t.avatar}
                        </div>
                        <div className="text-left">
                            <p className="text-[#F9F5EE] font-semibold">{t.name}</p>
                            <p className="text-[#9a9a9a] text-sm">{t.role}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-6">
                    <button
                        onClick={prev}
                        className="w-10 h-10 rounded-full border border-[#2a2a2a] flex items-center justify-center text-[#9a9a9a] hover:border-[#C0922F] hover:text-[#C0922F] transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Dots */}
                    <div className="flex gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-[#C0922F]" : "w-1.5 bg-[#2a2a2a]"
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={next}
                        className="w-10 h-10 rounded-full border border-[#2a2a2a] flex items-center justify-center text-[#9a9a9a] hover:border-[#C0922F] hover:text-[#C0922F] transition-colors"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
