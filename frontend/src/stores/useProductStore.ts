import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../lib/axios";
import { ProductStore } from "../types";
import { AxiosError } from "axios"

export const useProductStore = create<ProductStore>((set) => ({
	products: [],
	loading: false,
	error: null,
	setProducts: (products) => set({ products }),
	createProduct: async (productData) => {
		set({ loading: true });
		try {
			const res = await axios.post("/products", productData);
			set((prevState) => ({
				products: [...prevState.products, res.data],
				loading: false,
			}));
		} catch (error) {
			const axiosError = error as AxiosError<{ error: string }>
			toast.error(axiosError.response?.data?.error || "Failed to fetch products");
			set({ loading: false });
		}
	},
	fetchAllProducts: async () => {
		set({ loading: true });
		try {
			const response = await axios.get("/products");
			set({ products: response.data.products, loading: false });
		} catch (error) {
			const axiosError = error as AxiosError<{ error: string }>
			set({ error: "Failed to fetch products", loading: false });
			toast.error(axiosError.response?.data?.error || "Failed to fetch products");
		}
	},
	fetchProductsByCategory: async (category) => {
		set({ loading: true });
		try {
			const response = await axios.get(`/products/category/${category}`);
			set({ products: response.data.products, loading: false });
		} catch (error) {
			const axiosError = error as AxiosError<{ error: string }>
			set({ error: "Failed to fetch products", loading: false });
			toast.error(axiosError.response?.data?.error || "Failed to fetch products");
		}
	},
	fetchProductsBySearch: async (query, category) => {
		set({ loading: true });
		try {
			const response = await axios.get("/products/search", {
			params: { q: query, category } // pass category to backend
			});
			set({ products: response.data, loading: false });
		} catch (error) {
			const axiosError = error as AxiosError<{ error: string }>
			set({ loading: false });
			toast.error(axiosError.response?.data?.error || "Failed to fetch products");
		}
	},
	deleteProduct: async (productId) => {
		set({ loading: true });
		try {
			await axios.delete(`/products/${productId}`);
			set((prevProducts) => ({
				products: prevProducts.products.filter((product) => product._id !== productId),
				loading: false,
			}));
		} catch (error) {
			const axiosError = error as AxiosError<{ error: string }>
			set({ loading: false });
			toast.error(axiosError.response?.data?.error || "Failed to delete product");
		}
	},
	toggleFeaturedProduct: async (productId) => {
		set({ loading: true });
		try {
			const response = await axios.patch(`/products/${productId}`);
			// this will update the isFeatured prop of the product
			set((prevProducts) => ({
				products: prevProducts.products.map((product) =>
					product._id === productId ? { ...product, isFeatured: response.data.isFeatured } : product
				),
				loading: false,
			}));
		} catch (error) {
			const axiosError = error as AxiosError<{ error: string }>
			set({ loading: false });
			toast.error(axiosError.response?.data?.error || "Failed to update product");
		}
	},
	fetchFeaturedProducts: async () => {
		set({ loading: true });
		try {
			const response = await axios.get("/products/featured");
			set({ products: response.data, loading: false });
		} catch (error) {
			set({ error: "Failed to fetch products", loading: false });
			console.log("Error fetching featured products:", error);
		}
	},
}));
