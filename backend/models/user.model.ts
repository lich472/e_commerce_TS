import mongoose from "mongoose";
import bcrypt from "bcryptjs";

export type IUser = {
	name: string,
	email: string,
	password: string,
	cartItems: Array<{ quantity: number, product: mongoose.Types.ObjectId }>,
	role: string,
	address: string,
	comparePassword(password: string): Promise<boolean>
}

const userSchema = new mongoose.Schema<IUser>(
	{
		name: {
			type: String,
			required: [true, "Name is required"],
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: true,
			lowercase: true,
			trim: true,
		},
		password: {
			type: String,
			required: [true, "Password is required"],
			minlength: [6, "Password must be at least 6 characters long"],
		},
		cartItems: [
			{
				quantity: {
					type: Number,
					default: 1,
				},
				product: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Product",
				},
			},
		],
		role: {
			type: String,
			enum: ["customer", "admin"],
			default: "customer",
		},
		address: {
			type: String,
			required: [true, "Address is required"],
		}
	},
	{
		timestamps: true,
	}
);

// Pre-save hook to hash password before saving to database
userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next();

	try {
		const salt = await bcrypt.genSalt(10);
		this.password = await bcrypt.hash(this.password, salt);
		next();
	} catch (error) {
		if (error instanceof Error) {
			next(error);
		}
	}
});

userSchema.methods.comparePassword = async function (password: string) {
	return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
