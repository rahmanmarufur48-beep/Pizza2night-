export const BUSINESS_INFO = {
  name: "Pizza2night",
  address: "2/50 Queen Street, Campbelltown, NSW 2560, Australia",
  phone: "+61 2 4627 7462",
  phoneDisplay: "(02) 4627 7462",
  email: "pizza2night.com.au@gmail.com",
  instagram: "pizza2.night",
  facebook: "pizza2.night",
  website: "https://pizza2night.com.au",
  hours: "Open Late - 7 Days a Week",
};

export const MENU_CATEGORIES = ["All", "Pizza", "Appetisers", "Burger", "Pasta", "Chicken", "Rice", "Salads", "Dessert", "Drinks"];

export const MENU_ITEMS = [
  // APPETISERS
  { id: "a1", name: "Garlic Bread", price: 5.95, category: "Appetisers", description: "Stone-baked bread with garlic butter and herbs.", image: "https://images.unsplash.com/photo-1619531005816-adb3b3e0bb40?q=80&w=800&auto=format&fit=crop" },
  { id: "a2", name: "Cheesy Garlic Bread", price: 7.95, category: "Appetisers", description: "Garlic bread topped with melted premium mozzarella.", image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=800&auto=format&fit=crop" },
  { id: "a3", name: "Bruschetta Bread", price: 8.00, category: "Appetisers", description: "Topped with tomatoes, garlic, and basil.", image: "https://images.unsplash.com/photo-1572656631137-7935297eff55?q=80&w=800&auto=format&fit=crop" },
  { id: "a4", name: "Wagyu Spring Rolls", price: 12.00, category: "Appetisers", description: "Premium beef spring rolls.", image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop" },
  { id: "a5", name: "Mozzarella Cheese Stick", price: 14.00, category: "Appetisers", description: "Gooey mozzarella sticks (8pcs).", image: "https://images.unsplash.com/photo-1531390555024-9b8846153093?q=80&w=800&auto=format&fit=crop" },
  { id: "a6", name: "Salt & Pepper Squid", price: 18.00, category: "Appetisers", description: "Tender squid with crispy seasoning.", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop" },
  { id: "a7", name: "Potato Chips", price: 9.00, category: "Appetisers", description: "Crispy golden chips.", image: "https://images.unsplash.com/photo-1518013431117-eb1465fd5752?q=80&w=800&auto=format&fit=crop" },
  { id: "a8", name: "Chilli Prawns Hot Pot", price: 16.00, category: "Appetisers", description: "Spicy prawns served with garlic bread.", image: "https://images.unsplash.com/photo-1559742811-0428d00344a7?q=80&w=800&auto=format&fit=crop" },

  // PIZZA (Selection from the flyer)
  { id: "p1", name: "Supreme Pizza", price: 20.00, category: "Pizza", popular: true, description: "Tomato sauce, mozzarella, mushroom, olive, onion, capsicum, cabanossi, pepperoni, turkey rashes, shaded beef.", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=810&auto=format&fit=crop" },
  { id: "p2", name: "BBQ Meatlover Pizza", price: 19.00, category: "Pizza", popular: true, description: "BBQ sauce, mozzarella cheese, turkey rashes, cabanossi, salami and pepperoni.", image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=800&auto=format&fit=crop" },
  { id: "p3", name: "Peri-Peri Chicken Pizza", price: 18.00, category: "Pizza", popular: true, description: "Tomato sauce, mozzarella, chicken, capsicum, onion, jalapeño and peri-peri sauce.", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop" },
  { id: "p4", name: "Gambarino Pizza", price: 25.00, category: "Pizza", description: "Tomato sauce, mozzarella, prawns, cherry tomato, shallot, spicy pepperoni, chilli with garlic and parsley.", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop" },
  { id: "p5", name: "Margarita Pizza", price: 14.00, category: "Pizza", description: "Tomato sauce, mozzarella cheese, oregano, and fresh basil.", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?q=80&w=800&auto=format&fit=crop" },
  { id: "p6", name: "Dante", price: 19.00, category: "Pizza", description: "Tomato sauce, mozzarella, turkey rashes, cabanossi, salami and chicken.", image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=800&auto=format&fit=crop" },
  { id: "p7", name: "Peppperoni Pizza", price: 16.00, category: "Pizza", description: "Tomato sauce, mozzarella cheese, pepperoni.", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop" },
  { id: "p8", name: "Tandoori Chicken Pizza", price: 18.00, category: "Pizza", description: "Tomato sauce, mozzarella, tandoori chicken, capsicum, onion and olive.", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop" },
  { id: "p9", name: "Seafood Pizza", price: 21.00, category: "Pizza", description: "Tomato sauce, garlic marinated seafood, tomato sauce, mozzarella with fresh herbs.", image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=800&auto=format&fit=crop" },

  // BURGER
  { id: "b1", name: "Chicken Burger", price: 14.00, category: "Burger", description: "Marinated grilled chicken breast with mayo, lettuce, tomato. Meal available for $20.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop" },
  { id: "b2", name: "Pull Beef Burger", price: 14.00, category: "Burger", description: "Pull beef with BBQ sauce, slice tomato, onion, lettuce and teste. Meal available for $20.", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop" },

  // PASTA
  { id: "ps1", name: "Spaghetti Bolognese", price: 18.00, category: "Pasta", description: "Spaghetti with a rich Bolognese sauce and fresh herbs.", image: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?q=80&w=800&auto=format&fit=crop" },
  { id: "ps2", name: "Fettuccini Boscaiola", price: 18.00, category: "Pasta", description: "Grilled chicken, mushroom, garlic and parsley in a cream sauce.", image: "https://images.unsplash.com/photo-1645112481357-306138dcbf9e?q=80&w=800&auto=format&fit=crop" },
  { id: "ps3", name: "Prawns Pasta", price: 21.00, category: "Pasta", description: "Fettuccini pasta with our special creamy pink sauce and black tiger prawns.", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop" },

  // CHICKEN
  { id: "ch1", name: "Buffalo Chicken Wings", price: 18.00, category: "Chicken", description: "Marinated grilled chicken wings with ribs sauce and top with garlic aioli.", image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=800&auto=format&fit=crop" },
  { id: "ch2", name: "Chicken Parmigiana", price: 20.00, category: "Chicken", description: "Crispy chicken schnitzel, mozzarella cheese topped with napolitana sauce, chips and salad.", image: "https://images.unsplash.com/photo-1632778149975-400460ca2e88?q=80&w=800&auto=format&fit=crop" },

  // RICE
  { id: "r1", name: "Chicken Mushroom Risotto", price: 20.00, category: "Rice", description: "Arborio risotto rice, grilled chicken, mushroom with cream sauce.", image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=800&auto=format&fit=crop" },
  { id: "r2", name: "Seafood Risotto", price: 22.00, category: "Rice", description: "Arborio risotto rice, black tiger prawns with creamy pink sauce.", image: "https://images.unsplash.com/photo-1534422298391-e4f8c170db76?q=80&w=800&auto=format&fit=crop" },

  // SALADS
  { id: "sl1", name: "Chicken Ceasar Salad", price: 18.00, category: "Salads", description: "Classic caesar with grilled chicken, lettuce, croutons, and dressing.", image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=800&auto=format&fit=crop" },
  { id: "sl2", name: "Greek Salad", price: 16.00, category: "Salads", description: "Fresh tomatoes, cucumbers, onion, feta cheese, and olives.", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop" },

  // DESSERT
  { id: "d1", name: "Nuttala Pizza", price: 13.00, category: "Dessert", description: "A pizza base topped with chocolate nuttala spread.", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop" },
  { id: "d2", name: "Chocolate Mud Cake", price: 12.00, category: "Dessert", description: "Rich and moist chocolate mud cake.", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop" },
  { id: "d3", name: "Apple Crumble Pizza", price: 16.00, category: "Dessert", description: "Stone baked pizza base with apple and crumble topping.", image: "https://images.unsplash.com/photo-1622622770519-7033501a4f00?q=80&w=800&auto=format&fit=crop" },
  // DRINKS
  { id: "dr1", name: "Soft Drinks Can", price: 3.00, category: "Drinks", description: "Variety of 375ml cans.", image: "https://images.unsplash.com/photo-1622766815178-641bef2b4630?q=80&w=800&auto=format&fit=crop" },
  { id: "dr2", name: "Soft Drinks Bottle (1.25L)", price: 5.00, category: "Drinks", description: "Variety of 1.25L bottles.", image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=800&auto=format&fit=crop" },
];

export const REVIEWS = [
  { name: "Sarah J.", text: "Best late night pizza in Campbelltown! Always hot.", rating: 5 },
  { name: "Mike R.", text: "The cheese pull is insane. Fast delivery too.", rating: 5 },
  { name: "Jessica L.", text: "Huge portions and very fresh ingredients. 10/10.", rating: 5 },
];
