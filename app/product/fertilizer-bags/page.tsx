import type { Metadata } from "next";
// import { Button } from "../../Components/Ui/button";
import { Badge } from "../../Components/Ui/badge";
import fertilizerBags from "@/JsonDataFiles/FertilizerBagJSON";
import { Card, CardContent } from "../../Components/Ui/card";
import { 
  FaStar,
  FaBox,
  FaTruck,
  FaShieldAlt,
  FaAward, 
} from "react-icons/fa";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fertilizer Bags - NPK, Urea, DAP & Bio-Fertilizer Packaging",
  description:
    "All Pack manufactures BOPP laminated and PP woven fertilizer bags with cylinder printing for NPK fertilizer bags, urea packaging bags, DAP fertilizer bags, bio-fertilizer packaging, and organic fertilizer packaging. Available with or without liner, custom branding and bulk discounts.",
  keywords:
    "fertilizer bags manufacturer, BOPP laminated fertilizer bags, PP woven fertilizer bags, cylinder printed fertilizer bags, NPK fertilizer bags, urea packaging bags, DAP fertilizer bags, bio-fertilizer packaging, organic fertilizer packaging",
};
import QuoteButtonWithDialog from "../../Components/getQuotePopup";
import BagImageGallery from "../../Components/imageCarousal";

