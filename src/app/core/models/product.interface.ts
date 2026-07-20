export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  priceRange: string;
  rating: number;
  ratingCount: number;
  image: string;
  description: string;
  specs: { [key: string]: string };
  features: string[];
  bestSeller?: boolean;
}
