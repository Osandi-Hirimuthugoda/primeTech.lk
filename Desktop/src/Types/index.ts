export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  colors?: string[];
  badge?: string;
  category: string;
  rating?: number;
  storage?: string[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface EcosystemItem {
  id: string;
  name: string;
  category: string;
  image: string;
  size: 'large' | 'medium' | 'small';
}

export type Page = 'login' | 'register' | 'home' | 'ecosystem' | 'collection' | 'compare' | 'chat' | 'cart' | 'warranty' | 'referral' | 'tradein' | 'profile' | 'orders' | 'saved' | 'settings' | 'productdetails' | 'admindashboard' | 'adminproducts' | 'adminorders' | 'admincustomers' | 'adminwarranty' | 'adminsettings';
