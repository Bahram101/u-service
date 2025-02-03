"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import ProductCarousel from "@/shared/components/layouts/main/product/product-carouse";
import Image from "next/image";

// export const metadata = {
//   title: "Home",
// };

const Home = () => {
  return (
    <>
      <ProductCarousel />
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a href="#" className="group">
          <Image
            src="https://media.dodostatic.net/image/r:292x292/019354022b747203a55472d5be29be7f.avif"
            width={292}
            height={292}
            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
            className=" w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
          />
          <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
        </a>
        <a href="#" className="group">
          <Image
            src="https://media.dodostatic.net/image/r:292x292/019354022b747203a55472d5be29be7f.avif"
            width={292}
            height={292}
            alt="Olive drab green insulated bottle with flared screw lid and flat top."
            className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
          />
          <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
        <a href="#" className="group">
          <Image
            src="https://media.dodostatic.net/image/r:292x292/019354022b747203a55472d5be29be7f.avif"
            width={292}
            height={292}
            alt="Person using a pen to cross a task off a productivity paper card."
            className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
          />
          <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
        </a>
        <a href="#" className="group">
          <Image
            src="https://media.dodostatic.net/image/r:292x292/019354022b747203a55472d5be29be7f.avif"
            width={292}
            height={292}
            alt="Hand holding black machined steel mechanical pencil with brass tip and top."
            className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
          />
          <h3 className="mt-4 text-sm text-gray-700">
            Machined Mechanical Pencil
          </h3>
          <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
      </div>
    </>
  );
};

export default Home;
