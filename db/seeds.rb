# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.delete_all
User.delete_all 

u1=User.create!(email:'GoingGreenIn2019', first_name:'GoingGreenIn2019', password: 'DemoUser', gender:"female", birth_month:"July", birth_date:20, city: "Manhattan, NY", about:"Hi! Welcome to my page! My mission is to make it easy for you to access products that are kind to the eco friendly! Take a look around and check out my products! If you have any issues at all please let me know in a review! I hope you enjoy what you find, thanks for supporting me!" )
u2=User.create!(email:'greenpath', first_name:'GreenPath', password: 'DemoUser', gender:"male", birth_month:"July", birth_date:20, city: "Manhattan, NY", about:"Hi! Welcome to my page! My mission is to make it easy for you to access products that are kind to the eco friendly! Take a look around and check out my products! If you have any issues at all please let me know in a review! I hope you enjoy what you find, thanks for supporting me!" )
u3=User.create!(email:'ecolove', first_name:'EcoLove', password: 'DemoUser', gender:"female", birth_month:"July", birth_date:20, city: "Manhattan, NY", about:"Hi! Welcome to my page! My mission is to make it easy for you to access products that are kind to the eco friendly! Take a look around and check out my products! If you have any issues at all please let me know in a review! I hope you enjoy what you find, thanks for supporting me!"  )
u4=User.create!(email:'i<3earth', first_name:'i<3earth', password: 'DemoUser', gender:"male", birth_month:"July", birth_date:20, city: "Manhattan, NY", about:"Hi! Welcome to my page! My mission is to make it easy for you to access products that are kind to the eco friendly! Take a look around and check out my products! If you have any issues at all please let me know in a review! I hope you enjoy what you find, thanks for supporting me!" )
u5=User.create!(email:'leaftree', first_name:'LeafTree', password: 'DemoUser', gender:"female", birth_month:"July", birth_date:20, city: "Manhattan, NY", about:"Hi! Welcome to my page! My mission is to make it easy for you to access products that are kind to the eco friendly! Take a look around and check out my products! If you have any issues at all please let me know in a review! I hope you enjoy what you find, thanks for supporting me!" )
u6=User.create!(email:'nowastewonders', first_name:'NoWasteWonders', password: 'DemoUser', gender:"male", birth_month:"July", birth_date:20, city: "Manhattan, NY", about:"Hi! Welcome to my page! My mission is to make it easy for you to access products that are kind to the eco friendly! Take a look around and check out my products! If you have any issues at all please let me know in a review! I hope you enjoy what you find, thanks for supporting me!" )
u7=User.create!(email:'theplanetpeople', first_name:'ThePlanetPeople', password: 'DemoUser', gender:"female", birth_month:"July", birth_date:20, city: "Manhattan, NY", about:"Hi! Welcome to my page! My mission is to make it easy for you to access products that are kind to the eco friendly! Take a look around and check out my products! If you have any issues at all please let me know in a review! I hope you enjoy what you find, thanks for supporting me!" )
u8=User.create!(email:'peace4theworld', first_name:'Peace4TheWorld', password: 'DemoUser', gender:"male", birth_month:"July", birth_date:20, city: "Manhattan, NY", about:"Hi! Welcome to my page! My mission is to make it easy for you to access products that are kind to the eco friendly! Take a look around and check out my products! If you have any issues at all please let me know in a review! I hope you enjoy what you find, thanks for supporting me!" )
u9=User.create!(email:'greenMachine', first_name:'greenMachine', password: 'DemoUser', gender:"female", birth_month:"July", birth_date:20, city: "Manhattan, NY", about:"Hi! Welcome to my page! My mission is to make it easy for you to access products that are kind to the eco friendly! Take a look around and check out my products! If you have any issues at all please let me know in a review! I hope you enjoy what you find, thanks for supporting me!" )
u10=User.create!(email:'SaveTheTurtles', first_name:'SaveTheTurtles', password: 'DemoUser', gender:"male", birth_month:"July", birth_date:20, city: "Manhattan, NY", about:"Hi! Welcome to my page! My mission is to make it easy for you to access products that are kind to the eco friendly! Take a look around and check out my products! If you have any issues at all please let me know in a review! I hope you enjoy what you find, thanks for supporting me!" )
u1.photo.attach(io: File.open("app/assets/images/user_pics/user1.jpg"),filename:"user1.jpg")
u2.photo.attach(io: File.open("app/assets/images/user_pics/user2.jpg"),filename:"user2.jpg")
u3.photo.attach(io: File.open("app/assets/images/user_pics/user3.jpg"),filename:"user3.jpg")
u4.photo.attach(io: File.open("app/assets/images/user_pics/user4.jpg"),filename:"user4.jpg")
u5.photo.attach(io: File.open("app/assets/images/user_pics/user5.jpg"),filename:"user5.jpg")
u6.photo.attach(io: File.open("app/assets/images/user_pics/user6.jpg"),filename:"user6.jpg")
u7.photo.attach(io: File.open("app/assets/images/user_pics/user7.jpg"),filename:"user7.jpg")
u8.photo.attach(io: File.open("app/assets/images/user_pics/user8.jpg"),filename:"user8.jpg")
u9.photo.attach(io: File.open("app/assets/images/user_pics/user4.jpg"),filename:"user9.jpg")
u10.photo.attach(io: File.open("app/assets/images/user_pics/user5.jpg"),filename:"user10.jpg")


## kitchen

kp1=Product.create(
    title:"Healthy Human Stainless Steel Vacuum Insulated Water Bottle - Lilac",
    description:   "WILL THIS BOTTLE CHANGE YOUR LIFE? Maybe, if you're the type of person that obsesses about water bottles (like we are). Water is life. We couldn't find the perfect water bottle so we made it! A Healthy Human water bottle will keep your water so cold, you'll feel like you're guzzling glacial meltwater. A refreshing escape if you're stuck in bumper to bumper traffic or after a heart-pumping workout.",
    price: 24.99,
    user_id: u2.id,
    category:"kitchen"
)
kp1.photo.attach(io: File.open(Rails.root.join("app/assets/images/products/kitchen1.jpg")),filename:"kitchen1.jpg")

