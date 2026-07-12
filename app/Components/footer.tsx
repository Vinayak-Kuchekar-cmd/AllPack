// import { FaBox, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from "next/link";
import { Button } from "./Ui/button";
import { FaEnvelope, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 lg:px-[5rem]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
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
              </div>
              <p className="text-gray-400">
                Professional packaging design services for agricultural,
                industrial, and consumer products.
              </p>
            </div>
          </div>
          <div className="justify-self-center">
            <div className="space-y-4 text-center">
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <p className="hover:text-orange-500 transition-colors">
                    Agricultural Packaging
                  </p>
                </li>
                <li>
                  <p className="hover:text-orange-500 transition-colors">
                    Industrial Design
                  </p>
                </li>
                <li>
                  <p className="hover:text-orange-500 transition-colors">
                    Brand Development
                  </p>
                </li>
                <li>
                  <p className="hover:text-orange-500 transition-colors">
                    Label Design
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect</h3>

              <div className="flex justify-center space-x-4">
                {/* Email */}
                <a
                  href="mailto:adminallpack128@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-orange-500"
                  >
                    <FaEnvelope className="h-5 w-5" />
                  </Button>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/918805519081"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-green-500"
                  >
                    <FaWhatsapp className="h-5 w-5" />
                  </Button>
                </a>

                {/* Call */}
                <a href="tel:+918805519081">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-400 hover:text-blue-500"
                  >
                    <FaPhoneAlt className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Allpack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
