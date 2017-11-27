# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.delete_all
products = [
  ["Iron Maxx", "Protein 90"],
  ["NuTrend", "Multi-mineral Aquamin"],
  ["USN", "Casein Protein"],
  ["Dymatize Elite", "Whey Protein Isolate"]
]

images = [
  "demo/shop/product-1.jpg",
  "demo/shop/product-2.jpg",
  "demo/shop/product-3.jpg",
  "demo/shop/product-4.jpg"
]

products.each_with_index do |twople, idx|
  Product.create({
    brand: twople.first,
    name: twople.last,
    description: Faker::Hipster.sentence,
    image_url: images[idx],
    price: 24.99,
    category: "Nutrition"
  })
end

OrderStatus.delete_all
OrderStatus.create! id: 1, name: "In Progress"
OrderStatus.create! id: 2, name: "Placed"
OrderStatus.create! id: 3, name: "Shipped"
OrderStatus.create! id: 4, name: "Cancelled"