kp2=Product.create(
    title:"Premium Glass Reusable Water Bottle",
    description: "GREAT LOOKING, DURABLE, LEAD-FREE BEVERAGE BOTTLES WITH EXTRA-WIDE MOUTH: Your freshly squeezed juices look beautiful on your table & in your fridge in these classy air-tight, eco-friendly bottles. They are also ideal for keeping water, drinks, brew, coffee, tea, sauces, salad dressing, kefir, fermented drinks ready to go anytime. BE HEALTHY, WHEREVER YOU GO: It’s easier than ever to take your healthy homemade juices and smoothies with you when you carry them in your Brieftons glass bottles.",
    price:18.88,
    user_id: u3.id,
    category:"kitchen"
)
kp2.photo.attach(io: File.open("app/assets/images/products/kitchen2.jpg"),filename:"kitchen2.jpg")

kp3=Product.create(
    title:"Yeti Rambler Tumblr",
    description:"Stays hot for 5 hours\n\nThe YETI Rambler is a 20 oz. coffee tumbler made of stainless steel. It comes with a dishwasher safe and shatter-resistant lid. The sturdy reusable coffee cup is available in 5 colours, and because of the DuraCoat the coat of color won’t fade or crack. So use this tumbler very day on the go.",
    price: 39.99,
    user_id: u2.id,
    category:"kitchen"
)
kp3.photo.attach(io: File.open("app/assets/images/products/kitchen3.jpg"),filename:"kitchen3.jpg")

kp4=Product.create(
    title:"Collapsible Folding Reusable Straw",
    description:"❤️ Eco-friendly Reusable: Unlike disposable straw, stainless steel drinking straw is a reusable collapsible straw that doesn't contain BPA and consists of a food grade TPE hose, ABS nozzle, stainless steel body. These components make straw sturdy and durable.\n❤️ Portable and Foldable: Magnetic Lid Keychain Case keep the folding metal straw be folded into 4 sections tighter, never fall apart and small enough to toss in your purse or bag. Together with a free cleaning brush, easy to carry and use.",
    price: 9.99,
    user_id: u3.id,
    category:"kitchen"
)
kp4.photo.attach(io: File.open("app/assets/images/products/kitchen4.jpg"),filename:"kitchen4.jpg")

kp5=Product.create(
    title: "Corkcicle Tumbler-Classic Collection",
    description:   "The Corkcicle Tumbler-Classic Collection is a triple walled and vacuum sealed travel mug crafted from 18/8 stainless steel. It is available in various beautiful colours. This pretty reusable coffee cup is easy to carry and fits in most car cup holders.",
    price: 21.99,
    user_id: u2.id,
    category:"kitchen"
)
kp5.photo.attach(io: File.open("app/assets/images/products/kitchen5.jpg"),filename:"kitchen5.jpg")

kp6=Product.create(
    title: "4.5 inch Square Bowls - 8 Oz (25count)",
    description:"Hand crafted from fallen palm leaves, our dinnerware embodies the beauty of mother nature gifts. Each leaf is thoroughly cleaned, heat pressed, hand crafted, and fully sterilized; the result is sturdy, casually elegant dinnerware ready for everyday dining and relaxed gatherings. This 4.5 inch square bowl is perfect for serving single bites, soups, stews, ice creams, and desserts.",
    price:15.00,
    user_id: u3.id,
    category:"kitchen"
)
kp6.photo.attach(io: File.open("app/assets/images/products/kitchen6.jpg"),filename:"kitchen6.jpg")
kp7=Product.create(
    title: "Vegan Reusable Food Wrap NO Beeswax - 100% Plant Based.",
    description: "USABLE PLASTIC WRAP ALTERNATIVE - Reducing and reusing is the way to move to a zero waste home. Our Reusable wrap food vegan set are a Cling wrap alternative hence a zero waste wrap. Natural alternative to single use plastic and doubles up as a sustainable food wrap. You get flamingo design, cactus design and animal & plant design. New designs coming soon.",
    price:15.85,
    user_id: u2.id,
    category:"kitchen"
)
kp7.photo.attach(io: File.open("app/assets/images/products/kitchen7.jpg"),filename:"kitchen7.jpg")

kp8=Product.create(
    title: "100-Piece Biodegradable Compost Bags - Eco-Friendly Trash Bags",
    description:"Plastic bags do not decompose. Once in landfills, they stay there for a very long time. These degradable compost bags are an excellent alternative to normal plastic bags. Have a compost bin or a compost pile? Use these compost bags as liners as it keeps your compost keeper or pail clean. Once it's time to dispose of your food waste just carry the bag outdoors and toss it into the compost bin or your very own compost pile!",
    price:14.99,
    user_id: u3.id,
    category:"kitchen"
)
kp8.photo.attach(io: File.open("app/assets/images/products/kitchen8.jpg"),filename:"kitchen8.jpg")

kp9=Product.create(
    title: "Compostable CPLA Heavyweight Disposable Cornstarch Cutlery Set 150 Count",
    description:"Bamdable’s disposable cutlery isn’t just a responsible choice. It’s a way to promote healthy, eco-friendly behaviors in your home or restaurant, making these utensils more than just utensils. Made from cornstarch, these utensils break down easily, quickly, and safely in landfills, making them great for the environment. You can also compost them to enrich your garden or recycle them to keep them out of landfills altogether. While not all eco-friendly products work well, Bamdable’s disposable cutlery is very durable. It can withstand temperatures up to 212 degrees, which means you can eat steaming soup without any problems. They’re also seven inches long, making them a comfortable length for big and small hands alike. Finally, they’re FDA-approved and BPA-free, making them safe for the whole family and the environment, too.
    " ,
    price:12.99,
    user_id: u2.id,
    category:"kitchen"
)
kp9.photo.attach(io: File.open("app/assets/images/products/kitchen9.jpg"),filename:"kitchen9.jpg")

kp10=Product.create(
    title: "[125 COUNT] 7 in Round Disposable Plates - Natural Sugarcane Bagasse Bamboo Fibers",
    description:"Naturally Filth-Fighting
    Our natural all-purpose cleaner packs a punch, outperforming cleaners that sting. Simply spray, wipe, and watch as it tackles scuff marks on the wall, spilled juice on the floor, peanut butter on the counter, bacon grease on the stove, toothpaste on the vanity, or coffee spills on the couch.
    
    Better Life featured on:
    Real Simple, Oprah, Shark Tank.",
    price:11.57,
    user_id: u3.id,
    category:"kitchen"
)
kp10.photo.attach(io: File.open("app/assets/images/products/kitchen10.jpg"),filename:"kitchen10.jpg")


## cleaning

