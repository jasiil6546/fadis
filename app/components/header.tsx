"use client";

import Logo from "../../public/Fadis Bites__Logo-01.png";
import { useEffect, useState } from "react";
import Image from "next/image";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group relative inline-flex cursor-pointer items-center px-1 py-1.5 font-body text-base font-medium tracking-[0.02em] text-white/90 hover:text-white transition-colors"
    >
      <span>{children}</span>
      {/* Sliding Underline from Center */}
      <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-yellow transition-all duration-300 ease-out group-hover:w-full" />
    </a>
  );
}

export default function Header() {
  const [alertDismissed, setAlertDismissed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [animateCart, setAnimateCart] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const showAlert = !alertDismissed;

  // Track scroll position to trigger floating state
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      setIsScrolled(scrollPos > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Listen to Lenis scroll if available
    let lenisListener: any = null;
    const intervalId = setInterval(() => {
      const win = window as any;
      if (win.lenis) {
        clearInterval(intervalId);
        lenisListener = (e: any) => {
          const scrollPos = e?.scroll ?? win.lenis.scroll ?? window.scrollY ?? 0;
          setIsScrolled(scrollPos > 20);
        };
        win.lenis.on("scroll", lenisListener);
      }
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(intervalId);
      const win = window as any;
      if (win.lenis && lenisListener) {
        win.lenis.off("scroll", lenisListener);
      }
    };
  }, []);

  // Listen to cart addition events
  useEffect(() => {
    const handleAddToCart = () => {
      setCartCount((prev) => prev + 1);
      setAnimateCart(true);
      setTimeout(() => setAnimateCart(false), 500);
    };
    window.addEventListener("add-to-cart", handleAddToCart);
    return () => window.removeEventListener("add-to-cart", handleAddToCart);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up-fade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes cart-bounce {
          0% { transform: scale(1); }
          30% { transform: scale(1.3) rotate(-10deg); }
          50% { transform: scale(0.9) rotate(5deg); }
          70% { transform: scale(1.1) rotate(-3deg); }
          100% { transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .animate-slide-up-fade {
          animation: slide-up-fade 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .animate-cart-bounce {
          animation: cart-bounce 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
        }
      `}</style>

      {/* Alert Bar - Commented Out
      {showAlert && (
        <div
          id="promo-alert"
          className="relative h-8 border-b border-green-border bg-beige-light flex items-center justify-center px-14 select-none z-50 transition-all duration-300"
        >
          <div className="flex items-center justify-center">
            <p className="text-center font-body text-xs font-semibold leading-normal tracking-[0.03em] text-green sm:text-sm">
              Buy one pack of samosas, get one free — this week only!
            </p>
          </div>
          <button
            type="button"
            onClick={() => setAlertDismissed(true)}
            className="absolute top-1/2 right-2.5 flex size-5 -translate-y-1/2 items-center justify-center text-green hover:opacity-75 transition-opacity"
            aria-label="Dismiss promotion"
          >
            <Image
              src="https://framerusercontent.com/images/FJCGbmYzWCc01WV2LgRDPlTcsU.svg"
              alt=""
              width={16}
              height={16}
              className="size-3.5"
            />
          </button>
        </div>
      )}
      */}

      {/* Header Container */}
      <header
        className="pointer-events-none fixed right-0 left-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          top: "0px",
        }}
        aria-label="Site navigation"
      >
        <nav
          className="pointer-events-auto w-full px-4 py-4 tablet:px-6 transition-all duration-500"
          aria-label="Main"
        >
          <div
            className={`mx-auto w-full rounded-pill  px-6 transition-all duration-1200 ease-out ${isScrolled
                ? "max-w-[960px] py-2.5 mt-2 border border-white/10 shadow-[0_12px_32px_rgba(201,0,10,0.22)]"
                : "max-w-[1700px] py-4 mt-0"
              }`}
            style={{
              backgroundColor: isScrolled ? "rgba(201, 0, 10, 0.95)" : "rgba(201, 0, 10, 0.85)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            {/* Desktop Navigation */}
            <div className="hidden desktop:flex items-center justify-between">
              {/* Brand Branding (Left) - Logo Only */}
              <div className="w-[140px]">
                <a
                  href="/"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-all hover:scale-110 hover:shadow-lg overflow-hidden"
                  aria-label="Fadi's Bites home"
                >
                  <Image
                    src={Logo}
                    alt="Fadi's Bites logo"
                    width={40}
                    height={40}
                    className="h-full w-full object-contain p-1.5"
                    priority
                  />
                </a>
              </div>

              {/* Navigation Menu (Center) */}
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-8">
                  <NavLink href="/menu">Menu</NavLink>
                  <NavLink href="/#testimonials">Reviews</NavLink>
                  <NavLink href="/#about">About Us</NavLink>
                  <NavLink href="/#blog">Blog</NavLink>
                </div>
              </div>

              {/* Actions (Right) */}
              <div className="w-[140px] flex justify-end">
                <div
                  className="flex items-center gap-4 rounded-pill px-5 py-2 border border-white/10 bg-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-500"
                >
                  <a
                    href="#login"
                    className="font-body text-sm font-medium tracking-[0.02em] text-white hover:text-yellow transition-colors"
                  >
                    Login
                  </a>
                  <span className="w-px h-3.5 bg-white/25"></span>
                  <a
                    href="#cart"
                    className={`relative flex items-center justify-center text-white hover:text-yellow transition-all duration-200 ${animateCart ? "animate-cart-bounce text-yellow" : ""
                      }`}
                    aria-label="Shopping Cart"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    {cartCount > 0 && (
                      <span className="absolute -top-2 -right-2.5 flex h-4.5 min-w-[18px] items-center justify-center rounded-full bg-yellow px-1 text-[9px] font-extrabold text-green leading-none shadow-sm animate-pulse">
                        {cartCount}
                      </span>
                    )}
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Navigation (Viewport < 1160px) */}
            <div className="flex desktop:hidden items-center justify-between">
              {/* Logo Only */}
              <a
                href="/"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-all hover:scale-105 overflow-hidden shadow-sm"
                aria-label="Fadi's Bites home"
              >
                <Image
                  src={Logo}
                  alt="Fadi's Bites logo"
                  width={34}
                  height={34}
                  className="h-full w-full object-contain p-1"
                />
              </a>

              {/* Actions Right */}
              <div className="flex items-center gap-3">
                {/* Cart Icon */}
                <a
                  href="#cart"
                  className={`relative flex size-9 items-center justify-center rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-all duration-200 ${animateCart ? "animate-cart-bounce text-yellow bg-white/20" : ""
                    }`}
                  aria-label="Shopping Cart"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                  {cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-yellow px-1 text-[8px] font-extrabold text-green leading-none shadow-sm animate-pulse">
                      {cartCount}
                    </span>
                  )}
                </a>

                {/* Hamburger Toggle */}
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="relative flex size-9 items-center justify-center rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-all focus:outline-none shadow-sm"
                  aria-label="Toggle Menu"
                >
                  <div className="relative size-4">
                    <span
                      className={`absolute left-0 right-0 h-[2px] bg-current rounded transition-all duration-300 ${isMobileMenuOpen ? "top-[7px] rotate-45" : "top-[2px]"
                        }`}
                    />
                    <span
                      className={`absolute left-0 right-0 h-[2px] bg-current rounded transition-all duration-300 ${isMobileMenuOpen ? "top-[7px] -rotate-45" : "top-[7px]"
                        }`}
                    />
                    <span
                      className={`absolute left-0 right-0 h-[2px] bg-current rounded transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "top-[12px]"
                        }`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-45 bg-green/98 backdrop-blur-lg flex flex-col justify-center animate-fade-in">
          <div className="flex flex-col items-center justify-center gap-7 text-center px-6">
            <a
              href="/menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-display font-bold text-white hover:text-yellow transition-colors animate-slide-up-fade"
              style={{ animationDelay: "100ms" }}
            >
              Menu
            </a>
            <a
              href="/#testimonials"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-display font-bold text-white hover:text-yellow transition-colors animate-slide-up-fade"
              style={{ animationDelay: "150ms" }}
            >
              Reviews
            </a>
            <a
              href="/#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-display font-bold text-white hover:text-yellow transition-colors animate-slide-up-fade"
              style={{ animationDelay: "200ms" }}
            >
              About Us
            </a>
            <a
              href="/#blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-display font-bold text-white hover:text-yellow transition-colors animate-slide-up-fade"
              style={{ animationDelay: "250ms" }}
            >
              Blog
            </a>
            <span
              className="w-10 h-px bg-white/20 my-2 animate-slide-up-fade"
              style={{ animationDelay: "300ms" }}
            />
            <a
              href="#login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-body font-medium text-white/80 hover:text-yellow transition-colors animate-slide-up-fade"
              style={{ animationDelay: "350ms" }}
            >
              Login
            </a>
          </div>
        </div>
      )}
    </>
  );
}
