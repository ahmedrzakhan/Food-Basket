const categories = [
  {
    _id: "5f9aba5735a6cf21a826ad22",
    category: "Fruits-and-Vegetables",
    sub_category: "Daily-Vegetables",
    cities: [
      { city: "Mumbai", quantity: "200" },
      { city: "Delhi", quantity: "300" },
      { city: "Bengaluru", quantity: "150" },
      { city: "Chennai", quantity: "100" },
    ],
    product: {
      title: "Onion",
      brand: "Borges",
      price: [
        {
          500: "50",
          1000: "100",
          2000: "200",
        },
      ],
    },
    glutten_free: true,
    sugar_free: true,
  },
  {
    _id: "5f9aba5735a6cf21a826ad23",
    category: "Fruits-and-Vegetables",
    sub_category: "Exotic-Vegetables",
    cities: [
      { city: "Mumbai", quantity: "100" },
      { city: "Delhi", quantity: "330" },
      { city: "Bengaluru", quantity: "50" },
      { city: "Chennai", quantity: "10" },
    ],
    product: {
      title: "Lettuce Iceberg",
      brand: "Borges",
      price: [
        {
          1000: "299",
          500: "149",
          250: "74",
        },
      ],
    },
    glutten_free: true,
    fat_free: true,
  },
  {
    _id: "5f9aba5735a6cf21a826ad24",
    category: "International-Cuisine",
    sub_category: "Italian-and-Continental",
    cities: [
      { city: "Mumbai", quantity: "10" },
      { city: "Delhi", quantity: "30" },
      { city: "Bengaluru", quantity: "20" },
      { city: "Chennai", quantity: "40" },
    ],
    product: {
      title: "Worchestire Sauce",
      brand: "American Garden",
      price: [
        {
          "1pc": "200",
        },
      ],
    },
    fat_free: true,
  },
];

module.exports = categories;
