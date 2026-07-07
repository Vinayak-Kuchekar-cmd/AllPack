export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "BHOG Long Grain Basmati Rice",
    category: "Rice",
    image: "/images/carousalImage1.png",
    description: "Premium long grain basmati rice with authentic aromatic flavor",
    features: ["100% Natural", "Long Grain", "Authentic Aroma", "High Quality"]
  },
  {
    id: "2",
    name: "STAR GOLD Coriander Powder",
    category: "Spices",
    image: "/images/carousalImage2.png",
    description: "Original coriander powder flavour for authentic cooking",
    features: ["100% Natural", "Original Flavour", "Pure Spice", "Traditional Recipe"]
  },
  {
    id: "3",
    name: "WONDER GRIP 315 Adhesive",
    category: "Construction",
    image: "/images/carousalImage3.png",
    description: "Premium polymer modified cementitious adhesive for vitrified tiles",
    features: ["Extra Strong Bond", "Water Resistant", "Slip Resistant", "Long Durability"]
  },
  {
    id: "4",
    name: "WONDER GRIP 315 Adhesive",
    category: "Construction",
    image: "/images/carousalImage17.png",
    description: "Premium polymer modified cementitious adhesive for vitrified tiles",
    features: ["Extra Strong Bond", "Water Resistant", "Slip Resistant", "Long Durability"]
  },
  {
    id: "5",
    name: "STAR GOLD Chilli Powder",
    category: "Spices",
    image: "/images/carousalImage4.png",
    description: "Original chilli powder flavour for vibrant cooking",
    features: ["100% Natural", "Original Recipe", "Rich Color", "Premium Quality"]
  },
  {
    id: "6",
    name: "STOVA 4BR-48 Mustard Seeds",
    category: "Seeds",
    image: "/images/carousalImage5.png",
    description: "Premium mustard seeds for better productivity",
    features: ["Trust Quality Technology", "High Yield", "Better Productivity", "Natural Seeds"]
  },
  {
    id: "7",
    name: "AL AKBAR Indian Prime Rice",
    category: "Rice",
    image: "/images/carousalImage6.png",
    description: "Premium quality Indian prime rice with rich flavor",
    features: ["Premium Quality", "Indian Prime", "Rich Taste", "Natural"]
  },
  {
    id: "8",
    name: "Pahal Jaisa Granulated Organic Manure",
    category: "Fertilizers",
    image: "/images/carousalImage7.png",
    description: "Pure and natural granulated organic manure for agriculture",
    features: ["100% Organic", "Agricultural Grade", "Pure Natural", "Eco-Friendly"]
  },
  {
    id: "9",
    name: "Unique Ferrous Sulphate",
    category: "Fertilizers",
    image: "/images/carousalImage8.png",
    description: "Premium ferrous sulphate for agricultural use",
    features: ["100% Satisfaction Guaranteed", "Agriculture Grade", "High Quality", "Effective"]
  },
  {
    id: "10",
    name: "Fiza Premium Basmati Rice",
    category: "Rice",
    image: "/images/carousalImage9.png",
    description: "Authentic premium basmati rice for everyday cooking",
    features: ["Premium Basmati", "Authentic Taste", "Pure Rice", "Quality Assured"]
  },
  {
    id: "11",
    name: "SAIYAM Long Grain Basmati Rice",
    category: "Rice",
    image: "/images/carousalImage10.png",
    description: "Premium long grain basmati with excellent quality",
    features: ["Long Grain", "Premium Quality", "Early Cooked", "Tasty"]
  },
  {
    id: "12",
    name: "KrushiPoshan Super Neem",
    category: "Fertilizers",
    image: "/images/carousalImage11.png",
    description: "Natural product derived from neem kernels for agriculture",
    features: ["100% Natural", "Neem Based", "Organic", "Pure Product"]
  },
  {
    id: "13",
    name: "Unique Potash Fertilizer",
    category: "Fertilizers",
    image: "/images/carousalImage12.png",
    description: "Premium potash derived from rhodophytes",
    features: ["Water Soluble", "High Grade", "Agriculture Purpose", "Quality Assured"]
  },
  {
    id: "14",
    name: "Unique Zinc Sulphate",
    category: "Fertilizers",
    image: "/images/carousalImage13.png",
    description: "Premium zinc sulphate for agricultural use",
    features: ["100% Satisfaction", "High Quality", "Effective", "Agriculture Grade"]
  },
  {
    id: "15",
    name: "Delhi Shudh Basmati Rice",
    category: "Rice",
    image: "/images/carousalImage14.png",
    description: "Extra gross basmati rice with premium quality",
    features: ["Extra Gross", "Premium Quality", "Pure Rice", "Authentic"]
  },
  {
    id: "16",
    name: "STAR GOLD Turmeric Powder",
    category: "Spices",
    image: "/images/carousalImage15.png",
    description: "Original turmeric powder flavour for authentic cooking",
    features: ["100% Natural", "Original Recipe", "Pure Spice", "Premium Quality"]
  },
  {
    id: "17",
    name: "Unique Unistar Mix Micronutrient",
    category: "Fertilizers",
    image: "/images/carousalImage16.png",
    description: "Maharashtra state grade mix micronutrient for agriculture",
    features: ["100% Satisfaction", "Grade 1", "Mix Micronutrient", "Effective"]
  }
];

export const categories = ["All", "Rice", "Spices", "Fertilizers", "Seeds", "Construction"];
