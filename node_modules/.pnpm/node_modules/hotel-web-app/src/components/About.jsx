import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, Clock, Star } from "lucide-react";

const stats = [
    { icon: Flame, label: "Signature Dishes", value: "40+" },
    { icon: Clock, label: "Open Since", value: "2015" },
    { icon: Star, label: "Happy Guests / mo", value: "2K+" },
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-24 bg-[#0D0D0D]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Label */}
                <motion.p
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center text-xs uppercase tracking-[0.25em] text-[#C0922F] font-semibold mb-4"
                >
                    Our Story
                </motion.p>

                {/* Main Grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mt-8">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                            <img
                                src="https://images.unsplash.com/photo-1601314212716-8e5e4a0618dc?w=700&h=900&fit=crop"
                                alt="Traditional Ethiopian injera platter"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 to-transparent" />
                        </div>

                        {/* Floating card */}
                        <div className="absolute -bottom-6 -right-6 bg-[#161616] border border-[#2a2a2a] rounded-2xl p-5 shadow-2xl max-w-[200px]">
                            <p className="font-heading text-3xl text-[#C0922F] font-bold">10+</p>
                            <p className="text-[#9a9a9a] text-sm mt-1 leading-snug">Years of authentic Ethiopian flavors</p>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="font-heading text-4xl md:text-5xl text-[#F9F5EE] leading-tight mb-6">
                            A Taste of{" "}
                            <span className="text-[#C0922F] italic">Gondar</span> on Every Plate
                        </h2>

                        <p className="text-[#9a9a9a] leading-relaxed mb-5">
                            Nestled in the historic city of Gondar — Ethiopia's royal capital — Ever Food Zone
                            was born from a passion to share the soul of Ethiopian cuisine with every guest
                            who walks through our doors.
                        </p>
                        <p className="text-[#9a9a9a] leading-relaxed mb-8">
                            From our handmade injera fermented over three days, to our signature Doro Wot
                            slow-simmered for hours, every dish carries a story of culture, family, and love.
                            We believe food is the most honest form of tradition.
                        </p>

                        {/* Highlight card */}
                        <div className="bg-[#C0922F]/8 border border-[#C0922F]/20 rounded-xl p-5 mb-8">
                            <p className="text-[#F9F5EE] italic font-heading text-lg leading-relaxed">
                                "Try the vegetarian platter for a diverse taste of traditional Ethiopian dishes —
                                and don't miss asking the staff about the coffee ceremony."
                            </p>
                            <p className="text-[#C0922F] text-sm mt-3 font-medium">— Local Tips from Our Guests</p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {stats.map(({ icon: Icon, label, value }) => (
                                <div key={label} className="text-center">
                                    <div className="w-10 h-10 rounded-full bg-[#C0922F]/10 flex items-center justify-center mx-auto mb-2">
                                        <Icon className="w-5 h-5 text-[#C0922F]" />
                                    </div>
                                    <p className="font-heading text-2xl text-[#F9F5EE] font-bold">{value}</p>
                                    <p className="text-[#9a9a9a] text-xs mt-0.5">{label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
