import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem.jsx";
import FeaturedProducts from "../components/FeaturedProducts.jsx";
import { useProductStore } from "../stores/useProductStore.js";

const categories = [
	{ href: "/iphone", name: "Iphones", imageUrl: "/iphone.png" },
	{ href: "/samsung", name: "Samsungs", imageUrl: "/samsung.png" },
	{ href: "/otherBrand", name: "Other Brand", imageUrl: "/otherBrand.png" },
	{ href: "/screenReplacement", name: "Screen Replacements", imageUrl: "/damagedPhone.png" },
	{ href: "/otherCommonFix", name: "Other Common Fix", imageUrl: "/otherFix.png" },
	{ href: "/batteryReplacement", name: "Battery Replacements", imageUrl: "/battery.png" },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading} = useProductStore();

	useEffect(()=>{
		fetchFeaturedProducts();
	},[fetchFeaturedProducts])
  return (
    <div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-black mb-4'>
					Welcome to Mobile Hospital Store
				</h1>
				<p className='text-center text-xl text-gray-500 mb-12'>
					Discover the latest trends in eco-friendly fashion
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
		</div>
  )
}

export default HomePage