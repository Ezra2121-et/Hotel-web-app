import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Reservations() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="reservations" className="py-24 bg-[#F9F5EE]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-xs uppercase tracking-[0.25em] text-[#C0922F] font-semibold mb-3">
                        Book Your Table
                    </p>
                    <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A]">
                        Make a <span className="text-[#C0922F] italic">Reservation</span>
                    </h2>
                    <p className="text-[#6b6b6b] mt-4 max-w-lg mx-auto">
                        Secure your spot and let us prepare a memorable Ethiopian dining experience for you.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="bg-white rounded-3xl p-8 shadow-md"
                    >
                        {submitted ? (
                            <div className="text-center py-10">
                                <div className="w-16 h-16 rounded-full bg-[#C0922F]/15 flex items-center justify-center mx-auto mb-5">
                                    <span className="text-3xl">🎉</span>
                                </div>
                                <h3 className="font-heading text-2xl text-[#1A1A1A] mb-3">Reservation Sent!</h3>
                                <p className="text-[#6b6b6b]">
                                    We've received your request. Our team will confirm via phone or email within the hour.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-6 text-sm text-[#C0922F] underline underline-offset-2"
                                >
                                    Make another reservation
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 tracking-wide uppercase">
                                            Full Name
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Almaz Haile"
                                            className="w-full px-4 py-3 rounded-xl border border-[#e0d9cf] bg-[#F9F5EE] text-[#1A1A1A] placeholder-[#9a9a9a] text-sm focus:outline-none focus:border-[#C0922F] transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 tracking-wide uppercase">
                                            Phone
                                        </label>
                                        <input
                                            required
                                            type="tel"
                                            placeholder="+251 9XX XXX XXX"
                                            className="w-full px-4 py-3 rounded-xl border border-[#e0d9cf] bg-[#F9F5EE] text-[#1A1A1A] placeholder-[#9a9a9a] text-sm focus:outline-none focus:border-[#C0922F] transition-colors"
                                        />
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 tracking-wide uppercase">
                                            Date
                                        </label>
                                        <input
                                            required
                                            type="date"
                                            className="w-full px-4 py-3 rounded-xl border border-[#e0d9cf] bg-[#F9F5EE] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#C0922F] transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 tracking-wide uppercase">
                                            Time
                                        </label>
                                        <select
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-[#e0d9cf] bg-[#F9F5EE] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#C0922F] transition-colors"
                                        >
                                            <option value="">Select time</option>
                                            {["08:00", "09:00", "10:00", "12:00", "13:00", "14:00", "18:00", "19:00", "20:00", "21:00"].map(t => (
                                                <option key={t} value={t}>{t}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 tracking-wide uppercase">
                                        Number of Guests
                                    </label>
                                    <select
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-[#e0d9cf] bg-[#F9F5EE] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#C0922F] transition-colors"
                                    >
                                        <option value="">Select guests</option>
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map(n => (
                                            <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
                                        ))}
                                        <option value="large">Large group (10+)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 tracking-wide uppercase">
                                        Special Requests (optional)
                                    </label>
                                    <textarea
                                        rows={3}
                                        placeholder="Dietary needs, occasion, seating preferences..."
                                        className="w-full px-4 py-3 rounded-xl border border-[#e0d9cf] bg-[#F9F5EE] text-[#1A1A1A] placeholder-[#9a9a9a] text-sm focus:outline-none focus:border-[#C0922F] transition-colors resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-[#C0922F] text-white font-semibold rounded-xl hover:bg-[#D4A843] hover:shadow-lg hover:shadow-[#C0922F]/30 active:scale-[0.98] transition-all duration-200"
                                >
                                    Confirm Reservation
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex flex-col gap-6"
                    >
                        {[
                            { icon: MapPin, title: "Find Us", desc: "HCVW+436, Gondar, Ethiopia" },
                            { icon: Phone, title: "Call Us", desc: "+251 58 XXX XXXX" },
                            { icon: Mail, title: "Email Us", desc: "everfoodzone@gmail.com" },
                            { icon: Clock, title: "Opening Hours", desc: "Mon – Sun: 7:00 AM – 10:00 PM" },
                        ].map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="flex items-start gap-5 bg-white rounded-2xl p-6 shadow-sm">
                                <div className="w-12 h-12 rounded-xl bg-[#C0922F]/10 flex items-center justify-center flex-shrink-0">
                                    <Icon className="w-5 h-5 text-[#C0922F]" />
                                </div>
                                <div>
                                    <p className="font-semibold text-[#1A1A1A] text-sm">{title}</p>
                                    <p className="text-[#6b6b6b] text-sm mt-0.5">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
