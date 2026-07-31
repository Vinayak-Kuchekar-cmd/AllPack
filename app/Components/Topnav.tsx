"use client";
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Button } from "./Ui/button";
import QuoteButtonWithPopup from "./getQuotePopup";
import { FaWhatsapp, FaTruck } from "react-icons/fa";

interface SubMenuItem {
  name: string;
  href: string;
  subItems?: SubMenuItem[];
}

interface MenuItem {
  name: string;
  href: string;
  subItems?: SubMenuItem[];
  icon?: React.ReactNode;
}

export default function Topnav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(
    null,
  );
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
  const [mobileActiveSubMenu, setMobileActiveSubMenu] = useState<string | null>(
    null,
  );
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const whatsAppPhoneNumber = "918805519081"; // include country code, no +
  const whatsAppMessage =
    "Hello, I would like to get a quote for your packaging products.";

  const whatsappUrl = `https://wa.me/${whatsAppPhoneNumber}?text=${encodeURIComponent(whatsAppMessage)}`;

  const menuItems: MenuItem[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Our Products",
      href: "/product",
      subItems: [
        {
          name: "5Kg Fertilizer Bags", 
          href: "/product/fertilizer-bags#5kgFertilizerBag", 
        },
        {
          name: "10Kg Fertilizer Bags",
          href: "/product/fertilizer-bags#10kgFertilizerBag",
        },
        {
          name: "25Kg Fertilizer Bags", 
          href: "/product/fertilizer-bags#25kgFertilizerBag",  
        },
        {
          name: "50Kg Fertilizer Bags",
          href: "/product/fertilizer-bags#50kgFertilizerBag", 
        },

        // {
        //   name: "Fertilizer Bags",
        //   href: "/product/fertilizer-bags",
        //   subItems: [
        //     {
        //       name: "Printed Fertilizer Bag",
        //       href: "/product/fertilizer-bags#printed-packaging",
        //     },
        //     {
        //       name: "Plain PP Fertilizer Bag",
        //       href: "/product/fertilizer-bags#plain-pp",
        //     },
        //     {
        //       name: "Dap Fertilizer Bag",
        //       href: "/product/fertilizer-bags#dapFertilizerBag",
        //     },
        //     {
        //       name: "White Fertilizer Packaging Bag",
        //       href: "/product/fertilizer-bags#whiteFertilizerBag",
        //     },
        //     {
        //       name: "25Kg Fertilizer Bag",
        //       href: "/product/fertilizer-bags#25kgFertilizerBag",
        //     },
        //   ],
        // },
        // {
        //   name: "Feed Bags",
        //   href: "/product/feed-bags",
        //   subItems: [
        //     {
        //       name: "Animal Feed Packaging Bag",
        //       href: "/product/feed-bags#animal-feed-packaging-bag",
        //     },
        //     {
        //       name: "Animal Feed Bag",
        //       href: "/product/feed-bags#animal-feed-packaging-bag-two",
        //     },
        //     {
        //       name: "Plain Animal Feed Bag",
        //       href: "/product/feed-bags#animal-feed-bag",
        //     },
        //   ],
        // },
        // {
        //   name: "Agricultural Bags",
        //   href: "/product/agricultural-bags",
        //   subItems: [
        //     {
        //       name: "Agricultural Packaging Bag",
        //       href: "/product/agricultural-bags/packaging",
        //     },
        //     {
        //       name: "25 Kg Agricultural Bag",
        //       href: "/product/agricultural-bags/25kg",
        //     },
        //     {
        //       name: "1 kg fertilizer Packaging Pouch",
        //       href: "/product/agricultural-bags/1kg-pouch",
        //     },
        //   ],
        // },
        // {
        //   name: "PP Bags",
        //   href: "/product/pp-bags",
        //   subItems: [
        //     {
        //       name: "25kg NPK fertilizer Bag",
        //       href: "/product/pp-bags/25kg-npk",
        //     },
        //     { name: "PP Woven Bag", href: "/product/pp-bags/woven" },
        //   ],
        // },
        // {
        //   name: "Loop Handle Bags",
        //   href: "/product/loop-handle-bags",
        //   subItems: [
        //     {
        //       name: "10Kg Loop Handle Bag",
        //       href: "/product/loop-handle-bags/10kg",
        //     },
        //     {
        //       name: "5Kg Loop Handle Non Woven Bag",
        //       href: "/product/loop-handle-bags/5kg-non-woven",
        //     },
        //   ],
        // },
        // {
        //   name: "Fertilizer Packaging Bag",
        //   href: "/products/fertilizer-packaging",
        //   subItems: [
        //     {
        //       name: "Fertilizer Standy Pouch",
        //       href: "/products/fertilizer-packaging/standy-pouch",
        //     },
        //   ],
        // },
        // {
        //   name: "BOPP Laminated Woven Bags",
        //   href: "/products/bopp-laminated",
        //   subItems: [
        //     {
        //       name: "Pvc Packaging Pouch",
        //       href: "/products/bopp-laminated/pvc-pouch",
        //     },
        //   ],
        // },
        // {
        //   name: "Organic Fertilizer",
        //   href: "/product/organic-fertilizer",
        //   subItems: [
        //     {
        //       name: "25kg Water Soluble Fertilizer Bag",
        //       href: "/products/organic-fertilizer/25kg-water-soluble",
        //     },
        //     {
        //       name: "Npk Fertilizer",
        //       href: "/products/organic-fertilizer/npk",
        //     },
        //   ],
        // },
      ],
    },
    // {
    //   name: "Services",
    //   href: "/services",
    //   subItems: [
    //     { name: "Custom Design Services", href: "/services/custom-design" },
    //     { name: "Product Development", href: "/services/product-development" },
    //     {
    //       name: "Regulatory Compliance",
    //       href: "/services/regulatory-compliance",
    //     },
    //     {
    //       name: "Production & Delivery",
    //       href: "/services/production-delivery",
    //     },
    //   ],
    // },
    {
      name: "About",
      href: "/about",
      // subItems: [
      //   { name: "Our Story", href: "/about/story" },
      //   { name: "Our Team", href: "/about/team" },
      //   { name: "Certifications", href: "/about/certifications" },
      //   { name: "Quality Assurance", href: "/about/quality" },
      // ],
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Track Order",
      href: "/order-status",
      icon: <FaTruck className="mr-1.5 h-3.5 w-3.5" />,
    },
  ];

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  const handleMouseEnter = (menuName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    }, 150);
  };

  const handleSubMouseEnter = (subMenuName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveSubDropdown(subMenuName);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const toggleMobileMenu = (menuName: string) => {
    setMobileActiveMenu(mobileActiveMenu === menuName ? null : menuName);
    setMobileActiveSubMenu(null);
  };

  const toggleMobileSubMenu = (subMenuName: string) => {
    setMobileActiveSubMenu(
      mobileActiveSubMenu === subMenuName ? null : subMenuName,
    );
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-black/95 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:text-orange-500"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </Button>
            <div className="flex items-center space-x-2">
              <Link href="/">
                <Image
                  src="/allpacklogo.png"
                  alt="logo"
                  height={100}
                  width={100}
                  priority
                  className="h-full w-full object-cover hover:opacity-75 transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.subItems && handleMouseEnter(item.name)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className="flex items-center text-xl font-light text-white hover:text-orange-500 transition-colors"
                  >
                    {item.icon}
                    {item.name}
                    {item.subItems && (
                      <FaChevronDown className="ml-1 h-3 w-3" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.subItems && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                      {item.subItems.map((subItem) => (
                        <div
                          key={subItem.name}
                          className="relative"
                          onMouseEnter={() =>
                            subItem.subItems &&
                            handleSubMouseEnter(subItem.name)
                          }
                        >
                          <Link
                            href={subItem.href}
                            className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                          >
                            <span>{subItem.name}</span>
                            {subItem.subItems && (
                              <FaChevronRight className="h-4 w-4" />
                            )}
                          </Link>

                          {/* Sub-dropdown Menu */}
                          {subItem.subItems &&
                            activeSubDropdown === subItem.name && (
                              <div className="absolute top-0 left-full ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                                {subItem.subItems.map((subSubItem) => (
                                  <Link
                                    key={subSubItem.name}
                                    href={subSubItem.href}
                                    className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                                  >
                                    {subSubItem.name}
                                  </Link>
                                ))}
                                <div className="border-t border-gray-100 mt-2 pt-2">
                                  <Link
                                    href={subItem.href}
                                    className="block px-4 py-2 text-orange-600 font-medium hover:bg-orange-50 transition-colors"
                                  >
                                    VIEW ALL →
                                  </Link>
                                </div>
                              </div>
                            )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2
             bg-[#25D366] hover:bg-[#1ebe5d]
             text-white
             px-4
             py-2
             text-sm md:text-base
             font-medium
             rounded-full
             shadow-md
             transition-all duration-300
             whitespace-nowrap"
              >
                <FaWhatsapp className="text-xl md:text-2xl text-white" />
                <span className="hidden sm:inline">WhatsApp</span>
                <span className="sm:hidden">Chat</span>
              </a>

              <QuoteButtonWithPopup
              className="flex rounded-full text-md bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
              size="md"
            />
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* BACKDROP OVERLAY */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* SIDEBAR */}
          <div className="absolute top-0 left-0 w-4/5 h-screen bg-white text-black shadow-lg overflow-y-auto">
            <div className="flex items-center justify-between p-2">
              <Image
                src="/logoallpack.png"
                alt="logo"
                height={40}
                width={120}
              />
              <Button
                variant="ghost"
                size="icon"
                className="text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaTimes className="h-6 w-6" />
              </Button>
            </div>

            <nav className="flex flex-col p-4 space-y-4 bg-white">
              {menuItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="flex items-center text-lg font-medium text-gray-800 hover:text-orange-500 transition-colors"
                      onClick={() =>
                        !item.subItems && setIsMobileMenuOpen(false)
                      }
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                    {item.subItems && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-800 hover:text-orange-500 p-1"
                        onClick={() => toggleMobileMenu(item.name)}
                      >
                        <FaChevronDown
                          className={`h-4 w-4 transition-transform ${
                            mobileActiveMenu === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </Button>
                    )}
                  </div>

                  {/* Mobile Submenu */}
                  {item.subItems && mobileActiveMenu === item.name && (
                    <div className="ml-4 space-y-2 border-l-2 border-orange-500 pl-4">
                      {item.subItems.map((subItem) => (
                        <div key={subItem.name} className="space-y-1">
                          <div className="flex items-center justify-between">
                            <Link
                              href={subItem.href}
                              className="text-gray-600 hover:text-orange-500 transition-colors"
                              onClick={() =>
                                !subItem.subItems && setIsMobileMenuOpen(false)
                              }
                            >
                              {subItem.name}
                            </Link>
                            {subItem.subItems && (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-gray-600 hover:text-orange-500 p-1"
                                onClick={() =>
                                  toggleMobileSubMenu(subItem.name)
                                }
                              >
                                <FaChevronDown
                                  className={`h-3 w-3 transition-transform ${
                                    mobileActiveSubMenu === subItem.name
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </Button>
                            )}
                          </div>

                          {/* Mobile Sub-submenu */}
                          {subItem.subItems &&
                            mobileActiveSubMenu === subItem.name && (
                              <div className="ml-4 space-y-1 border-l border-gray-600 pl-3">
                                {subItem.subItems.map((subSubItem) => (
                                  <Link
                                    key={subSubItem.name}
                                    href={subSubItem.href}
                                    className="block text-sm text-gray-500 hover:text-orange-500 transition-colors py-1"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {subSubItem.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
