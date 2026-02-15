export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  image: string;
  isStaffPick?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Studio Display",
    brand: "Apple",
    category: "Tech",
    price: 1599,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
  },
  {
    id: "2",
    name: "151 Standard Backpack",
    brand: "Goruck",
    category: "Carry",
    price: 595,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
  },
  {
    id: "3",
    name: "Aeron",
    brand: "Herman Miller",
    category: "Workspace",
    price: 1695,
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=400&h=400&fit=crop",
  },
  {
    id: "4",
    name: "Stagg EKG Electric Kettle",
    brand: "Fellow",
    category: "Home",
    price: 165,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop",
    isStaffPick: true,
  },
  {
    id: "5",
    name: "911 Turbo S",
    brand: "Porsche",
    category: "Vehicles",
    price: 230000,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=400&fit=crop",
  },
  {
    id: "6",
    name: "Speedmaster",
    brand: "Omega",
    category: "Watches",
    price: 7500,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    isStaffPick: true,
  },
  {
    id: "7",
    name: "Virgil Abloh: Nike. ICONS",
    brand: "Taschen",
    category: "Books",
    price: 90,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",
  },
  {
    id: "8",
    name: "Icons 10295 Porsche 911",
    brand: "Lego",
    category: "Home",
    price: 150,
    image: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=400&h=400&fit=crop",
  },
  {
    id: "9",
    name: "Nothing Phone (2)",
    brand: "Nothing",
    category: "Tech",
    price: 699,
    image: "https://images.unsplash.com/photo-1598327775666-53b31d66e5ac?w=400&h=400&fit=crop",
    isStaffPick: true,
  },
  {
    id: "10",
    name: "Base One Max 3-in-1",
    brand: "Nomad",
    category: "Workspace",
    price: 150,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop",
  },
  {
    id: "11",
    name: "iPhone 15 Pro",
    brand: "Apple",
    category: "Tech",
    price: 999,
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=400&h=400&fit=crop",
  },
  {
    id: "12",
    name: "Nothing Headphones (1)",
    brand: "Nothing",
    category: "Tech",
    price: 299,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
  },
  {
    id: "13",
    name: "Leica Q3",
    brand: "Leica",
    category: "Cameras",
    price: 5995,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
  },
  {
    id: "14",
    name: "Classic Cabin",
    brand: "Rimowa",
    category: "Travel",
    price: 1300,
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=400&h=400&fit=crop",
  },
  {
    id: "15",
    name: "P-1 Pepper Mill",
    brand: "Crush",
    category: "Home",
    price: 295,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    isStaffPick: true,
  },
  {
    id: "16",
    name: "Noguchi Coffee Table",
    brand: "Herman Miller",
    category: "Home",
    price: 2295,
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=400&h=400&fit=crop",
  },
  {
    id: "17",
    name: "Pulse (Titanium)",
    brand: "Breda",
    category: "Watches",
    price: 220,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop",
  },
  {
    id: "18",
    name: "Ear (2)",
    brand: "Nothing",
    category: "Tech",
    price: 149,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    isStaffPick: true,
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "new", label: "New" },
  { id: "picks", label: "Picks" },
  { id: "tech", label: "Tech" },
  { id: "workspace", label: "Workspace" },
  { id: "home", label: "Home" },
  { id: "carry", label: "Carry" },
  { id: "books", label: "Books" },
  { id: "lifestyle", label: "Lifestyle" },
];

export const navigation = [
  { label: "Discover", href: "/" },
  { label: "Browse", href: "/browse" },
  { label: "About", href: "/about" },
];

export const footerNavigation = {
  navigation: [
    { label: "Discover", href: "/" },
    { label: "Lists", href: "/lists" },
    { label: "Brands", href: "/brands" },
    { label: "Categories", href: "/categories" },
    { label: "Index", href: "/index" },
  ],
  categories: [
    { label: "Tech", href: "/tech" },
    { label: "Home", href: "/home" },
    { label: "Workspace", href: "/workspace" },
    { label: "Carry", href: "/carry" },
    { label: "Watches", href: "/watches" },
    { label: "Personal", href: "/personal" },
    { label: "Books", href: "/books" },
    { label: "Travel", href: "/travel" },
  ],
  info: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Legal", href: "/legal" },
  ],
  contact: [
    { label: "Twitter", href: "https://twitter.com" },
    { label: "Email", href: "mailto:hello@example.com" },
  ],
};