cp1=Product.create(
    title: "Better Life Natural All-Purpose Cleaner",
    description:"Our exciting glass cleaners clean windows, glass and mirrors without leaving film, streaks or hazing behind. We offer a very pleasant and soothing Lavender formulation (PL9301); and our new Orangerine formula (PL9362) which is crisp and refreshing. They are free of ammonia and dry fast. Readily biodegradable, pH balanced formulas are made using sustainable, plant-derived surfactants. Products are free of dyes; and septic safe. Recognized by the EPA’s Safer Choice (DfES) and USDA’s Bio Preferred Program. GHS COMPLIANT LABELS.",
    price: 28.89,
    user_id: u4.id,
    category:"cleaning"
)
cp1.photo.attach(io: File.open(Rails.root.join("app/assets/images/products/cleaning-1.jpg")),filename:"cleaning1.jpg")

cp2=Product.create(
    title:"Bon Ami Powder Cleanser",
    description:"Use the Bon Ami Powder Cleanser to keep your surfaces nice and clean, without any scratches. This hypoallergenic product contains no chlorine or dyes and is made up of simple ingredients. Cleans kitchen, bath, and other surfaces with no scratching. Hypoallergenic. Ingredients: Limestone, feldspar, surfactant, soda ash, and baking soda. 14 oz. Made in USA",
    price: 1.99,
    user_id: u5.id,
    category:"cleaning"
)
cp2.photo.attach(io: File.open(Rails.root.join("app/assets/images/products/cleaning-2.jpg")),filename:"cleaning2.jpg")

cp3=Product.create(
    title: "Green Works All Purpose Cleaner Spray, Simply Lemon, 32 oz",
    description: "Green Works Multi-Surface Cleaner combines powerful cleaning performance with naturally derived and plant based ingredients to safely tackle messes throughout your home. This all purpose spray cleaner cuts through grease, grime and dirt with ease without any harsh chemical fumes or residue. It is safe to use on multiple surfaces including counters, appliances, stainless steel, sealed granite, chrome, sinks and toilets. Green Works Multi-Surface Cleaner Spray is tough enough on your worst messes. Stains immediately start to dissolve upon spraying, making it the perfect cleaner for bathrooms and kitchens. The Smart Tube technology bottle lets you spray this product down to the last drop. With Green Works naturally derived cleaning products, you get powerful cleaning done naturally.",
    price: 2.99,
    user_id: u4.id,
    category:"cleaning"
)
cp3.photo.attach(io: File.open(Rails.root.join("app/assets/images/products/cleaning-3.jpg")),filename:"cleaning3.jpg")

cp4=Product.create(
    title:"Dr. Bronner Hemp Peppermint Pure Castile Oil Made With Organic Oils Certified - 25 OZ",
    description:"Our most popular scent & with a peppermint burst so pure it tingles! Scented with organic peppermint oil to cool skin, clear sinuses and sharpen mind. Our Peppermint Pure-Castile Liquid Soap is concentrated, biodegradable, versatile and effective. Made with organic and certified fair trade ingredients, packaged in a 100% post-consumer recycled bottle. All-One!",
    price: 16.99,
    user_id: u5.id,
    category:"cleaning"
)
cp4.photo.attach(io: File.open(Rails.root.join("app/assets/images/products/cleaning-4.jpg")),filename:"cleaning4.jpg")

cp5=Product.create(
    title:"Ecover Zero Dish Soap, 25 Oz",
    description:"Packed with more cleaning power than ever before, our liquid dish soap cuts through grease for spot free, sparkling clean dishes. Made with plant based and mineral ingredients, our biodegradable formula is tough on stuck on food, but gentle on your skin and the planet. All you need is just one squeeze for a sink full of dirty dishes.
    Contains (1) 25 oz bottle of dishwashing liquid. 
    Plant based dish soap. 
    Improved grease cutting & sudsing action. 
    Non toxic, biodegradable formula. 
    0% fragrance, dyes or chlorine.",
    price: 4.70,
    user_id: u4.id,
    category:"cleaning"
)
cp5.photo.attach(io: File.open(Rails.root.join("app/assets/images/products/cleaning-5.jpg")),filename:"cleaning5.jpg")

cp6=Product.create(
    title:"Intelligent Nutrients - Sanitizer, Travel Size, 2oz",
    description:"99% BACTERIA ERADICATED: Get clean without the overkill. Our sanitizer leaves hands feeling not only clean but soft and hydrated--not sticky or stripped.
    NO ALCOHOL SMELL: Food-grade, certified organic ingredients including peppermint and vanilla essential oils are added in this formula to benefit hands and smell amazing.
    KILL BACTERIA, NOT YOUR HANDS: Most sanitizers take the good away with the bad, stripping skin of the biome that our body naturally needs. With Intelligent Nutrients, you don't have to worry about the chemical anti-anythings that result in new, resistant strains of bacteria showing up on your hands. Our sanitizer is chemical-free and triclosan-free and proven effective against salmonella, MRSA and ecoli.
    HELPFUL TIPS: Use as a waterless spray cleanser. Can also be sprayed on scalp to refresh and help absorb oil in second day hair.
    NON-TOXIC CHEMISTRY: Created by 'the Father of Safe Cosmetics' and Aveda founder Horst Rechelbacher, who has always believed in organic, environmentally-friendly products with breakthrough results. At Intelligent Nutrients, our task is to harness the power of nature and keep driving the beauty industry forward. We embrace the latest plant technologies without fillers or harmful chemicals. All our products are gluten-free, cruelty-free, and made with sustainable packaging.",
    price: 16.00,
    user_id: u5.id,
    category:"cleaning"
)
cp6.photo.attach(io: File.open(Rails.root.join("app/assets/images/products/cleaning-6.jpg")),filename:"cleaning6.jpg")

cp7=Product.create(
    title:"Cleaning Vinegar (Lavender Scent)",
    description:"White House Cleaning Vinegar is a safe way to clean your home. Clean with confidence and without chemicals. Using our heritage and over 107 year old ways of making vinegar, Cleaning Vinegar will get the job done.
    Healthy Home Cleaning 
    Safe Cleaning Ingredient 
    Stronger to clean better! 6% acidity! 
    100% All Natural 
    Try all of the scents today!", 
    price: 13.29,
    user_id: u4.id,
    category:"cleaning"
)
cp7.photo.attach(io: File.open(Rails.root.join("app/assets/images/products/cleaning-7.jpg")),filename:"cleaning7.jpg")

