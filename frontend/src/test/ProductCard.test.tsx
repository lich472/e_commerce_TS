import { it, expect, vi } from "vitest";
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Product } from "../types";
import ProductCard from '../components/ProductCard';
import { MemoryRouter } from "react-router-dom";

const mockAddToCart = vi.fn();

vi.mock("../stores/useUserStore", () => ({
    useUserStore: () => ({ 
        user: { _id: "01", name: "Lich" } 
    })
}));

vi.mock("../stores/useCartStore", () => ({
    useCartStore: () => ({ 
        addToCart: mockAddToCart 
    })
}));

const sampleProduct: Product = {
    _id: "01", 
    name: "Iphone 15", 
    price: 1200,
    image: "iphone.png", 
    category: "iphone",
    description: "The Smart Phone", 
    isFeatured: true,
}

it("renders product name", () => {
    //ARRANGE
    render(
        <MemoryRouter>
            <ProductCard product={sampleProduct} />
        </MemoryRouter>
    )
    //ASSERT
    expect(screen.getByText("Iphone 15")).toBeInTheDocument()
})

it("renders product price", () => {
    //ARRANGE
    render(
        <MemoryRouter>
            <ProductCard product={sampleProduct} />
        </MemoryRouter>
    )
    //ASSERT
    expect(screen.getByText("$1,200.00")).toBeInTheDocument()
})

it("calls addToCart when clicking Add to cart", async () => {
    //ARRANGE
    render(
        <MemoryRouter>
            <ProductCard product={sampleProduct} />
        </MemoryRouter>
    )
    //ACT
    await userEvent.click(screen.getByText("Add to cart"))
    //ASSERT
    expect(mockAddToCart).toHaveBeenCalledWith(sampleProduct)
})