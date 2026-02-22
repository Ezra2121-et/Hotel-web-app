import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

const hours = [
    { day: "Monday – Friday", time: "7:00 AM – 10:00 PM" },
    { day: "Saturday", time: "7:00 AM – 11:00 PM" },
    { day: "Sunday", time: "8:00 AM – 9:00 PM" },
];

export default function Location() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="location" className="py-24 bg-[#0D0D0D]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <p className="text-xs uppercase tracking-[0.25em] text-[#C0922F] font-semibold mb-3">
                        Visit Us
                    </p>
                    <h2 className="font-heading text-4xl md:text-5xl text-[#F9F5EE]">
                        Find Us in <span className="text-[#C0922F] italic">Gondar</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="lg:col-span-2 rounded-3xl overflow-hidden h-80 lg:h-[420px] border border-[#2a2a2a]"
                    >
                        <iframe
                            title="Ever Food Zone Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.000000000001!2d37.461!3d12.603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDM2JzEwLjgiTiAzN8KwMjcnNDEuNiJF!5e0!3m2!1sen!2set!4v1677000000000!5m2!1sen!2set"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </motion.div>

                    {/* Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex flex-col gap-5"
                    >
                        {/* Address */}
                        <div className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <MapPin className="w-5 h-5 text-[#C0922F]" />
                                <p className="text-[#F9F5EE] font-semibold text-sm">Address</p>
                            </div>
                            <p className="text-[#9a9a9a] text-sm leading-relaxed">
                                HCVW+436<br />
                                Gondar, Amhara Region<br />
                                Ethiopia
                            </p>
                        </div>

                        {/* Hours */}
                        <div className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Clock className="w-5 h-5 text-[#C0922F]" />
                                <p className="text-[#F9F5EE] font-semibold text-sm">Opening Hours</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                {hours.map(({ day, time }) => (
                                    <div key={day} className="flex justify-between text-sm">
                                        <span className="text-[#9a9a9a]">{day}</span>
                                        <span className="text-[#C0922F] font-medium">{time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <a
                            href="https://maps.google.com/?q=12.603,37.461"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#C0922F] text-[#0D0D0D] font-semibold hover:bg-[#D4A843] hover:shadow-lg hover:shadow-[#C0922F]/30 transition-all duration-200 text-sm"
                        >
                            <MapPin className="w-4 h-4" />
                            Get Directions
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
