import Link from "next/link";
import { Button } from "./Components/Ui/button";
import {
  ArrowRight,
  CheckCircle,
  Download,
  Eye,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Package,
  Phone,
  Quote,
  Star,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardContent
} from "./Components/Ui/card";
import { Badge } from "./Components/Ui/badge";
import PortfolioCarousel from "./Components/portfolio-carousel";
import ContactForm from "./Components/contact";

export default function Component() {
  const portfolioItems = [
    {
      id: 1,
      title: "Ferrus Salphate",
      category: "Agricultural Fertilizer",
      image: "/HomePage1.jpeg",
      description:
        "Nutrient fertilizer packaging with vibrant pink design and clear product specifications",
      colors: ["#E91E63", "#4CAF50", "#FF9800"],
    },
    {
      id: 2,
      title: "Magnesium Sulfate",
      category: "Agricultural Fertilizer",
      image: "/HomePage2.jpeg",
      description:
        "25kg fertilizer package with bright yellow branding and detailed application instructions",
      colors: ["#FFEB3B", "#4CAF50", "#FF9800"],
    },
    {
      id: 3,
      title: "Superblast Sulphur 90%",
      category: "Agricultural Fertilizer",
      image: "/HomePage3.jpeg",
      description:
        "Professional green packaging design for granular sulfur with clear product benefits",
      colors: ["#4CAF50", "#8BC34A", "#FF9800"],
    },
    {
      id: 4,
      title: "Zinc Sulfate Heptahydrate",
      category: "Agricultural Fertilizer",
      image: "/HomePage4.jpeg",
      description:
        "Orange-themed nutrient fertilizer with detailed composition and usage guidelines",
      colors: ["#FF9800", "#4CAF50", "#FFC107"],
    },
    {
      id: 5,
      title: "Growmeal Multi Micronutrient",
      category: "Agricultural Fertilizer",
      image: "/HomePage5.jpeg",
      description:
        "Purple premium packaging for multi-micronutrient fertilizer with comprehensive product details",
      colors: ["#9C27B0", "#4CAF50", "#FF9800"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-gray-900/95 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              {/* <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center"> */}
              {/* <Package className="h-5 w-5 text-white" /> */}
              {/* <Link href="/"> */} {/* Set the size on parent */}
              <Image
                src="/AllPackLogo.jpg"
                alt="logo"
                height={100}
                width={100}
                priority
                className="h-full w-full object-cover hover:opacity-75 transition-transform duration-500 group-hover:scale-110 cursor-pointer"
              />
              {/* </Link> */}
              {/* </div> */}
              {/* <span className="text-xl font-bold text-white">
                <span className="text-orange-500">All Pack</span> Pro Design
              </span> */}
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#home"
                className="text-lg font-medium text-gray-300 hover:text-orange-500 transition-colors"
              >
                Home
              </Link>
              <Link
                href="#portfolio"
                className="text-lg font-medium text-gray-300 hover:text-orange-500 transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="#services"
                className="text-lg font-medium text-gray-300 hover:text-orange-500 transition-colors"
              >
                Services
              </Link>
              <Link
                href="#about"
                className="text-lg font-medium text-gray-300 hover:text-orange-500 transition-colors"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-lg font-medium text-gray-300 hover:text-orange-500 transition-colors"
              >
                Contact
              </Link>
            </nav>

            <Button className="text-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
              Get Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-gray-900/10" />
        <div className="container mx-auto px-4 lg:px-[5rem] relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge
                variant="secondary"
                className="text-lg bg-orange-100 text-orange-700 hover:bg-orange-200"
              >
                🎨 Professional Packaging Designer
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
                Creative
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  {" "}
                  Package Designs
                </span>
                <br />
                That Sell
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Specializing in agricultural, industrial, and consumer product
                packaging that combines eye-catching design with clear product
                communication and brand consistency.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                >
                  View Portfolio
                  <Eye className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Catalog
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">200+</div>
                  <div className="text-sm text-gray-600">Designs Created</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">100+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">8+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Industry Expertise
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                    Regulatory Compliance
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                    Brand Strategy
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                    Market Research
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                    Print Production
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative group">
                    <Image
                      src="/HomeDemo1.jpeg"
                      alt="Ferrus Salphate Package Design"
                      width={300}
                      height={300}
                      className="rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative group">
                    <Image
                      src="/HomeDemo2.jpeg"
                      alt="Zinc Sulfate Package Design"
                      width={300}
                      height={300}
                      className="rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="relative group">
                    <Image
                      src="/HomeDemo3.jpeg"
                      alt="Magnesium Sulfate Package Design"
                      width={300}
                      height={300}
                      className="rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative group">
                    <Image
                      src="/HomeDemo4.jpeg"
                      alt="Superblast Sulphur Package Design"
                      width={300}
                      height={300}
                      className="rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full blur-3xl opacity-20" />
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full blur-3xl opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Carousel Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="bg-orange-100 text-orange-700"
            >
              Portfolio Showcase
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
              Our Packaging Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of packaging designs from small
              pouches to large industrial bags, each crafted with precision and
              attention to detail.
            </p>
          </div>

          <PortfolioCarousel />

          {/* Additional Portfolio Grid */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Individual Designs
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item) => (
                <Card
                  key={item.id}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-sm text-gray-200">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900">
                          {item.title}
                        </h3>
                        <Badge
                          variant="secondary"
                          className="bg-orange-100 text-orange-700 mt-2"
                        >
                          {item.category}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">Colors:</span>
                        <div className="flex space-x-1">
                          {item.colors.map((color, index) => (
                            <div
                              key={index}
                              className="w-4 h-4 rounded-full border border-gray-300"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50"
            >
              View All Designs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="bg-orange-100 text-orange-700"
            >
              Testimonials
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
              What Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Managing Director, Hindustan Pesticides",
                content:
                  "Outstanding packaging designs that perfectly represent our agricultural products. The attention to detail and regulatory compliance is exceptional.",
                rating: 5,
              },
              {
                name: "Priya Sharma",
                role: "Marketing Head, AgriTech Solutions",
                content:
                  "Professional, creative, and always delivers on time. The packaging designs have significantly improved our product visibility in the market.",
                rating: 5,
              },
              {
                name: "Amit Patel",
                role: "Founder, GreenGrow Fertilizers",
                content:
                  "Excellent understanding of agricultural packaging requirements. The designs are both attractive and informative for our customers.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-orange-400 fill-current"
                      />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-gray-300 mb-4" />
                  <p className="text-gray-600 mb-6 italic">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="bg-orange-500/20 text-orange-300 hover:bg-orange-500/30"
                >
                  Get In Touch
                </Badge>
                <h2 className="text-3xl lg:text-5xl font-bold">
                  Ready to Create Amazing Packaging?
                </h2>
                <p className="text-xl text-gray-300">
                  Let&apos;s discuss your packaging design needs and create
                  something that makes your product stand out on the shelf and
                  communicate effectively with your customers.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-400" />
                  <span>illusiondesign128@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-400" />
                  <span>+91 89750 40173</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-orange-400" />
                  <span>Katrj Pune, India</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-white/10 hover:bg-white/20 text-white"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-white/10 hover:bg-white/20 text-white"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-white/10 hover:bg-white/20 text-white"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-white/10 hover:bg-white/20 text-white"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <ContactForm />
            {/* <Card className="border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Start Your Project
                </CardTitle>
                <CardDescription>
                  Tell me about your packaging design requirements and I&apos;ll
                  get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input type="email" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Company
                  </label>
                  <Input placeholder="Your Company Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Project Details
                  </label>
                  <Textarea
                    placeholder="Describe your packaging design requirements..."
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center">
                  <Package className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">
                  All<span className="text-orange-500">Pack</span> Pro
                </span>
              </div>
              <p className="text-gray-400">
                Professional packaging design services for agricultural,
                industrial, and consumer products.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Agricultural Packaging
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Industrial Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Brand Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Label Design
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Portfolio</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Fertilizer Packaging
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Chemical Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Agricultural Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Industrial Equipment
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect</h3>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-orange-500"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-orange-500"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-orange-500"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-orange-500"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} PackDesign Pro. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
