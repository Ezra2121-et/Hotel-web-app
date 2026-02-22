import { UtensilsCrossed, Facebook, Instagram, Twitter } from "lucide-react";

const links = {
    Explore: [
        { label: "About Us", href: "#about" },
        { label: "Our Menu", href: "#menu" },
        { label: "Gallery", href: "#gallery" },
        { label: "Reviews", href: "#reviews" },
    ],
    Visit: [
        { label: "Make a Reservation", href: "#reservations" },
        { label: "Find Us", href: "#location" },
        { label: "Opening Hours", href: "#location" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-[#0D0D0D] border-t border-[#2a2a2a] pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-[#2a2a2a]">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2.5 mb-4">
                            <span className="p-2 rounded-full bg-[#C0922F]/10">
                                <UtensilsCrossed className="w-5 h-5 text-[#C0922F]" />
                            </span>
                            <span className="font-heading text-xl text-[#F9F5EE]">Ever Food Zone</span>
                        </div>
                        <p className="text-[#9a9a9a] text-sm leading-relaxed max-w-xs mb-6">
                            Authentic Ethiopian cuisine in the heart of Gondar. Where tradition
                            meets flavor, and every meal tells a story.
                        </p>
                        {/* Socials */}
                        <div className="flex gap-3">
                            {[
                                { Icon: Facebook, href: "#" },
                                { Icon: Instagram, href: "#" },
                                { Icon: Twitter, href: "#" },
                            ].map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    className="w-9 h-9 rounded-full border border-[#2a2a2a] flex items-center justify-center text-[#9a9a9a] hover:border-[#C0922F] hover:text-[#C0922F] transition-colors"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(links).map(([section, items]) => (
                        <div key={section}>
                            <p className="text-[#F9F5EE] font-semibold text-sm mb-4">{section}</p>
                            <ul className="flex flex-col gap-3">
                                {items.map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            className="text-[#9a9a9a] text-sm hover:text-[#C0922F] transition-colors"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#9a9a9a]">
                    <p>© {new Date().getFullYear()} Ever Food Zone · Gondar, Ethiopia</p>
                    <p className="text-xs">
                        Built with ❤️ · All prices in ETB · <a href="/admin/login" className="hover:text-[#C0922F] transition-colors underline underline-offset-2">Admin Login</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
