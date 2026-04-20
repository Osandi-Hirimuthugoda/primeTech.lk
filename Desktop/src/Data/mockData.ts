import { type Product, type EcosystemItem } from '../Types';

export const latestDropProducts: Product[] = [
  { id: '1', name: 'Samsung Galaxy S25 Ultra', brand: 'Samsung', price: 1299, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=120&h=120&fit=crop&auto=format', colors: ['#C4A882', '#2C2C2C', '#4A90D9'], category: 'phones' },
  { id: '2', name: 'Quartz Pro 4K', brand: 'Quartz', price: 1499, image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=120&h=120&fit=crop&auto=format', colors: ['#1A1A1A', '#C0C0C0'], category: 'laptops' },
  { id: '3', name: 'Nexus 1', brand: 'Nexus', price: 549, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=120&h=120&fit=crop&auto=format', colors: ['#2C2C2C', '#F5F5F5'], category: 'watches' },
  { id: '4', name: 'TechAudio Max', brand: 'TechAudio', price: 299, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=120&h=120&fit=crop&auto=format', colors: ['#1A1A1A', '#FFFFFF'], category: 'audio' },
];

export const appleProducts: Product[] = [
  { id: '5', name: 'iPhone 17 Pro', brand: 'Apple', price: 1329, image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=120&h=120&fit=crop&auto=format', colors: ['#8B6354', '#2C2C2C', '#4A7C59', '#B8B8B8'], category: 'phones' },
  { id: '6', name: 'MacBook Pro', brand: 'Apple', price: 2399, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=120&h=120&fit=crop&auto=format', colors: ['#C0C0C0', '#2C2C2C'], category: 'laptops' },
  { id: '7', name: 'Apple Watch Series 11', brand: 'Apple', price: 759, image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=120&h=120&fit=crop&auto=format', colors: ['#1A1A1A', '#E8D5C4', '#2C5F8A'], category: 'watches' },
  { id: '8', name: 'AirPods Pro Max', brand: 'Apple', price: 549, image: 'https://images.unsplash.com/photo-1606741965326-cb990ae01bb2?w=120&h=120&fit=crop&auto=format', colors: ['#E8D5C4', '#2C2C2C', '#4A90D9'], category: 'audio' },
];

export const ecosystemItems: EcosystemItem[] = [
  { id: '1', name: 'Smartphone', category: 'Smartphones', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=300&h=200&fit=crop&auto=format', size: 'large' },
  { id: '2', name: 'Laptop', category: 'Laptops', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=200&fit=crop&auto=format', size: 'large' },
  { id: '3', name: 'Headphones', category: 'Audio', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop&auto=format', size: 'medium' },
  { id: '4', name: 'Smartwatch', category: 'Wearables', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop&auto=format', size: 'medium' },
  { id: '5', name: 'Smart Speaker', category: 'Audio', image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=200&h=200&fit=crop&auto=format', size: 'medium' },
  { id: '6', name: 'Tablet', category: 'Tablets', image: 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=200&h=200&fit=crop&auto=format', size: 'small' },
  { id: '7', name: 'Camera', category: 'Cameras', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200&h=200&fit=crop&auto=format', size: 'small' },
  { id: '8', name: 'Monitor', category: 'Displays', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=200&h=200&fit=crop&auto=format', size: 'small' },
];

export const collectionPhones: Product[] = [
  { id: 'c1', name: 'Samsung S25 Ultra', brand: 'Samsung', price: 1299, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=100&h=160&fit=crop&auto=format', colors: ['#C4A882', '#1A1A1A', '#7CB9E8', '#5F4F4F'], storage: ['256GB', '512GB', '1TB'], category: 'phones', rating: 4.8 },
  { id: 'c2', name: 'OnePlus 13 Pro', brand: 'OnePlus', price: 899, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=100&h=160&fit=crop&auto=format', colors: ['#1A1A1A', '#2E8B57'], storage: ['256GB', '512GB'], category: 'phones' },
  { id: 'c3', name: 'Google Pixel 10', brand: 'Google', price: 799, image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=100&h=160&fit=crop&auto=format', colors: ['#F5F5F5', '#1A1A1A', '#4B9CD3'], storage: ['128GB', '256GB'], category: 'phones' },
  { id: 'c4', name: 'iPhone 17 Ultra', brand: 'Apple', price: 1599, image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=100&h=160&fit=crop&auto=format', colors: ['#8B6354', '#2C2C2C', '#E8E8E8'], storage: ['256GB', '512GB', '1TB'], category: 'phones', badge: 'New' },
  { id: 'c5', name: 'Samsung Galaxy A56', brand: 'Samsung', price: 599, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=100&h=160&fit=crop&auto=format', colors: ['#9B59B6', '#3498DB', '#2ECC71'], storage: ['128GB', '256GB'], category: 'phones' },
  { id: 'c6', name: 'OnePlus Nord 5', brand: 'OnePlus', price: 449, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=100&h=160&fit=crop&auto=format', colors: ['#1A1A1A', '#E74C3C'], storage: ['128GB', '256GB'], category: 'phones' },
  { id: 'c7', name: 'Xiaomi 15 Ultra', brand: 'Xiaomi', price: 999, image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=100&h=160&fit=crop&auto=format', colors: ['#F5F5F5', '#1A1A1A'], storage: ['256GB', '512GB'], category: 'phones' },
  { id: 'c8', name: 'iPhone 17 Pro Max', brand: 'Apple', price: 1199, image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=100&h=160&fit=crop&auto=format', colors: ['#2C2C2C', '#8B6354', '#4A7C59', '#B8B8B8'], storage: ['256GB', '512GB', '1TB'], category: 'phones', badge: 'Hot' },
];