cp8=Product.create(
    title:"Truce Wood Cleaner, Citrus",
    description:"This versatile Wood Cleaner is perfect for jobs of all size. It is lightweight enough that you can use it as a dusting spray for a daily clean, yet still tough enough for heavy-duty jobs such as wood countertops, cabinets, and even floors. It is the one product you need for a deep clean of all wood and laminate surfaces throughout the entire home. Just like the rest of the Truce product line, it relies on a simple recipe that is safe and effective.

    We can even break down the ingredient list for you. The natural vinegar is used to clean deep into the wood grain while the olive oil conditions and nourishes to create that soft and warm glow. The guar gum serves as a thickening and binding agent to keep the rest of the ingredients in tip-top shape. Lastly, the aromatherapeutic essential oils ensure that a fresh, citrusy scent is left behind after the surface is clean.
    
    Give your wood surfaces and furniture the proper respect by caring for them in the best way possible, with Truce Deep Clean Wood Cleaner.",
    price: 9.99,
    user_id: u5.id, 
    category:"cleaning"
)
cp8.photo.attach(io: File.open(Rails.root.join("app/assets/images/products/cleaning-8.jpg")),filename:"cleaning8.jpg")

cp9=Product.create(
    title:"Legacy of Clean SA8+Bioquest Concentrated Laundry Detergent 2.2 LBS",
    description:"Exploding crystals rinse clean. Your clothes say a lot about you. Keep them looking fresh with SA8® Ultra-Concentrated Laundry Detergent, a superior detergent from the inside out. With newly designed, better-for-the-environment box packaging, cleaning your clothes is even better, naturally. Enjoy the same highly concentrated, exploding crystals that dissolve fast and rinse away completely in a new and improved box. Clean clothes never felt so good.",
    price: 19.99,
    user_id: u4.id,
    category:"cleaning"
)
cp9.photo.attach(io: File.open(Rails.root.join("app/assets/images/products/cleaning-9.jpg")),filename:"cleaning9.jpg")

cp10=Product.create(
    title:"ECOS PRO PL9301/6 Glass Cleaner, Lavender",
    description:   "Our exciting glass cleaners clean windows, glass and mirrors without leaving film, streaks or hazing behind. We offer a very pleasant and soothing Lavender formulation (PL9301); and our new Orangerine formula (PL9362) which is crisp and refreshing. They are free of ammonia and dry fast. Readily biodegradable, pH balanced formulas are made using sustainable, plant-derived surfactants. Products are free of dyes; and septic safe. Recognized by the EPA’s Safer Choice (DfES) and USDA’s Bio Preferred Program. GHS COMPLIANT LABELS.",
    price: 28.89,
    user_id: u5.id,
    category:"cleaning"
)
cp10.photo.attach(io: File.open(Rails.root.join("app/assets/images/products/cleaning-10.jpg")),filename:"cleaning10.jpg")

##office
op1=Product.create(
    title:"Recycled Notebooks - 3.5 x 5.5",
    description:"These memo-sized recycled notebooks are perfect for jotting down notes on the go.

    We've distilled the best parts of our classic notebooks into 3.5 x 5.5 ReWrite. The distinctive rounded corners, perfect binding and perforated pages make this miniature version of the ReWrite recycled notebooks a great choice for capturing spur-of-the-moment ideas, taking notes at meetings or your honey-do list.",
    price:3.49,
    user_id:u6.id,
    category:"office"
)
op1.photo.attach(io: File.open("app/assets/images/products/office1.jpg"),filename:"office1.jpg")

op2=Product.create(
    title:"Pilot Bottle 2 Pen (B2P) - Retractable Ball Point Pens Made from Recycled Bottles",
    description:"GO GREEN WITH B2P: Pilot's B2P Retractable Ball Point Pens are made from recycled bottles! They have a comfortable grip & are compatible with Dr. Grip ink refills, so you can sketch, journal, take notes or write a report - all while protecting the planet.",
    price:6.68,
    user_id:u7.id,
    category:"office"
)
op2.photo.attach(io: open("app/assets/images/products/office2.jpg"),filename:"office2.jpg")

op3=Product.create(
    title: "EcoFriendly File Folder Labels, 2/3 x 3 7/16, White, 1500/Pack",
    description: "Get labels that work not only for you, but for the environment with these ecofriendly file folder labels. The labels and packaging are made of 100% recycled material and are processed chlorine free. When you're done, the labels and box are also recyclable. Easily customize your labels your way, using our free templates and designs from Avery® Design & Print. Label Size - text: 2/3 x 3 7/16; Label Color(s): White; Machine Compatibility: Inkjet Printers; Laser Printers; Sheet (W x L): 8 1/2 x 11."  ,
    price: 41.98,
    user_id: u6.id,
    category:"office"
)
op3.photo.attach(io: File.open(Rails.root.join("app/assets/images/products/office3.jpg")),filename:"office3.jpg")

op4=Product.create(
    title:"Earthwise by Oxford Recycled Paper Twin-Pocket Portfolio, Assorted Colors, 25/BX",
    description:"100 SHEET CAPACITY: Each pocket can hold up to 50 sheets, 
    BUSINESS CARD DISPLAY: Inside pocket provides a die-cut business card holder, 
    PAPER: Paper for these folders is made from 100% recycled fiber with 100% post-consumer fiber, 
    FEATURES: 25 EarthWise by Oxford Two-Pocket Folders in Natural, 
    VERSATILE: These Two-Pocket folders can be used for school, office, or home organization purposes",
    price: 15.68,
    user_id: u7.id,
    category:"office"
)
op4.photo.attach(io: File.open(Rails.root.join("app/assets/images/products/office4.jpg")),filename:"office4.jpg")

op5=Product.create(
    title:"Sprout plantable graphite pencils with seeds in eco friendly wood | 8 Pack ",
    description:"Let’s make the world Sprout! Plant your pencil. A Sprout pencil is a fun way to make sustainability visible and easy to understand. Look closely at the tip of this unique pencil and you’ll see a small seed capsule. When your Sprout pencil is too short to be used, simply plant it and watch it grow into a lemon balm or basil plant, forget-me-nots, Calendula or many other plant varieties. Perfect for adult coloring books, sketches and as highlighter."  ,
    price:14.95,
    user_id: u6.id,
    category:"office"
)
op5.photo.attach(io: File.open(Rails.root.join("app/assets/images/products/office5.jpg")),filename:"office5.jpg")

op6=Product.create(
    title:"RECYCLED 3-RING BINDER",
    description:"Ditch those plastic binders and opt for one of these 100% recycled chipboard beauties at school, home, or office.These binders made from 100% recycled chipboard are functional and sustainable. Combining durability and functionality, minimalistic design with professional sharpness, this American-made, recycled 3-ring binder reinforces your commitment to sustainability. ",
    price: 5.50,
    user_id: u7.id,
    category:"office"
)
op6.photo.attach(io: File.open(Rails.root.join("app/assets/images/products/office6.jpg")),filename:"office6.jpg")

