import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Calendar, Users, Gift } from "lucide-react";

const offers = [
    {
        icon: Calendar,
        tag: "Weekend Special",
        title: "Saturday Night Feast",
        description:
            "Every Saturday evening, enjoy our full traditional spread — Doro Wot, Tibs, Kitfo, and all the sides — for two people at a special bundled price.",
        price: "ETB 350",
        originalPrice: "ETB 480",
        badge: "Save 27%",
        badgeColor: "bg-green-500",
        image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&h=400&fit=crop",
    },
    {
        icon: Users,
        tag: "Group Dining",
        title: "Family Platter for 6",
        description:
            "Bring your family or close friends. Enjoy a generous communal spread on a traditional mesob including vegetarian and meat dishes, injera, and drinks.",
        price: "ETB 900",
        originalPrice: "ETB 1200",
        badge: "Save 25%",
        badgeColor: "bg-blue-500",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
    },
    {
        icon: Gift,
        tag: "Loyalty Offer",
        title: "Coffee Ceremony + Lunch",
        description:
            "Book a traditional Ethiopian coffee ceremony and receive a complimentary two-course lunch with your choice of wot and a seasonal drink.",
        price: "ETB 180",
        originalPrice: "ETB 255",
        badge: "Most Loved",
        badgeColor: "bg-[#C0922F]",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
    },
];

export default function SpecialOffers() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="offers" className="py-24 bg-[#F9F5EE]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C0922F] font-semibold mb-3">
                        <Sparkles className="w-3.5 h-3.5" /> Limited Time
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A]">
                        Special <span className="text-[#C0922F] italic">Offers</span>
                    </h2>
                    <p className="text-[#6b6b6b] mt-4 max-w-lg mx-auto leading-relaxed">
                        Handpicked deals crafted to make your visit even more memorable.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-7">
                    {offers.map((offer, i) => {
                        const Icon = offer.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.1 * i }}
                                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400 group flex flex-col"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={offer.image}
                                        alt={offer.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                                    />
                                    {/* Badge */}
                                    <span className={`absolute top-3 right-3 ${offer.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                                        {offer.badge}
                                    </span>
                                    {/* Tag */}
                                    <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-[#1A1A1A] text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                                        <Icon className="w-3.5 h-3.5 text-[#C0922F]" />
                                        {offer.tag}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="font-heading text-xl text-[#1A1A1A] font-semibold mb-2">
                                        {offer.title}
                                    </h3>
                                    <p className="text-[#6b6b6b] text-sm leading-relaxed mb-5 flex-1">
                                        {offer.description}
                                    </p>

                                    {/* Price row */}
                                    <div className="flex items-center justify-between pt-4 border-t border-[#f0ebe0]">
                                        <div>
                                            <span className="font-heading text-2xl text-[#C0922F] font-bold">
                                                {offer.price}
                                            </span>
                                            <span className="text-[#9a9a9a] text-sm line-through ml-2">
                                                {offer.originalPrice}
                                            </span>
                                        </div>
                                        <a
                                            href="#reservations"
                                            className="px-4 py-2 bg-[#C0922F] text-white text-xs font-semibold rounded-full hover:bg-[#D4A843] active:scale-95 transition-all duration-200"
                                        >
                                            Book Now
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-10 bg-[#C0922F]/8 border border-[#C0922F]/25 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                    <div>
                        <p className="font-heading text-lg text-[#1A1A1A]">
                            Planning a larger event?
                        </p>
                        <p className="text-[#6b6b6b] text-sm mt-0.5">
                            We cater for weddings, corporate events & more. Contact us for a custom quote.
                        </p>
                    </div>
                    <a
                        href="#reservations"
                        className="whitespace-nowrap px-6 py-3 rounded-full bg-[#C0922F] text-white font-semibold text-sm hover:bg-[#D4A843] hover:shadow-lg hover:shadow-[#C0922F]/30 transition-all duration-200"
                    >
                        Get a Quote
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
