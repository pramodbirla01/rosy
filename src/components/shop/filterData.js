const filterData = {
    availability: [
      { label: "In stock", count: 15 },
      { label: "Out of stock", count: 10 },
    ],
    price: {
      min: 0,
      max: 100,
      step: 1,
    },
    size: [
      { label: "S", count: 9 },
      { label: "M", count: 9 },
      { label: "L", count: 6 },
    ],
    productType: [
      { label: "Blouse", count: 1 },
      { label: "Boots", count: 1 },
      { label: "Cardigan", count: 1 },
      { label: "Dress", count: 2 },
      { label: "Handbag", count: 1 },
      { label: "Jacket", count: 2 },
      { label: "Jeans", count: 1 },
      { label: "Pants", count: 1 },
      { label: "Scarf", count: 1 },
      { label: "Shirt", count: 1 },
      { label: "Shorts", count: 1 },
      { label: "Suit", count: 1 },
    ],
    brand: [
      { label: "ActiveLife Gear", count: 1 },
      { label: "Beach Paradise", count: 1 },
      { label: "Black Tie Affairs", count: 1 },
      { label: "Bohemian Bliss", count: 1 },
      { label: "Boho Chic Boutique", count: 1 },
      { label: "Cashmere Cozy", count: 1 },
      { label: "Chic Couture", count: 1 },
      { label: "Coastal Trends", count: 1 },
      { label: "Cozy Knits Co", count: 1 },
      { label: "Dapper Styles", count: 1 },
      { label: "Denim Delight", count: 1 },
      { label: "Modern Man", count: 1 },
    ],
    color: [
      "#000000", // Black
      "#0000FF", // Blue
      "#800020", // Burgundy
      "#D2B48C", // Camel
      "#E34234", // Chili
      "#228B22", // Forest
      "#FF00FF", // Fuchsia
      "#808080", // Grey
      "#FFC0CB", // Hibiscus
      "#FFFFF0", // Ivory
    ],
    material: [
      { label: "Cotton", count: 1 },
      { label: "Linen", count: 1 },
      { label: "Satin", count: 1 },
      { label: "Silk", count: 1 },
    ],
  };
  
  export default filterData;
  