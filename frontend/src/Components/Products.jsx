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
    <main className="min-h-screen bg-peelz-offwhite px-6 py-28 text-peelz-dark md:px-8">
      <header className="mx-auto max-w-[1200px]">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-peelz-forest">Peelz catalogue</p>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">Natural products for everyday progress.</h1>
        <p className="mt-5 max-w-3xl text-lg leading-[1.7] text-peelz-dark/75">Explore practical, eco-conscious solutions for homes, farms, and animal care. Every product is designed to make responsible choices simpler.</p>
      </header>
      <div className="mx-auto mt-12 grid max-w-[1200px] gap-8 lg:grid-cols-[220px_1fr]">
        <aside className="h-fit rounded-xl border border-peelz-aqua/50 bg-white p-5 shadow-sm">
          <h2 className="font-bold">Filter products</h2>
          <div className="mt-4 grid gap-2">
            {categories.map((category) => (
              <button type="button" key={category} onClick={() => setSelectedCategory(category)} className={`rounded-lg px-4 py-3 text-left text-sm font-semibold transition ${selectedCategory === category ? "bg-peelz-dark text-white" : "text-peelz-dark hover:bg-peelz-sage"}`}>
                {category}
              </button>
            ))}
          </div>
        </aside>
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} {...item} images={getProductImages(item.id)} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Products;