op7=Product.create(
    title:"Onyx and Green Scissors, 5 in., Round Tip, Handles made from Corn Plastic",
    description:"We love this unique pair of Onyx and Green scissors using biodegradable corn plastic instead of petroleum-based plastic for its handles. The fully ground blades are made from stainless steel and are round tipped, which makes it perfect for a young child’s pencil case. Corn plastic is a sustainable alternative to normal plastic because it is derived from a renewable resource. They are also easy to break down into natural elements and do not produce toxic fumes if they are incinerated.",
    price:3.99,
    user_id: u6.id,
    category:"office"
)
op7.photo.attach(io: File.open(Rails.root.join("app/assets/images/products/office7.jpg")),filename:"office7.jpg")

op8=Product.create(
    title:"RAVEN AND LILY Wood Grain Printed Journals",
    description:"These handmade journals are created by women artisans in India. The women transform cotton and paper once discarded and seen as waste into something purposeful and beautiful. Military tents, denim jeans, newspapers, and cotton rags now find new purpose as the women create paper products from these recycled remnants."  ,
    price:9.00,
    user_id: u7.id,
    category:"office"
)
op8.photo.attach(io: File.open(Rails.root.join("app/assets/images/products/office8.jpg")),filename:"office8.jpg")

op9=Product.create(
    title:"2019 A6 Weekly Diary Planner // bright blue week to view diary handbound with recycled papers",
    description:"This 2019 A6 weekly diary planner is made by hand using eco friendly recycled papers, stitched with a decorative open bound spine and covered in a bright blue book cloth. 

    This lovely handbound book provides a unique space to organise all your plans, thoughts and ideas throughout the year!
    "   ,
    price: 32.02,
    user_id:u6.id ,
    category:"office"
)
op9.photo.attach(io: File.open(Rails.root.join("app/assets/images/products/office9.jpg")),filename:"office9.jpg")

op10=Product.create(
    title:"Onyx and Green 4701 Glue Sticks, Non-Toxic, 2 Piece",
    description:"Contains 2 glue sticks and 22 grams EA Plant based, non-toxic and washable Dries clear and quickly Made from recycled materials School and office supplies Great for school projects, artwork, paper and decorations. Not recommended for photos, bare metal, submerged or heated surfaces. KEEP FROM FREEZING. Wipe clean with damp cloth.",
    price:9.37,
    user_id: u7.id,
    category:"office"
)
op10.photo.attach(io: File.open(Rails.root.join("app/assets/images/products/office10.jpg")),filename:"office10.jpg")

#food

fp1=Product.create(
    title:"Cappello's CHOCOLATE CHIP COOKIE DOUGH 12OZ.",
    description: "Cappello's has teamed up with author/blogger team, Primal Palate, bring to you the world's finest grain-and-gluten-free, VEGAN, chocolate chip cookie dough. We've used the highest quality ingredients to craft this delicious, nutrient-dense, low-glycemic treat. This paleo-friendly cookie dough may invoke feelings of deep nostalgic bliss; savor it raw, mix it into ice cream or simply cut and bake. Each roll makes 13 cookies. Keep frozen!

    INGREDIENTS
    Almond flour, organic Vermont maple syrup, dark chocolate morsels (unsweetened chocolate, organic cane sugar, cocoa butter), arrowroot flour, organic unrefined coconut oil, organic vanilla extract, coarse sea salt, baking soda. Contains tree nuts. Manufactured in a facility that also processes milk and eggs.  ",
    price:13.00,
    user_id: u8.id,
    category:"food"
)
fp1.photo.attach(io: File.open("app/assets/images/products/food1.jpg"),filename:"food1.jpg")

fp2=Product.create(
    title:"Chic-a-Peas: Falafel (3oz)",
    description:"Chic-a-Peas are a baked crunchy chickpea snack. Healthy and delicious, they are perfect for snacking and make a great topping on salads. Chickpeas, a touch of oil, & spices… that's it.

    Non-GMO Project Verified! 
    Gluten Free, 
    Good Source of Protein, 
    Good Source of Fiber,
    Only 110 Calories Per Serving,
    0g Trans Fat,
    Dairy Free",
    price:3.99,
    user_id:u1.id,
    category:"food"
)
fp2.photo.attach(io: File.open("app/assets/images/products/food2.jpg"),filename:"food2.jpg")

fp3=Product.create(
    title:"Pure Organic Vanilla Almond 12-Pack (12 x 1.5 oz. bar)",
    description:"Pure Vanilla Almond bars are certified organic, non GMO, vegan, gluten free, soy free, kosher and made with creamy vanilla, rich almonds, and our exclusive crispy Ancient Grains blend.

    150 Calories, 4g Protein, 6g Sugar,
    Exclusive Ancient Grains Blend of Quinoa, Amaranth, Flax Seed and Hemp",
    price: 21.88,
    user_id: u8.id,
    category:"food"
)
fp3.photo.attach(io: File.open("app/assets/images/products/food3.jpg"),filename:"food3.jpg")

fp4=Product.create(
    title:"Simple Mills Banana Muffin & Bread Mix",
    description:"This mix is bananas, B-A-N-A-N-A-S! Authentic banana flavor from, you guessed it, real bananas.
    Made with almond flour, coconut flour & coconut sugar for nutrient value
    Can be made into muffins or a loaf
    Certified Gluten-free; free of Grains, Soy, Corn, Dairy & Gums/Emulsifiers
    Paleo-Friendly
    Non-GMO Project Verified
    7 SIMPLE INGREDIENTS: Almond Flour, Banana, Organic Coconut Sugar, Arrowroot, Organic Coconut Flour, Baking Soda, Sea Salt",
    price:7.99,
    user_id: u1.id,
    category:"food"
)
fp4.photo.attach(io: File.open("app/assets/images/products/food4.jpg"),filename:"food4.jpg")

fp5=Product.create(
    title:"Living Raw Organic Coconut Karma Truffles",
    description:"Living Raw™ Organic Coconut Karma Truffles are exquisitely delicious, and sure to satisfy even the darkest choco-holic. Unrefined, creamy cacao rolled with a hint of vanilla is topped with fine coconut flakes, adding a delicious crunch. Our hand rolled truffles are prepared under low temperatures to maintain enzymes, minerals and other vital nutrients. Indulge and experience the natural euphoria raw cacao has to offer!",
    price:3.95,
    user_id: u8.id,
    category:"food"
)
fp5.photo.attach(io: File.open("app/assets/images/products/food5.jpg"),filename:"food5.jpg")

