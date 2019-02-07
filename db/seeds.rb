# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.delete_all
User.delete_all 

u1=User.create!(email:'DemoUser', first_name:'DemoUser', password: 'DemoUser')
u2=User.create!(email:'greenpath', first_name:'GreenPath', password: 'DemoUser')
u3=User.create!(email:'ecolove', first_name:'EcoLove', password: 'DemoUser')
u4=User.create!(email:'i<3earth', first_name:'i<3earth', password: 'DemoUser')
u5=User.create!(email:'leaftree', first_name:'LeafTree', password: 'DemoUser')
u6=User.create!(email:'nowastewonders', first_name:'NoWasteWonders', password: 'DemoUser')
u7=User.create!(email:'theplanetpeople', first_name:'ThePlanetPeople', password: 'DemoUser')
u8=User.create!(email:'peace4theworld', first_name:'Peace4TheWorld', password: 'DemoUser')
u1.photo.attach(io: File.open("app/assets/images/user_pics/user1.jpg"),filename:"user1.jpg")
u2.photo.attach(io: File.open("app/assets/images/user_pics/user2.jpg"),filename:"user2.jpg")
u3.photo.attach(io: File.open("app/assets/images/user_pics/user3.jpg"),filename:"user3.jpg")
u4.photo.attach(io: File.open("app/assets/images/user_pics/user4.jpg"),filename:"user4.jpg")
u5.photo.attach(io: File.open("app/assets/images/user_pics/user5.jpg"),filename:"user5.jpg")
u6.photo.attach(io: File.open("app/assets/images/user_pics/user6.jpg"),filename:"user6.jpg")
u7.photo.attach(io: File.open("app/assets/images/user_pics/user7.jpg"),filename:"user7.jpg")
u8.photo.attach(io: File.open("app/assets/images/user_pics/user8.jpg"),filename:"user8.jpg")

