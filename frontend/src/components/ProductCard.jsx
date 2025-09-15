import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
	const { user } = useUserStore();
	const { addToCart } = useCartStore();
	const handleAddToCart = () => {
		if (!user) {
			toast.error("Please login to add products to cart", { id: "login" });
			return;
		} else {
			// add to cart
			addToCart(product);
		}
	};
	
		const navigate = useNavigate(); // define navigate inside the component

		const handleItemDetail = () => {
		navigate(`/product/${product._id}`); // now navigate is defined
		};

	return (
		<div className='flex w-full relative flex-col overflow-hidden rounded-lg border border-gray-700 shadow-lg'>
			{/* <button className="hover:bg-black">
				<div className='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl'>
					<img className='object-cover w-full' src={product.image} alt='product image' />
				</div>
			</button> */}

			<button 
				className="relative group cursor-pointer"
				onClick={handleItemDetail}
			>
				<div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
					<img
					className="object-cover w-full transition-transform duration-300 group-hover:scale-105"
					src={product.image}
					alt="product image"
					/>
					<div className="absolute bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 rounded-xl pointer-events-none"></div>
				</div>
			</button>


			<div className='mt-4 px-5 pb-5'>
				<h5 className='text-xl font-semibold tracking-tight text-black'>{product.name}</h5>

				<div className='mt-2 mb-5 flex items-center justify-between'>
					<p>
						<span className='text-3xl font-bold text-black'>${product.price}</span>
					</p>
				</div>
			
				<button
					className='flex items-center justify-center rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium
					 text-white hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300'
					onClick={handleAddToCart}
				>
					<ShoppingCart size={22} className='mr-2' />
					Add to cart
				</button>
			</div>
		</div>
	);
};
export default ProductCard;
