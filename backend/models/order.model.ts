import mongoose from "mongoose";

type Order = {
	user: mongoose.Schema.Types.ObjectId,
	products: {
		product: mongoose.Schema.Types.ObjectId,
		quantity: number,
		price: number,
	}[],
	totalAmount: number,
	stripeSessionId: string,
	emailSent: boolean;
}

const orderSchema = new mongoose.Schema<Order>(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		products: [
			{
				product: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Product",
					required: true,
				},
				quantity: {
					type: Number,
					required: true,
					min: 1,
				},
				price: {
					type: Number,
					required: true,
					min: 0,
				},
			},
		],
		totalAmount: {
			type: Number,
			required: true,
			min: 0,
		},
		stripeSessionId: {
			type: String,
			unique: true,
		},
	},
	{ timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
