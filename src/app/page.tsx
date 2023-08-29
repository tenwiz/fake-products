"use client";

import { useEffect, useState } from "react";

import { useDebounce, useProducts } from "./hooks";

import { ProductCard } from "./components/Cards";
import { Spinner } from "./components/Loading";
import { SearchInput } from "./components/Input";

export default function Home() {
  // Fetch products from API
  // We use the custom hook useProducts
  const { loading, error, products, fetchProducts } = useProducts();

  // Search term state
  const [searchTerm, setSearchTerm] = useState<string>("");
  // Debounce the search term so that we make less API calls
  const debouncedValue = useDebounce<string>(searchTerm, 500);

  useEffect(() => {
    // If the debounced value is not empty, fetch products
    fetchProducts(searchTerm);
  }, [debouncedValue]);

  // If there is an error, show error message
  if (error)
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="text-red-500 text-lg">Something went wrong...</div>
      </div>
    );

  return (
    <main className="flex flex-col">
      <h1 className="text-4xl font-bold text-center my-8">Products</h1>
      <div className="w-full mb-8 px-8">
        <SearchInput
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {loading && <Spinner />}
      {!loading && (
        <div className="grid grid-cols-5 gap-8 w-full overflow-auto px-8">
          {products.map((product) => (
            <ProductCard key={product.id} item={product} />
          ))}
        </div>
      )}
    </main>
  );
}
