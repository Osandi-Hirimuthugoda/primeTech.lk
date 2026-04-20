import React, { useState } from 'react';
import { type Page } from './Types';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import HomePage from './Pages/HomePage';
import EcosystemPage from './Pages/EcosystemPage';
import CollectionPage from './Pages/CollectionPage';
import ComparePage from './Pages/ComparePage';
import ChatPage from './Pages/ChatPage';
import CartPage from './Pages/CartPage';
import WarrantyPage from './Pages/WarrantyPage';
import ReferralPage from './Pages/ReferralPage';
import TradeInPage from './Pages/TradeInPage';
import ProfilePage from './Pages/ProfilePage';
import OrderHistoryPage from './Pages/OrderHistoryPage';
import SavedItemsPage from './Pages/SavedItemsPage';
import AccountSettingsPage from './Pages/AccountSettingsPage';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import AdminDashboardPage from './Pages/AdminDashboardPage';
import AdminProductsPage from './Pages/AdminProductsPage';
import AdminOrdersPage from './Pages/AdminOrdersPage';
import AdminCustomersPage from './Pages/AdminCustomersPage';
import AdminWarrantyPage from './Pages/AdminWarrantyPage';
import AdminSettingsPage from './Pages/AdminSettingsPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isAuthPage = currentPage === 'login' || currentPage === 'register';

  return (
    <div style={{ fontFamily: "'Geist', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", minHeight: '100vh' }}>
      {/* Inject Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..800;1,9..40,300..800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #F9FAFB; }
        button, input, select { font-family: inherit; }
        input:focus { border-color: #3B82F6 !important; }
        select { appearance: none; }
      `}</style>

      {!isAuthPage && (
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      )}

      {currentPage === 'login' && (
        <LoginPage onNavigate={handleNavigate} />
      )}
      {currentPage === 'register' && (
        <RegisterPage onNavigate={handleNavigate} />
      )}
      {currentPage === 'home' && (
        <HomePage onNavigate={handleNavigate} />
      )}
      {currentPage === 'ecosystem' && (
        <EcosystemPage onNavigate={handleNavigate} />
      )}
      {currentPage === 'collection' && (
        <CollectionPage onNavigate={handleNavigate} />
      )}
      {currentPage === 'compare' && (
        <ComparePage onNavigate={handleNavigate} />
      )}
      {currentPage === 'chat' && (
        <ChatPage onNavigate={handleNavigate} />
      )}
      {currentPage === 'cart' && (
        <CartPage onNavigate={handleNavigate} />
      )}
      {currentPage === 'warranty' && (
        <WarrantyPage onNavigate={handleNavigate} />
      )}
      {currentPage === 'referral' && (
        <ReferralPage onNavigate={handleNavigate} />
      )}
      {currentPage === 'tradein' && (
        <TradeInPage onNavigate={handleNavigate} />
      )}
      {currentPage === 'profile' && (
        <ProfilePage onNavigate={handleNavigate} />
      )}
      {currentPage === 'orders' && (
        <OrderHistoryPage onNavigate={handleNavigate} />
      )}
      {currentPage === 'saved' && (
        <SavedItemsPage onNavigate={handleNavigate} />
      )}
      {currentPage === 'settings' && (
        <AccountSettingsPage onNavigate={handleNavigate} />
      )}
      {currentPage === 'productdetails' && (
        <ProductDetailsPage onNavigate={handleNavigate} />
      )}
      {currentPage === 'admindashboard' && (
        <AdminDashboardPage onNavigate={handleNavigate} />
      )}
      {currentPage === 'adminproducts' && (
        <AdminProductsPage onNavigate={handleNavigate} />
      )}
      {currentPage === 'adminorders' && (
        <AdminOrdersPage onNavigate={handleNavigate} />
      )}
      {currentPage === 'admincustomers' && (
        <AdminCustomersPage onNavigate={handleNavigate} />
      )}
      {currentPage === 'adminwarranty' && (
        <AdminWarrantyPage onNavigate={handleNavigate} />
      )}
      {currentPage === 'adminsettings' && (
        <AdminSettingsPage onNavigate={handleNavigate} />
      )}

      {!isAuthPage && <Footer />}
    </div>
  );
};

export default App;