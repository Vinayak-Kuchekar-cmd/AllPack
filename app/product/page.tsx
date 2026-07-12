import type { Metadata } from "next";
import { FaArrowLeft  } from 'react-icons/fa';
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Components/Ui/button";
import QuoteButtonWithDialog from "../Components/getQuotePopup";
import { Card, CardContent } from "../Components/Ui/card";

export const metadata: Metadata = {
  title: "Fertilizer Bags & Packaging Products - 5Kg, 10Kg, 25Kg, 50Kg",
  description:
    "Browse Allpack's full range of fertilizer bags and packaging products, including BOPP laminated bags, common fertilizer bags, and cylinder printed fertilizer bags in 5Kg, 10Kg, 25Kg, and 50Kg sizes, with custom branding options.",
  keywords:
    "fertilizer bags manufacturer, BOPP laminated fertilizer bags, common fertilizer bags, cylinder printed fertilizer bags, agricultural packaging bags, custom branded fertilizer bags",
};

export default function ProductsPage() {
  const productCategories = [
    {
      id: 1,
      title: "5Kg Fertilizer Bags",
      image: "/5kgfertilizer.png", 
      link: "/product/fertilizer-bags#5kgFertilizerBag",
    },
    {
      id: 2,
      title: "10Kg Fertilizer Bags",
      image: "/10kgfertilizer.png", 
      link: "/product/fertilizer-bags#10kgFertilizerBag",
    },
    {
      id: 3,
      title: "25Kg Fertilizer Bags",
      image: "/25kgfertilizer.png", 
      link: "/product/fertilizer-bags#25kgFertilizerBag",
    },
    {
      id: 4,
      title: "50Kg Fertilizer Bags",
      image: "/50kgfertilizer.png", 
      link: "/product/fertilizer-bags#50kgFertilizerBag",
    },
    // {
    //   id: 5,
    //   title: "Loop Handle Bags",
    //   image: "/product5.webp",
    //   products: ["10Kg Loop Handle Bag", "5Kg Loop Handle Non Woven Bag"],
    //   link: "/products/loop-handle-bags",
    // },
    // {
    //   id: 6,
    //   title: "Fertilizer Packaging Bag",
    //   image: "/product6.webp",
    //   products: ["Fertilizer Standy Pouch"],
    //   link: "/products/fertilizer-packaging",
    // },
    // {
    //   id: 7,
    //   title: "BOPP Laminated Woven Bags",
    //   image: "/product7.webp",
    //   products: ["Pvc Packaging Pouch"],
    //   link: "/products/bopp-laminated",
    // },
    // {
    //   id: 8,
    //   title: "Organic Fertilizer",
    //   image: "/product8.webp",
    //   products: ["25kg Water Soluble Fertilizer Bag", "Npk Fertilizer"],
    //   link: "/products/organic-fertilizer",
    // },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Products Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-[5rem]">
          <div className="flex flex-row gap-3 items-center justify-between mb-8">
            <h2 className="lg:text-3xl text-2xl font-bold text-gray-900">Products</h2>

            <div className="flex flex-row items-center space-x-4 gap-3">
              <QuoteButtonWithDialog className="hidden lg:block text-lg cursor-pointer rounded-lg bg-gradient-to-r border-1 border-gray-200 hover:bg-gray-50 text-black">
                📞 Call +91 88055 19081
                <span className="text-sm text-gray-500 ml-2">
                  75% Response Rate
                </span>
              </QuoteButtonWithDialog>

              <QuoteButtonWithDialog className="rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                📧 SEND EMAIL
              </QuoteButtonWithDialog>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category) => (
              <Card
                key={category.id}
                className="bg-white border-2 border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col h-full"
              >
                <div className="relative overflow-hidden border-b-2 border-orange-200 flex justify-center items-center h-72">
                  {" "}
                  {/* Fixed height for the image container */}
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    width={300}
                    height={300}
                    className=" transition-transform duration-300 object-cover"
                  />
                </div>

                <CardContent className="pl-4 pr-4 pt-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-red-600 mb-3 text-center group-hover:text-red-700 transition-colors">
                    {category.title}
                  </h3>

                  {/* <ul className="space-y-1 mb-4 flex-1">
                    {category.products.map((product, index) => (
                      <li
                        key={index}
                        className="text-center text-gray-600 text-md hover:text-orange-600 cursor-pointer transition-colors leading-relaxed"
                      >
                        {product}
                      </li>
                    ))}
                  </ul> */}
                </CardContent>

                <div className="text-center border-t border-gray-100 p-3 bg-gray-100 mt-auto">
                  <Link
                    href={category.link}
                    className="text-red-600 hover:text-red-800 font-medium text-lg transition-colors hover:underline"
                  >
                    View All
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-[5rem]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Allpack?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading provider of high-quality packaging solutions with
              years of expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">200+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Products
              </h3>
              <p className="text-gray-600 text-sm">
                Wide range of packaging solutions
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 lg:px-[5rem] text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Get Started with Your Packaging Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for custom packaging solutions tailored to your
              business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuoteButtonWithDialog
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
              >
                Get Quote Now
              </QuoteButtonWithDialog>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-black hover:bg-orange hover:text-gray-900"
              >
                View All Products
                <FaArrowLeft className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
