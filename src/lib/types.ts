export interface Category {
  id: string;
  name: string;
  count: number;
  image: string;
}

export interface Brand {
  id: string;
  name: string;
  count: number;
  logo: string;
}

export interface ProductList {
  id: string;
  name: string;
  count: number;
  images: string[];
}