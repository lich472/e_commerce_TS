import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "../lib/axios.js";
import toast from "react-hot-toast";
import LoadingSpinner from "./LoadingSpinner";
import { AxiosError } from "axios";
import { Product } from "../types";

const PeopleAlsoBought = () => {
	const [recommendations, setRecommendations] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchRecommendations = async () => {
			try {
				const res = await axios.get("/products/recommendations");
				setRecommendations(res.data);
			} catch (error) {
				const axiosError = error as AxiosError<{ message: string }>
				toast.error(axiosError.response!.data.message || "An error occurred while fetching recommendations");
			} finally {
				setIsLoading(false);
			}
		};

		fetchRecommendations();
	}, []);

	if (isLoading) return <LoadingSpinner />;

	return (
		<div className='mt-8'>
			<h3 className='text-2xl font-semibold text-black'>People also bought</h3>
			<div className='mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg: grid-col-3'>
				{recommendations.map((product) => (
					<ProductCard key={product._id} product={product} />
				))}
			</div>
		</div>
	);
};
export default PeopleAlsoBought;
