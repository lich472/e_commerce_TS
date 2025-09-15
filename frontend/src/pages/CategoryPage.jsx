import { useEffect, useState, useMemo } from 'react'
import { useProductStore } from '../stores/useProductStore.js'
import { useParams } from 'react-router-dom';
import {motion} from "framer-motion"
import ProductCard from '../components/ProductCard.jsx';
import Searchbar from '../components/Searchbar.jsx';

function CategoryPage() {
    const { fetchProductsByCategory, products } = useProductStore();
	const [sortType, setSortType] = useState("relevent");

    // useParams() to read URL parameters make "fetchProductsByCategory" more dunamic when ":category" could be shoes, jeans, tshirts,...
    const { category } = useParams(); // this category is ":category"

    useEffect(()=>{
        fetchProductsByCategory(category)
    },[fetchProductsByCategory, category])

    console.log("products:", products)

	// useMemo so sorting only recalculates when products or sortType changes
	const sortedProducts = useMemo(() => {
		let sorted = [...(products || [])];

		switch (sortType) {
		case "low-high":
			sorted.sort((a, b) => a.price - b.price);
			break;
		case "high-low":
			sorted.sort((a, b) => b.price - a.price);
			break;
		default:
			// "relevant" → leave products as is (no sort)
			break;
		}
		return sorted;
	}, [products, sortType]);

	//format Category Name
	const formatCategory = (cat) => {
		return cat
			.replace(/([A-Z])/g, " $1")
			.trim()
			.replace(/\b\w/g, (char) => char.toUpperCase());
	};

  return (
    <div className='min-h-screen'>
			<div className='relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<motion.h1
					className='text-center text-4xl sm:text-5xl font-bold text-black mb-8'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					{/* {category.charAt(0).toUpperCase() + category.slice(1)} */}
				{formatCategory(category)}
				</motion.h1>

				<motion.div
					className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'
				>
					<div className='min-w-60'>
						{/* Search bar */}
						<div>
						<Searchbar category={category} />
						</div>

						{/* SortBy */}
						<div className='flex justify-between text-base sm:text-2xl mb-4'>
							<select
								className="bg-gray-100 border-2 border-gray-300 text-sm px-2"
								value={sortType}
								onChange={(e) => setSortType(e.target.value)}
							>
								<option value="relevant">Sort by: Relevent</option>
								<option value="low-high">Sort by: Low to High</option>
								<option value="high-low">Sort by: High to Low</option>
							</select>
						</div>

					</div>
				</motion.div>

				<motion.div
					className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					{sortedProducts?.length === 0 && (
						<h2 className='text-3xl font-semibold text-black text-center col-span-full'>
							No products found
						</h2>
					)}

					{sortedProducts?.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</motion.div>
			</div>
	</div>
  )
}

export default CategoryPage