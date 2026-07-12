import type { Metadata } from "next";
import { Button } from "../Components/Ui/button"
import { Badge } from "../Components/Ui/badge"
import { Card, CardContent } from "../Components/Ui/card"
import { FaArrowRight, FaBox, FaPalette, FaShieldAlt, FaTruck, FaUsers, FaAward, FaCheckCircle, FaEye } from 'react-icons/fa';

import Image from "next/image"

export const metadata: Metadata = {
  title: "Packaging Services - BOPP Bags, Poly Pouches, Corrugated Boxes & Stickers",
  description:
    "Explore Allpack's packaging services: BOPP laminated bags, poly pouches printing, corrugated boxes manufacturing, and printed stickers and labels for agriculture, aquaculture, and cattle feed businesses. Custom branding and bulk order discounts.",
  keywords:
    "BOPP laminated bags, poly pouches printing, corrugated boxes manufacturer, printed stickers and labels, custom printed poly pouches, agricultural packaging bags, fertilizer packaging solutions",
};
 
export default function Service() {
  const fertilizerBags = [
    {   
      id: 1,
      name: "Printed Fertilizer Bag",
      image: "/fertilizer1.webp",
      description: "High-quality printed fertilizer bags with vibrant colors and clear product information",
    },
    {
      id: 2,
      name: "Plain PP Fertilizer Bag",
      image: "/fertilizer2.webp",
      description: "Durable plain polypropylene bags for various fertilizer products",
    },
    {
      id: 3,
      name: "Dap Fertilizer Bag",
      image: "/fertilizer3.webp",
      description: "Specialized DAP fertilizer packaging with regulatory compliance",
    },
    {
      id: 4,
      name: "White Fertilizer Packaging Bag",
      image: "/fertilizer4.webp",
      description: "Clean white packaging design for premium fertilizer products",
    },
    {
      id: 5,
      name: "25Kg Fertilizer Bag",
      image: "/fertilizer5.webp",
      description: "Standard 25kg capacity fertilizer bags with reinforced construction",
    },
  ]

  const feedBags = [
    {
      id: 1,
      name: "Animal Feed Packaging Bag",
      image: "/feed1.webp",
      description: "Colorful and attractive animal feed packaging solutions",
    },
    {
      id: 2,
      name: "Animal Feed Packaging Bag",
      image: "/feed2.webp",
      description: "Professional feed packaging with nutritional information display",
    },
    {
      id: 3,
      name: "Animal Feed Bag",
      image: "/feed3.webp",
      description: "Multi-color animal feed bags for different product categories",
    },
    {
      id: 4,
      name: "Plain Animal Feed Bag",
      image: "/feed4.webp",
      description: "Simple and cost-effective plain feed bag solutions",
    },
  ]

  const agriculturalBags = [
    {
      id: 1,
      name: "Agricultural Packaging Bag",
      image: "/agri1.webp",
      description: "Comprehensive agricultural packaging for various farm products",
    },
    {
      id: 2,
      name: "25 Kg Agricultural Bag",
      image: "/agri2.webp",
      description: "Heavy-duty 25kg agricultural bags for bulk products",
    },
    {
      id: 3,
      name: "1 kg fertilizer Packaging Pouch",
      image: "/agri3.webp",
      description: "Small format pouches for retail fertilizer packaging",
    },
  ]

  const ppBags = [
    {
      id: 1,
      name: "25kg NPK fertilizer Bag",
      image: "/ppBag1.webp",
      description: "Specialized NPK fertilizer bags with technical specifications",
    },
    {
      id: 2,
      name: "PP Woven Bag",
      image: "/ppBag2.webp",
      description: "Durable PP woven bags for industrial applications",
    },
  ]

  const services = [
    {
      icon: FaPalette,
      title: "Custom Design Services",
      description: "Professional packaging design tailored to your brand identity and product requirements.",
      features: ["Brand Strategy", "Color Psychology", "Typography Selection", "Visual Hierarchy"],
    },
    {
      icon: FaBox,
      title: "Product Development",
      description: "Complete product development from concept to final packaging solution.",
      features: ["Concept Development", "Prototyping", "Material Selection", "Testing & Validation"],
    },
    {
      icon: FaShieldAlt,
      title: "Regulatory Compliance",
      description: "Ensuring Allpackaging meets industry standards and regulatory requirements.",
      features: ["Safety Standards", "Labeling Requirements", "Environmental Compliance", "Quality Assurance"],
    },
    {
      icon: FaTruck,
      title: "Production & Delivery",
      description: "End-to-end production management with timely delivery solutions.",
      features: ["Quality Control", "Bulk Production", "Logistics Management", "On-time Delivery"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative py-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-gray-900/10" />
        <div className="container mx-auto px-4 lg:px-[5rem] relative">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="text-lg bg-orange-100 text-orange-700 hover:bg-orange-200">
              🎨 Our Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
              Professional
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                {" "}
                Packaging Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              From concept to delivery, we provide comprehensive packaging design and manufacturing services for
              agricultural, industrial, and consumer products.
            </p>
          </div>
        </div>
      </section>


      {/* Products Section */}
      <section className="py-5 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-[5rem]">
          <div className="text-center space-y-4 mb-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of packaging solutions
            </p>
          </div>

          {/* Fertilizer Bags */}
          <div className="mb-6 border-0 shadow-2xl p-4 rounded-lg bg-white">
            <div className="mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-4">Fertilizer Bags</h3>
              <p className="text-gray-600 mb-2">
                We are a leading provider of Printed Fertilizer Bag, Plain PP Fertilizer Bag, Dap Fertilizer Bag,
                White Fertilizer Packaging Bag and 25Kg Fertilizer Bag from Indore, India.
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
              {fertilizerBags.map((product) => (
                <div key={product.id} className="text-center">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={250}
                      height={200}
                    />
                  </div>
                  <h4 className="font-medium text-gray-900 mt-3">{product.name}</h4>
                </div>
              ))}
            </div>

            <div className="text-right">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View more details
              </Button>
            </div>
          </div>

          {/* Feed Bags */}
            <div className="mb-6 border-0 shadow-2xl p-4 rounded-lg bg-white">
            <div className="mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-4">Feed Bags</h3>
              <p className="text-gray-600 mb-2">
                Offering you a complete choice of products which include Animal Feed Packaging Bag, Animal Feed Bag and
                Plain Animal Feed Bag.
              </p>
              
            </div>

            <div className="flex flex-row gap-8 mb-8">
              {feedBags.map((product) => (
                <div key={product.id} className="text-center">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={250}
                      height={200}
                      className="w-64 h-48 object-cover"
                    />
                  </div>
                  <h4 className="font-medium text-gray-900 mt-3">{product.name}</h4>
                </div>
              ))}
            </div>

            <div className="text-right">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View more details
              </Button>
            </div>
          </div>

          {/* Agricultural Bags */}
            <div className="mb-6 border-0 shadow-2xl p-4 rounded-lg bg-white">
            <div className="mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-4">Agricultural Bags</h3>
              <p className="text-gray-600 mb-2">
                Prominent & Leading provider from Indore, we offer Agricultural Packaging Bag, 25 Kg Agricultural
                Bag and 1 kg fertilizer Packaging Pouch.
              </p>
            </div>

            <div className="flex flex-row gap-6 mb-8">
              {agriculturalBags.map((product) => (
                <div key={product.id} className="text-center">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={250}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-medium text-gray-900 mt-3">{product.name}</h4>
                </div>
              ))}
            </div>

            <div className="text-right">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View more details
              </Button>
            </div>
          </div>

          {/* PP Bags */}
          <div className="mb-6 border-0 shadow-2xl p-4 rounded-lg bg-white">
            <div className="mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-blue-600 mb-4">PP Bags</h3>
              <p className="text-gray-600 mb-2">
                Prominent & Leading provider from Indore, we offer 25kg NPK fertilizer Bag and PP Woven Bag.
              </p>
            </div>

            <div className="flex flex-row gap-6 mb-8">
              {ppBags.map((product) => (
                <div key={product.id} className="text-center">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={250}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-medium text-gray-900 mt-3">{product.name}</h4>
                </div>
              ))}
            </div>

            <div className="text-right">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View more details
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-[5rem]">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive packaging solutions designed to meet your specific business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <FaCheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-[5rem]">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Why Choose Allpack ?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading expertise and commitment to quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">8+ Years Experience</h3>
              <p className="text-gray-600">Extensive experience in packaging design and manufacturing</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">100+ Happy Clients</h3>
              <p className="text-gray-600">Trusted by businesses across various industries</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBox className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">200+ Designs Created</h3>
              <p className="text-gray-600">Diverse portfolio of successful packaging solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 lg:px-[5rem] text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let&apos;s discuss your packaging needs and create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
              >
                Get Quote
                <FaArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-black hover:bg-white hover:text-gray-900"
              >
                <FaEye className="mr-2 h-5 w-5" />
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
