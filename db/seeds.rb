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
u2=User.create!(email:'Mary123@gmail.com', first_name:'Mary', password: 'DemoUser')
u3=User.create!(email:'Chris123@gmail.com', first_name:'Chris', password: 'DemoUser')
u4=User.create!(email:'George123@gmail.com', first_name:'George', password: 'DemoUser')
u5=User.create!(email:'Sarah123@gmail.com', first_name:'Sarah', password: 'DemoUser')

p1=Product.create(
    title:"Healthy Human Stainless Steel Vacuum Insulated Water Bottle - Lilac",
    description:   "WILL THIS BOTTLE CHANGE YOUR LIFE? Maybe, if you're the type of person that obsesses about water bottles (like we are). Water is life. We couldn't find the perfect water bottle so we made it! A Healthy Human water bottle will keep your water so cold, you'll feel like you're guzzling glacial meltwater. A refreshing escape if you're stuck in bumper to bumper traffic or after a heart-pumping workout.",
    price: 24.99,
    user_id: u1.id
)
p1.photo.attach(io: File.open(Rails.root.join("app/assets/images/products/bottle1.jpg")),filename:"bottle1.jpg")
p2=Product.create(
    title:"Premium Glass Reusable Water Bottle",
    description: "GREAT LOOKING, DURABLE, LEAD-FREE BEVERAGE BOTTLES WITH EXTRA-WIDE MOUTH: Your freshly squeezed juices look beautiful on your table & in your fridge in these classy air-tight, eco-friendly bottles. They are also ideal for keeping water, drinks, brew, coffee, tea, sauces, salad dressing, kefir, fermented drinks ready to go anytime. BE HEALTHY, WHEREVER YOU GO: It’s easier than ever to take your healthy homemade juices and smoothies with you when you carry them in your Brieftons glass bottles.",
    price:18.88,
    user_id: u3.id
)
p2.photo.attach(io: File.open("app/assets/images/products/bottle2.jpg"),filename:"bottle2.jpg")
p3=Product.create(
    title:"Yeti Rambler Tumblr",
    description:"Stays hot for 5 hours\n\nThe YETI Rambler is a 20 oz. coffee tumbler made of stainless steel. It comes with a dishwasher safe and shatter-resistant lid. The sturdy reusable coffee cup is available in 5 colours, and because of the DuraCoat the coat of color won’t fade or crack. So use this tumbler very day on the go.",
    price: 39.99,
    user_id: u2.id
)
p3.photo.attach(io: File.open("app/assets/images/products/mug3.jpg"),filename:"mug3.jpg")
p4=Product.create(
    title:"Collapsible Folding Reusable Straw",
    description:"❤️ Eco-friendly Reusable: Unlike disposable straw, stainless steel drinking straw is a reusable collapsible straw that doesn't contain BPA and consists of a food grade TPE hose, ABS nozzle, stainless steel body. These components make straw sturdy and durable.\n❤️ Portable and Foldable: Magnetic Lid Keychain Case keep the folding metal straw be folded into 4 sections tighter, never fall apart and small enough to toss in your purse or bag. Together with a free cleaning brush, easy to carry and use.",
    price: 9.99,
    user_id: u4.id
)
p4.photo.attach(io: File.open("app/assets/images/products/straw1.jpg"),filename:"straw1.jpg")
p5=Product.create(
    title: "Corkcicle Tumbler-Classic Collection",
    description:   "The Corkcicle Tumbler-Classic Collection is a triple walled and vacuum sealed travel mug crafted from 18/8 stainless steel. It is available in various beautiful colours. This pretty reusable coffee cup is easy to carry and fits in most car cup holders.",
    price: 21.99,
    user_id: u5.id
)
p5.photo.attach(io: File.open("app/assets/images/products/mug2.jpg"),filename:"mug2.jpg")
p6=Product.create(
    title:"Recycled Notebooks - 3.5 x 5.5",
    description:"These memo-sized recycled notebooks are perfect for jotting down notes on the go.

    We've distilled the best parts of our classic notebooks into 3.5 x 5.5 ReWrite. The distinctive rounded corners, perfect binding and perforated pages make this miniature version of the ReWrite recycled notebooks a great choice for capturing spur-of-the-moment ideas, taking notes at meetings or your honey-do list.",
    price:3.49,
    user_id:u1.id
)
p6.photo.attach(io: File.open("app/assets/images/products/notebook1.jpg"),filename:"notebook1.jpg")
p7=Product.create(
    title:"Pilot Bottle 2 Pen (B2P) - Retractable Ball Point Pens Made from Recycled Bottles",
    description:"GO GREEN WITH B2P: Pilot's B2P Retractable Ball Point Pens are made from recycled bottles! They have a comfortable grip & are compatible with Dr. Grip ink refills, so you can sketch, journal, take notes or write a report - all while protecting the planet.",
    price:6.68,
    user_id:u2.id
)
p7.photo.attach(io: open("app/assets/images/products/pen1.jpg"),filename:"pen1.jpg")
p8=Product.create(
    title: "4.5 inch Square Bowls - 8 Oz (25count)",
    description:"Hand crafted from fallen palm leaves, our dinnerware embodies the beauty of mother nature gifts. Each leaf is thoroughly cleaned, heat pressed, hand crafted, and fully sterilized; the result is sturdy, casually elegant dinnerware ready for everyday dining and relaxed gatherings. This 4.5 inch square bowl is perfect for serving single bites, soups, stews, ice creams, and desserts.",
    price:15.00,
    user_id: u3.id
)
p8.photo.attach(io: File.open("app/assets/images/products/bowl1.jpg"),filename:"bowl1.jpg")
