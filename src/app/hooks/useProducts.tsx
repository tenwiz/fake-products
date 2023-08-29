"use client";

import { createContext, FC, useContext, useState } from "react";

import { Product } from "../types";
import { fetchAllProducts } from "../services";

type ProductsContextType = {
  loading: boolean;
  error: string | null;
  products: Product[];
  fetchProducts: (query: string) => Promise<void>;
};

const ProductsContext = createContext<ProductsContextType>({
  loading: false,
  error: null,
  products: [],
  fetchProducts: async () => {},
});

export const ProductsProvider: FC<{
  children: React.ReactNode;
  props?: ProductsContextType;
}> = ({ children, props }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async (query: string) => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchAllProducts(query);
      setProducts(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        loading,
        error,
        products,
        fetchProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = (): ProductsContextType => {
  const ctx = useContext(ProductsContext);

  if (!ctx) {
    console.warn(
      "You probably want to render this inside a ProductsProvider. If that's not the expected behavior, please ignore this message."
    );
  }

  return ctx;
};
