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
      title: "Brinjal Small 250g",
      price: 40,
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
      title: "SALAD READY TO EAT 1 PC PK NB - 1 Pc - 500g",
      price: 40,
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
      title: "Potato - 500g",
      price: 33,
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
      title: "Onion 500g",
      price: 55,
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
      title: "Tomato - 500g",
      price: 38,
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
      title: "Capsicum - 500gm",
      price: 30,
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
      title: "Organic Crushed Mint Leaves - 500g",
      price: 45,
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
      title: "Baby Corn - Exotic - 200g",
      price: 50,
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
      price: 499,
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
      title: "Broccoli - Exotic - 500g",
      price: 149,
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
      title: "Parsley Curled - 50g",
      price: 200,
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
      title: "Zucchini Yellow - Exotic - 250g",
      price: 74,
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
  {
    category: "Meats, Seafood and Eggs",
    sub_category: "Cold Cuts and Sausages",
    cities: [
      { city: "Mumbai", quantity: 100 },
      { city: "Delhi", quantity: 200 },
      { city: "Bengaluru", quantity: 120 },
      { city: "Chennai", quantity: 320 },
    ],
    product: {
      title: "YUMMIEZ CHCKN PLAIN SAUSAGES 250g - 1 Pc",
      brand: "Yummiez",
      price: 140,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/20eb2b5d-2460-4559-8592-f381f1043563_425x425.jpg",
    },
  },
  {
    category: "Meats, Seafood and Eggs",
    sub_category: "Cold Cuts and Sausages",
    cities: [
      { city: "Mumbai", quantity: 100 },
      { city: "Delhi", quantity: 200 },
      { city: "Bengaluru", quantity: 120 },
      { city: "Chennai", quantity: 320 },
    ],
    product: {
      title: "YUMMIEZ CHICKEN BREAKFAST SAUSAGES 500GM - 1 Pc",
      brand: "Yummiez",
      price: 180,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/ae84e458-bcef-4292-9e51-a172c78dc82a_425x425.jpg",
    },
  },
  {
    category: "Meats, Seafood and Eggs",
    sub_category: "Cold Cuts and Sausages",
    cities: [
      { city: "Mumbai", quantity: 50 },
      { city: "Delhi", quantity: 100 },
      { city: "Bengaluru", quantity: 220 },
      { city: "Chennai", quantity: 120 },
    ],
    product: {
      title: "YUMMIEZ CHCKN ITALIAN SAUSAGES 250g - 1 Pc",
      brand: "Yummiez",
      price: 120,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d95f1d34-90b4-4260-9ae1-805945b39ff1_425x425.jpg",
    },
  },
  {
    category: "Meats, Seafood and Eggs",
    sub_category: "Cold Cuts and Sausages",
    cities: [
      { city: "Mumbai", quantity: 150 },
      { city: "Delhi", quantity: 200 },
      { city: "Bengaluru", quantity: 120 },
      { city: "Chennai", quantity: 20 },
    ],
    product: {
      title: "Alf Farms Pork Oxford Sausages 250 Gms - 1 Pc",
      brand: "Alf-Farms",
      description:
        "Alf-Farm’s presents Pork Oxford, a superior quality product for the high-end gourmet. This rare breed of Oxfordshire pork is moist and tender. Fresh and fine ingredients are used in its making. This mature tasting pork is flavorsome and succulent. Pan fry, bake, microwave or just have them as it is. ",
      price: 130,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/fe90ec38-b799-427b-b5a6-aba89aa4723e_425x425.JPG",
    },
  },
  {
    category: "Meats, Seafood and Eggs",
    sub_category: "Cold Cuts and Sausages",
    cities: [
      { city: "Mumbai", quantity: 150 },
      { city: "Delhi", quantity: 200 },
      { city: "Bengaluru", quantity: 120 },
      { city: "Chennai", quantity: 20 },
    ],
    product: {
      title: "Alf Farms Pork Oxford Sausages 250 Gms - 1 Pc",
      brand: "Alf-Farms",
      description:
        "When it comes to Chicken Hot Dogs, it is always better to have it from Alf-Farms. Alf-Farms Chicken Hot Dog is a mouth watering ready to cook item.",
      price: 140,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/7e02bfeb-9e98-4085-bc15-94c752ab30f8_425x425.jpg",
    },
  },
  {
    category: "Meats, Seafood and Eggs",
    sub_category: "Cold Cuts and Sausages",
    cities: [
      { city: "Mumbai", quantity: 250 },
      { city: "Delhi", quantity: 100 },
      { city: "Bengaluru", quantity: 320 },
      { city: "Chennai", quantity: 240 },
    ],
    product: {
      title: "Alf Farms Chkn Chees Paprika Sausg 250 G - 1 Pc",
      brand: "Alf-Farms",
      description:
        "Alf-Farms present Chicken Cheese Paprika with an amazing taste which is just like your home made foods. Alf-Farms are famous for its quality and innovative products. Chicken Cheese Paprika is something which any chicken lover would love to have.",
      price: 170,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/be35ffb9-4a0a-4669-ba0b-a369617115d6_425x425.jpg",
    },
  },
  {
    category: "Meats, Seafood and Eggs",
    sub_category: "Frozen",
    cities: [
      { city: "Mumbai", quantity: 200 },
      { city: "Delhi", quantity: 120 },
      { city: "Bengaluru", quantity: 120 },
      { city: "Chennai", quantity: 140 },
    ],
    product: {
      title: "ZORABIAN CHICKEN SHAMI KEBAB 250G - 1 Pc",
      brand: "Zorabian",
      description:
        "Experience a burst of flavors with each bite of Ready to Cook Chicken Shami Kebab.",
      price: 165,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/125ad1b7-e48b-44e8-b3be-b7e68f020690_425x425.jpg",
    },
  },
  {
    category: "Meats, Seafood and Eggs",
    sub_category: "Frozen",
    cities: [
      { city: "Mumbai", quantity: 200 },
      { city: "Delhi", quantity: 120 },
      { city: "Bengaluru", quantity: 120 },
      { city: "Chennai", quantity: 140 },
    ],
    product: {
      title: "ZORABIAN CHICKEN SPRING ROLL 250G - 1 Pc",
      brand: "Zorabian",
      price: 185,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/6ad01ea6-98f4-478b-88f1-6e1f3323079f_425x425.JPG",
    },
  },
  {
    category: "Meats, Seafood and Eggs",
    sub_category: "Frozen",
    cities: [
      { city: "Mumbai", quantity: 100 },
      { city: "Delhi", quantity: 110 },
      { city: "Bengaluru", quantity: 220 },
      { city: "Chennai", quantity: 200 },
    ],
    product: {
      title: "ZORABIAN CHICKEN N CHEESE BALLS 250G - 1 Pc",
      brand: "Zorabian",
      description:
        "Zorabian’s Chicken n Cheese Balls are truly delicious and healthy. These cheese balls are baked and not deep fried. To get the crispy taste of these Chicken n Cheese balls, you can also deep fry them until they are golden brown. It is available in a conveniently sized 250 gm polypack and has a shelf life of 6 months.",
      price: 205,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/bbb6e9c4-b10f-4f74-bd16-329849ceb1f9_425x425.jpg",
    },
  },
  {
    category: "Breakfast, Dairy and Bakery",
    sub_category: "Bakery",
    cities: [
      { city: "Mumbai", quantity: 100 },
      { city: "Delhi", quantity: 110 },
      { city: "Bengaluru", quantity: 120 },
      { city: "Chennai", quantity: 100 },
    ],
    product: {
      title: "SAPPHIRE BUTTER COOKIES CHOCO CHIPS 400g - 1 Pc",
      brand: "L Exclusif",
      price: 300,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/248bffaa-309d-48fb-8ae6-b25bb25fd18b_425x425.JPG",
    },
  },
  {
    category: "Breakfast, Dairy and Bakery",
    sub_category: "Bakery",
    cities: [
      { city: "Mumbai", quantity: 100 },
      { city: "Delhi", quantity: 110 },
      { city: "Bengaluru", quantity: 120 },
      { city: "Chennai", quantity: 100 },
    ],
    product: {
      title: "BANANA WALNUT CAKE - 150 g 100% WHOLEWHEAT - 1 Pc",
      brand: "L Exclusif",
      description: "BANANA WALNUT CAKE - 150 g 100% WHOLEWHEAT",
      price: 155,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/e4be213c-a54f-40d5-862f-3e88b372f6aa_425x425.jpg",
    },
  },
  {
    category: "Breakfast, Dairy and Bakery",
    sub_category: "Bakery",
    cities: [
      { city: "Mumbai", quantity: 100 },
      { city: "Delhi", quantity: 110 },
      { city: "Bengaluru", quantity: 120 },
      { city: "Chennai", quantity: 100 },
    ],
    product: {
      title: "BAGEL SESAME (PACK OF 2) 100% WHOLEWHEAT - 1 Pc",
      brand: "L Exclusif",
      description: "BAGEL SESAME (PACK OF 2) 100% WHOLEWHEAT",
      price: 130,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/ebf1333a-5ee3-4284-a579-91be2f6f6c02_425x425.jpg",
    },
  },
  {
    category: "Breakfast, Dairy and Bakery",
    sub_category: "Bakery",
    cities: [
      { city: "Mumbai", quantity: 200 },
      { city: "Delhi", quantity: 220 },
      { city: "Bengaluru", quantity: 320 },
      { city: "Chennai", quantity: 300 },
    ],
    product: {
      title: "AG MAYONNAISE LITE 16OZ - 1 Pc",
      brand: "American Garden",
      description:
        "American Garden's Reduced Calorie Mayonnaise with 3% Fat 90% less calories than American Garden's Real Mayonnaise all of the rich, creamy taste. Made with 100% certified cage-free eggs and 3.5g fat per serving, our Light mayonnaise.",
      price: 130,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/bee98725-14e9-4b82-a8e8-b685becfff8b_425x425.JPG",
    },
  },
  {
    category: "Breakfast, Dairy and Bakery",
    sub_category: "Bakery",
    cities: [
      { city: "Mumbai", quantity: 100 },
      { city: "Delhi", quantity: 120 },
      { city: "Bengaluru", quantity: 120 },
      { city: "Chennai", quantity: 200 },
    ],
    product: {
      title: "AG PEANUT BUTTER CHUNKY 12OZ - 1 Pc",
      brand: "American Garden",
      price: 299,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/9971ac5f-b984-41eb-b54c-11525fcbb72d_425x425.jpg",
    },
  },
  {
    category: "Breakfast, Dairy and Bakery",
    sub_category: "Bars and Others",
    cities: [
      { city: "Mumbai", quantity: 400 },
      { city: "Delhi", quantity: 20 },
      { city: "Bengaluru", quantity: 320 },
      { city: "Chennai", quantity: 210 },
    ],
    product: {
      title: "RITE BITE EASY SLIM 50g - 1 Pc",
      brand: "Rite Bite",
      price: 50,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/01712f43-81fd-4293-b3e3-f31edea34a51_425x425.jpg",
    },
  },
  {
    category: "Breakfast, Dairy and Bakery",
    sub_category: "Bars and Others",
    cities: [
      { city: "Mumbai", quantity: 300 },
      { city: "Delhi", quantity: 200 },
      { city: "Bengaluru", quantity: 120 },
      { city: "Chennai", quantity: 110 },
    ],
    product: {
      title: "RITE BITE WORK OUT DAILY BAR 50g - 1 Pc",
      brand: "Rite Bite",
      description:
        "Get a boost of instant energy and nutrition with this energy bar.",
      price: 60,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/59cd37f0-c541-45c3-9d93-4f84499859a3_425x425.jpg",
    },
  },
  {
    category: "Breakfast, Dairy and Bakery",
    sub_category: "Bars and Others",
    cities: [
      { city: "Mumbai", quantity: 100 },
      { city: "Delhi", quantity: 120 },
      { city: "Bengaluru", quantity: 100 },
      { city: "Chennai", quantity: 100 },
    ],
    product: {
      title: "RITEBITE MAX PROTACT ASRT BAR BOX 414g - 1 Pc",
      brand: "Rite Bite",
      description:
        "The ideal health bar that meets your daily protein requirements and can be had at your convenience.",
      price: 624,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/b8c0679d-a83b-4a76-a11f-de97fd01e454_425x425.jpg",
    },
  },
  {
    category: "Breakfast, Dairy and Bakery",
    sub_category: "Bars and Others",
    cities: [
      { city: "Mumbai", quantity: 100 },
      { city: "Delhi", quantity: 120 },
      { city: "Bengaluru", quantity: 100 },
      { city: "Chennai", quantity: 100 },
    ],
    product: {
      title: "BAGRRYS WHITE OATS PUCH 500g - 1 Pc",
      brand: "Baggrys",
      description:
        "Kick start your mornings with heart-healthy and wholesome Bagrry’s White Oats. Reap the benefits of our 100% wholegrain and nutrition-packed oats, which are specially processed with our innovative milling technology for a superior taste experience.",
      price: 99,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/58d6ed5c-3c1f-4003-9320-edd3ff13548c_425x425.jpg",
    },
  },
  {
    category: "Breakfast, Dairy and Bakery",
    sub_category: "Bars and Others",
    cities: [
      { city: "Mumbai", quantity: 200 },
      { city: "Delhi", quantity: 200 },
      { city: "Bengaluru", quantity: 300 },
      { city: "Chennai", quantity: 200 },
    ],
    product: {
      title: "BAGRRYS FRT FBR STR JR 1 KG - 1 Pc",
      brand: "Baggrys",
      description:
        "A suitable option for a healthy, nutritious and appetizing breakfast cereal, Bagrry's Fruit n Fiber Strawberry Muesli is rich in fiber and has no trans-fatty acids.",
      price: 99,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/26d06ce2-ffd7-491f-89ff-009689adeb45_425x425.jpg",
    },
  },
  {
    category: "Breakfast, Dairy and Bakery",
    sub_category: "Bars and Others",
    cities: [
      { city: "Mumbai", quantity: 100 },
      { city: "Delhi", quantity: 100 },
      { city: "Bengaluru", quantity: 200 },
      { city: "Chennai", quantity: 200 },
    ],
    product: {
      title: "BAGRRYS FRT FBR STR JR 1 KG - 1 Pc",
      brand: "Baggrys",
      price: 99,
      image:
        "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/3f563fe9-e01c-4f9e-9558-0a9596c3447c_425x425.jpg",
    },
  },
];

module.exports = categories;
