export type Product = {
    _id: string,
    name: string,
    price: number,
    image: string,
    category: string,
    description: string,
    isFeatured: boolean,
}

export type User = {
  _id: string;
  name: string;
  email: string;
  role: string;
  address: string;
  cartItems: CartItemType[];
}

export type CategoryItem = {
  href: string;
  imageUrl: string;
  name: string;
}

export type CartItemType = Product & {
    quantity: number,
}

export type Coupon = {
	code: string,
	discountPercentage: number,
	expirationDate: Date,
	isActive: boolean,
	userId: string
}

export type CartStore = {
    cart: CartItemType[],
    coupon: Coupon | null,
    total: number, 
    subtotal: number,
    isCouponApplied: boolean,
    getMyCoupon: () => Promise<void>,
    applyCoupon: (code: string) => Promise<void>,
	removeCoupon: () => void,
    getCartItems: () => Promise<void>,
    clearCart: () => Promise<void>,
    addToCart: (product: Product) => Promise<void>,
    removeFromCart: (productId: string) => Promise<void>,
    updateQuantity: (productId: string, quantity: number) => Promise<void>,
    calculateTotals: () => void
}

export type ProductStore = {
    products: Product[],
    loading: boolean,
    error: string | null,
    setProducts: (products: Product[]) => void,
    createProduct: (productData: Omit<Product, "_id" | "isFeatured">) => Promise<void>,
    fetchAllProducts: () => Promise<void>,
    fetchProductsByCategory: (category: string) => Promise<void>,
    fetchProductsBySearch: (query: string, category: string) => Promise<void>,
    deleteProduct: (productId: string) => Promise<void>,
    toggleFeaturedProduct: (productId: string) => Promise<void>,
    fetchFeaturedProducts: () => Promise<void>
}

export type UserStore = {
    user: User | null,
    loading: boolean,
    checkingAuth: boolean,
    signup: ({ name, email, address, password, confirmPassword }: {
        name: string,
        email: string,
        address: string,
        password: string,
        confirmPassword: string,
    }) => Promise<string | undefined>,
    login: (email: string, password: string) => Promise<void>,
    logout: () => Promise<void>,
    checkAuth: () => Promise<void>,
    refreshToken: () => Promise<void>
}