p1=Product.create(
    title:"Healthy Human Stainless Steel Vacuum Insulated Water Bottle - Lilac",
    description:   "WILL THIS BOTTLE CHANGE YOUR LIFE? Maybe, if you're the type of person that obsesses about water bottles (like we are). Water is life. We couldn't find the perfect water bottle so we made it! A Healthy Human water bottle will keep your water so cold, you'll feel like you're guzzling glacial meltwater. A refreshing escape if you're stuck in bumper to bumper traffic or after a heart-pumping workout.",
    price: 24.99,
    user_id: u2.id,
    category:"kitchen"
)
p1.photo.attach(io: File.open(Rails.root.join("app/assets/images/products/bottle1.jpg")),filename:"bottle1.jpg")
p2=Product.create(
    title:"Premium Glass Reusable Water Bottle",
    description: "GREAT LOOKING, DURABLE, LEAD-FREE BEVERAGE BOTTLES WITH EXTRA-WIDE MOUTH: Your freshly squeezed juices look beautiful on your table & in your fridge in these classy air-tight, eco-friendly bottles. They are also ideal for keeping water, drinks, brew, coffee, tea, sauces, salad dressing, kefir, fermented drinks ready to go anytime. BE HEALTHY, WHEREVER YOU GO: It’s easier than ever to take your healthy homemade juices and smoothies with you when you carry them in your Brieftons glass bottles.",
    price:18.88,
    user_id: u3.id,
    category:"kitchen"
)
p2.photo.attach(io: File.open("app/assets/images/products/bottle2.jpg"),filename:"bottle2.jpg")
p3=Product.create(
    title:"Yeti Rambler Tumblr",
    description:"Stays hot for 5 hours\n\nThe YETI Rambler is a 20 oz. coffee tumbler made of stainless steel. It comes with a dishwasher safe and shatter-resistant lid. The sturdy reusable coffee cup is available in 5 colours, and because of the DuraCoat the coat of color won’t fade or crack. So use this tumbler very day on the go.",
    price: 39.99,
    user_id: u2.id,
    category:"kitchen"
)
p3.photo.attach(io: File.open("app/assets/images/products/mug3.jpg"),filename:"mug3.jpg")
p4=Product.create(
    title:"Collapsible Folding Reusable Straw",
    description:"❤️ Eco-friendly Reusable: Unlike disposable straw, stainless steel drinking straw is a reusable collapsible straw that doesn't contain BPA and consists of a food grade TPE hose, ABS nozzle, stainless steel body. These components make straw sturdy and durable.\n❤️ Portable and Foldable: Magnetic Lid Keychain Case keep the folding metal straw be folded into 4 sections tighter, never fall apart and small enough to toss in your purse or bag. Together with a free cleaning brush, easy to carry and use.",
    price: 9.99,
    user_id: u4.id,
    category:"kitchen"
)
p4.photo.attach(io: File.open("app/assets/images/products/straw1.jpg"),filename:"straw1.jpg")
p5=Product.create(
    title: "Corkcicle Tumbler-Classic Collection",
    description:   "The Corkcicle Tumbler-Classic Collection is a triple walled and vacuum sealed travel mug crafted from 18/8 stainless steel. It is available in various beautiful colours. This pretty reusable coffee cup is easy to carry and fits in most car cup holders.",
    price: 21.99,
    user_id: u5.id,
    category:"kitchen"
)
p5.photo.attach(io: File.open("app/assets/images/products/mug2.jpg"),filename:"mug2.jpg")
p6=Product.create(
    title:"Recycled Notebooks - 3.5 x 5.5",
    description:"These memo-sized recycled notebooks are perfect for jotting down notes on the go.

    We've distilled the best parts of our classic notebooks into 3.5 x 5.5 ReWrite. The distinctive rounded corners, perfect binding and perforated pages make this miniature version of the ReWrite recycled notebooks a great choice for capturing spur-of-the-moment ideas, taking notes at meetings or your honey-do list.",
    price:3.49,
    user_id:u4.id,
    category:"office"
)
p6.photo.attach(io: File.open("app/assets/images/products/notebook1.jpg"),filename:"notebook1.jpg")
p7=Product.create(
    title:"Pilot Bottle 2 Pen (B2P) - Retractable Ball Point Pens Made from Recycled Bottles",
    description:"GO GREEN WITH B2P: Pilot's B2P Retractable Ball Point Pens are made from recycled bottles! They have a comfortable grip & are compatible with Dr. Grip ink refills, so you can sketch, journal, take notes or write a report - all while protecting the planet.",
    price:6.68,
    user_id:u2.id,
    category:"office"
)
p7.photo.attach(io: open("app/assets/images/products/pen1.jpg"),filename:"pen1.jpg")
p8=Product.create(
    title: "4.5 inch Square Bowls - 8 Oz (25count)",
    description:"Hand crafted from fallen palm leaves, our dinnerware embodies the beauty of mother nature gifts. Each leaf is thoroughly cleaned, heat pressed, hand crafted, and fully sterilized; the result is sturdy, casually elegant dinnerware ready for everyday dining and relaxed gatherings. This 4.5 inch square bowl is perfect for serving single bites, soups, stews, ice creams, and desserts.",
    price:15.00,
    user_id: u3.id,
    category:"kitchen"
)
p8.photo.attach(io: File.open("app/assets/images/products/bowl1.jpg"),filename:"bowl1.jpg")
p9=Product.create(
    title: "Biodegradable Dental Floss With a Refillable Glass Holder | Naturally Waxed With Candelilla Wax | 100% Compostable",
    description:"THE ECO-FRIENDLY CHOICE - Our floss is perfect for all of you who are trying to take or are already taking a more eco-friendly approach on the world. Good on you! With this offer you get one glass bottle floss holder with one spool of 100% silk floss that is 33 yards long. The glass container is refillable and you can use for as long as you please. The packaging can go straight to your compost pile as it's made of Kraft paper, compostable transparent stickers and printed with soybean ink.",
    price:9.99,
    user_id: u6.id,
    category:"health"
)
p9.photo.attach(io: File.open("app/assets/images/products/floss.jpg"),filename:"floss.jpg")
p10=Product.create(
    title: "Wowe Natural Organic Bamboo Toothbrush Eco-Friendly Wood",
    description:"KEEP ALL THOSE PLASTIC toothbrushes out of the oceans and landfills. These bamboo toothbrushes are a great way to help keep the earth green.
    A PACK OF 4 TOOTHBRUSHES will last one person a full year. Buy a pack of 4 toothbrushes for each person in your household.
    BPA FREE BRISTLES are soft and made from high quality nylon
    ",
    price:10.97,
    user_id: u7.id,
    category:"health"
)
p10.photo.attach(io: File.open("app/assets/images/products/toothbrush.jpg"),filename:"toothbrush.jpg")
p11=Product.create(
    title: "Vegan Reusable Food Wrap NO Beeswax - 100% Plant Based.",
    description: "USABLE PLASTIC WRAP ALTERNATIVE - Reducing and reusing is the way to move to a zero waste home. Our Reusable wrap food vegan set are a Cling wrap alternative hence a zero waste wrap. Natural alternative to single use plastic and doubles up as a sustainable food wrap. You get flamingo design, cactus design and animal & plant design. New designs coming soon.",
    price:15.85,
    user_id: u8.id,
    category:"kitchen"
)
p11.photo.attach(io: File.open("app/assets/images/products/foodwrap.jpg"),filename:"foodwrap.jpg")
r1=Review.create(
    body:"The color of this water bottle is perfect! i'm aboslutely obsessed!",
    user_id: u2.id,
    product_id: p1.id,
    rating: 5,
)
r2=Review.create(
    body:"I would never use anything else!",
    user_id: u3.id,
    product_id: p1.id,
    rating:5
)
r3=Review.create(
    body:"soooooo durable has lasted me almost 6 years",
    user_id: u4.id,
    product_id: p2.id,
    rating:5
)
r4=Review.create(
    body:"would've given it 5 stars but it broke and shattered everywhere",
    user_id: u5.id,
    product_id: p2.id,
    rating:3
)
r5=Review.create(
    body:"not worth the money!!!!!!",
    user_id: u6.id,
    product_id: p3.id,
    rating:3
)
r6=Review.create(
    body:"WOW keeps my coffee hot for HOURS!!!! Buying 1 for everyone I know!",
    user_id: u7.id,
    product_id: p3.id,
    rating:5
)
r7=Review.create(
    body:"I keep this straw in my purse at all time! easy to wash!",
    user_id: u2.id,
    product_id: p4.id,
    rating:5
)
r8=Review.create(
    body:"Save the turtles!!!!!!",
    user_id: u3.id,
    product_id: p4.id,
    rating:5
)
r9=Review.create(
    body:"Got it as a gift! SO CUTE!!",
    user_id: u4.id,
    product_id: p5.id,
    rating:5
)
r9=Review.create(
    body:"ADORABLE!!!! LOVE THE COLOR",
    user_id: u5.id,
    product_id: p5.id,
    rating:5
)