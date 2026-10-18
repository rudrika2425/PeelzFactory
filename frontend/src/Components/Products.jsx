import { useMemo, useState } from "react";
import product from "./data/product.json";
import ProductCard from "./ProductCard";
import { getProductImages } from "./utils/imagePaths";

const categories = ["All", "Home Care", "Agriculture", "Animal Care"];
const getLastTwoWords = (name) => name.trim().split(/\s+/).slice(-2).join(" ");

const sortProductsByLastTwoWords = (products) =>
  [...products].sort((firstProduct, secondProduct) =>
    getLastTwoWords(firstProduct.name).localeCompare(
      getLastTwoWords(secondProduct.name),
      undefined,
      { sensitivity: "base" },
    ),
  );

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredProducts = useMemo(
    () => sortProductsByLastTwoWords(
      selectedCategory === "All"
        ? product
        : product.filter((item) => item.category === selectedCategory),
    ),
    [selectedCategory]
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-peelz-offwhite px-4 py-28 text-peelz-dark sm:px-6 md:px-8">
      <header className="mx-auto max-w-[1200px]">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-peelz-forest">Peelz catalogue</p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">Natural products for everyday progress.</h1>
        <p className="mt-5 max-w-3xl text-lg leading-[1.7] text-peelz-dark/75">Explore practical, eco-conscious solutions for homes, farms, and animal care. Every product is designed to make responsible choices simpler.</p>
      </header>
      <div className="mx-auto mt-8 grid max-w-[1200px] grid-cols-[5.5rem_minmax(0,1fr)] gap-2 sm:mt-12 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-4 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8">
        <aside className="h-fit rounded-xl border border-peelz-aqua/50 bg-white p-2 shadow-sm sm:p-5">
          <h2 className="text-xs font-bold sm:text-base">Filter</h2>
          <div className="mt-3 grid gap-1 sm:mt-4 sm:gap-2">
            {categories.map((category) => (
              <button type="button" key={category} onClick={() => setSelectedCategory(category)} className={`break-words rounded-lg px-2 py-2 text-left text-[0.65rem] font-semibold leading-tight transition sm:px-4 sm:py-3 sm:text-sm ${selectedCategory === category ? "bg-peelz-dark text-white" : "text-peelz-dark hover:bg-peelz-sage"}`}>
                {category}
              </button>
            ))}
          </div>
        </aside>
        <section className="grid min-w-0 grid-cols-2 gap-2 sm:gap-5 xl:grid-cols-3">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} {...item} images={getProductImages(item.id)} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Products;
