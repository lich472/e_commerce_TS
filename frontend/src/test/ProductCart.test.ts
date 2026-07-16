import { describe, it, expect } from "vitest";
import { Product } from "../types";

const sampleProduct: Product = {
    _id: "01",
    name: "Iphone 15",
    price: 1200,
    image: "iphone.png",
    category: "iphone",
    description: "The Smart Phone",
    isFeatured: true,
}