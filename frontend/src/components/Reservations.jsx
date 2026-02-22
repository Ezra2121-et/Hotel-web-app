import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Reservations() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [rooms, setRooms] = useState([]);
    const [formData, setFormData] = useState({
        guestName: "",
        phone: "",
        email: "",
        date: "",
        time: "18:00",
        guests: 1,
        roomId: "",
        specialRequests: ""
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/rooms');
                if (!response.ok) throw new Error('Failed to fetch rooms');
                const data = await response.json();
                setRooms(data);
                if (data.length > 0) {
                    setFormData(prev => ({ ...prev, roomId: data[0].id.toString() }));
                }
            } catch (err) {
                console.error('Rooms Fetch Error:', err);
            }
        };
        fetchRooms();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Check-out is not in the UI, so let's assume +2 hours for a restaurant reservation
            // or just use the same day since the backend expects checkIn/checkOut
            const checkIn = new Date(`${formData.date}T${formData.time}:00`);
            const checkOut = new Date(checkIn.getTime() + 2 * 60 * 60 * 1000); // +2 hours

            const response = await fetch('http://localhost:3001/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    roomId: parseInt(formData.roomId),
                    guestName: formData.guestName,
                    email: formData.email,
                    phone: formData.phone,
                    checkIn: checkIn.toISOString(),
                    checkOut: checkOut.toISOString(),
                    status: 'pending'
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to submit booking');
            }

            setSubmitted(true);
        } catch (err) {
            console.error('Booking Error:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
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
                                {error && (
                                    <div className="p-3 bg-red-50 text-red-500 text-sm rounded-xl border border-red-100 italic">
                                        {error}
                                    </div>
                                )}
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 tracking-wide uppercase">
                                            Full Name
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            name="guestName"
                                            value={formData.guestName}
                                            onChange={handleChange}
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
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+251 9XX XXX XXX"
                                            className="w-full px-4 py-3 rounded-xl border border-[#e0d9cf] bg-[#F9F5EE] text-[#1A1A1A] placeholder-[#9a9a9a] text-sm focus:outline-none focus:border-[#C0922F] transition-colors"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 tracking-wide uppercase">
                                        Email Address
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="almaz@example.com"
                                        className="w-full px-4 py-3 rounded-xl border border-[#e0d9cf] bg-[#F9F5EE] text-[#1A1A1A] placeholder-[#9a9a9a] text-sm focus:outline-none focus:border-[#C0922F] transition-colors"
                                    />
                                </div>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 tracking-wide uppercase">
                                            Date
                                        </label>
                                        <input
                                            required
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-[#e0d9cf] bg-[#F9F5EE] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#C0922F] transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 tracking-wide uppercase">
                                            Time
                                        </label>
                                        <select
                                            required
                                            name="time"
                                            value={formData.time}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-[#e0d9cf] bg-[#F9F5EE] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#C0922F] transition-colors"
                                        >
                                            <option value="">Select time</option>
                                            {["08:00", "12:00", "13:00", "14:00", "18:00", "19:00", "20:00", "21:00"].map(t => (
                                                <option key={t} value={t}>{t}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 tracking-wide uppercase">
                                            Dining Area / Room
                                        </label>
                                        <select
                                            required
                                            name="roomId"
                                            value={formData.roomId}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-[#e0d9cf] bg-[#F9F5EE] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#C0922F] transition-colors"
                                        >
                                            <option value="">Select an area</option>
                                            {rooms.map(room => (
                                                <option key={room.id} value={room.id}>{room.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 tracking-wide uppercase">
                                            Number of Guests
                                        </label>
                                        <select
                                            required
                                            name="guests"
                                            value={formData.guests}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-[#e0d9cf] bg-[#F9F5EE] text-[#1A1A1A] text-sm focus:outline-none focus:border-[#C0922F] transition-colors"
                                        >
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map(n => (
                                                <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
                                            ))}
                                            <option value="large">Large group (10+)</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 tracking-wide uppercase">
                                        Special Requests (optional)
                                    </label>
                                    <textarea
                                        rows={3}
                                        name="specialRequests"
                                        value={formData.specialRequests}
                                        onChange={handleChange}
                                        placeholder="Dietary needs, occasion, seating preferences..."
                                        className="w-full px-4 py-3 rounded-xl border border-[#e0d9cf] bg-[#F9F5EE] text-[#1A1A1A] placeholder-[#9a9a9a] text-sm focus:outline-none focus:border-[#C0922F] transition-colors resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-4 bg-[#C0922F] text-white font-semibold rounded-xl hover:bg-[#D4A843] hover:shadow-lg hover:shadow-[#C0922F]/30 active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {loading && <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />}
                                    {loading ? "Processing..." : "Confirm Reservation"}
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
