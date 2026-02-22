import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function VibeSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={ref} className="h-[60vh] md:h-[80vh] overflow-hidden bg-[#0D0D0D] relative">
            <motion.div style={{ scale, opacity }} className="w-full h-full relative">
                <img
                    src="https://images.unsplash.com/photo-1574484284002-952d92456975?w=1600&fit=crop"
                    alt="Immersive Ethiopian Food Atmosphere"
                    className="w-full h-full object-cover grayscale-[20%] sepia-[10%] contrast-[110%]"
                />
                {/* Cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-6">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="font-heading text-4xl md:text-6xl lg:text-7xl text-white italic drop-shadow-2xl"
                        >
                            Experience the True Spirit of Ethiopia
                        </motion.h2>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
