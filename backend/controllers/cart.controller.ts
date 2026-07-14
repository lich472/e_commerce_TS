import Product from "../models/product.model.js";
import { Request, Response } from "express";
import { Types } from "mongoose";

type CartItem = {
  quantity: number;
  product: Types.ObjectId;
}

export const getCartProducts = async (req: Request, res: Response) => {
	try {
		const products = await Product.find({ _id: { $in: req.user.cartItems } });

		// add quantity for each product
		const cartItems = products.map((product) => {
			const item = req.user.cartItems.find((cartItem: CartItem) => cartItem.product === product.id);
			return { ...product.toJSON(), quantity: item?.quantity ?? 0 };
		});

		res.json(cartItems);
	} catch (error) {
		if(error instanceof Error){
			console.log("Error in getCartProducts controller", error.message);
			res.status(500).json({ message: "Server error", error: error.message });
		}
	}
};
export const addToCart = async (req: Request, res: Response) => {
	try {
		const { productId } = req.body;
		const user = req.user;

		const existingItem = user.cartItems.find((item: CartItem) => item.product === productId);
		if (existingItem) {
			existingItem.quantity += 1;
		} else {
			user.cartItems.push(productId);
		}

		await user.save();
		res.json(user.cartItems);
	} catch (error) {
		if(error instanceof Error){
			console.log("Error in addToCart controller", error.message);
			res.status(500).json({ message: "Server error", error: error.message });
		}
	}
};

export const removeAllFromCart = async (req: Request, res: Response) => {
	try {
		const { productId } = req.body;
		const user = req.user;
		if (!productId) {
			user.cartItems = [];
		} else {
			user.cartItems = user.cartItems.filter((item: CartItem) => item.product !== productId);
		}
		await user.save();
		res.json(user.cartItems);
	} catch (error) {
		if(error instanceof Error){
			res.status(500).json({ message: "Server error", error: error.message });
		}
	}
};

export const updateQuantity = async (req: Request, res: Response) => {
	try {
		const { id: productId } = req.params;
		const { quantity } = req.body;
		const user = req.user;
		const existingItem = user.cartItems.find((item: CartItem) => item.product.toString() === productId);

		if (existingItem) { 
			if (quantity === 0) {
				user.cartItems = user.cartItems.filter((item: CartItem) => item.product.toString() !== productId);
				await user.save();
				return res.json(user.cartItems);
			}

			existingItem.quantity = quantity;
			await user.save();
			res.json(user.cartItems);
		} else {
			res.status(404).json({ message: "Product not found" });
		}
	} catch (error) {
		if(error instanceof Error){
			console.log("Error in updateQuantity controller", error.message);
			res.status(500).json({ message: "Server error", error: error.message });
		}
	}
};
