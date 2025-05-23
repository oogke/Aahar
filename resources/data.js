const products = [
  {
    _id: "1",
    name: "Fresh Tomatoes",
    description: "Organic tomatoes freshly picked.",
    bestBefore: "2025-06-30",
    createdBy: "Farmer John",
    category: "Vegetables",
    quantityAvailable: 50,
    pricePerKg: 100,
    imageUrl: "/images/tomatoes.jpg"
  },
  {
    _id: "2",
    name: "Raw Honey",
    description: "Pure natural honey from the valley.",
    bestBefore: "2026-01-15",
    createdBy: "Farmer Lisa",
    category: "Other", // Changed from Condiments to Other due to enum
    quantityAvailable: 30,
    pricePerKg: 250,
    imageUrl: "/images/honey.jpg"
  },
  {
    _id: "3",
    name: "Brown Rice",
    description: "High-quality brown rice, non-GMO.",
    bestBefore: "2025-12-01",
    createdBy: "Farmer Raj",
    category: "Grains",
    quantityAvailable: 200,
    pricePerKg: 180,
    imageUrl: "/images/brown-rice.jpg"
  },
  {
    _id: "4",
    name: "Fresh Spinach",
    description: "Leafy green spinach packed with nutrients.",
    bestBefore: "2025-05-20",
    createdBy: "Farmer Meera",
    category: "Other", // Leafy Greens not in enum
    quantityAvailable: 20,
    pricePerKg: 50,
    imageUrl: "/images/spinach.jpg"
  },
  {
    _id: "5",
    name: "Free-range Eggs",
    description: "Farm fresh eggs from free-range chickens.",
    bestBefore: "2025-06-10",
    createdBy: "Farmer Sita",
    category: "Other", // Poultry not in enum
    quantityAvailable: 10,
    pricePerKg: 150,
    imageUrl: "/images/eggs.jpg"
  },
  {
    _id: "6",
    name: "Organic Carrots",
    description: "Sweet and crunchy organic carrots.",
    bestBefore: "2025-06-15",
    createdBy: "Farmer Ram",
    category: "Vegetables",
    quantityAvailable: 40,
    pricePerKg: 80,
    imageUrl: "/images/carrots.jpg"
  },
  {
    _id: "7",
    name: "Whole Wheat Flour",
    description: "Stone-ground whole wheat flour, perfect for baking.",
    bestBefore: "2026-03-01",
    createdBy: "Farmer Anil",
    category: "Grains",
    quantityAvailable: 100,
    pricePerKg: 120,
    imageUrl: "/images/wheat-flour.jpg"
  },
  {
    _id: "8",
    name: "Raw Milk",
    description: "Fresh raw milk from grass-fed cows.",
    bestBefore: "2025-05-18",
    createdBy: "Farmer Mina",
    category: "Dairy",
    quantityAvailable: 25,
    pricePerKg: 90,
    imageUrl: "/images/milk.jpg"
  },
  {
    _id: "9",
    name: "Fresh Ginger",
    description: "Aromatic and spicy fresh ginger roots.",
    bestBefore: "2025-05-25",
    createdBy: "Farmer Hari",
    category: "Other", // Roots not in enum
    quantityAvailable: 35,
    pricePerKg: 60,
    imageUrl: "/images/ginger.jpg"
  },
  {
    _id: "10",
    name: "Chili Peppers",
    description: "Hot and spicy fresh chili peppers.",
    bestBefore: "2025-06-05",
    createdBy: "Farmer Ramesh",
    category: "Other", // Spices not in enum
    quantityAvailable: 45,
    pricePerKg: 70,
    imageUrl: "/images/chili-peppers.jpg"
  }
];

module.exports = products;

