import { Product } from "../types";

const BASE_URL = "https://fakestoreapi.com";

// Fetches all products from the API
// Returns a promise of an array of products
// The query parameter is used to filter the products
export const fetchAllProducts = async (query: string): Promise<Product[]> => {
  const response = await fetch(`${BASE_URL}/products?${query}`).then((res) =>
    res.json()
  );

  if (query) {
    return response.filter((product: Product) => {
      return JSON.stringify(product)
        .toLowerCase()
        .includes(query.toLowerCase());
    });
  }

  return response;
};
