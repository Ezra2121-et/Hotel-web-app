import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";

export default function MobileBookingButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show when scrolled past the hero (roughly 80% of window height)
            if (window.scrollY > window.innerHeight * 0.8) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[45] md:hidden w-[90%]"
                >
                    <a
                        href="#reservations"
                        className="flex items-center justify-center gap-3 bg-[#C0922F] text-[#0D0D0D] font-bold py-4 rounded-2xl shadow-2xl shadow-[#C0922F]/40 active:scale-95 transition-transform"
                    >
                        <Calendar className="w-5 h-5" />
                        <span>Book Your Table Now</span>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
