import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1567529684892-09290a1b2d05?w=1200",
        alt: "Ethiopian restaurant interior at night",
        caption: "Warm Evenings",
    },
    {
        src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200",
        alt: "Colorful Ethiopian vegetarian platter",
        caption: "Vegetarian Platter",
    },
    {
        src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200",
        alt: "Traditional Ethiopian coffee ceremony",
        caption: "Coffee Ceremony",
    },
    {
        src: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=1200",
        alt: "Grilled lamb at Ethiopian restaurant",
        caption: "Signature Lamb",
    },
    {
        src: "https://images.unsplash.com/photo-1601314212716-8e5e4a0618dc?w=1200",
        alt: "Injera bread with stew",
        caption: "Fresh Injera",
    },
    {
        src: "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=1200",
        alt: "Ethiopian firfir dish",
        caption: "Firfir Breakfast",
    },
];

export default function Gallery() {
    const [selectedImg, setSelectedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setSelectedImg(galleryImages[index]);
    };

    const closeLightbox = () => {
        setSelectedImg(null);
    };

    const nextImg = (e) => {
        e.stopPropagation();
        const nextIdx = (currentIndex + 1) % galleryImages.length;
        setCurrentIndex(nextIdx);
        setSelectedImg(galleryImages[nextIdx]);
    };

    const prevImg = (e) => {
        e.stopPropagation();
        const prevIdx = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        setCurrentIndex(prevIdx);
        setSelectedImg(galleryImages[prevIdx]);
    };

    return (
        <section id="gallery" className="py-24 bg-[#0D0D0D]">
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
                        Visual Feast
                    </p>
                    <h2 className="font-heading text-4xl md:text-5xl text-[#F9F5EE] leading-tight">
                        A Glimpse of{" "}
                        <span className="text-[#C0922F] italic">Our World</span>
                    </h2>
                </motion.div>

                {/* Masonry Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                    {galleryImages.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.08 * i }}
                            className="relative overflow-hidden rounded-2xl group break-inside-avoid cursor-pointer"
                            onClick={() => openLightbox(i)}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                                <span className="text-white font-heading text-lg italic translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {img.caption}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[10000] bg-[#0D0D0D]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-alias"
                        onClick={closeLightbox}
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-8 right-8 text-white/50 hover:text-[#C0922F] transition-colors p-2"
                            onClick={closeLightbox}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* Navigation */}
                        <button
                            className="absolute left-4 md:left-8 text-white/50 hover:text-[#C0922F] transition-colors p-2"
                            onClick={nextImg}
                        >
                            <ChevronLeft className="w-10 h-10" />
                        </button>
                        <button
                            className="absolute right-4 md:right-8 text-white/50 hover:text-[#C0922F] transition-colors p-2"
                            onClick={prevImg}
                        >
                            <ChevronRight className="w-10 h-10" />
                        </button>

                        {/* Image & Caption */}
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative max-w-5xl w-full max-h-full flex flex-col items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImg.src}
                                alt={selectedImg.alt}
                                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl shadow-black"
                            />
                            <p className="font-heading text-2xl text-[#F9F5EE] italic mt-6 text-center">
                                {selectedImg.caption}
                            </p>
                            <p className="text-[#9a9a9a] text-sm mt-2">
                                Image {currentIndex + 1} of {galleryImages.length}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