fp6=Product.create(
    title:"NATURE'S PATH SUMMER BERRIES BOOST OATMEAL- 6 Pack",
    description:"If you’re in a rush (and even if you’re not!), these organic oatmeal cups are creamy and delicious, healthy and convenient – just add hot water!

    Reasons to love it:
    
    Supercharged with baobab powder (full of vitamin C!)
    Excellent source of ALA Omega 3s & fiber
    Wholesome ingredients to keep you full and fuelled",
    price: 12.44,
    user_id: u1.id,
    category:"food"
)
fp6.photo.attach(io: File.open("app/assets/images/products/food6.jpg"),filename:"food6.jpg")

fp7=Product.create(
    title:"Navitas Organics Essential Blend Vanilla & Greens",
    description:"Navitas Organics Vanilla & Greens Essential Superfood Blend brings you diverse sources of plant-based protein, superfoods, greens and probiotics in one easy-to-use healthy smoothie mix. Its subtly sweet vanilla flavor blends well with nearly anything. Just one serving gives you 12 grams plant protein, 14 superfoods, 6 billion CFUs probiotics plus four digestive enzymes—with no gluten, dairy or sweeteners.

    14 superfoods
    12g plant protein
    6 Billion CFU Probiotics
    plant proteins+greens+superfoods+probiotics",
    price:29.99,
    user_id: u8.id,
    category:"food"
)
fp7.photo.attach(io: File.open("app/assets/images/products/food7.jpg"),filename:"food7.jpg")

fp8=Product.create(
    title:"Navitas Organics Power Snacks Cacao Goji",
    description:"Cacao and goji berries come together to create a truly delicious, nutritious superfood snack that will help power you through the day in the way only natural, organic whole foods can. Navitas Organics Cacao Goji Power Snacks harness the powerful nutritional benefits of cacao powder and goji berries, providing antioxidants, minerals and fiber. These flavorful bite-sized snacks are made of dates, superfoods, nut and seeds to give you the lasting energy you need whenever you need it. Contains no added sugar, gluten or artificial ingredients.",
    price: 9.99,
    user_id: u1.id,
    category:"food"
)
fp8.photo.attach(io: File.open("app/assets/images/products/food8.jpg"),filename:"food8.jpg")

fp9=Product.create(
    title:"Garden of Life Raw Organic Protein Vanilla Powder",
    description:"Unlock the nutritive power of living grains and seeds with Garden of Life RAW Organic Protein. RAW Organic Protein contains RAW Food-Created fat-soluble vitamins A, D, E and K and supports digestive health and function with live probiotics and protein-digesting enzymes. RAW matters because heat can denature proteins, reducing their availability to your body. But Garden of Life’s Certified Organic plant proteins are different—always gently produced at low temperatures, without any added fillers or carriers, preserving their complete amino acid integrity and whole-food, Certified Organic, Non-GMO goodness.",
    price:26.59,
    user_id:u8.id,
    category:"food"
)
fp9.photo.attach(io: File.open("app/assets/images/products/food9.jpg"),filename:"food9.jpg")

fp10=Product.create(
    title: "Nature's Path Organic Gluten Free Granola Cereal, Blueberry Pecan Crunch",
    description:"We made this delicious gluten free granola in a resealable pouch for easy snacking on the go or just pouring into a bowl.

    Reasons to Love It:
    
    Berry tasty, with antioxidants!
    Made with whole ingredients
    Crunchy granola clusters",
    price:6.29,
    user_id:u1.id,
    category:"food"
)
fp10.photo.attach(io: File.open("app/assets/images/products/food10.jpg"),filename:"food10.jpg")

##health
hp1=Product.create(
    title: "Biodegradable Dental Floss With a Refillable Glass Holder | Naturally Waxed With Candelilla Wax | 100% Compostable",
    description:"THE ECO-FRIENDLY CHOICE - Our floss is perfect for all of you who are trying to take or are already taking a more eco-friendly approach on the world. Good on you! With this offer you get one glass bottle floss holder with one spool of 100% silk floss that is 33 yards long. The glass container is refillable and you can use for as long as you please. The packaging can go straight to your compost pile as it's made of Kraft paper, compostable transparent stickers and printed with soybean ink.",
    price:9.99,
    user_id: u9.id,
    category:"health"
)
hp1.photo.attach(io: File.open("app/assets/images/products/health1.jpg"),filename:"health1.jpg")

hp2=Product.create(
    title: "Wowe Natural Organic Bamboo Toothbrush Eco-Friendly Wood",
    description:"KEEP ALL THOSE PLASTIC toothbrushes out of the oceans and landfills. These bamboo toothbrushes are a great way to help keep the earth green.
    A PACK OF 4 TOOTHBRUSHES will last one person a full year. Buy a pack of 4 toothbrushes for each person in your household.
    BPA FREE BRISTLES are soft and made from high quality nylon
    ",
    price:10.97,
    user_id: u9.id,
    category:"health"
)
hp2.photo.attach(io: File.open("app/assets/images/products/health2.jpg"),filename:"health2.jpg")

hp3=Product.create(
    title:"Toothpaste Tablets, CHEWTAB with Xylitol, Zero Waste Packaging",
    description:"
    The Gentle Approach to Better Oral Health
    
    Our unique formula has no added abrasives.
    
    Toothpaste tablets that are rich in Xylitol. Perfect for every day use and travel.
    
    No unnecessary ingredients.
    
    Most toothpastes contain Silica (Silicon Dioxide). Silica is abrasive. Whitening teeth with abrasion provides a short-term benefit but may create enamel loss over the long term.
    
    Our products address the source of Plaque by starving Plaque Bacteria with Xylitol. Your Beneficial Bacteria can use Xylitol for nutrition so they thrive. Starve the Bad. Feed the Good.
    
    Use of our products, while avoiding antimicrobials, creates an Alkaline mouth. An Alkaline Mouth is a Healthy Mouth.
    
    CHEW BRUSH SMILE
    
    ",
    price:9.95,
    user_id: u9.id,
    category:"health"
)
hp3.photo.attach(io: File.open("app/assets/images/products/health3.jpg"),filename:"health3.jpg")

