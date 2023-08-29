import { render, screen } from "@testing-library/react";
import { ProductCard } from "@/app/components/Cards/Product";

const item = {
  id: 1,
  title: "Product 1",
  description: "Product 1 description",
  image: "https://picsum.photos/200",
  price: 100,
  category: "category 1",
};

describe("ProductCard", () => {
  it("renders product card", () => {
    render(<ProductCard item={item} />);

    const productCard = screen.getByTestId("product-card");

    expect(productCard).toBeInTheDocument();
  });
});
