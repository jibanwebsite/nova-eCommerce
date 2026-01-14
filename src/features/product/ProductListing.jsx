import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FilterSidebar } from "./components/FilterSidebar";
import {
  ProductGrid,
  defaultClothing,
  defaultTshirts,
} from "./components/ProductGrid";
import { ChevronDown } from "lucide-react";

export function ProductListing() {
  const [sortBy, setSortBy] = useState("Recommended");
  const location = useLocation();
  const { gender, category } = useParams();

  // Dynamic Page Config
  const isClothing = location.pathname.includes("clothing");
  const isShopAll = location.pathname === "/shop";
  
  // If params exist, use them. Else fall back to manual checks or default.
  let pageTitle = "Men T-Shirts";
  let displayGender = "Men";
  let displayCategory = "T-Shirts";
  let products = defaultTshirts;
  let itemCount = "102";

  if (gender && category) {
    // Format category for display (kurtas-and-kurta-sets -> Kurtas & Kurta Sets)
    displayGender = gender.charAt(0).toUpperCase() + gender.slice(1);
    displayCategory = category
      .split("-")
      .map((word) =>
        word === "and" ? "&" : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(" ");

    pageTitle = `${displayGender} ${displayCategory}`;

    // Simple mock logic to show "clothing" data for non-tshirt categories just to vary it
    if (!category.includes("t-shirt")) {
      products = defaultClothing;
      itemCount = "126"; // Random count for other categories
    }
  } else if (isClothing) {
    pageTitle = "Clothing & Apparel";
    products = defaultClothing;
    itemCount = "400";
  } else if (isShopAll) {
    pageTitle = "All Products";
    displayGender = "All";
    displayCategory = "Products";
    products = defaultClothing;
    itemCount = "45000+";
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumbs & Title Section - Wrapped in max-width */}
      <div className="max-w-[1600px] mx-auto">
        <div className="pt-4 px-5 pb-5">
          <div className="text-sm text-gray-900 mb-6">
            <span className="cursor-pointer hover:text-gray-900">Home</span>
            <span className="mx-2 text-gray-400">/</span>
            {isClothing ? (
              <span className="font-bold">Clothing & Apparel</span>
            ) : (
              <>
                <span className="cursor-pointer hover:text-gray-900 font-bold capitalize">
                  {displayGender}
                </span>
                <span className="mx-2 text-gray-400">/</span>
                <span className="font-bold capitalize">{displayCategory}</span>
              </>
            )}
          </div>

          <div className="mb-4">
            <h1 className="text-base font-bold text-gray-900 inline-block mr-2">
              {pageTitle}
            </h1>
            <span className="text-gray-500 text-base">- {itemCount} items</span>
          </div>
        </div>

        <div className="flex px-5 pb-10">
          {/* Left Sidebar */}
          <div className="w-[18%] min-w-[250px] border-r border-gray-200 pr-5 hidden md:block">
            <FilterSidebar />
          </div>

          {/* Right Grid */}
          <div className="flex-1 pl-5">
            {/* Horizontal Filters Bar (Top of grid) */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
              <div className="flex items-center gap-6">
                {/* Dropdowns */}
                <div className="relative group cursor-pointer">
                  <div className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900">
                    Bundles <ChevronDown className="w-3 h-3 text-gray-400" />
                  </div>
                </div>
                <div className="relative group cursor-pointer">
                  <div className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900">
                    Country of Origin{" "}
                    <ChevronDown className="w-3 h-3 text-gray-400" />
                  </div>
                </div>
                <div className="relative group cursor-pointer">
                  <div className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900">
                    Size <ChevronDown className="w-3 h-3 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Sort By */}
              <div className="relative border border-gray-200 px-4 py-2 w-64 cursor-pointer">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">
                    Sort by : <strong>{sortBy}</strong>
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>
              </div>
            </div>

            <ProductGrid products={products} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