hp4=Product.create(
    title:"Puracy Natural Daily Shampoo, 3rd Generation Sulfate-Free Formula, All Hair Types, 16 Ounce",
    description:"Puracy Natural Shampoo is a balanced blend of luxurious cleansers, emollients, and essential oils designed to thoroughly clean your hair without drying it out. The sulfate-free formula produces mounds of lather to gently clean your hair and scalp. You will notice your fingers glide through your hair while washing and rinsing. Packed in this world class blend of ingredients is squalene, which provides weightless moisture, eliminates static, and creates frictionless hair. Designed for men and women with normal, oily, dry, color-treated, permed, or other hair types. The balanced citrus and mint aromas brighten and energize your bathing experience. The food-grade, plant and mineral-based ingredients were carefully chosen and developed into a premium solution by Puracy, a trusted source for natural, plant-based, child & pet safe, hypoallergenic, and effective household essentials. The proprietary blend of renewable ingredients is family friendly and free from harsh chemicals and fumes. This product is 99.95% Natural, per Puracy’s ‘What Natural Means to Us’ definition available on our website.",
    price:15.19,
    user_id: u9.id,
    category:"health"
)
hp4.photo.attach(io: File.open("app/assets/images/products/health4.jpg"),filename:"health4.jpg")

hp5=Product.create(
    title:"Puracy Natural Conditioner, Hypoallergenic, Non-Toxic, All Hair Types, 16 Ounce",
    description:"Puracy Natural Conditioner is a balanced blend of plant-derived moisturizers, emollients and essential oils which add essential hydration to your hair. You will instantly notice the smooth, silky feel as you run our conditioner through your hair with ease. After you experience the clean-rinsing formula, your towel dried hair will be noticeably easier to comb, brush, and style. Packed in this world class blend of ingredients is olive oil-based squalene, which provides weightless moisture, eliminates static, adds shine, and creates frictionless hair. Designed for men and women with normal, oily, dry, color-treated, permed, or other hair types. The balanced citrus and mint aromas brighten and energize your bathing experience. The food-grade, plant and mineral-based ingredients were carefully chosen and developed into a premium solution by Puracy, a trusted source for natural, plant-based, child & pet safe, hypoallergenic, and effective personal care essentials. The proprietary blend of renewable ingredients is family friendly and free from harsh chemicals and fumes. This product is 99.95% Natural, per Puracy’s ‘What Natural Means to Us’ definition available on our website.",
    price:15.19,
    user_id: u9.id,
    category:"health"
)
hp5.photo.attach(io: File.open("app/assets/images/products/health5.jpg"),filename:"health5.jpg")

hp6=Product.create(
    title:"All Natural Bar Soap that Actually Cleans! - Lemongrass Scent",
    description:"NOURISHING, MOISTURIZING AND SOOTHING: Organic, natural ingredients help restore moisture that other soaps have stripped away from your hands, leaving them feeling softer and cleaner than ever before. Use the soap bar daily and lock in moisture while at the same time getting rid of dirt, grime, and smells. Enjoy a long lasting, clean feeling without the dryness and itching of other soaps.
    FRESH SCENT: Subtle lemongrass fragrance leaves your hands feeling silky smooth and smelling fresh for a long time. No harmful chemicals or harsh, dangerous, artificial perfumes are added to our bar of soap. We use only natural, organic ingredients to create a gentle fragrance, including an essential oil blend and rosemary extract. A natural, gentle fragrance means that your hands and skin never suffer! Green cleaning done right!",
    price:5.95,
    user_id: u10.id,
    category:"health"
)
hp6.photo.attach(io: File.open("app/assets/images/products/health6.jpg"),filename:"health6.jpg")

hp7=Product.create(
    title:"Dr. Bronner's Pure-Castile Liquid Soap",
    description:"LAVENDER. Scented with pure lavender and lavandin oils to calm the mind and soothe the body! Dr. Bronner’s Pure-Castile Lavender Liquid Soap is concentrated, biodegradable, versatile and effective
    SMOOTH AND MOISTURIZING. Dr. Bronner’s Liquid Pure-Castile Soap offers organic and vegan ingredients for a rich, emollient lather and a moisturizing after feel. It uses organic hemp, olive, and coconut oil to nourish your clean, healthy skin
    NATURAL. Smooth and luxurious soap with no synthetic detergents or preservatives, as none of the ingredients or organisms from which they are derived are genetically modified. Use on your hands, face, or hair, or dilute your soap for a multi-use cleaning product
    CERTIFIED ORGANIC AND VEGAN. Certified organic by the USDA National Organic Program and certified Vegan by Vegan Action. Dr. Bronner’s is also a proud supporter of animal advocacy organizations, and is Leaping Bunny certified cruelty-free",
    price:15.99,
    user_id:u10.id ,
    category:"health"
)
hp7.photo.attach(io: File.open("app/assets/images/products/health7.jpg"),filename:"health7.jpg")

hp8=Product.create(
    title:"EcoTools Cruelty Free and Eco Friendly Smooth Detangler Paddle Brush",
    description:"Smooth through tangles in a breeze! Our fan favorite Paddle Brush has a unique bristle design and cushioned paddle that glides through hair for gentle detangling- dry or wet. When blowdrying, dries hair 20% faster due to it's aerodynamic EcoVent design.
    Smoothing detangler with unique bristle system quickly smoothes & gently detangles, leaving hair beautifully healthy. EcoVent design dries hair 20% faster*. Less time drying allows for less heat damage and quicker prep time. *Tested versus a leading brush.
    Giving a new purpose to old things, our products are made from recycled aluminum and plastic; packaging made of 100% Tree-Free paper, with 20% cotton and 80% bamboo fibers; the handles on our products are made of bamboo, one of the fastest growing plants",
    price:8.28,
    user_id:u10.id ,
    category:"health"
)
hp8.photo.attach(io: File.open("app/assets/images/products/health8.jpg"),filename:"health8.jpg")

hp9=Product.create(
    title:"Humble All Natural Deodorant, Aluminum and Paraben Free",
    description:"Humble, Simple and True. Humble contains four to five organic and all-natural ingredients that you can pronounce (and might, in fact, have in your own kitchen). Humble is both effective and safe, containing no aluminum or parabens while still keeping you dry and free of offensive odors. We take the care to manufacture our deodorant in small batches right here in America. With the fewest ingredients of any deodorant on the market, Humble is the simple solution to a stinky problem. -2.5 oz deodorant stick in Lavendar scent -Five all natural, organic ingredients -No aluminum, alcohol, dyes, parabens or artificial bactericides -Made in the USA",
    price:11.39,
    user_id: u10.id,
    category:"health"
)
hp9.photo.attach(io: File.open("app/assets/images/products/health9.jpg"),filename:"health9.jpg")

