
import type { Metadata } from "next";
import { FaSearch, FaPhone, FaEnvelope, FaStar, FaBox, FaTruck, FaShieldAlt, FaAward } from 'react-icons/fa';
import Link from "next/link";
import feedBags from "@/JsonDataFiles/FeedBagJSON";
import QuoteButtonWithDialog from "../../Components/getQuotePopup";
import BagImageGallery from "../../Components/imageCarousal";
import { Card, CardContent } from "../../Components/Ui/card";
import { Button } from '../../Components/Ui/button';
import { Badge } from '../../Components/Ui/badge';

export const metadata: Metadata = {
  title: "Cattle Feed & Aquaculture Feed Packaging Bags",
  description:
    "All Pack supplies durable cattle feed packaging bags and aquaculture feed packaging in BOPP laminated and PP woven materials, with cylinder printing, custom branding, multiple sizes, and bulk order discounts across India.",
  keywords:
    "aquaculture feed packaging, cattle feed packaging bags, agricultural packaging bags, BOPP laminated bags, PP woven fertilizer bags, custom branded fertilizer bags",
};

export default function FeedBagsPage() {
 
  const benefits = [
    {
      icon: FaShieldAlt,
      title: "Durability",
      desc: "Strong construction for heavy-duty use",
    },
    {
      icon: FaBox,
      title: "Cost Effective",
      desc: "Economical solution for bulk packaging",
    },
    {
      icon: FaTruck,
      title: "Easy Transport",
      desc: "Lightweight and stackable design",
    },
    { icon: FaAward, title: "Quality Material", desc: "Premium PP woven fabric" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-25 to-amber-50">
      {/* Header Section */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 lg:px-[5rem] py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Company Info */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AP</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Allpack 
                </h1>
                <p className="text-gray-600">Pune, Maharashtra</p>
                <div className="flex items-center space-x-4 mt-1">
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-700"
                  >
                    ✓ GST Verified
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-orange-100 text-orange-700"
                  >
                    ⭐ TrustSEAL Verified
                  </Badge>
                </div>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                className="border-gray-800 text-gray-800 hover:bg-gray-50"
              >
                <FaPhone className="h-4 w-4 mr-2" />
                Call +91 88055 19081
                <span className="text-xs text-gray-500 ml-2">
                  75% Response Rate
                </span>
              </Button>
              <QuoteButtonWithDialog className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white">
                <FaEnvelope className="h-4 w-4 mr-2" />
                SEND EMAIL
              </QuoteButtonWithDialog>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 lg:px-[5rem] py-4">
          <div className="flex items-center justify-between">
            <nav className="text-sm text-gray-600 flex items-center">
              <Link href="/" className="hover:text-orange-600">
                Home
              </Link>
              <span className="mx-2">»</span>
              <Link href="/product" className="hover:text-orange-600">
                Our Products
              </Link>
              <span className="mx-2">»</span>
              <Link
                href="/product/fertilizer-bags"
                className="hover:text-orange-600"
              >
                Feed Bags
              </Link>
            </nav>

            <div className="relative hidden md:flex">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search Products/Services"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Header Section - This is the blue section you're asking about */}
      <section className="py-5 bg-gradient-to-br from-amber-50 via-orange-25 to-orange-50">
        <div className="container mx-auto px-4 lg:px-[5rem]">
          <div className="text-gray-800">
            {/* Category Title */}
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 inline-block px-6 py-3 rounded-lg shadow-lg">
                Feed Bags
              </h1>
            </div>

            {/* Category Description */}
            <div className="bg-white bg-opacity-90 border border-orange-200 rounded-lg p-6 shadow-md">
              <p className="text-lg leading-relaxed text-gray-700">
                Offering you a complete choice of products which include animal{" "}
                <span className="font-semibold text-orange-600">
                  feed packaging bag
                </span>
                ,{" "}
                <span className="font-semibold text-orange-600">
                  animal feed bag
                </span>
                , and{" "}
                <span className="font-semibold text-orange-600">
                  plain animal feed bag
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="pb-16 ">
        <div className="container mx-auto px-4 lg:px-[5rem]">
          <div className="bg-gray-100 overflow-hidden">
            {feedBags.map((bag) => (
              <div
                className="scroll-mt-20 grid lg:grid-cols-2 gap-0 rounded-2xl shadow-xl bg-gray-100 my-4"
                key={bag.id}
                id={bag.id}
              >
                {/* Left Side - Product Images */}
                <div className="px-6 space-y-4 mt-3">
                  <h1 className="text-3xl font-bold text-red-600 mb-2">
                    {bag.title}
                  </h1>
                  {bag.images?.length > 0 && (
                    <BagImageGallery bag={{ images: bag?.images }} />
                  )}
                </div>

                {/* Right Side - Product Info with Scrollable Content */}
                <div className="border-l border-gray-200 flex flex-col h-[800px]">
                  {/* Fixed Header Section */}
                  <div className="px-8 pt-4 border-b border-gray-200 bg-white">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className="h-5 w-5 text-yellow-400 fill-current"
                            />
                          ))}
                          <span className="ml-2 text-gray-600">
                            ({bag.rating}/5 - {bag.reviews} reviews)
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 mb-6">
                        <span className="text-2xl font-bold text-gray-900">
                          {bag.price}
                        </span>
                        <span className="text-gray-600">/ Piece</span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-red-500 text-red-600 hover:bg-red-50"
                        >
                          Get Latest Price
                        </Button>
                        <QuoteButtonWithDialog className="flex-1">
                          <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3">
                            Get Best Quote
                          </Button>
                        </QuoteButtonWithDialog>
                      </div>
                    </div>
                  </div>

                  {/* Scrollable Content Area */}
                  <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-white">
                    {/* Product Specifications */}
                    <Card className="border-gray-200">
                      <CardContent className="p-6 bg-gray-100">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          Product Details:
                        </h3>
                        {/* <div className="grid grid-cols-1 gap-3">
                        {bag.specs.map((spec, index) => (
                          <div
                            key={index}
                            className="flex justify-between py-2 border-b-2 border-gray-500 last:border-b-0"
                          >
                            <span className="text-gray-600 font-medium border-r-2 pr-2">{spec.label}</span>
                            <span className="text-gray-900 font-semibold">{spec.value}</span>
                          </div>
                        ))}
                      </div> */}
                        <table className="w-full border-collapse">
                          <tbody>
                            {bag.specs.map((spec, index) => (
                              <tr
                                key={index}
                                className="border-b-2 border-gray-300 last:border-b-0"
                              >
                                <td className="text-gray-600 font-medium pr-4 py-2 border-r-2 border-gray-400 w-1/2">
                                  {spec.label}
                                </td>
                                <td className="text-gray-900 font-semibold pl-4 py-2">
                                  {spec.value}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </CardContent>
                    </Card>

                   

                    {bag.id == "animal-feed-packaging-bag" ? (
                      <>
                        <section className="max-w-4xl mx-auto px-4">
                          <p className="text-lg mb-6 text-gray-700">
                            Animal Feed Packaging Bags are designed to store,
                            protect, and transport various types of animal feed.
                            These bags ensure the feed remains fresh and free
                            from contamination while offering convenience for
                            both suppliers and end users, including farmers and
                            pet owners. Animal feed packaging comes in various
                            materials and sizes depending on the type of feed
                            and the specific requirements of the product. Below
                            is a detailed overview of animal feed packaging
                            bags, including key features, advantages, and common
                            uses.
                          </p>

                          <div className="space-y-6">
                            {/* Key Features */}
                            <div>
                              <h2 className="text-2xl font-semibold mb-2">
                                Key Features of Animal Feed Packaging Bags:
                              </h2>

                              {/* Material */}
                              <div className="mt-4">
                                <h3 className="text-xl font-medium mb-1">
                                  Material
                                </h3>
                                <ul className="list-disc list-inside text-gray-800 space-y-1">
                                  <li>
                                    Typically made from woven{" "}
                                    <span className="font-semibold">
                                      polypropylene (PP), High-Density
                                      Polyethylene (HDPE), or BOPP (Biaxially
                                      Oriented Polypropylene)
                                    </span>{" "}
                                    for premium products.
                                  </li>
                                  <li>
                                    These materials are durable,
                                    moisture-resistant, and help to protect the
                                    feed from environmental factors such as
                                    sunlight and humidity.
                                  </li>
                                  <li>
                                    {" "}
                                    <span className="font-semibold">
                                      Paper-based bags{" "}
                                    </span>
                                    with inner lining are sometimes used for
                                    specific types of feed, offering an
                                    eco-friendly alternative.
                                  </li>
                                </ul>
                              </div>

                              {/* Size and Capacity */}
                              <div className="mt-4">
                                <h3 className="text-xl font-medium mb-1">
                                  Size and Capacity
                                </h3>
                                <ul className="list-disc list-inside text-gray-800 space-y-1">
                                  <li>
                                    Common sizes include{" "}
                                    <span className="font-semibold">
                                      5 kg, 10 kg, 25 kg, 50 kg,
                                    </span>{" "}
                                    and larger bulk packaging for industrial
                                    use.
                                  </li>
                                  <li>
                                    Custom sizes can be created based on the
                                    specific needs of the product.
                                  </li>
                                </ul>
                              </div>

                              {/* Printing Options */}
                              <div className="mt-4">
                                <h3 className="text-xl font-medium mb-1">
                                  Printing Options:
                                </h3>
                                <ul className="list-disc list-inside text-gray-800 space-y-1">
                                  <li>
                                    Most animal feed packaging bags are printed
                                    with vibrant graphics, branding, and product
                                    details using techniques like flexographic
                                    or rotogravure printing.
                                  </li>
                                  <li>
                                    Printing includes nutritional information,
                                    product use guidelines, and branding to make
                                    the product stand out on store shelves.
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </section>
                        <div>
                          <h2 className="text-xl font-bold text-gray-900 mb-6">
                            Why Choose Our Plain PP Fertilizer Bags?
                          </h2>
                          <div className="grid grid-cols-2 gap-4">
                            {benefits.map((benefit, index) => (
                              <Card
                                key={index}
                                className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300"
                              >
                                <CardContent className="p-4 text-center">
                                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <benefit.icon className="h-6 w-6 text-white" />
                                  </div>
                                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                                    {benefit.title}
                                  </h3>
                                  <p className="text-gray-600 text-xs">
                                    {benefit.desc}
                                  </p>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      ""
                    )}

                    {bag.id == "animal-feed-packaging-bag-two" ? (
                      <section className="max-w-4xl mx-auto px-4 py-10">
                        <p className="text-lg mb-6 text-gray-700">
                          <span className="font-semibold">
                            Animal Feed Bags
                          </span>{" "}
                          are essential packaging solutions used to store,
                          transport, and protect various types of feed for
                          animals. They are designed to keep the feed fresh,
                          free from contamination, and easily accessible to
                          farmers, livestock owners, and pet owners. These bags
                          come in various materials, sizes, and designs based on
                          the type of feed and its intended use. Below is an
                          overview of animal feed bags, including key features,
                          benefits, and common uses. Key Features of Animal Feed
                          Bags:
                        </p>

                        <div className="space-y-6">
                          {/* Key Features */}
                          <div>
                            {/* Material */}
                            <div className="mt-4">
                              <h3 className="text-xl font-medium mb-1">
                                Material
                              </h3>
                              <ul className="list-disc list-inside text-gray-800 space-y-1">
                                <li>
                                  Typically made from woven
                                  <span className="font-semibold">
                                    {" "}
                                    polypropylene (PP), High-Density
                                    Polyethylene (HDPE),
                                  </span>{" "}
                                  or{" "}
                                  <span className="font-semibold">
                                    paper with an inner lining.
                                  </span>
                                </li>
                                <li>
                                  <span className="font-semibold">
                                    BOPP (Biaxially Oriented Polypropylene)
                                    laminated bags
                                  </span>{" "}
                                  are often used for premium feed, offering
                                  moisture resistance and enhanced durability.
                                </li>
                                <li>
                                  Eco-friendly options are also available, such
                                  as biodegradable or recyclable bags.
                                </li>
                              </ul>
                            </div>

                            {/* Size and Capacity */}
                            <div className="mt-4">
                              <h3 className="text-xl font-medium mb-1">
                                Size and Capacity
                              </h3>
                              <ul className="list-disc list-inside text-gray-800 space-y-1">
                                <li>
                                  Common sizes include
                                  <span className="font-semibold">
                                    {" "}
                                    5 kg, 10 kg, 25 kg, 50 kg,
                                  </span>{" "}
                                  and larger bulk bags for industrial use.
                                </li>
                                <li>
                                  The size is chosen based on the type of feed
                                  and the quantity required.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </section>
                    ) : (
                      ""
                    )}

                    {bag.id == "animal-feed-bag" ? (
                      <section className="max-w-4xl mx-auto px-4 py-10">
                        <p className="text-lg mb-6 text-gray-700">
                          <span className="font-semibold">
                            Animal Feed Bags
                          </span>{" "}
                          are essential packaging solutions used to store,
                          transport, and protect various types of feed for
                          animals. They are designed to keep the feed fresh,
                          free from contamination, and easily accessible to
                          farmers, livestock owners, and pet owners. These bags
                          come in various materials, sizes, and designs based on
                          the type of feed and its intended use. Below is an
                          overview of animal feed bags, including key features,
                          benefits, and common uses. Key Features of Animal Feed
                          Bags:
                        </p>

                        <div className="space-y-6">
                          {/* Key Features */}
                          <div>
                            {/* Material */}
                            <div className="mt-4">
                              <h3 className="text-xl font-medium mb-1">
                                Material
                              </h3>
                              <ul className="list-disc list-inside text-gray-800 space-y-1">
                                <li>
                                  Typically made from woven
                                  <span className="font-semibold">
                                    {" "}
                                    polypropylene (PP), High-Density
                                    Polyethylene (HDPE),
                                  </span>{" "}
                                  or{" "}
                                  <span className="font-semibold">
                                    paper with an inner lining.
                                  </span>
                                </li>
                                <li>
                                  <span className="font-semibold">
                                    BOPP (Biaxially Oriented Polypropylene)
                                    laminated bags
                                  </span>{" "}
                                  are often used for premium feed, offering
                                  moisture resistance and enhanced durability.
                                </li>
                                <li>
                                  Eco-friendly options are also available, such
                                  as biodegradable or recyclable bags.
                                </li>
                              </ul>
                            </div>

                            {/* Size and Capacity */}
                            <div className="mt-4">
                              <h3 className="text-xl font-medium mb-1">
                                Size and Capacity
                              </h3>
                              <ul className="list-disc list-inside text-gray-800 space-y-1">
                                <li>
                                  Common sizes include
                                  <span className="font-semibold">
                                    {" "}
                                    5 kg, 10 kg, 25 kg, 50 kg,
                                  </span>{" "}
                                  and larger bulk bags for industrial use.
                                </li>
                                <li>
                                  The size is chosen based on the type of feed
                                  and the quantity required.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </section>
                    ) : (
                      ""
                    )}

                    {bag.id == "plainAnimalFeedBag" ? (
                      <section className="px-6 bg-gray-50 text-gray-800">
                        <div className="max-w-6xl mx-auto">
                          {/* Introduction */}
                          <p className="text-lg mb-3">
                             <span className="font-semibold">Plain Animal Feed Bags</span> are simple, durable packaging
                            solutions designed to store and transport animal
                            feed. These bags are typically made from materials
                            that ensure the feed remains fresh and protected
                            from environmental factors like moisture and pests.
                            Here’s an overview of plain animal feed bags,
                            including their key features, advantages, and common
                            uses: Key Features of Plain Animal Feed Bags:
                          </p>
                        </div>
                        <div className="space-y-6">
                          {/* Key Features */}
                          <div>
                            Key Features of Plain Animal Feed Bags:
                            {/* Material */}
                            <div className="mt-4">
                              <h3 className="text-xl font-medium mb-1">
                               <span className="font-semibold"> Material:</span>
                              </h3>
                              <ul className="list-disc list-inside text-gray-800 space-y-1">
                                <li>
                                  Commonly made from <span className="font-semibold"> woven polypropylene (PP) or
                                  High-Density Polyethylene (HDPE),</span> which
                                  provide durability, moisture resistance, and
                                  protection against tearing.
                                </li>
                                <li>
                                  Some may have a laminated layer for additional
                                  moisture protection, though plain bags usually
                                  have a basic, uncoated surface.
                                </li>
                              </ul>
                            </div>
                            {/* Size and Capacity */}
                            <div className="mt-4">
                              <h3 className="text-xl font-medium mb-1">
                                Size and Capacity
                              </h3>
                              <ul className="list-disc list-inside text-gray-800 space-y-1">
                                <li>
                                  Available in various sizes, with common
                                  capacities including <span className="font-semibold"> 10 kg, 25 kg, 50 kg,</span> and
                                  larger bulk sizes.
                                </li>
                                <li>
                                  Custom sizes can also be produced based on
                                  specific needs.
                                </li>
                              </ul>
                            </div>
                            <div className="mt-4">
                              <h3 className="text-xl font-medium mb-1">
                                Design
                              </h3>
                              <ul className="list-disc list-inside text-gray-800 space-y-1">
                                <li>
                                  Available in various sizes, with common
                                  capacities including 10 kg, 25 kg, 50 kg, and
                                  larger bulk sizes.
                                </li>
                                <li>
                                  Available in different colors (white, brown,
                                  etc.) depending on the customer’s preference.
                                </li>
                              </ul>
                            </div>
                            <div className="mt-4">
                              <h3 className="text-xl font-medium mb-1">
                                Breathability
                              </h3>
                              <ul className="list-disc list-inside text-gray-800 space-y-1">
                                <li>
                                  Woven materials often allow for some
                                  breathability, preventing moisture buildup and
                                  preserving the quality of the animal feed
                                  inside.{" "}
                                </li>
                              </ul>
                            </div>
                            <div className="mt-4">
                              <h3 className="text-xl font-medium mb-1">
                                Durability
                              </h3>
                              <ul className="list-disc list-inside text-gray-800 space-y-1">
                                <li>
                                  Designed to withstand handling, storage, and
                                  transportation without breaking or tearing.
                                </li>
                                <li>
                                  Resistant to environmental factors like
                                  sunlight, pests, and humidity to a certain
                                  extent.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </section>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-[5rem]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Allpack for Fertilizer Bags?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading provider of high-quality fertilizer packaging
              solutions with years of expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">8+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Years Experience
              </h3>
              <p className="text-gray-600 text-sm">
                Extensive experience in fertilizer packaging industry
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">50+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fertilizer Bag Types
              </h3>
              <p className="text-gray-600 text-sm">
                Wide range of fertilizer packaging solutions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">100+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Happy Clients
              </h3>
              <p className="text-gray-600 text-sm">
                Satisfied customers across India
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quality Assured
              </h3>
              <p className="text-gray-600 text-sm">
                Premium quality materials and printing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Request Callback Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <QuoteButtonWithDialog>
          <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Request Callback
          </Button>
        </QuoteButtonWithDialog>
      </div>
    </div>
  );
}
