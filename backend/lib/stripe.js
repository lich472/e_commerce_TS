import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

console.log("Stripe key is:", process.env.STRIPE_SECRET_KEY); // 🔹 add this


export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
