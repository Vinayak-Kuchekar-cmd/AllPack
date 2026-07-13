import type { Metadata } from "next";
import { FaPhone, FaMapPin } from 'react-icons/fa';
import { Badge } from "../Components/Ui/badge";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Button } from "../Components/Ui/button";
import ContactForm from "../Components/contact";

export const metadata: Metadata = {
  title: "Contact Us - Fertilizer Bag Suppliers Near You",
  description:
    "Get in touch with Allpack for bulk fertilizer packaging in India, custom branded fertilizer bags, and wholesale poly pouches supply. Your trusted packaging partner for fertilizer manufacturers.",
  keywords:
    "fertilizer bag suppliers near me,fertilizer bag suppliers in india, bulk fertilizer packaging India, custom branded fertilizer bags, wholesale poly pouches supplier, packaging partner for fertilizer manufacturers, contact Allpack",
};

export default function ContactPage() {
    return (

           <section id="contact" className="py-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 lg:px-[5rem]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-orange-500/20 text-orange-300 hover:bg-orange-500/30 text-lg">
                  Get In Touch
                </Badge>
                <h2 className="text-3xl lg:text-5xl font-bold">Ready to Create Amazing Packaging?</h2>
                <p className="text-xl text-gray-300">
                  Let&apos;s discuss your packaging design needs and create something that makes your product stand out
                  on the shelf and communicate effectively with your customers.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="h-5 w-5 text-orange-400" />
                  <span>adminallpack128@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="h-5 w-5 text-orange-400" />
                  <span>+91 88055 19081</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapPin className="h-5 w-5 text-orange-400" />
                  <span> Pune, India</span>
                </div>
              </div>

              <div className="flex space-x-4">
  {/* Email */}
  <a href="mailto:adminallpack128@gmail.com">
    <Button
      variant="secondary"
      size="icon"
      className="bg-white/10 hover:bg-white/20 text-white"
    >
      <FaEnvelope className="h-5 w-5" />
    </Button>
  </a>

  {/* Phone */}
  <a href="tel:+919876543210">
    <Button
      variant="secondary"
      size="icon"
      className="bg-white/10 hover:bg-white/20 text-white"
    >
      <FaPhoneAlt className="h-5 w-5" />
    </Button>
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/918805519081"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      variant="secondary"
      size="icon"
      className="bg-white/10 hover:bg-white/20 text-white"
    >
      <FaWhatsapp className="h-5 w-5" />
    </Button>
  </a>
</div>
            </div>
            <ContactForm />
            
          </div>
        </div>
      </section>
    )
}