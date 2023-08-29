"use client";

import { ProductsProvider } from "./hooks";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ProductsProvider>{children}</ProductsProvider>;
}
