const categories = [
  {
    category: "Fruits-and-Vegetables",
    sub_category: "Daily-Vegetables",
    cities: [
      { city: "Mumbai", quantity: 200 },
      { city: "Delhi", quantity: 300 },
      { city: "Bengaluru", quantity: 150 },
      { city: "Chennai", quantity: 100 },
    ],
    product: {
      brand: "Fruit and Vegetable",
      description:
        "Try masala curry which is an amazing mix of brinjals with simmering spices cooked in gravy",
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/03dff5a4-7597-4057-b485-7305c85b0251_425x425.JPG",
      title: "Brinjal Small",
      price: [
        {
          200: 30,
        },
        {
          500: 70,
        },
      ],
    },
  },

  {
    category: "Fruits-and-Vegetables",
    sub_category: "Daily-Vegetables",
    cities: [
      { city: "Mumbai", quantity: 100 },
      { city: "Delhi", quantity: 200 },
      { city: "Bengaluru", quantity: 190 },
      { city: "Chennai", quantity: 280 },
    ],
    product: {
      brand: "Natures Best",
      title: "CAULIFLOWER 1 PC PK NB - 1 Pc",
      price: 69,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/999a14d9-d3ad-4d97-b637-813aeebfdf69_425x425.jpg",
    },
  },
  {
    category: "Fruits-and-Vegetables",
    sub_category: "Daily-Vegetables",
    cities: [
      { city: "Mumbai", quantity: 200 },
      { city: "Delhi", quantity: 300 },
      { city: "Bengaluru", quantity: 150 },
      { city: "Chennai", quantity: 100 },
    ],
    product: {
      brand: "Natures Best",
      title: "SALAD READY TO EAT 1 PC PK NB - 1 Pc",
      price: [
        {
          500: 40,
        },
        {
          1000: 60,
        },
        {
          2000: 120,
        },
      ],
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/6d4cd380-9b73-4092-9704-945abfe09637_425x425.JPG",
    },
  },
  {
    category: "Fruits-and-Vegetables",
    sub_category: "Daily-Vegetables",
    cities: [
      { city: "Mumbai", quantity: 2000 },
      { city: "Delhi", quantity: 100 },
      { city: "Bengaluru", quantity: 3000 },
      { city: "Chennai", quantity: 1300 },
    ],
    product: {
      brand: "Natures Best",
      title: "SPROUTS MIXED PKT - 1 Pc",
      price: 50,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/fffaf60c-3245-48e9-9b59-764136106ddf_425x425.jpg",
    },
  },
  {
    category: "Fruits-and-Vegetables",
    sub_category: "Daily-Vegetables",
    cities: [
      { city: "Mumbai", quantity: 100 },
      { city: "Delhi", quantity: 68 },
      { city: "Bengaluru", quantity: 220 },
      { city: "Chennai", quantity: 520 },
    ],
    product: {
      brand: "Fruit and Vegetable",
      title: "Potato",
      price: [
        {
          500: 33,
        },
        {
          1000: 40,
        },
        {
          2000: 60,
        },
      ],
      description:
        "People of all regions and culinary tastes love potatoes.They have a thin skin that covers the hard flesh. It's eaten with or without its peel. It can be consumed as a roast, a mash, in fried form, etc.",
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/25653f6e-62fe-4e1d-9e95-9adc63305f32_425x425.JPG",
    },
  },
  {
    category: "Fruits-and-Vegetables",
    sub_category: "Daily-Vegetables",
    cities: [
      { city: "Mumbai", quantity: 134 },
      { city: "Delhi", quantity: 290 },
      { city: "Bengaluru", quantity: 110 },
      { city: "Chennai", quantity: 1090 },
    ],
    product: {
      brand: "Fruit and Vegetable",
      title: "Onion",
      price: [
        {
          500: "55",
        },
        {
          1000: "109",
        },
        {
          2000: "210",
        },
      ],
      description:
        "Add sage and cheddar to make an extra special and delicious onion soup",
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/14c3fa54-5d8e-4238-903f-a8ef58132879_425x425.JPG",
    },
  },
  {
    category: "Fruits-and-Vegetables",
    sub_category: "Daily-Vegetables",
    cities: [
      { city: "Mumbai", quantity: 200 },
      { city: "Delhi", quantity: 300 },
      { city: "Bengaluru", quantity: 150 },
      { city: "Chennai", quantity: 100 },
    ],
    product: {
      brand: "Fruit and Vegetable",
      title: "Tomato",
      price: [
        {
          500: 38,
        },
        {
          1000: 64,
        },
        {
          2000: 120,
        },
      ],
      description:
        "Stuff tomatoes with some mixed veggies and crumbled panner and enjoy them grilled",
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/e4ecd12c-b2db-4f76-b9ea-45e0436ba350_425x425.JPG",
    },
  },
  {
    category: "Fruits-and-Vegetables",
    sub_category: "Daily-Vegetables",
    cities: [
      { city: "Mumbai", quantity: 120 },
      { city: "Delhi", quantity: 320 },
      { city: "Bengaluru", quantity: 50 },
      { city: "Chennai", quantity: 100 },
    ],
    product: {
      brand: "Fruit and Vegetable",
      title: "COCONUT GRATED - 1 Pc",
      price: 99,
      description:
        "Garnish any preparation with fresh grated coconut to add an unique flavor",
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/4d5fb7a3-bd07-4e2a-9045-b1bc90889dfa_425x425.jpg",
    },
  },
  {
    category: "Fruits-and-Vegetables",
    sub_category: "Daily-Vegetables",
    cities: [
      { city: "Mumbai", quantity: 200 },
      { city: "Delhi", quantity: 300 },
      { city: "Bengaluru", quantity: 150 },
      { city: "Chennai", quantity: 100 },
    ],
    product: {
      brand: "Fruit and Vegetable",
      title: "Capsicum",
      price: [
        {
          250: 30,
        },
        {
          500: 60,
        },
        {
          1000: 110,
        },
      ],
      description:
        "Capsicums are , thin smooth skinned, crunchy, mildly sweet tasting, hollow vegetables that are juicier variants of the green capsicum. They are a rich source of antioxidants, carotenoids and vitamins C, K, B6 and A. They are high in water content and dietary fibre and potassium, and are cholesterol-free.",
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/9f5ce81b-8325-4ae3-9fad-83e2e7303198_425x425.JPG",
    },
  },
  {
    category: "Fruits-and-Vegetables",
    sub_category: "Daily-Vegetables",
    cities: [
      { city: "Mumbai", quantity: 340 },
      { city: "Delhi", quantity: 780 },
      { city: "Bengaluru", quantity: 1150 },
      { city: "Chennai", quantity: 1100 },
    ],
    product: {
      brand: "Natures Basket",
      title: "SPROUTS CHANA BROWN 200G - 1 Pc",
      price: 49,
      description:
        "Try a tongue-tickling curry of sprouted kala chana with a dash of jaggery",
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1365257_425x425.jpg",
    },
  },
  {
    category: "Fruits-and-Vegetables",
    sub_category: "Daily-Vegetables",
    cities: [
      { city: "Mumbai", quantity: 200 },
      { city: "Delhi", quantity: 300 },
      { city: "Bengaluru", quantity: 450 },
      { city: "Chennai", quantity: 800 },
    ],
    product: {
      brand: "Organic India",
      title: "Organic Crushed Mint Leaves",
      price: [
        {
          50: 45,
        },
        {
          500: 380,
        },
        {
          100: 79,
        },
      ],
      description:
        "Mint is a type of herb with a refreshing flavor. It can be used dried or fresh. They have a sweet flavor with a cool after taste. It has a strong, sharp scent.",
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/bb211851-6f8f-4ea3-bfbc-3dd997af296c_425x425.jpg",
    },
  },
  {
    category: "Fruits-and-Vegetables",
    sub_category: "Exotic-Vegetables",
    cities: [
      { city: "Mumbai", quantity: 200 },
      { city: "Delhi", quantity: 300 },
      { city: "Bengaluru", quantity: 150 },
      { city: "Chennai", quantity: 100 },
    ],
    product: {
      brand: "Fruit and Vegetable",
      title: "Baby Corn - Exotic",
      price: [
        {
          200: 50,
        },
        {
          300: 75,
        },
      ],
      description:
        "Baby corn is internationally loved and used in multiple continental cuisines from European to South East Asian. It is majorly used in pizzas, pastas, noodles, stir fry, salad, rice preparations, etc. Its looks and taste are its winning attributes.",
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/89a7a07e-9431-478b-a46a-6ab5789ec1e1_425x425.jpg",
    },
  },
  {
    category: "Fruits-and-Vegetables",
    sub_category: "Exotic-Vegetables",
    cities: [
      { city: "Mumbai", quantity: 10 },
      { city: "Delhi", quantity: 30 },
      { city: "Bengaluru", quantity: 250 },
      { city: "Chennai", quantity: 120 },
    ],
    product: {
      brand: "Fruit and Vegetable",
      title: "Avocado - Imported - 1 kg",
      price: 1499,
      description:
        "Add a unique taste and flavor to your soups and stews with creamy and delicious avocados.",
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/50055a1d-84f2-456e-a5ed-5d0831376ad0_425x425.jpg",
    },
  },

  {
    category: "Fruits-and-Vegetables",
    sub_category: "Exotic-Vegetables",
    cities: [
      { city: "Mumbai", quantity: 100 },
      { city: "Delhi", quantity: 330 },
      { city: "Bengaluru", quantity: 250 },
      { city: "Chennai", quantity: 40 },
    ],
    product: {
      brand: "Fruit and Vegetable",
      title: "Avocado Indian - 1 kg",
      price: [
        {
          1000: 499,
        },
        {
          500: 259,
        },
      ],
      description:
        "Avocados are commercially valuable and are cultivated in tropical and Mediterranean climates throughout the world.They have a green-skinned, fleshy body that may be pear-shaped, egg-shaped, or spherical.",
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/50055a1d-84f2-456e-a5ed-5d0831376ad0_425x425.jpg",
    },
  },
  {
    category: "Fruits-and-Vegetables",
    sub_category: "Exotic-Vegetables",
    cities: [
      { city: "Mumbai", quantity: 1100 },
      { city: "Delhi", quantity: 330 },
      { city: "Bengaluru", quantity: 550 },
      { city: "Chennai", quantity: 140 },
    ],
    product: {
      brand: "Fruit and Vegetable",
      title: "Broccoli - Exotic",
      price: [
        {
          250: 75,
        },
        {
          500: 149,
        },
        {
          1000: 299,
        },
      ],
      description:
        "Broccoli is an edible green plant in the cabbage family, whose large flower head is used as a vegetable. The word broccoli, from the Italian plural of broccolo, refers to the flowering top of a cabbage.Broccoli is often boiled or steamed but may be eaten raw.",
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/0bc08d1f-7c0a-41ab-a37e-6430c69f932e_425x425.jpg",
    },
  },
  {
    category: "Fruits-and-Vegetables",
    sub_category: "Exotic-Vegetables",
    cities: [
      { city: "Mumbai", quantity: "100" },
      { city: "Delhi", quantity: "330" },
      { city: "Bengaluru", quantity: "50" },
      { city: "Chennai", quantity: "10" },
    ],
    product: {
      brand: "Fruit and Vegetable",
      title: "Parsley Curled",
      price: [
        {
          50: 25,
        },
        {
          100: 49,
        },
      ],
      description:
        "Bright and fresh-tasting, parsley is a tasty addition to your soups and stews",
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/975c7187-e65d-44b5-864c-f2bfa7252865_425x425.jpg",
    },
  },
  {
    category: "Fruits-and-Vegetables",
    sub_category: "Exotic-Vegetables",
    cities: [
      { city: "Mumbai", quantity: 100 },
      { city: "Delhi", quantity: 130 },
      { city: "Bengaluru", quantity: 150 },
      { city: "Chennai", quantity: 110 },
    ],
    product: {
      brand: "Fruit and Vegetable",
      title: "Zucchini Yellow - Exotic",
      price: [
        {
          250: 74,
        },
        {
          500: 149,
        },
      ],
      description:
        "The low-caloried Zucchini is a versatile side dish that goes with everything",
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/fa658df9-d5f4-4d5f-ab25-226fa396f65f_425x425.jpg",
    },
  },
  {
    category: "Fruits-and-Vegetables",
    sub_category: "Exotic-Vegetables",
    cities: [
      { city: "Mumbai", quantity: 200 },
      { city: "Delhi", quantity: 130 },
      { city: "Bengaluru", quantity: 250 },
      { city: "Chennai", quantity: 100 },
    ],
    product: {
      brand: "Natures Best",
      title: "CABBAGE 1 PC PK NB - 1 Pc",
      price: 59,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/4d51a997-87be-45f4-a85e-72d07279b3c7_425x425.JPG",
    },
  },
  {
    category: "Fruits-and-Vegetables",
    sub_category: "Exotic-Vegetables",
    cities: [
      { city: "Mumbai", quantity: "10" },
      { city: "Delhi", quantity: "30" },
      { city: "Bengaluru", quantity: "20" },
      { city: "Chennai", quantity: "40" },
    ],
    product: {
      title: "Tomato ketchup - Top Down",
      brand: "Natures Best",
      price: 50,
      description: "SUPER WHITE EGGS 10PC - 1 Pc",
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/c5cbe169-393d-4182-8ea4-932b310ed668_425x425.JPG",
    },
  },
  {
    category: "Fruits-and-Vegetables",
    sub_category: "Exotic-Vegetables",
    cities: [
      { city: "Mumbai", quantity: 10 },
      { city: "Delhi", quantity: 30 },
      { city: "Bengaluru", quantity: 20 },
      { city: "Chennai", quantity: 40 },
    ],
    product: {
      title: "MUSHROOM BUTTON 1 PC PK NB - 1 Pc",
      brand: "Natures Best",
      price: 50,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/0f50c233-17c0-40a5-95dd-c8e3a4d79bae_425x425.jpg",
    },
  },
  {
    category: "Indian Grocery",
    sub_category: "Daily Essentials",
    cities: [
      { city: "Mumbai", quantity: 1000 },
      { city: "Delhi", quantity: 3000 },
      { city: "Bengaluru", quantity: 1220 },
      { city: "Chennai", quantity: 4220 },
    ],
    product: {
      title: "TROPICANA ORANGE JUICE 1000ML TET - 1 Pc",
      brand: "Tropicana",
      price: 110,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/a1b8e8fb-54e0-400e-9ad1-3a3a26c62868_425x425.jpg",
      fat_free: true,
      gluten_free: true,
    },
  },
  {
    category: "Indian Grocery",
    sub_category: "Daily Essentials",
    cities: [
      { city: "Mumbai", quantity: 1100 },
      { city: "Delhi", quantity: 3100 },
      { city: "Bengaluru", quantity: 1820 },
      { city: "Chennai", quantity: 3220 },
    ],
    product: {
      title: "TROPICANA PR GUAVA NECTOR 1000ML TET - 1 Pc",
      brand: "Tropicana",
      description:
        "Treat your taste buds to the natural goodness of guava, with the Tropicana Guava Delight. It tastes like the fresh extract of a ripe fruit, and does so without any added preservatives. This delicious fruit beverage has a rich texture that pampers your tongue. It is available in a tetra pack of 1 liter that should be stored in a refrigerator once it is opened.",
      price: 100,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/cb8483ff-bf28-4193-a509-d61afce94a1a_425x425.JPG",
    },
  },
  {
    category: "Indian Grocery",
    sub_category: "Daily Essentials",
    cities: [
      { city: "Mumbai", quantity: 1000 },
      { city: "Delhi", quantity: 3000 },
      { city: "Bengaluru", quantity: 1020 },
      { city: "Chennai", quantity: 2220 },
    ],
    product: {
      title: "TROPICANA POMEGRANATE JUICE 1000ML TET - 1 Pc",
      brand: "Tropicana",
      description:
        "Enjoy the refreshing and appetizing taste of fresh Pomegranate Juice from renowned drink makers Tropicana. This delicious beverage provides you not only with your daily intake of vitamins but also gives you the boost and energy needed for that extra push through the day.",
      price: 100,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/064d9890-de13-44c9-82a2-ec61e4ffa23f_425x425.JPG",
    },
  },
  {
    category: "Indian Grocery",
    sub_category: "Cereals and Flakes",
    cities: [
      { city: "Mumbai", quantity: 1900 },
      { city: "Delhi", quantity: 1200 },
      { city: "Bengaluru", quantity: 1320 },
      { city: "Chennai", quantity: 1220 },
    ],
    product: {
      title: "KELLOGS ALL BRAN 500g - 1 Pc",
      brand: "Amul",
      description:
        "Kellogg's Cereal provides you with 40 percent of your daily value of fiber intake without compromising taste.",
      price: 68,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/0553e25c-3346-4547-b15d-39ebc2fabecf_425x425.jpg",
    },
  },
  {
    category: "Indian Grocery",
    sub_category: "Milk and Cream",
    cities: [
      { city: "Mumbai", quantity: 900 },
      { city: "Delhi", quantity: 1000 },
      { city: "Bengaluru", quantity: 1120 },
      { city: "Chennai", quantity: 1120 },
    ],
    product: {
      title: "AMUL GOLD MILK 1l - 1 Pc",
      brand: "Amul",
      description:
        "Amul Gold Homogenized Standardized Milk does not contain any preservatives and the Ultra High Temperature technology ensures zero microbial activity",
      price: 68,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d0e45941-2c76-45f6-9bbf-337032995a5e_425x425.JPG",
    },
  },
  {
    category: "Indian Grocery",
    sub_category: "Milk and Cream",
    cities: [
      { city: "Mumbai", quantity: 900 },
      { city: "Delhi", quantity: 1000 },
      { city: "Bengaluru", quantity: 1120 },
      { city: "Chennai", quantity: 1120 },
    ],
    product: {
      title: "AMUL FRESH CREAM 1l - 1 Pc",
      brand: "Amul",
      description: "Amul Fresh Cream is made up of fresh and pure milk cream.",
      price: 68,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d30d3842-bab3-45f8-adf6-fdf237001408_425x425.JPG",
    },
  },
  {
    category: "Indian Grocery",
    sub_category: "Milk and Cream",
    cities: [
      { city: "Mumbai", quantity: 300 },
      { city: "Delhi", quantity: 100 },
      { city: "Bengaluru", quantity: 120 },
      { city: "Chennai", quantity: 110 },
    ],
    product: {
      title: "VEEBA TRULY TOMATO KETCHUP 900G - 1 Pc",
      brand: "Amul",
      description: "VEEBA TRULY TOMATO KETCHUP",
      price: 116,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d9df639e-54ab-457e-847f-575e2420d030_425x425.JPG",
    },
  },
  {
    category: "Indian Grocery",
    sub_category: "Chips and Nachos",
    cities: [
      { city: "Mumbai", quantity: 100 },
      { city: "Delhi", quantity: 40 },
      { city: "Bengaluru", quantity: 20 },
      { city: "Chennai", quantity: 10 },
    ],
    product: {
      title: "CHEFS BSKT CRMY TMTO PENNEÂ  237g - 1 Pc",
      brand: "Chefs Baket",
      description: "VEEBA TRULY TOMATO KETCHUP",
      price: 230,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d77d7d31-4363-4ff3-a8e8-9df30d7bd643_425x425.jpg",
    },
  },
  {
    category: "Indian Grocery",
    sub_category: "Cooking Pastes and Sauces",
    cities: [
      { city: "Mumbai", quantity: 10 },
      { city: "Delhi", quantity: 20 },
      { city: "Bengaluru", quantity: 20 },
      { city: "Chennai", quantity: 30 },
    ],
    product: {
      title: "GOURMET JAR ROASTED RED PEPPER PESTO - 1 Pc",
      brand: "The Gourmet Jar",
      price: 375,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1328671_1_425x425.jpg",
    },
  },
  {
    category: "Indian Grocery",
    sub_category: "Cooking Pastes and Sauces",
    cities: [
      { city: "Mumbai", quantity: 10 },
      { city: "Delhi", quantity: 20 },
      { city: "Bengaluru", quantity: 20 },
      { city: "Chennai", quantity: 30 },
    ],
    product: {
      title: "Creamy, spicy gravy for exquisite Tikka recipes",
      brand: "The Gourmet Jar",
      price: 495,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/8c12ae98-a47e-410c-b417-fd262ee7acb7_425x425.jpg",
    },
  },
];

module.exports = categories;
