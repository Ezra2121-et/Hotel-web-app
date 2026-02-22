import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Coffee, Star, Shield } from "lucide-react";

const features = [
    { icon: Leaf, label: "Fresh Daily", desc: "Every ingredient sourced fresh each morning" },
    { icon: Coffee, label: "Coffee Ceremony", desc: "Traditional Ethiopian brew, start to finish" },
    { icon: Star, label: "Award Winning", desc: "Recognized as Gondar's top dining experience" },
    { icon: Shield, label: "Halal Certified", desc: "All our meat is halal-certified" },
];

export default function FeatureBar() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} className="py-16 bg-[#161616] border-y border-[#2a2a2a]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {features.map(({ icon: Icon, label, desc }, i) => (
                        <motion.div
                            key={label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 * i }}
                            className="flex flex-col items-center text-center gap-3"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[#C0922F]/10 border border-[#C0922F]/20 flex items-center justify-center">
                                <Icon className="w-6 h-6 text-[#C0922F]" />
                            </div>
                            <div>
                                <p className="font-heading text-[#F9F5EE] font-semibold">{label}</p>
                                <p className="text-[#9a9a9a] text-sm mt-1 leading-snug">{desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
