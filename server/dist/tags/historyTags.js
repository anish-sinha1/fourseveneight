"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var historyTags = [
    "world-war-two",
    "united-states",
    "military",
    "middle-ages",
    "ancient-history",
    "20th-century",
    "europe",
    "ancient-rome",
    "nazi-germany",
    "soviet-union",
    "war",
    "19th-century",
    "economy",
    "political-history",
    "world-war-one",
    "identification",
    "japan",
    "russia",
    "england",
    "india",
    "germany",
    "roman-empire",
    "religion",
    "france",
    "united-kingdom",
    "china",
    "naval",
    "law",
    "warfare",
    "ancient-greece",
    "cultural-history",
    "social-history",
    "british-empire",
    "18th-century",
    "technology",
    "language",
    "historiography",
    "weapons",
    "slavery",
    "cold-war",
    "ancient-egypt",
    "american-civil-war",
    "colonization",
    "christianity",
    "britain",
    "art",
    "science",
    "middle-east",
    "uniform",
    "colonial-america",
    "spain",
    "jews",
    "native-americans",
    "food",
    "government",
    "trade",
    "islam",
    "hitler",
    "17th-century",
    "catholic-church",
    "communism",
    "africa",
    "archaeology",
    "monarchy",
    "architecture",
    "transportation",
    "roman-republic",
    "everyday-life",
    "international-relations",
    "american-revolution",
    "byzantine-empire",
    "ottoman-empire",
    "battle",
    "poland",
    "education",
    "california",
    "quotes",
    "israel",
    "spanish-empire",
    "book",
    "aircraft",
    "sources",
    "italy",
    "travel",
    "age-of-sail",
    "napoleonic-wars",
    "medicine",
    "money",
    "women",
    "diplomacy",
    "calendar",
    "north-america",
    "mexico",
    "ancient-china",
    "literature",
    "clothing",
    "agriculture",
    "nazism",
    "ships",
    "ww2-european-theater",
    "classical-antiquity",
    "holocaust",
    "royalty",
    "french-revolution",
    "names",
    "crime",
    "vikings",
    "mongol-empire",
    "revolution",
    "canada",
    "election",
    "president",
    "prehistory",
    "early-modern",
    "nuclear-weapons",
    "16th-century",
    "persia",
    "immigration",
    "tactics",
    "early-medieval",
    "egypt",
    "crusades",
    "racism",
    "renaissance",
    "medieval-china",
    "numismatics",
    "maps",
    "philosophy",
    "geography",
    "bible",
    "15th-century",
    "currency",
    "writing",
    "historical-research",
    "asia",
    "austria",
    "stalin",
    "contemporary-history",
    "communication",
    "industrial-revolution",
    "fashion",
    "turkey",
    "disease",
    "democracy",
    "australia",
    "nobility",
    "demography",
    "religious-history",
    "victorian",
    "holy-roman-empire",
    "mathematics",
    "constitution",
    "age-of-discovery",
    "cavalry",
    "imperial-germany",
    "animals",
    "tanks",
    "death",
    "labour-history",
    "population",
    "modern",
    "marriage",
    "social-class",
    "vietnam-war",
    "independence",
    "iran",
    "north-africa",
    "terminology",
    "ireland",
    "flags",
    "ww2-pacific-theater",
    "exploration",
    "music",
    "heraldry",
    "napoleon",
    "civilizations",
    "great-britain",
    "industrial-history",
    "greece",
    "sexuality",
    "1960s",
    "civil-rights",
    "time-keeping",
    "americas",
    "resource",
    "sword",
    "sweden",
    "bronze-age",
    "anthropology",
    "sports",
    "ancient-india",
    "cities",
    "palestine",
    "pakistan",
    "reference",
    "titles",
    "new-world",
    "ethnicity",
    "alexander-the-great",
    "etymology",
    "scotland",
    "mesopotamia",
    "hungary",
    "feudalism",
    "armour",
    "propaganda",
    "historical-accuracy",
    "1920s",
    "1930s",
    "civil-war",
    "taxes",
    "popular-culture",
    "finance",
    "treaties",
    "world",
    "greek",
    "records",
    "construction",
    "business-history",
    "submarine",
    "latin-language",
    "building",
    "ancient-babylon",
    "russian-revolution",
    "toponymy",
    "fascism",
    "arabia",
    "korea",
    "genocide",
    "siege",
    "austria-hungary",
    "judaism",
    "islamic-history",
    "historical-techniques",
    "post-war",
    "assassination",
    "astronomy",
    "espionage",
    "celts",
    "imperialism",
    "yugoslavia",
    "photography",
    "nuclear",
    "switzerland",
    "south-east-asia",
    "1940s",
    "railroads",
    "carthage",
    "south-america",
    "strategy",
    "portugal",
    "spaceflight",
    "statistics",
    "medieval-japan",
    "alcohol",
    "netherlands",
    "prisoners-of-war",
    "migration",
    "artillery",
    "date",
    "nationalism",
    "indonesia",
    "ukraine",
    "iraq",
    "united-nations",
    "13th-century",
    "banking",
    "family",
    "rome",
    "bombing",
    "mughals",
    "the-balkans",
    "steppe-nomads",
    "french-empire",
    "church",
    "cuba",
    "us-congress",
    "old-west",
    "movies",
    "colony",
    "maya",
    "samurai",
    "14th-century",
    "kingdom",
    "south-africa",
    "weimar-republic",
    "south-asia",
    "1970s",
    "castles",
    "symbols",
    "history-of-ideas",
    "arab",
    "political-geography",
    "belgium",
    "gold",
    "tradition",
    "inventions",
    "drugs",
    "great-depression",
    "defense",
    "confederacy",
    "gender",
    "race",
    "royal-succession",
    "protestant-church",
    "kamchatka",
    "afghanistan",
    "us-constitution",
    "war-crime",
    "czechoslovakia",
    "lenin",
    "reformation",
    "media",
    "mesoamerica",
    "greek-mythology",
    "infantry",
    "game",
    "vietnam",
    "metallurgy",
    "research",
    "disasters",
    "aztec",
    "buddhism",
    "iron-age",
    "pope",
    "churchill",
    "christopher-columbus",
    "hellenistic-greece",
    "korean-war",
    "paris",
    "london",
    "public-health",
    "decolonization",
    "engineering",
    "julius-caesar",
    "romania",
    "political-party",
    "settlement",
    "classical-greece",
    "dictatorship",
    "mao-zedong",
    "police",
    "founding-fathers",
    "tudor-period",
    "pyramids",
    "sumer",
    "sex",
    "sociology",
    "rulers",
    "athens",
    "computers",
    "socialism",
    "prussia",
    "death-penalty",
    "antisemitism",
    "land",
    "anglo-saxons",
    "1910s",
    "western-civilisation",
    "occupations",
    "central-asia",
    "indian",
    "atlantic-slave-trade",
    "hinduism",
    "individuals",
    "qing-dynasty",
    "norway",
    "ethiopia",
    "argentina",
    "inca",
    "cartography",
    "syria",
    "journalism",
    "caribbean",
    "terrorism",
    "political-economy",
    "21st-century",
    "sparta",
    "bulgaria",
    "invasion",
    "diplomatic-history",
    "navigation",
    "english-civil-war",
    "interwar",
    "border",
    "children",
    "printing",
    "portuguese-empire",
    "jerusalem",
    "combat",
    "chronology",
    "abraham-lincoln",
    "cryptology",
    "biography",
    "famine",
    "finland",
    "voting",
    "macedon",
    "indus-valley",
    "greco-persian-wars",
    "12th-century",
    "iceland",
    "denmark",
    "german-unification",
    "nation-states",
    "paleolithic",
    "theoretical-history",
    "human-rights",
    "conquest",
    "new-york",
    "piracy",
    "famous-people",
    "precolumbian-era",
    "umayyad-caliphate",
    "painting",
    "chartered-companies",
    "1950s",
    "aviation",
    "black-history",
    "law-enforcement",
    "black-death",
    "philippines",
    "george-washington",
    "assyrian-empire",
    "genealogy",
    "titanic",
    "jesus",
    "punic-wars",
    "gladiators",
    "automobiles",
    "dutch-empire",
    "meiji-restoration",
    "caesar",
    "1st-century",
    "alaska",
    "persona",
    "olympics",
    "capitalism",
    "11th-century",
    "christmas",
    "stalingrad",
    "nato",
    "television",
    "silver",
    "price",
    "climate",
    "population-transfer",
    "enlightenment",
    "health",
    "imperial-japan",
    "photograph",
    "german",
    "national-symbols",
    "monument",
    "habsburg",
    "hundred-years-war",
    "mediterranean",
    "coup",
    "academics",
    "caliphate",
    "norman",
    "customs",
    "consumer-goods",
    "methodology",
    "hebrew",
    "border-dispute",
    "nutrition",
    "spanish-civil-war",
    "aboriginals",
    "franks",
    "jefferson",
    "north-korea",
    "saudi-arabia",
    "mussolini",
    "folklore",
    "cia",
    "sculpture",
    "physics",
    "peasants",
    "temples",
    "russian-civil-war",
    "hawaii",
    "childbirth",
    "natural-resources",
    "scandinavia",
    "organised-crime",
    "islamic-hispania",
    "sasanian-empire",
    "english-language",
    "origins",
    "henry-viii",
    "tibet",
    "brazil",
    "needham",
    "zionism",
    "malta",
    "3rd-century",
    "berlin-wall",
    "sengoku",
    "mongolia",
    "nautical",
    "john-f-kennedy",
];
exports.default = historyTags;
