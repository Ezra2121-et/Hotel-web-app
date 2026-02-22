import { useState, useEffect } from "react";
import { Menu, X, UtensilsCrossed } from "lucide-react";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Location", href: "#location" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = () => setMenuOpen(false);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "bg-[#0D0D0D]/95 backdrop-blur-md shadow-lg shadow-black/30 py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-2.5 group">
                    <span className="p-2 rounded-full bg-[#C0922F]/10 group-hover:bg-[#C0922F]/20 transition-colors">
                        <UtensilsCrossed className="w-5 h-5 text-[#C0922F]" />
                    </span>
                    <span className="font-heading text-xl text-[#F9F5EE] tracking-wide">
                        Ever Food Zone
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-[#9a9a9a] hover:text-[#C0922F] transition-colors duration-200 tracking-wide"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* CTA Button */}
                <a
                    href="#reservations"
                    className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C0922F] text-[#0D0D0D] text-sm font-semibold hover:bg-[#D4A843] transition-all duration-200 hover:shadow-lg hover:shadow-[#C0922F]/30 active:scale-95"
                >
                    Reserve a Table
                </a>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-[#F9F5EE] p-2"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="bg-[#0D0D0D]/98 backdrop-blur-md px-6 py-4 flex flex-col gap-5 border-t border-[#2a2a2a]">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={handleLinkClick}
                            className="text-[#F9F5EE] hover:text-[#C0922F] transition-colors font-medium"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#reservations"
                        onClick={handleLinkClick}
                        className="inline-flex justify-center px-5 py-3 rounded-full bg-[#C0922F] text-[#0D0D0D] font-semibold hover:bg-[#D4A843] transition-colors"
                    >
                        Reserve a Table
                    </a>
                </nav>
            </div>
        </header>
    );
}
