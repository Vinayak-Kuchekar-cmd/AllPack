// import { Button } from "./Components/Ui/button";
// import { Card } from "./Components/Ui/card";
import { FaMedal, FaBolt, FaLeaf, FaTag } from "react-icons/fa";
import InquirySection from "./Components/enquiry";
import ProductCarousel from "./Components/portfolio-carousel";
import { Button } from "./Components/Ui/button";
import Link from "next/link";
import QuoteButtonWithDialog from "./Components/getQuotePopup";

export default function Component() {
  // const products = [
  //   {
  //     id: 1,
  //     name: "Printed Fertilizer Bag",
  //     price: "₹33",
  //     unit: "/piece",
  //     colors: "Multi-color",
  //     image: "bg-gradient-to-br from-orange-100 to-orange-200",
  //   },
  //   {
  //     id: 2,
  //     name: "PP Woven Bag",
  //     price: "₹32",
  //     unit: "/piece",
  //     colors: "Green, Yellow",
  //     image: "bg-gradient-to-br from-green-100 to-green-200",
  //   },
  //   {
  //     id: 3,
  //     name: "Water Soluble Fertilizers Bag",
  //     price: "₹27",
  //     unit: "/piece",
  //     colors: "Multi-color",
  //     image: "bg-gradient-to-br from-blue-100 to-blue-200",
  //   },
  //   {
  //     id: 4,
  //     name: "Plain PP Fertilizer Bag",
  //     price: "₹32",
  //     unit: "/piece",
  //     colors: "White, Natural",
  //     image: "bg-gradient-to-br from-gray-100 to-gray-200",
  //   },
  //   {
  //     id: 5,
  //     name: "25kg NPK Fertilizer Bag",
  //     price: "₹27",
  //     unit: "/kg",
  //     colors: "Blue & Yellow",
  //     image: "bg-gradient-to-br from-cyan-100 to-blue-200",
  //   },
  //   {
  //     id: 6,
  //     name: "DAP Fertilizer Bag",
  //     price: "₹15",
  //     unit: "/piece",
  //     colors: "Multi-color",
  //     image: "bg-gradient-to-br from-red-100 to-red-200",
  //   },
  //   {
  //     id: 7,
  //     name: "White Fertilizer Packaging",
  //     price: "₹32",
  //     unit: "/piece",
  //     colors: "White",
  //     image: "bg-gradient-to-br from-gray-50 to-gray-100",
  //   },
  //   {
  //     id: 8,
  //     name: "25Kg Fertilizer Bag",
  //     price: "₹27",
  //     unit: "/piece",
  //     colors: "Green & White",
  //     image: "bg-gradient-to-br from-green-100 to-cyan-100",
  //   },
  // ];

  // const portfolioItems = [
  //   {
  //     id: 1,
  //     title: "Ferrus Salphate",
  //     category: "Agricultural Fertilizer",
  //     image: "/HomePage1.jpeg",
  //     description:
  //       "Nutrient fertilizer packaging with vibrant pink design and clear product specifications",
  //     colors: ["#E91E63", "#4CAF50", "#FF9800"],
  //   },
  //   {
  //     id: 2,
  //     title: "Magnesium Sulfate",
  //     category: "Agricultural Fertilizer",
  //     image: "/HomePage2.jpeg",
  //     description:
  //       "25kg fertilizer package with bright yellow branding and detailed application instructions",
  //     colors: ["#FFEB3B", "#4CAF50", "#FF9800"],
  //   },
  //   {
  //     id: 3,
  //     title: "Superblast Sulphur 90%",
  //     category: "Agricultural Fertilizer",
  //     image: "/HomePage3.jpeg",
  //     description:
  //       "Professional green packaging design for granular sulfur with clear product benefits",
  //     colors: ["#4CAF50", "#8BC34A", "#FF9800"],
  //   },
  //   {
  //     id: 4,
  //     title: "Zinc Sulfate Heptahydrate",
  //     category: "Agricultural Fertilizer",
  //     image: "/HomePage4.jpeg",
  //     description:
  //       "Orange-themed nutrient fertilizer with detailed composition and usage guidelines",
  //     colors: ["#FF9800", "#4CAF50", "#FFC107"],
  //   },
  //   {
  //     id: 5,
  //     title: "Growmeal Multi Micronutrient",
  //     category: "Agricultural Fertilizer",
  //     image: "/HomePage5.jpeg",
  //     description:
  //       "Purple premium packaging for multi-micronutrient fertilizer with comprehensive product details",
  //     colors: ["#9C27B0", "#4CAF50", "#FF9800"],
  //   },
  // ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
      {/* Hero Section */}
      {/* <section id="home" className="relative py-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-gray-900/10" />
        <div className="container mx-auto px-4 lg:px-[5rem] relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8"> */}
      {/* <Badge variant="secondary" className="text-lg bg-orange-100 text-orange-700 hover:bg-orange-200">
                🎨 Professional Packaging Designer
              </Badge> */}
      {/* <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
                Creative
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  {" "}
                  Packaging Products
                </span>
                <br />
                That Sell
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Specializing in agricultural, industrial, and consumer product packaging that combines eye-catching
                design with clear product communication and brand consistency.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/product">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                >
                  View Portfolio
                  <Eye className="ml-2 h-5 w-5" />
                </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 text-md">
                 <Phone className="w-5 h-5 text-green-600" />
                  <span className="ml-2">Call +91 8975040173</span>
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Industry Expertise</h3>
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
      </section> */}
      {/* Portfolio Carousel Section */}
      <section id="portfolio" className=" bg-white">
        <div className="container mx-auto px-4 bg-gradient-to-b from-orange-100/90 to-orange-200/10">
          <div className="lg:py-3 py-1 px-4 ">
            <div className="max-w-6xl mx-auto">
              <div className="text-center lg:space-y-2">
                <h1 className="text-2xl font-bold text-black">
                  High-Quality Printed Packaging
                </h1>
                <p className="hidden lg:flex text-xl text-black justify-center text-center ">
                  Premium Printed Bags, Available Instantly.
                </p>
                <div className="hidden lg:flex lg:flex-row gap-3 justify-center">
                  <Link href="/product">
                    <Button
                      type="button"
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 text-white py-4 px-5 rounded-lg text-md shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-center space-x-2 cursor-pointer">
                        <span>View All Products</span>
                      </div>
                    </Button>
                  </Link>
                  <QuoteButtonWithDialog className="bg-white hover:bg-orange-100 text-orange-500 border border-orange-500 rounded-lg text-md shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Quote
                  </QuoteButtonWithDialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:py-4 py-2 px-4 md:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <ProductCarousel />
        </div>
      </section>
      <section className="lg:py-6 py-4 px-4 md:px-8 bg-[#F5F3ED]">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="text-center space-y-4 mb-10">
            {/* Badge */}
            <span className="inline-block text-xs font-semibold text-orange-700 bg-orange-100 px-5 py-2 rounded-full">
              PREMIUM PACKAGING SOLUTIONS
            </span>

            {/* Heading */}
            <h1 className="text-4xl  font-bold text-gray-900 leading-tight">
              Quality Packaging for Growing Farms
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional agriculture packaging with custom designs,
              competitive pricing, and nationwide delivery. Trusted by farmers
              and dealers across India.
            </p>

            {/* Buttons */}
            <div className=" flex flex-row gap-3 justify-center">
              <Link href="/product">
                <Button
                  type="button"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 text-white py-5 px-5 rounded-lg text-md shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <span>Explore All Products</span>
                  </div>
                </Button>
              </Link>
              <QuoteButtonWithDialog className="bg-white hover:bg-orange-100 text-orange-500 border border-orange-500 rounded-lg text-md shadow-lg hover:shadow-xl transition-all duration-300">
                Request Quote
              </QuoteButtonWithDialog>
            </div>
          </div>

          {/* Stats Section */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "50+", label: "Design Varieties" },
              { number: "5-7 Days", label: "Fast Delivery" },
              { number: "₹8-₹85", label: "Competitive Pricing" },
              { number: "Pan India", label: "Service Area" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center hover:shadow-md transition-all duration-300"
              >
                <div className="text-3xl font-bold text-green-700 mb-2">
                  {stat.number}
                </div>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div> */}
        </div>
      </section>
      {/* Product Range */}
      {/* <section className="py-4 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
           <div className="text-center mb-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Product Range
            </h2>
            <p className="text-lg text-gray-600">
              Browse our entire collection with pricing and specifications
            </p>
          </div>

           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card
                key={product.id}
                className="
            overflow-hidden 
            bg-white 
            rounded-2xl 
            border border-gray-200 
            hover:shadow-xl 
            hover:border-orange-400/60
            transition-all 
            duration-300 
            cursor-pointer 
            group
          "
              >
                 <div
                  className={`${product.image} h-48 md:h-56 flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                 <div className="p-4 md:p-5 flex flex-col h-full">
                   <h3 className="font-semibold text-gray-900 text-sm md:text-base line-clamp-2 mb-3">
                    {product.name}
                  </h3>

                   <div className="mb-3">
                    <div className="text-2xl md:text-3xl font-bold text-green-700">
                      {product.price}
                      <span className="text-xs md:text-sm font-normal text-gray-500 ml-1">
                        {product.unit}
                      </span>
                    </div>
                  </div>

                   <p className="text-xs md:text-sm text-gray-500 mb-4">
                    Colors: {product.colors}
                  </p>

                   <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white py-4 px-5 rounded-lg text-md shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-center space-x-2">
                        <span>View Details</span>
                      </div>
                    </Button>
                    <Button
                      type="submit"
                      className="bg-white hover:bg-orange-100 text-orange-500 border border-orange-500 py-4 px-5 rounded-lg text-md shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-center space-x-2">
                        <span>Get Quote</span>
                      </div>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
      {/* Why Choose Us - Features with Icons */}
      <section className=" px-4 md:px-8 bg-[#F5F3ED]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600">
              Professional packaging solutions you can trust
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-8 gap-3">
            {[
              {
                icon: FaMedal,
                title: "50+ Designs",
                description: "Extensive range of packaging options",
              },
              {
                icon: FaBolt,
                title: "Fast Delivery",
                description: "Pan-India shipping in 10-12 days",
              },
              {
                icon: FaLeaf,
                title: "Quality Assured",
                description: "Premium materials & expert design",
              },
              {
                icon: FaTag,
                title: "Best Pricing",
                description: "Competitive rates with bulk discounts",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-200 lg:p-10 p-6 text-center
                       hover:border-orange-400/60 hover:shadow-lg
                       transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-5">
                    <Icon className="w-10 h-10 text-orange-600" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Table - Simple & Clear */}
      <section className="py-10 px-4 md:px-8 bg-[#f3f3f3]">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-4">
            <h2 className="text-4xl font-bold text-black mb-4">
              Quick Pricing Reference
            </h2>
            <p className="text-lg text-gray-600">
              Volume discounts available for bulk orders
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              {/* Table Head */}
              <thead>
                <tr className="border-b-2 border-black">
                  <th className="lg:px-6 px-2 lg:py-4 py-2 text-left font-semibold text-black">
                    Product
                  </th>
                  <th className="lg:px-6 px-2 lg:py-4 py-2 text-center font-semibold text-black">
                    Price
                  </th>
                  <th className="lg:px-6 px-2 lg:py-4 py-2 text-center font-semibold text-black">
                    Qty
                  </th>
                  <th className="lg:px-6 px-2 lg:py-4 py-2 text-center font-semibold text-black">
                    Action
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {[
                  {
                    product: "5Kg Fertilizer Bags",
                    price: "₹21/piece",
                    bulk: "500 pieces",
                  },
                  {
                    product: "10Kg Fertilizer Bags",
                    price: "₹24/piece",
                    bulk: "500+ pieces",
                  },
                  {
                    product: "25Kg Fertilizer Bags",
                    price: "₹34/piece",
                    bulk: "500+ pieces",
                  },
                  {
                    product: "50Kg Fertilizer Bags",
                    price: "₹44/piece",
                    bulk: "500+ pieces",
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-200 hover:bg-orange-100 transition"
                  >
                    {/* Product */}
                    <td className="lg:px-6 px-2 lg:py-4 py-2 font-medium text-black">
                      {row.product}
                    </td>

                    {/* Price */}
                    <td className="lg:px-6 px-2 lg:py-4 py-2 text-center text-green-700 font-bold text-lg">
                      {row.price}
                    </td>

                    {/* Bulk */}
                    <td className="lg:px-6 px-2 lg:py-4 py-2 text-center text-gray-600">
                      {row.bulk}
                    </td>

                    {/* Button */}
                    <td className="lg:px-6 px-2 lg:py-4 py-2 text-center">
                      <QuoteButtonWithDialog className="rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                        Get Quote
                      </QuoteButtonWithDialog>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* <div className="container mx-auto px-4 lg:px-[5rem]"> 
        <div className="border-t border-gray-500 pt-8 border-dashed">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Individual Designs
          </h2>
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
                    <p className="text-sm text-gray-200">{item.description}</p>
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

        <div className="text-center mt-8 mb-5 ">
          <Link href="/product">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 text-lg cursor-pointer"
            >
              View All Products
              <FaArrowLeft className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div> */}
      <InquirySection />
    </div>
  );
}
