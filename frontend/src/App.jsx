import Navbar from "./components/Navbar.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import CartPage from './pages/CartPage.jsx';
import PurchaseSuccessPage from './pages/PurchaseSuccessPage.jsx';
import PurchaseCancelPage from './pages/PurchaseCancelPage.jsx';



import { Toaster } from "react-hot-toast";
import { useUserStore } from "./stores/useUserStore.js";
import { useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import { useCartStore } from "./stores/useCartStore.js";

function App() {

  const{user,checkAuth,checkingAuth} = useUserStore();
  const {getCartItems} = useCartStore();
 
  useEffect(() => {
    checkAuth();
  },[checkAuth]) // this line is set "checkAuth" as agrument 

  useEffect(()=>{
    if(!user) return;
    getCartItems();
  },[getCartItems, user]) // this hook "useEffect" to fetch all item in Cart icon in HomePage

  if(checkingAuth) return <LoadingSpinner />

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* Push content below the fixed navbar */}
      <div className="pt-20 px-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={!user ? <SignupPage /> : <Navigate to={"/"} />} />
          <Route path="/login" element={!user ? <LoginPage /> : <Navigate to={"/"} />} />
          <Route path="/secret-dashboard" element={user?.role === "admin" ? <AdminPage /> : <Navigate to={"/login"} />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/cart" element={user ? <CartPage /> : <Navigate to={'/login'} />} />
          <Route path="/purchase-success" element={user ? <PurchaseSuccessPage /> : <Navigate to={'/login'} />} />
          <Route path="/purchase-cancel" element={user ? <PurchaseCancelPage /> : <Navigate to={'/login'} />} />

        </Routes>
      </div>
      <Toaster />
    </div>
  );
}

export default App;

