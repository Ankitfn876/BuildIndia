export interface QuoteItem {
  product: {
    id: string;
    name: string;
    category: string;
    brand: string;
    image: string;
  };
  quantity: number;
  unit: string;
  notes?: string;
}

export interface QuoteRequest {
  fullName: string;
  phone: string;
  email: string;
  state: string;
  city: string;
  deliveryAddress: string;
  items: QuoteItem[];
  projectType: string;
  comments?: string;
}
