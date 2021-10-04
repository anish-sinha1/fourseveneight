const foodAndDrinkTags: string[] = [
  "baking",
  "food-safety",
  "substitutions",
  "bread",
  "equipment",
  "chicken",
  "meat",
  "eggs",
  "flavor",
  "cake",
  "sauce",
  "storage-method",
  "freezing",
  "food-science",
  "dough",
  "oven",
  "temperature",
  "chocolate",
  "storage-lifetime",
  "vegetables",
  "oil",
  "cheese",
  "food-preservation",
  "frying",
  "pasta",
  "beef",
  "sugar",
  "cleaning",
  "cookies",
  "fish",
  "rice",
  "fruit",
  "spices",
  "coffee",
  "flour",
  "pizza",
  "soup",
  "milk",
  "salt",
  "potatoes",
  "butter",
  "cooking-time",
  "yeast",
  "cast-iron",
  "fermentation",
  "tea",
  "microwave",
  "refrigerator",
  "slow-cooking",
  "sourdough",
  "indian-cuisine",
  "boiling",
  "tomatoes",
  "canning",
  "pork",
  "sous-vide",
  "steak",
  "dessert",
  "storage",
  "cookware",
  "grilling",
  "beans",
  "roasting",
  "pie",
  "candy",
  "language",
  "onions",
  "chili-peppers",
  "garlic",
  "ice-cream",
  "yogurt",
  "deep-frying",
  "italian-cuisine",
  "food-identification",
  "pan",
  "water",
  "cream",
  "herbs",
  "knives",
  "chemistry",
  "chinese-cuisine",
  "barbecue",
  "stock",
  "ingredient-selection",
  "texture",
  "asian-cuisine",
  "vegan",
  "seasoning",
  "alcohol",
  "turkey",
  "pastry",
  "curry",
  "wine",
  "measurements",
  "culinary-uses",
  "vinegar",
  "fats",
  "reheating",
  "nutrient-composition",
  "marinade",
  "frozen",
  "drinks",
  "japanese-cuisine",
  "seafood",
  "steaming",
  "brining",
  "broth",
  "sausages",
  "pressure-cooker",
  "smoking",
  "nuts",
  "stove",
  "mold",
  "gelatin",
  "vegetarian",
  "noodles",
  "seasoning-pans",
  "sushi",
  "thickening",
  "coconut",
  "utensils",
  "mexican-cuisine",
  "shopping",
  "pickling",
  "frying-pan",
  "gluten-free",
  "bacon",
  "batter",
  "jam",
  "crust",
  "spoilage",
  "sourdough-starter",
  "spicy-hot",
  "mushrooms",
  "stews",
  "heat",
  "mixing",
  "hamburgers",
  "restaurant-mimicry",
  "cheesecake",
  "pancakes",
  "knife-skills",
  "smell",
  "lemon",
  "salmon",
  "olive-oil",
  "honey",
  "roast",
  "crockpot",
  "kitchen-safety",
  "apples",
  "fresh",
  "dairy",
  "wok",
  "defrosting",
  "stainless-steel",
  "pot",
  "whipped-cream",
  "caramel",
  "cutting",
  "chicken-breast",
  "meringue",
  "juice",
  "cheese-making",
  "raw",
  "raw-meat",
  "rising",
  "color",
  "egg-whites",
  "sauteing",
  "syrup",
  "corn",
  "lamb",
  "non-stick",
  "rice-cooker",
  "cocktails",
  "french-cuisine",
  "thai-cuisine",
  "brownies",
  "baking-soda",
  "blender",
  "salad",
  "recipe-scaling",
  "ham",
  "soy",
  "induction",
  "molecular-gastronomy",
  "gas",
  "icing",
  "dehydrating",
  "melting-chocolate",
  "history",
  "ginger",
  "drying",
  "sharpening",
  "caramelization",
  "custard",
  "emulsion",
  "bananas",
  "mayonnaise",
  "vanilla",
  "seeds",
  "tofu",
  "pepper",
  "allergy",
  "electric-stoves",
  "ground-beef",
  "ribs",
  "stir-fry",
  "chili",
  "baking-powder",
  "kneading",
  "wheat",
  "grinding",
  "lentils",
  "acidity",
  "starter",
  "maintenance",
  "peeling",
  "bones",
  "oats",
  "cocoa",
  "chicken-stock",
  "food-processing",
  "muffins",
  "resources",
  "pumpkin",
  "roux",
  "pudding",
  "french-fries",
  "grains",
  "decorating",
  "burnt",
  "beer",
  "shrimp",
  "tempering",
  "curing",
  "espresso",
  "dutch-oven",
  "cut-of-meat",
  "middle-eastern-cuisine",
  "vacuum",
  "popcorn",
  "sandwich",
  "skillet",
  "citrus",
  "cupcakes",
  "dumplings",
  "thawing",
  "proofing",
  "conversion",
  "duck",
  "tenderizing",
  "convection",
  "cutting-boards",
  "almonds",
  "thermometer",
  "avocados",
  "salad-dressing",
  "braising",
  "fudge",
  "botulism",
  "hot-sauce",
  "glass",
  "carrots",
  "squash",
  "lasagna",
  "soaking",
  "low-carb",
  "starch",
  "pizza-stone",
  "sweet-potatoes",
  "frosting",
  "consistency",
  "puff-pastry",
  "breakfast",
  "spaghetti",
  "chips",
  "oranges",
  "gravy",
  "sponge-cake",
  "cabbage",
  "beverages",
  "leavening",
  "carbon-steel",
  "hard-boiled-eggs",
  "ripe",
  "cookbook",
  "cornstarch",
  "jelly",
  "calories",
  "spanish-cuisine",
  "soymilk",
  "chickpeas",
  "coloring",
  "fire",
  "macarons",
  "ratio",
  "mustard",
  "buttermilk",
  "dairy-free",
  "gelling-agents",
  "peanuts",
  "stand-mixer",
  "extracts",
  "kefir",
  "brown-sugar",
  "infusion",
  "meatballs",
  "budget-cooking",
  "waffle",
  "tortilla",
  "moisture",
  "safety",
  "creme-brulee",
  "brisket",
  "quickbread",
  "soda",
  "reduction",
  "spinach",
  "mint",
  "risotto",
  "additives",
  "filling",
  "poultry",
  "restaurant",
  "bulk-cooking",
  "fat",
  "searing",
  "omelette",
  "sauerkraut",
  "peanut-butter",
  "breadcrumbs",
  "eggplant",
  "broiling",
  "mussels",
  "kimchi",
  "mousse",
  "thanksgiving",
  "bell-peppers",
  "presentation",
  "korean-cuisine",
  "crepe",
  "melting",
  "roast-beef",
  "caffeine",
  "condiments",
  "pineapple",
  "kitchen",
  "cream-cheese",
  "jerky",
  "cinnamon",
  "aluminum-cookware",
  "casserole",
  "ceramic",
  "ganache",
  "smoothie",
  "american-cuisine",
  "organization",
  "shellfish",
  "scrambled-eggs",
  "flatbread",
  "juicing",
  "biscuits",
  "skin",
  "camping",
  "poaching",
  "teflon",
  "basil",
  "greens",
  "mistakes",
  "containers",
  "packaging",
  "mozzarella",
  "salsa",
  "bechamel",
  "vietnamese-cuisine",
  "food-transport",
  "strawberries",
  "sugar-free",
  "catering",
  "tasting",
  "pairing",
  "pickles",
  "glaze",
  "lime",
  "kosher",
  "butchering",
  "olive",
  "liver",
  "quinoa",
  "blueberries",
  "pasteurization",
  "menu-planning",
  "foam",
  "marshmallow",
  "venison",
  "pectin",
  "yolk",
  "charcoal",
  "german-cuisine",
  "souffle",
  "serving",
  "cod",
  "timing",
  "bagels",
  "sorbet",
  "smoke-flavor",
  "sour-cream",
  "lemon-juice",
  "dry-aging",
  "cooking-safety",
  "sweeteners",
  "breading",
  "traditional",
  "tuna",
  "charcuterie",
  "mango",
  "rye",
  "beets",
  "shortening",
  "vodka",
  "turkish-cuisine",
  "carbonation",
  "rolls",
  "organic",
  "pressure-canner",
  "gnocchi",
  "corned-beef",
  "ramen",
  "cooking-myth",
  "lettuce",
  "fondant",
  "toffee",
  "melting-sugar",
  "whipper",
  "efficiency",
  "quiche",
  "low-fat",
  "copper-cookware",
  "asparagus",
  "seitan",
  "veal",
  "pot-roast",
  "maple-syrup",
  "sprouting",
  "aluminum-foil",
  "produce",
  "cucumbers",
  "greek-cuisine",
  "propane-grill",
  "cultural-difference",
  "salami",
  "polenta",
  "fondue",
  "scallops",
  "wood",
  "toasting",
  "legumes",
  "ghee",
  "hummus",
  "vital-wheat-gluten",
  "broccoli",
  "maillard",
  "french-press",
  "truffles",
  "almond-milk",
  "chicken-wings",
  "nut-butters",
  "apple-pie",
  "sticky-rice",
  "kebab",
  "doughnuts",
  "chutney",
  "outdoor-cooking",
  "jalapeno",
  "liqueur",
  "kombucha",
  "tart",
  "mortar-and-pestle",
  "knife-safety",
  "puree",
  "blanching",
  "stuffing",
  "offal",
  "paella",
  "lobster",
  "peaches",
  "russian-cuisine",
  "barley",
  "spherification",
  "mash",
  "milling",
  "snacks",
  "cherries",
  "ketchup",
  "paneer",
  "evaporated-milk",
  "ground",
  "grill",
  "instant-pot",
  "keto",
  "coconut-milk",
  "science",
  "professional",
  "foil-cooking",
  "celery",
  "kettle",
  "pork-chops",
  "parchment",
  "cultured-food",
  "paprika",
  "cornmeal",
  "freshness",
  "grapes",
  "plating",
  "raspberries",
  "filtering",
  "flowers",
  "blowtorch",
  "sashimi",
  "pita",
  "barbecue-sauce",
  "meatloaf",
  "cranberries",
  "creme-fraiche",
  "cauliflower",
  "griddle",
  "salmonella",
  "parmesan",
  "glucose-syrup",
  "whiskey",
  "overcooking",
  "crab",
  "gumbo",
  "serving-suggestion",
  "cilantro",
  "alfredo",
  "marination",
  "acid",
  "powder",
  "sodium",
  "hollandaise",
  "pate",
  "lemonade",
  "learning",
  "high-altitude",
  "biga",
  "margarine",
  "gingerbread",
  "hot-dog",
  "measuring-scales",
  "msg",
  "confit",
  "melon",
  "saffron",
  "english-cuisine",
  "artichokes",
  "zucchini",
  "crumb-crust",
  "fried-eggs",
  "pork-shoulder",
  "hand-blender",
  "chia",
  "chai",
  "chilling",
  "kosher-salt",
  "parsley",
  "yorkshire-puddings",
  "watermelon",
  "grating",
  "dried-fruit",
  "octopus",
  "simmer",
  "coconut-oil",
  "flambe",
  "brie",
  "chorizo",
  "baker-percentage",
  "squid",
  "concentration",
  "food-processor",
  "hot-chocolate",
  "toaster",
  "pretzels",
  "malt",
  "wasabi",
  "ravioli",
  "ceviche",
];
export default foodAndDrinkTags;
