import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../lib/axios";
import { formatPriceAUS } from "../lib/format";

const ProductDetailPage = () => {
  const { id } = useParams(); // get product id from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="text-center p-6">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!product) return <div className="text-center">No product found</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold text-black mb-4">
            {product.name}
          </h1>
          <span className="text-black font-semibold">Description:</span> {" "}
          <p className="text-gray-900 mb-6">{product.description}</p>
          <span className="text-black font-semibold">Price:</span> {" "}
          <span className="text-2xl font-semibold text-red-600 mb-6">
            {formatPriceAUS(product.price)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
