import React, { useEffect, useState } from 'react'
import { useProductStore } from '../stores/useProductStore';

type SearchbarProp = {
    category: string | undefined
}
const Searchbar = ({ category }: SearchbarProp) => {
    const [query, setQuery] = useState<string>("");
    const { fetchProductsBySearch, fetchProductsByCategory } = useProductStore();

    useEffect(() => {
    if (query.trim() === "") {
        if (category) fetchProductsByCategory(category);
    } else {
        fetchProductsBySearch(query, category ?? "");
    }
}, [query, category]);

    return (
        <div className='flex items-center gap-2 mb-4'>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Search...'
                className='px-3 py-2 rounded-md border border-gray-300 bg-gray-50 text-black flex-1' 
            />
        </div>
    )
}

export default Searchbar;