export default function PlainPPFertilizerBagPage() {
  // const features = [
  //   "High-strength woven polypropylene construction",
  //   "Cost-effective solution for bulk packaging",
  //   "Excellent tear and puncture resistance",
  //   "Moisture-resistant properties",
  //   "Lightweight yet durable design",
  //   "Available in multiple sizes and capacities",
  //   "Easy to handle and transport",
  //   "Eco-friendly and recyclable material",
  // ];

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
    {
      icon: FaAward,
      title: "Quality Material",
      desc: "Premium PP woven fabric",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-25 to-amber-50">
      {/* Navigation */}
     <section className="bg-white border-b">
  <div className="container mx-auto px-4 lg:px-[5rem] py-4">
    {/* Top Row */}
    <div className="flex flex-wrap items-center justify-between gap-2">
      
      <nav className="text-sm text-gray-600 flex flex-wrap items-center">
        <Link href="/" className="hover:text-orange-600">Home</Link>
        <span className="mx-1">»</span>
        <Link href="/product" className="hover:text-orange-600">Our Products</Link>
        <span className="mx-1">»</span>
        <Link href="/product/fertilizer-bags" className="hover:text-orange-600">Fertilizer Bags</Link>
      </nav>

      <div className="flex flex-wrap items-center space-x-2 mt-2 md:mt-0">
        <Badge variant="secondary" className="bg-green-100 text-green-700">✓ GST Verified</Badge>
        <Badge variant="secondary" className="bg-orange-100 text-orange-700">⭐ TrustSEAL Verified</Badge>
      </div> 

      <h2 className="text-2xl md:text-3xl font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 inline-block px-4 md:px-6 py-2 rounded-lg shadow-lg mt-2 md:mt-0">
        Fertilizer Bags
      </h2> 

    </div>
  </div>
</section>

       

      {/* Product Details Section */}
      <section className="pb-16 ">
        <div className="container mx-auto px-4 lg:px-[5rem]">
          <div className="bg-gray-100 overflow-hidden">
            {fertilizerBags.map((bag) => (
              <div
                className="scroll-mt-20 grid lg:grid-cols-2 gap-0 rounded-2xl shadow-xl bg-gray-100 my-4"
                key={bag.id}
                id={bag.id}
              >
                {/* Left Side - Product Images */}
                <div className="px-6 space-y-4 mt-3 py-6">
                  <h1 className="text-3xl font-bold text-red-600 mb-2">
                    {bag.title}
                  </h1>
                  {bag.images?.length > 0 && (
                    <BagImageGallery bag={{ images: bag?.images }} />
                  )}
                </div>

                {/* Right Side - Product Info with Scrollable Content */}
                <div className="border-l border-gray-200 flex flex-col h-[600px]">
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
                          {/* <span className="ml-2 text-gray-600">
                            ({bag.rating}/5 - {bag.reviews} reviews)
                          </span> */}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 mb-6">
                        <span className="text-2xl font-bold text-gray-900">
                          {bag.price}
                        </span>
                        <span className="text-gray-600">/ Piece</span>
                        {/* <Button
                          variant="outline"
                          size="sm"
                          className="border-red-500 text-red-600 hover:bg-red-50"
                        >
                          Get Latest Price
                        </Button> */}
                        <QuoteButtonWithDialog className="rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                          Get Quote
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

               

                    {bag.id == "printed-packaging" ? (
                      <>
                        <section className="max-w-4xl mx-auto px-4">
                          <p className="text-lg mb-6 text-gray-700">
                            Printed Fertilizer Bags are specially designed bags
                            used for packaging various types of fertilizers.
                            These bags are made from woven polypropylene (PP)
                            and are often printed with brand logos, product
                            information, and other relevant details. Here’s a
                            detailed overview:
                          </p>

                          <div className="space-y-6">
                            {/* Key Features */}
                            <div>
                              <h2 className="text-2xl font-semibold mb-2">
                                Key Features of Printed Fertilizer Bags
                              </h2>

                              {/* Material */}
                              <div className="mt-4">
                                <h3 className="text-xl font-medium mb-1">
                                  Material
                                </h3>
                                <ul className="list-disc list-inside text-gray-800 space-y-1">
                                  <li>
                                    Made from woven polypropylene (PP), which is
                                    known for its strength, durability, and
                                    resistance to moisture and tearing.
                                  </li>
                                  <li>
                                    Some bags may be laminated with BOPP
                                    (Biaxially Oriented Polypropylene) for
                                    additional protection and improved print
                                    quality.
                                  </li>
                                </ul>
                              </div>

                              {/* Printing Options */}
                              <div className="mt-4">
                                <h3 className="text-xl font-medium mb-1">
                                  Printing Options
                                </h3>
                                <ul className="list-disc list-inside text-gray-800 space-y-1">
                                  <li>
                                    <strong>Custom Printing:</strong> These bags
                                    can be printed in various colors and
                                    designs, allowing for brand logos, product
                                    descriptions, and instructions to be clearly
                                    displayed.
                                  </li>
                                  <li>
                                    <strong>
                                      High-quality printing methods
                                    </strong>{" "}
                                    like flexographic printing are commonly used
                                    for clear and vibrant graphics.
                                  </li>
                                </ul>
                              </div>

                              {/* Durability */}
                              <div className="mt-4">
                                <h3 className="text-xl font-medium mb-1">
                                  Durability
                                </h3>
                                <ul className="list-disc list-inside text-gray-800 space-y-1">
                                  <li>
                                    <strong>Tear-Resistant:</strong> Designed to
                                    withstand handling and transport without
                                    breaking or ripping, essential for heavy
                                    materials like fertilizers.
                                  </li>
                                  <li>
                                    <strong>Moisture Resistance:</strong> Helps
                                    to protect the contents from humidity,
                                    preventing clumping or degradation of the
                                    fertilizer.
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
                                    Available in various sizes, including 5 kg,
                                    10 kg, 25 kg, and 50 kg, depending on the
                                    specific needs of the fertilizer type and
                                    customer preferences.
                                  </li>
                                  <li>
                                    The size can be customized based on the
                                    provider&apos;s requirements.
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

                    {bag.id == "dapFertilizerBag" ? (
                      <section className="max-w-4xl mx-auto px-4 py-10">
                        <p className="text-lg mb-6 text-gray-700">
                          DAP Fertilizer Bags refer to the packaging used for
                          Diammonium Phosphate (DAP), a widely used
                          nitrogen-phosphorus (N-P) fertilizer. DAP is known for
                          its high nutrient content and is commonly used in
                          agricultural practices to promote healthy plant
                          growth. Here’s an overview of DAP fertilizer bags,
                          including key features, benefits, and common uses:
                        </p>

                        <div className="space-y-6">
                          {/* Key Features */}
                          <div>
                            <h2 className="text-2xl font-semibold mb-2">
                              Key Features of DAP Fertilizer Bags
                            </h2>

                            {/* Material */}
                            <div className="mt-4">
                              <h3 className="text-xl font-medium mb-1">
                                Material
                              </h3>
                              <ul className="list-disc list-inside text-gray-800 space-y-1">
                                <li>
                                  Typically made from woven polypropylene (PP),
                                  which provides durability and strength to hold
                                  the weight of the fertilizer.
                                </li>
                                <li>
                                  May also include lamination (BOPP) for
                                  moisture resistance and improved print
                                  quality.
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
                                  Commonly available in sizes like 25 kg, 50 kg,
                                  and sometimes in bulk packaging (e.g., 1000 kg
                                  bags) for large agricultural operations.
                                </li>
                                <li>
                                  Custom sizes can be produced based on specific
                                  requirements.
                                </li>
                              </ul>
                            </div>

                            {/* Printing Options */}
                            <div className="mt-4">
                              <h3 className="text-xl font-medium mb-1">
                                Printing Options
                              </h3>
                              <ul className="list-disc list-inside text-gray-800 space-y-1">
                                <li>
                                  Bags are often printed with product
                                  information, branding, and usage instructions,
                                  helping consumers identify the product easily.
                                </li>
                                <li>
                                  High-quality printing methods (e.g.,
                                  flexographic printing) are used to ensure
                                  vibrant colors and clear text.
                                </li>
                              </ul>
                            </div>

                            {/* Durability */}
                            <div className="mt-4">
                              <h3 className="text-xl font-medium mb-1">
                                Durability
                              </h3>
                              <ul className="list-disc list-inside text-gray-800 space-y-1">
                                <li>
                                  <strong>Tear and Puncture Resistance:</strong>{" "}
                                  Designed to withstand rough handling and
                                  transport without breaking.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </section>
                    ) : (
                      ""
                    )}

                    {bag.id == "whiteFertilizerBag" ? (
                      <section className="max-w-4xl mx-auto px-4 ">
                        <p className="text-lg mb-6 text-gray-700">
                          White Fertilizer Packaging Bags are commonly used for
                          the storage and transport of various types of
                          fertilizers. These bags are typically made from woven
                          polypropylene (PP) and offer several benefits due to
                          their material and design. Here’s an overview of their
                          key features, advantages, and uses:
                        </p>

                        <div className="space-y-8">
                          {/* Key Features */}
                          <div>
                            <h2 className="text-2xl font-semibold mb-2">
                              Key Features of White Fertilizer Packaging Bags
                            </h2>

                            {/* 1. Material */}
                            <div className="mt-4">
                              <h3 className="text-xl font-medium mb-1">
                                1. Material
                              </h3>
                              <ol className="list-decimal list-inside text-gray-800 space-y-1">
                                <li>
                                  Made from woven polypropylene (PP), known for
                                  its strength and durability.
                                </li>
                                <li>
                                  Lightweight yet capable of holding heavy loads
                                  without tearing or breaking.
                                </li>
                              </ol>
                            </div>

                            {/* 2. Color and Design */}
                            <div className="mt-4">
                              <h3 className="text-xl font-medium mb-1">
                                2. Color and Design
                              </h3>
                              <ol className="list-decimal list-inside text-gray-800 space-y-1">
                                <li>
                                  The white color is often chosen for its
                                  neutrality and cleanliness, making it suitable
                                  for a variety of products.
                                </li>
                                <li>
                                  Bags can be plain or printed with branding,
                                  product information, and usage instructions.
                                </li>
                              </ol>
                            </div>

                            {/* 3. Sizes and Capacity */}
                            <div className="mt-4">
                              <h3 className="text-xl font-medium mb-1">
                                3. Sizes and Capacity
                              </h3>
                              <ol className="list-decimal list-inside text-gray-800 space-y-1">
                                <li>
                                  Available in various sizes such as 25 kg, 50
                                  kg, and bulk sizes like 1000 kg.
                                </li>
                                <li>
                                  Custom sizes can be manufactured based on
                                  specific requirements.
                                </li>
                              </ol>
                            </div>

                            {/* 4. Printing Options */}
                            <div className="mt-4">
                              <h3 className="text-xl font-medium mb-1">
                                4. Printing Options
                              </h3>
                              <ol className="list-decimal list-inside text-gray-800 space-y-1">
                                <li>
                                  Custom-printed designs can include logos,
                                  product details, and safety guidelines.
                                </li>
                                <li>
                                  High-quality printing techniques ensure
                                  clarity and visual appeal.
                                </li>
                              </ol>
                            </div>

                            {/* 5. Durability */}
                            <div className="mt-4">
                              <h3 className="text-xl font-medium mb-1">
                                5. Durability
                              </h3>
                              <ol className="list-decimal list-inside text-gray-800 space-y-1">
                                <li>
                                  <strong>Tear and Puncture Resistance:</strong>{" "}
                                  Withstands transport and storage conditions.
                                </li>
                                <li>
                                  <strong>Moisture Resistance:</strong> Protects
                                  fertilizer from clumping or degrading.
                                </li>
                              </ol>
                            </div>

                            {/* 6. Environmental Considerations */}
                            <div className="mt-4">
                              <h3 className="text-xl font-medium mb-1">
                                6. Environmental Considerations
                              </h3>
                              <ol className="list-decimal list-inside text-gray-800 space-y-1">
                                <li>
                                  Many white fertilizer bags are recyclable.
                                </li>
                                <li>
                                  Some are made from recycled materials,
                                  promoting sustainability.
                                </li>
                              </ol>
                            </div>
                          </div>

                          {/* Advantages */}
                          <div>
                            <h2 className="text-2xl font-semibold mb-2">
                              Advantages of White Fertilizer Packaging Bags
                            </h2>
                            <ol className="list-decimal list-inside text-gray-800 space-y-1">
                              <li>
                                <strong>Neutral Appearance:</strong> The clean
                                white look is suitable for retail or commercial
                                use.
                              </li>
                              <li>
                                <strong>Branding Opportunities:</strong> Allows
                                custom printing for marketing and product
                                identification.
                              </li>
                              <li>
                                <strong>Durability:</strong> Strong construction
                                supports heavy fertilizer loads without
                                breaking.
                              </li>
                            </ol>
                          </div>
                        </div>
                      </section>
                    ) : (
                      ""
                    )}

                   

                    {bag.id == "BOPPFertilizer" ? (
                      <section className="px-6 bg-white text-gray-800">
                        <div className="max-w-6xl mx-auto">
                          <p className="text-lg mb-3">
                            BOPP Fertilizer Bags are high-quality packaging
                            solutions made from Biaxially Oriented Polypropylene
                            (BOPP) material. These bags are widely used for
                            packaging fertilizers due to their excellent
                            strength, durability, and aesthetic appeal. Here’s a
                            detailed overview of BOPP fertilizer bags, including
                            their key features, advantages, and common uses:
                          </p>

                          {/* Key Features */}
                          <h2 className="text-3xl font-semibold mb-6">
                            Key Features of BOPP Fertilizer Bags
                          </h2>

                          <div className="space-y-8">
                            {/* Material */}
                            <div className="bg-gray-50 p-6 rounded-lg border border-green-100 shadow-sm">
                              <h3 className="text-xl font-bold text-green-600 mb-3">
                                Material
                              </h3>
                              <ul className="list-disc pl-5 space-y-2">
                                <li>
                                  Made from BOPP film, a type of polypropylene
                                  that is stretched in two directions
                                  (biaxially), enhancing strength, clarity, and
                                  barrier properties.
                                </li>
                                <li>
                                  Often laminated, offering additional moisture
                                  resistance and making them suitable for
                                  storing various fertilizers.
                                </li>
                              </ul>
                            </div>

                            {/* Size and Capacity */}
                            <div className="bg-gray-50 p-6 rounded-lg border border-green-100 shadow-sm">
                              <h3 className="text-xl font-bold text-green-600 mb-3">
                                Size and Capacity
                              </h3>
                              <ul className="list-disc pl-5 space-y-2">
                                <li>
                                  Available in standard sizes such as 25 kg, 50
                                  kg, and larger bulk sizes like 1000 kg bags.
                                </li>
                                <li>
                                  Custom sizes can be manufactured to meet
                                  specific customer requirements.
                                </li>
                              </ul>
                            </div>

                            {/* Printing Options */}
                            <div className="bg-gray-50 p-6 rounded-lg border border-green-100 shadow-sm">
                              <h3 className="text-xl font-bold text-green-600 mb-3">
                                Printing Options
                              </h3>
                              <ul className="list-disc pl-5 space-y-2">
                                <li>
                                  High-quality printing capabilities allow for
                                  vibrant graphics, branding, and product
                                  details.
                                </li>
                                <li>
                                  Advanced techniques like flexographic printing
                                  ensure sharp, colorful, and eye-catching
                                  designs.
                                </li>
                              </ul>
                            </div>

                            {/* Durability */}
                            <div className="bg-gray-50 p-6 rounded-lg border border-green-100 shadow-sm">
                              <h3 className="text-xl font-bold text-green-600 mb-3">
                                Durability
                              </h3>
                              <ul className="list-disc pl-5 space-y-2">
                                <li>
                                  <strong>Tear and Puncture Resistance:</strong>{" "}
                                  Designed to withstand rough handling and
                                  transport conditions.
                                </li>
                                <li>
                                  <strong>Moisture and UV Resistance:</strong>{" "}
                                  Offers strong protection against moisture and
                                  UV rays, maintaining fertilizer quality.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </section>
                    ) : (
                      ""
                    )}

                    {bag.id == "agriFertilizer" ? (
                      <section className="px-6 bg-gray-50 text-gray-900">
                        <div className="max-w-6xl mx-auto">
                          <p className="text-lg mb-2">
                            Agricultural fertilizer bags are specifically
                            designed to package and transport a wide variety of
                            fertilizers used in farming and agriculture. These
                            bags are engineered to protect fertilizers from
                            moisture, contamination, and physical damage during
                            storage and transportation. Fertilizer bags come in
                            different materials, sizes, and designs based on the
                            type of fertilizer, storage conditions, and
                            application.
                          </p>

                          {/* Types of Bags */}
                          <h2 className="text-3xl font-semibold mb-4">
                            Types of Agricultural Fertilizer Bags
                          </h2>

                          {/* Woven PP Bags */}
                          <div className="bg-white p-6 rounded-lg shadow border border-green-100">
                            <h3 className="text-2xl font-bold text-green-600 mb-3">
                              Woven Polypropylene (PP) Bags
                            </h3>
                            <ul className="list-disc list-inside space-y-3 text-gray-800 text-base">
                              <li>
                                <strong>Material:</strong> Made from woven
                                polypropylene fabric, these bags are strong,
                                durable, and resistant to tearing.
                              </li>
                              <li>
                                <strong>Lamination:</strong> Often laminated
                                with BOPP (Biaxially Oriented Polypropylene) for
                                added moisture resistance.
                              </li>
                              <li>
                                <strong>Capacity:</strong> Typically available
                                in sizes ranging from 25 kg to 50 kg.
                              </li>
                              <li>
                                <strong>Applications:</strong> Suitable for
                                packing chemical fertilizers such as urea, DAP
                                (Diammonium Phosphate), and NPK fertilizers.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </section>
                    ) : (
                      ""
                    )}

                    {bag.id == "hdpeFertilizer" ? (
                      <section className="px-6 bg-white text-gray-900">
                        <div className="max-w-6xl mx-auto">
                          <p className="text-lg mb-1">
                            HDPE Fertilizer Bags are durable and lightweight
                            packaging solutions made from High-Density
                            Polyethylene (HDPE). These bags are widely used for
                            storing and transporting various types of
                            fertilizers due to their strength, moisture
                            resistance, and cost-effectiveness. Here’s an
                            overview of HDPE fertilizer bags, including their
                            key features, advantages, and common uses:
                          </p>

                          {/* Key Features */}
                          <h2 className="text-3xl font-semibold mb-4">
                            Key Features of HDPE Fertilizer Bags
                          </h2>

                          <div className="space-y-8">
                            {/* Material */}
                            <div className="bg-gray-50 p-6 rounded-lg border border-green-100 shadow-sm">
                              <h3 className="text-xl font-bold text-green-600 mb-3">
                                Material
                              </h3>
                              <ul className="list-disc pl-5 space-y-2">
                                <li>
                                  Made from High-Density Polyethylene (HDPE),
                                  known for its high strength-to-density ratio,
                                  making it suitable for heavy loads.
                                </li>
                                <li>
                                  HDPE is resistant to chemicals, moisture, and
                                  UV radiation, providing good protection for
                                  the contents inside.
                                </li>
                              </ul>
                            </div>

                            {/* Size and Capacity */}
                            <div className="bg-gray-50 p-6 rounded-lg border border-green-100 shadow-sm">
                              <h3 className="text-xl font-bold text-green-600 mb-3">
                                Size and Capacity
                              </h3>
                              <ul className="list-disc pl-5 space-y-2">
                                <li>
                                  Common sizes: 25 kg, 50 kg, and large bulk
                                  options like 1000 kg.
                                </li>
                                <li>
                                  Custom sizes available based on customer
                                  requirements.
                                </li>
                              </ul>
                            </div>

                            {/* Printing Options */}
                            <div className="bg-gray-50 p-6 rounded-lg border border-green-100 shadow-sm">
                              <h3 className="text-xl font-bold text-green-600 mb-3">
                                Printing Options
                              </h3>
                              <ul className="list-disc pl-5 space-y-2">
                                <li>
                                  Supports branding, product details, and
                                  instructions using flexographic printing.
                                </li>
                                <li>
                                  Delivers vibrant color and high legibility.
                                </li>
                              </ul>
                            </div>

                            {/* Durability */}
                            <div className="bg-gray-50 p-6 rounded-lg border border-green-100 shadow-sm">
                              <h3 className="text-xl font-bold text-green-600 mb-3">
                                Durability
                              </h3>
                              <ul className="list-disc pl-5 space-y-2">
                                <li>
                                  <strong>Tear & Puncture Resistance:</strong>{" "}
                                  Engineered for rough handling and transport
                                  conditions.
                                </li>
                                <li>
                                  <strong>Moisture Resistance:</strong> Protects
                                  contents from humidity and prevents clumping
                                  or spoilage.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </section>
                    ) : (
                      ""
                    )}

                    {bag.id == "5kgFertilizer" ? (
                      <section className="px-6 bg-gray-50 text-gray-900">
                        <div className="max-w-6xl mx-auto">
                          <p className="text-lg mb-2">
                            5 Kg Fertilizer Bags are commonly used packaging
                            solutions designed to hold 5 kilograms of various
                            types of fertilizers. These bags are popular in both
                            retail and agricultural settings, offering a
                            convenient size for consumers and farmers alike.
                            Here’s a detailed overview of 5 Kg fertilizer bags,
                            including their key features, advantages, and common
                            uses:
                          </p>

                          {/* Key Features */}
                          <h2 className="text-3xl font-semibold mb-4">
                            Key Features of 5 Kg Fertilizer Bags
                          </h2>

                          <div className="space-y-8">
                            {/* Material */}
                            <div className="bg-white p-6 rounded-lg shadow border border-green-100">
                              <h3 className="text-xl font-bold text-green-600 mb-3">
                                Material
                              </h3>
                              <ul className="list-disc pl-5 space-y-2">
                                <li>
                                  Made from woven polypropylene (PP) or
                                  High-Density Polyethylene (HDPE) for
                                  durability and strength.
                                </li>
                                <li>
                                  Optional use of BOPP for improved moisture
                                  resistance and aesthetic appeal.
                                </li>
                              </ul>
                            </div>

                            {/* Size and Dimensions */}
                            <div className="bg-white p-6 rounded-lg shadow border border-green-100">
                              <h3 className="text-xl font-bold text-green-600 mb-3">
                                Size and Dimensions
                              </h3>
                              <ul className="list-disc pl-5 space-y-2">
                                <li>
                                  Designed specifically to hold 5 kilograms of
                                  fertilizer.
                                </li>
                                <li>
                                  Dimensions may vary depending on material type
                                  and bag style (flat or gusseted).
                                </li>
                              </ul>
                            </div>

                            {/* Printing Options */}
                            <div className="bg-white p-6 rounded-lg shadow border border-green-100">
                              <h3 className="text-xl font-bold text-green-600 mb-3">
                                Printing Options
                              </h3>
                              <ul className="list-disc pl-5 space-y-2">
                                <li>
                                  Custom-printed with branding, product info,
                                  and instructions using high-quality methods
                                  like flexographic printing.
                                </li>
                                <li>
                                  Eye-catching designs boost visibility on
                                  retail shelves.
                                </li>
                              </ul>
                            </div>

                            {/* Durability */}
                            <div className="bg-white p-6 rounded-lg shadow border border-green-100">
                              <h3 className="text-xl font-bold text-green-600 mb-3">
                                Durability
                              </h3>
                              <ul className="list-disc pl-5 space-y-2">
                                <li>
                                  <strong>Tear & Puncture Resistance:</strong>{" "}
                                  Withstands transportation and handling stress.
                                </li>
                                <li>
                                  <strong>Moisture Resistance:</strong> Prevents
                                  clumping and maintains fertilizer quality.
                                </li>
                              </ul>
                            </div>

                            {/* Environmental Considerations */}
                            <div className="bg-white p-6 rounded-lg shadow border border-green-100">
                              <h3 className="text-xl font-bold text-green-600 mb-3">
                                Environmental Considerations
                              </h3>
                              <ul className="list-disc pl-5 space-y-2">
                                <li>
                                  Many bags are recyclable and support
                                  eco-friendly agricultural practices.
                                </li>
                                <li>
                                  Can be manufactured from recycled materials to
                                  promote sustainability.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </section>
                    ) : (
                      ""
                    )}

                    {bag.id == "25kgFertilizers" ? (
                      <section className="px-6 bg-white text-gray-900">
                        <p className="text-lg mb-2">
                          25 Kg Fertilizer Bags are commonly used packaging
                          solutions designed for the storage and transport of
                          various fertilizers. These bags are ideal for
                          agricultural use, providing an effective way to handle
                          and apply fertilizers in larger quantities. Here’s a
                          detailed overview of 25 Kg fertilizer bags, including
                          their key features, advantages, and common uses:
                        </p>

                        {/* Key Features */}
                        <h2 className="text-3xl font-semibold mb-4">
                          Key Features of 25 Kg Fertilizer Bags
                        </h2>
                        <ol className="space-y-6 list-decimal list-inside text-gray-800 text-base pl-4">
                          {/* 1. Material */}
                          <li>
                            <strong>Material:</strong>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>
                                Made from woven polypropylene (PP), HDPE, or
                                BOPP.
                              </li>
                              <li>Woven PP bags are strong and durable.</li>
                              <li>
                                BOPP bags offer superior moisture resistance and
                                aesthetics.
                              </li>
                            </ul>
                          </li>

                          {/* 2. Size and Capacity */}
                          <li>
                            <strong>Size and Capacity:</strong>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>
                                Designed to hold 25 kilograms of fertilizer.
                              </li>
                              <li>Suitable for both retail and bulk use.</li>
                              <li>
                                Bag dimensions may vary by material and design
                                (flat/gusseted).
                              </li>
                            </ul>
                          </li>

                          {/* 3. Printing Options */}
                          <li>
                            <strong>Printing Options:</strong>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>
                                Uses flexographic and other high-quality
                                printing methods.
                              </li>
                              <li>
                                Enables branding, product info, and visual
                                appeal.
                              </li>
                            </ul>
                          </li>

                          {/* 4. Durability */}
                          <li>
                            <strong>Durability:</strong>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>
                                Tear and puncture resistant for reliable storage
                                and transport.
                              </li>
                              <li>
                                Moisture resistant to prevent clumping and
                                product degradation.
                              </li>
                            </ul>
                          </li>

                          {/* 5. Environmental Considerations */}
                          <li>
                            <strong>Environmental Considerations:</strong>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>
                                Recyclable materials support sustainability.
                              </li>
                              <li>Some bags made using recycled content.</li>
                            </ul>
                          </li>
                        </ol>

                        {/* Advantages */}
                        <h2 className="text-3xl font-semibold mt-12 mb-4">
                          Advantages of 25 Kg Fertilizer Bags
                        </h2>
                        <ol className="list-decimal list-inside space-y-4 text-gray-800 pl-4">
                          <li>
                            <strong>Convenient Size:</strong> Ideal for farmers
                            and gardeners seeking a manageable quantity.
                          </li>
                          <li>
                            <strong>Cost-Effective:</strong> Affordable and
                            widely accessible.
                          </li>
                          <li>
                            <strong>Informational:</strong> Can include key
                            product info like nutrients, usage, and safety tips.
                          </li>
                          <li>
                            <strong>Brand Visibility:</strong> Custom-printed
                            surfaces boost marketing impact.
                          </li>
                        </ol>

                        {/* Additional Info */}
                        <h2 className="text-3xl font-semibold mt-12 mb-4">
                          Additional Information
                        </h2>
                        <ul className="list-disc pl-6 text-gray-800 space-y-2">
                          <li>
                            <strong>Request:</strong> Callback available on
                            inquiry.
                          </li>
                          <li>
                            <strong>Delivery Time:</strong> 1–2 Days
                          </li>
                        </ul>
                      </section>
                    ) : (
                      ""
                    )}

                    {bag.id == "printedFertilizers" ? (
                      <section className="px-6 bg-gray-50 text-gray-900">
                        <p className="text-lg mb-2">
                          Printed Fertilizer Bags are specialized packaging
                          solutions designed for the storage and transport of
                          various fertilizers, featuring customized printing for
                          branding, product information, and marketing. These
                          bags are popular in the agricultural industry for
                          their ability to effectively communicate essential
                          details while providing robust protection for the
                          contents.
                        </p>

                        {/* Key Features */}
                        <h2 className="text-3xl font-semibold mb-4">
                          Key Features of Printed Fertilizer Bags
                        </h2>

                        <ol className="list-decimal list-inside space-y-6 text-gray-800 text-base pl-4">
                          {/* 1. Material */}
                          <li>
                            <strong>Material:</strong>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>
                                Commonly made from woven polypropylene (PP) or
                                High-Density Polyethylene (HDPE).
                              </li>
                              <li>
                                Offers strong resistance to tearing and
                                puncturing.
                              </li>
                              <li>
                                Optional BOPP lamination improves moisture
                                resistance and visual appearance.
                              </li>
                            </ul>
                          </li>

                          {/* 2. Size and Capacity */}
                          <li>
                            <strong>Size and Capacity:</strong>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>
                                Available in standard sizes like 5 kg, 25 kg, 50
                                kg, and up to 1000 kg bulk options.
                              </li>
                              <li>
                                Custom sizes can be tailored to client needs.
                              </li>
                            </ul>
                          </li>

                          {/* 3. Printing Options */}
                          <li>
                            <strong>Printing Options:</strong>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>
                                Uses high-quality flexographic printing for
                                vibrant, long-lasting graphics and clear text.
                              </li>
                              <li>
                                Customizable for branding, product instructions,
                                safety warnings, and marketing purposes.
                              </li>
                              <li>
                                Enhances visibility and appeal in retail and
                                agricultural markets.
                              </li>
                            </ul>
                          </li>
                        </ol>

                        {/* Additional Info */}
                        <h2 className="text-3xl font-semibold mt-12 mb-4">
                          Additional Information
                        </h2>

                        <ul className="list-disc pl-6 space-y-2 text-gray-800">
                          <li>
                            <strong>Request:</strong> Callback available upon
                            inquiry.
                          </li>
                          <li>
                            <strong>Production Capacity:</strong> 1 (unit
                            capacity — can be clarified if needed).
                          </li>
                          <li>
                            <strong>Delivery Time:</strong> 1–2 Days.
                          </li>
                          <li>
                            <strong>Packaging Details:</strong> Size: 8X11.
                          </li>
                        </ul>
                      </section>
                    ) : (
                      ""
                    )}

                    {bag.id == "greenFertilizer" ? (
                      <section className="px-6 bg-white text-gray-900">
                        <p className="text-lg mb-2">
                          Green Printed Fertilizer Bags are specially designed
                          for packaging fertilizers, featuring a green color
                          scheme. Typically made from woven polypropylene (PP),
                          these bags are printed with brand logos, product
                          information, and handling instructions. Below is an
                          overview of their key features, advantages, and
                          typical uses.
                        </p>

                        {/* Key Features */}
                        <h2 className="text-3xl font-semibold mb-4">
                          Key Features of Green Printed Fertilizer Bags
                        </h2>

                        <ol className="list-decimal list-inside text-base text-gray-800 space-y-6 pl-4">
                          {/* 1. Material */}
                          <li>
                            <strong>Material:</strong>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>
                                Constructed from woven polypropylene (PP) for
                                high strength and durability.
                              </li>
                              <li>
                                Optional BOPP lamination for added moisture
                                resistance and superior print quality.
                              </li>
                            </ul>
                          </li>

                          {/* 2. Color and Design */}
                          <li>
                            <strong>Color and Design:</strong>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>
                                Green color represents eco-friendliness or
                                organic agricultural products.
                              </li>
                              <li>
                                Custom-designed with logos, graphics, and
                                product info to enhance brand recognition and
                                shelf appeal.
                              </li>
                            </ul>
                          </li>

                          {/* 3. Printing Options */}
                          <li>
                            <strong>Printing Options:</strong>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>
                                Printed using flexographic or rotogravure
                                methods for vibrant colors and detailed text.
                              </li>
                              <li>
                                Supports multi-color designs and high-resolution
                                branding elements.
                              </li>
                            </ul>
                          </li>
                        </ol>
                      </section>
                    ) : (
                      ""
                    )}

                    {bag.id == "25kgBopp" ? (
                      <section className="px-6 bg-white text-gray-900">
                        <p className="text-lg mb-2">
                          25 Kg BOPP Fertilizer Bags are specialized packaging
                          solutions designed for storing and transporting
                          fertilizers, with a focus on durability, moisture
                          resistance, and aesthetic appeal. These bags are made
                          from Biaxially Oriented Polypropylene (BOPP), which
                          enhances their strength and barrier properties.
                        </p>

                        {/* Key Features */}
                        <h2 className="text-3xl font-semibold mb-4">
                          Key Features of 25 Kg BOPP Fertilizer Bags
                        </h2>

                        <ol className="list-decimal list-inside space-y-6 text-gray-800 text-base pl-4">
                          {/* 1. Material */}
                          <li>
                            <strong>Material:</strong>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>
                                Made from BOPP film, known for high tensile
                                strength, clarity, and moisture resistance.
                              </li>
                              <li>
                                Often features a glossy finish for enhanced
                                appearance and printability.
                              </li>
                            </ul>
                          </li>

                          {/* 2. Size and Capacity */}
                          <li>
                            <strong>Size and Capacity:</strong>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>
                                Engineered to hold 25 kilograms of fertilizer.
                              </li>
                              <li>
                                Can vary in shape and dimension (e.g., gusseted
                                or flat design).
                              </li>
                              <li>
                                Suitable for both retail display and bulk
                                storage.
                              </li>
                            </ul>
                          </li>

                          {/* 3. Printing Options */}
                          <li>
                            <strong>Printing Options:</strong>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>
                                Supports vibrant, high-definition graphics for
                                product and brand visibility.
                              </li>
                              <li>
                                Printed using flexographic techniques to ensure
                                sharp, long-lasting results.
                              </li>
                            </ul>
                          </li>

                          {/* 4. Durability */}
                          <li>
                            <strong>Durability:</strong>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>
                                <strong>Tear and Puncture Resistant:</strong>{" "}
                                Built to endure rough handling and shipping.
                              </li>
                              <li>
                                <strong>Moisture & UV Resistant:</strong>{" "}
                                Protects fertilizer from environmental
                                degradation.
                              </li>
                            </ul>
                          </li>

                          {/* 5. Environmental Considerations */}
                          <li>
                            <strong>Environmental Considerations:</strong>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>
                                Recyclable materials promote eco-friendly
                                practices.
                              </li>
                              <li>
                                Some versions made using recycled content,
                                supporting sustainability goals.
                              </li>
                            </ul>
                          </li>
                        </ol>
                      </section>
                    ) : (
                      ""
                    )}

                    {bag.id == "25kgPrinted" ? (
                      <section className="px-6 bg-white text-gray-900">
                        <p className="text-lg mb-2">
                          25 Kg Printed Fertilizer Bags are specially designed
                          woven polypropylene (PP) bags used for packaging
                          fertilizers. These bags are durable, lightweight, and
                          often feature custom printing for branding and product
                          information. Here’s a detailed overview of these bags:
                        </p>

                        {/* Key Features */}
                        <h2 className="text-3xl font-semibold mb-4">
                          Key Features of 25 Kg Printed Fertilizer Bags
                        </h2>

                        <ol className="list-decimal list-inside space-y-6 text-gray-800 text-base pl-4">
                          {/* 1. Material */}
                          <li>
                            <strong>Material:</strong>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>
                                Made from woven polypropylene (PP), known for
                                its strength and wear resistance.
                              </li>
                              <li>
                                Woven fabric structure provides excellent
                                durability for heavy-duty use.
                              </li>
                            </ul>
                          </li>

                          {/* 2. Size and Capacity */}
                          <li>
                            <strong>Size and Capacity:</strong>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>
                                Standard capacity of 25 kg, ideal for
                                fertilizers and agricultural products.
                              </li>
                              <li>
                                Typically rectangular in shape for easier
                                stacking and transport.
                              </li>
                              <li>
                                Dimensions can vary slightly depending on
                                provider specifications.
                              </li>
                            </ul>
                          </li>

                          {/* 3. Printing Options */}
                          <li>
                            <strong>Printing Options:</strong>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>
                                Fully customizable printing with brand logos,
                                color schemes, and usage instructions.
                              </li>
                              <li>
                                Printing techniques include flexographic
                                printing or BOPP lamination for a high-quality,
                                glossy finish.
                              </li>
                            </ul>
                          </li>

                          {/* 4. Durability */}
                          <li>
                            <strong>Durability:</strong>
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>
                                <strong>Tear and Puncture Resistance:</strong>{" "}
                                Engineered to endure tough handling and
                                logistics.
                              </li>
                              <li>
                                <strong>Moisture Resistance:</strong> Protects
                                fertilizer contents from humidity and water
                                exposure.
                              </li>
                            </ul>
                          </li>
                        </ol>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">8+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Years Experience
              </h3>
              <p className="text-gray-600 text-sm">
                Extensive experience in fertilizer packaging industry
              </p>
            </div> */}

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

      {/* Floating Request Callback Button
      <div className="fixed bottom-6 right-6 z-50">
        <QuoteButtonWithDialog>
          <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Request Callback
          </Button>
        </QuoteButtonWithDialog>
      </div> */}
    </div>
  );
}
