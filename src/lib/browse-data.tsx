import { Category, Brand, ProductList } from "./types";

export const browseCategories: Category[] = [
  {
    id: "tech",
    name: "Tech",
    count: 179,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
  },
  {
    id: "home",
    name: "Home",
    count: 135,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
  },
  {
    id: "workspace",
    name: "Workspace",
    count: 180,
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=400&h=400&fit=crop",
  },
  {
    id: "carry",
    name: "Carry",
    count: 148,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
  },
  {
    id: "watches",
    name: "Watches",
    count: 68,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
  },
  {
    id: "personal",
    name: "Personal",
    count: 30,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
  },
  {
    id: "books",
    name: "Books",
    count: 47,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",
  },
  {
    id: "travel",
    name: "Travel",
    count: 15,
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=400&h=400&fit=crop",
  },
];

export const brands: Brand[] = [
  {
    id: "apple",
    name: "Apple",
    count: 20,
    logo: "apple",
  },
  {
    id: "teenage-engineering",
    name: "Teenage Engineering",
    count: 7,
    logo: "teenage",
  },
  {
    id: "herman-miller",
    name: "Herman Miller",
    count: 12,
    logo: "herman-miller",
  },
  {
    id: "lego",
    name: "Lego",
    count: 9,
    logo: "lego",
  },
  {
    id: "dyson",
    name: "Dyson",
    count: 7,
    logo: "dyson",
  },
  {
    id: "fellow",
    name: "Fellow",
    count: 8,
    logo: "fellow",
  },
  {
    id: "omega",
    name: "Omega",
    count: 4,
    logo: "omega",
  },
  {
    id: "leica",
    name: "Leica",
    count: 6,
    logo: "leica",
  },
];

export const productLists: ProductList[] = [
  {
    id: "home-office-goals",
    name: "Home Office Goals",
    count: 68,
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop",
    ],
  },
  {
    id: "cult-of-coffee",
    name: "Cult of Coffee",
    count: 33,
    images: [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&h=200&fit=crop",
    ],
  },
  {
    id: "coffee-table",
    name: "For Your Coffee Table",
    count: 41,
    images: [
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&h=200&fit=crop",
    ],
  },
  {
    id: "audiophile-core",
    name: "Audiophile Core",
    count: 72,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=200&h=200&fit=crop",
    ],
  },
  {
    id: "charging-look-good",
    name: "Even Charging can Look Good",
    count: 56,
    images: [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=200&h=200&fit=crop",
    ],
  },
  {
    id: "nicer-everyday",
    name: "Nicer Everyday Objects",
    count: 93,
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=200&h=200&fit=crop",
    ],
  },
  {
    id: "deskworthy",
    name: "Deskworthy",
    count: 141,
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=200&h=200&fit=crop",
    ],
  },
  {
    id: "athletes-only",
    name: "Athletes Only",
    count: 32,
    images: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?w=200&h=200&fit=crop",
    ],
  },
];

export const BrandLogos: Record<string, React.FC<{ className?: string }>> = {
  apple: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  ),
  teenage: ({ className }) => (
    <svg className={className} viewBox="0 0 120 40" fill="currentColor">
      <text x="0" y="28" fontSize="20" fontWeight="bold" fontFamily="sans-serif"> teenage engineering</text>
    </svg>
  ),
  "herman-miller": ({ className }) => (
    <svg className={className} viewBox="0 0 40 40" fill="currentColor">
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M20 8 L20 32 M8 20 L32 20" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  lego: ({ className }) => (
    <svg className={className} viewBox="0 0 100 40" fill="currentColor">
      <text x="0" y="32" fontSize="28" fontWeight="bold" fontFamily="sans-serif" letterSpacing="-2">LEGO</text>
    </svg>
  ),
  dyson: ({ className }) => (
    <svg className={className} viewBox="0 0 100 40" fill="currentColor">
      <text x="0" y="28" fontSize="24" fontWeight="500" fontFamily="sans-serif">dyson</text>
    </svg>
  ),
  fellow: ({ className }) => (
    <svg className={className} viewBox="0 0 40 40" fill="currentColor">
      <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="3" fill="none"/>
      <circle cx="20" cy="20" r="6" fill="currentColor"/>
    </svg>
  ),
  omega: ({ className }) => (
    <svg className={className} viewBox="0 0 100 40" fill="currentColor">
      <text x="0" y="30" fontSize="32" fontWeight="300" fontFamily="serif">Ω</text>
    </svg>
  ),
  leica: ({ className }) => (
    <svg className={className} viewBox="0 0 100 40" fill="currentColor">
      <text x="0" y="28" fontSize="22" fontStyle="italic" fontFamily="serif">Leica</text>
    </svg>
  ),
};