hp10=Product.create(
    title:"Double Edge Safety Razor with Long Natural Bamboo Handle | Safety Razor Wood | Eco Friendly | For Men or For Women ",
    description:"*PERFECT SHAVE*: Achieve a closer, smoother, more professional shave without the hassle of irritation or ingrown hairs with the Bambaw double edge safety razor.
    *DURABLE*: Bambaw double edged safety razors are pretty much guaranteed to last a lifetime. Made from high quality materials, a 100% bamboo handle and stainless-steel parts, your Bambaw razor is incredibly strong and durable.
    *ECO-FRIENDLY*: Conventional plastic razors are practically impossible to recycle and end up in our landfills and oceans. With Bambaw safety razors all you need to do is replace and recycle the blade, which helps create a cleaner planet.
    *COST EFFECTIVE*: Once you have the saftey razor, all you need to buy are the blades. You simply can’t get any better value for money in the long run.",
    price:18.99,
    user_id: u10.id,
    category:"health"
)
hp10.photo.attach(io: File.open("app/assets/images/products/health10.jpg"),filename:"health10.jpg")


##kitchen review
kr1=Review.create(
    body:"The color of this water bottle is perfect! i'm aboslutely obsessed!",
    user_id: u4.id,
    product_id: kp1.id,
    rating: 5,
)
kr2=Review.create(
    body:"I would never use anything else!",
    user_id: u10.id,
    product_id: kp1.id,
    rating:5
)
kr3=Review.create(
    body:"soooooo durable has lasted me almost 6 years",
    user_id: u4.id,
    product_id: kp2.id,
    rating:5
)
kr4=Review.create(
    body:"would've given it 5 stars but it broke and shattered everywhere",
    user_id: u5.id,
    product_id: kp2.id,
    rating:3
)
kr5=Review.create(
    body:"not worth the money!!!!!!",
    user_id: u6.id,
    product_id: kp3.id,
    rating:3
)
kr6=Review.create(
    body:"WOW keeps my coffee hot for HOURS!!!! Buying 1 for everyone I know!",
    user_id: u7.id,
    product_id: kp3.id,
    rating:5
)
kr7=Review.create(
    body:"I keep this straw in my purse at all time! easy to wash!",
    user_id: u9.id,
    product_id: kp4.id,
    rating:5
)
kr8=Review.create(
    body:"Save the turtles!!!!!!",
    user_id: u3.id,
    product_id: kp4.id,
    rating:5
)
kr9=Review.create(
    body:"Got it as a gift! SO CUTE!!",
    user_id: u4.id,
    product_id: kp5.id,
    rating:5
)
kr9=Review.create(
    body:"ADORABLE!!!! LOVE THE COLOR",
    user_id: u5.id,
    product_id: kp5.id,
    rating:5
)

##cleaning review

cr1=Review.create(
    body:"It's hard to get excited over cleaning spray but this brought a level of excitement in my home.",
    user_id: u2.id,
    product_id: cp1.id,
    rating: 5,
)
cr2=Review.create(
    body:"This is my favorite thing. I saw on shark tank and had to get a whole bunch of their products",
    user_id: u3.id,
    product_id: cp1.id,
    rating:5
)
cr3=Review.create(
    body:"This really is a very good cleaner for sinks and bathtubs. Wet the area you want to clean, powder on the Bon Ami, swirl it all around with a brush. ",
    user_id: u6.id,
    product_id: cp2.id,
    rating:5
)
cr4=Review.create(
    body:"I bought this as a suggestion from a friend for cleaning my kitchen sink. My sink is white and large and shows every little stain and scuff. The Bon Ami cleaned it completely! ",
    user_id: u7.id,
    product_id: cp2.id,
    rating:3
)
cr5=Review.create(
    body:"not worth the money!!!!!!",
    user_id: u8.id,
    product_id: cp3.id,
    rating:3
)
cr6=Review.create(
    body:"i love this product and it does an excellent job of cleaning with no harsh chemicals",
    user_id: u9.id,
    product_id: cp3.id,
    rating:5
)
cr7=Review.create(
    body:"I keep this straw in my purse at all time! easy to wash!",
    user_id: u10.id,
    product_id: cp4.id,
    rating:5
)
cr8=Review.create(
    body:"SO MANY USES!",
    user_id: u2.id,
    product_id: cp4.id,
    rating:5
)
cr9=Review.create(
    body:"Got it as a gift! SO CUTE!!",
    user_id: u3.id,
    product_id: cp5.id,
    rating:5
)
cr9=Review.create(
    body:"DISHES ARE STREAK FREE!!! AHHH I LOVE IT",
    user_id: u6.id,
    product_id: cp5.id,
    rating:5
)


##cleaning review

cr1=Review.create(
    body:"It's hard to get excited over cleaning spray but this brought a level of excitement in my home.",
    user_id: u2.id,
    product_id: cp1.id,
    rating: 5,
)
cr2=Review.create(
    body:"This is my favorite thing. I saw on shark tank and had to get a whole bunch of their products",
    user_id: u3.id,
    product_id: cp1.id,
    rating:5
)
cr3=Review.create(
    body:"This really is a very good cleaner for sinks and bathtubs. Wet the area you want to clean, powder on the Bon Ami, swirl it all around with a brush. ",
    user_id: u6.id,
    product_id: cp2.id,
    rating:5
)
cr4=Review.create(
    body:"I bought this as a suggestion from a friend for cleaning my kitchen sink. My sink is white and large and shows every little stain and scuff. The Bon Ami cleaned it completely! ",
    user_id: u7.id,
    product_id: cp2.id,
    rating:3
)
cr5=Review.create(
    body:"not worth the money!!!!!!",
    user_id: u8.id,
    product_id: cp3.id,
    rating:3
)
cr6=Review.create(
    body:"i love this product and it does an excellent job of cleaning with no harsh chemicals",
    user_id: u9.id,
    product_id: cp3.id,
    rating:5
)
cr7=Review.create(
    body:"I keep this straw in my purse at all time! easy to wash!",
    user_id: u10.id,
    product_id: cp4.id,
    rating:5
)
cr8=Review.create(
    body:"SO MANY USES!",
    user_id: u2.id,
    product_id: cp4.id,
    rating:5
)
cr9=Review.create(
    body:"Got it as a gift! SO CUTE!!",
    user_id: u3.id,
    product_id: cp5.id,
    rating:5
)
cr9=Review.create(
    body:"DISHES ARE STREAK FREE!!! AHHH I LOVE IT",
    user_id: u6.id,
    product_id: cp5.id,
    rating:5
)