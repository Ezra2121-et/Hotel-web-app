import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { UtensilsCrossed } from "lucide-react";

export default function PageLoader() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(false), 2200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0D0D0D]"
                >
                    {/* Animated ring */}
                    <motion.div
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative mb-6"
                    >
                        {/* Spinning gold ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            className="w-20 h-20 rounded-full border-2 border-transparent border-t-[#C0922F] border-r-[#C0922F]/30"
                        />
                        {/* Center icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <UtensilsCrossed className="w-7 h-7 text-[#C0922F]" />
                        </div>
                    </motion.div>

                    {/* Name */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="font-heading text-2xl text-[#F9F5EE] tracking-wide"
                    >
                        Ever Food Zone
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="text-[#9a9a9a] text-xs tracking-[0.2em] uppercase mt-2"
                    >
                        Authentic Ethiopian Cuisine · Gondar
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
