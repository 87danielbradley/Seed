# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

Category.destroy_all
Location.destroy_all
User.destroy_all
Project.destroy_all
Faq.destroy_all
Reward.destroy_all
Pledge.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('rewards')
ActiveRecord::Base.connection.reset_pk_sequence!('projects')
ActiveRecord::Base.connection.reset_pk_sequence!('pledges')
ActiveRecord::Base.connection.reset_pk_sequence!('locations')
ActiveRecord::Base.connection.reset_pk_sequence!('faqs')
ActiveRecord::Base.connection.reset_pk_sequence!('categories')

 category1 = Category.create(name: 'Art')
 category2 = Category.create(name: 'Comics')
 category3 = Category.create(name: 'Crafts')
 category4 = Category.create(name: 'Dance')
 category5 = Category.create(name: 'Design')
 category6 = Category.create(name: 'Fashion')
 category7 = Category.create(name: 'Film & Video')
 category8 = Category.create(name: 'Food')
 category9 = Category.create(name: 'Games')
category10 = Category.create(name: 'Journalism')
category11 = Category.create(name: 'Music')
category12 = Category.create(name: 'Photography')
category13 = Category.create(name: 'Publishing')
category14 = Category.create(name: 'Technology')
category15 = Category.create(name: 'Theater')

# location1 = Location.create(name: 'New York City, NY')
# location2 = Location.create(name: 'Los Angeles, CA')
# location3 = Location.create(name: 'Chicago, IL')
# location4 = Location.create(name: 'San Francisco, CA')
# location5 = Location.create(name: 'Boston, MA')
# location6 = Location.create(name: 'San Diego, CA')
# location7 = Location.create(name: 'Washington, D.C.')
# location8 = Location.create(name: 'Denver, CO')
# location9 = Location.create(name: 'Phoenix, AZ')
# location10 = Location.create(name: 'San Jose, CA')
Location.create(name:"Australia")
Location.create(name:"Austria")
Location.create(name:"Belgium")
Location.create(name:"Canada")
Location.create(name:"Denmark")
Location.create(name:"France")
Location.create(name:"Germany")
Location.create(name:"Greece")
Location.create(name:"Hong Kong")
Location.create(name:"Ireland")
Location.create(name:"Italy")
Location.create(name:"Japan")
Location.create(name:"Luxembourg")
Location.create(name:"Mexico")
Location.create(name:"New Zealand")
Location.create(name:"Norway")
Location.create(name:"Poland")
Location.create(name:"Singapore")
Location.create(name:"Slovenia")
Location.create(name:"Spain")
Location.create(name:"Sweden")
Location.create(name:"Switzerland")
Location.create(name:"the Netherlands")
Location.create(name:"the United Kingdom")
Location.create(name:"the United States")


user1 = User.create!(name: "Demo User", email: 'starwars', password: "starwars", location_id: rand(1..25), biography: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4))
seed_users = 40
seed_projects = 40
seed_faqs = 50
seed_rewards = 100
seed_pledges = 200

for i in 1..seed_users do  
 User.create!(name: Faker::Name.name, email: Faker::Internet.email, password: "starwars", location_id: rand(1..25), biography: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4))
end

Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1578966246722-5be7aead08a7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fF84ekZIdWhSaHlvfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1634462870116-d05aa580333b?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fF84ekZIdWhSaHlvfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1636146321825-c8dd069be6ee?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1635098995995-573bbea877a5?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1574429977495-e6d2c1aa6b49?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1635917923751-ef936226e579?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1625230255573-fb27d452dc15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1854&q=80")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1635247230167-5230a9be00f5?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1634141364038-174753c09ea3?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1634435139901-37dfbe56df67?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY1fEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1634094409763-5ba2983fef1b?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDg2fEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1636471815144-616b00e21f24?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1636361479581-5ab1a7a72beb?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1636307780559-c876ff1ef9b0?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1635865653470-8976db975eaf?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1635987739727-11e2578bd0cc?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUzfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1614554138638-5aa9c771baa9?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1636232608972-426a145d3752?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1636333329210-0006f2cb24cb?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1636032442998-e69650e970bf?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1634470943099-29cf2b9d7ca1?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1635928097900-cf6299f4e8cb?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1636269603887-702d9a201bb4?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1628706763677-b7971604a665?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8UzRNS0xBc0JCNzR8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1612902457341-ed7bf0608be3?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1635944201335-f9165880a0b6?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1635672980180-d9081a969c13?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1635696444844-001888ec3119?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1636632142165-d2ef2fa78afd?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8aG1lbnZRaFVteE18fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1636550880539-dbf8aca1bf71?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fGhtZW52UWhVbXhNfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1636400571959-ec8027edeccc?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fGhtZW52UWhVbXhNfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1635982990748-6ba76f8ab4b6?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8eGpQUjRobGtCR0F8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1635847420440-de09e6cc7df0?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1635397226717-499ad65b0fd9?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1609937093857-2d3ac60f1240?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8X2hiLWRsNFEtNFV8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1636367637723-7f421a7ea5be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1288&q=80")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1583489726450-e7af739c7cc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1603562828886-ffaf49b40b13?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1632642720014-2f3545065975?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fFJfRnluLUd3dGx3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1613013261832-a5d86dba9421?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fFJfRnluLUd3dGx3fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1576457412608-a16abf6d110e?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8eEh4WVRNSExnT2N8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1635967198869-4acb77415c27?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1635087506255-82b7794673ec?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fHhIeFlUTUhMZ09jfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1602927466219-1f514431d3ff?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8RnpvM3p1T0hONnd8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1634237338658-6cf262778c1d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8RnpvM3p1T0hONnd8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1635931907849-f2109d3aecf3?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1634843845395-7f13d40e84de?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1563292769-4e05b684851a?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1631816287647-269b58ba1610?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fGRpanBidzk5a1FRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")
Project.create!(author_id: rand(1..seed_users), title: Faker::Lorem.sentence, description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), category_id: rand(1..15), location_id: rand(1..25), goal: rand(1000..100000), risks: Faker::ChuckNorris.fact, start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), url: "https://images.unsplash.com/photo-1631436127557-58c4601c0325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1394&q=80")




User.create!(
    name: "Daniel Bradley", email: "87danielbradley@gmail.com", password: "starwars", location_id: 25, biography: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4))



for i in 1..seed_faqs do  
    Faq.create!( project_id: rand(1..seed_projects), question: Faker::Lorem.sentence, answer: Faker::Lorem.sentence)
end
for i in 1..seed_rewards do  
    
    Reward.create!( pledge_amount: rand(5..1000), title: Faker::Lorem.sentence,  description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false), delivery_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), limit: rand(1..100), project_id: rand(1..seed_projects), shipping_type: Faker::Lorem.sentence)
end
for i in 1..seed_pledges do  
    Pledge.create!(pledge_id: rand(1..seed_users),pledge_amount: rand(5..1000),reward_id: rand(1..seed_rewards))
end
for i in 1..seed_pledges do  
    Pledge.create!(pledge_id: rand(1..seed_users),pledge_amount: rand(5..1000),reward_id: rand(1..seed_rewards))
end



Project.create!(
    author_id: 42, 
    title: "Eco Route", 
    description: "Built with the MERN stack, EcoRoute addresses the age-old question of, “Where should we meet?” while also providing a tool to help people plan out a busy day of errands.", 
    body: "Background and Overview

Functionality and MVP
Optimizes a list of address inputs by distance/time. Users will be able to create events where invitees can accept or decline the invitation. By providing a general meeting place, EcoRoute will be able to recommend the most equidistant location to the users attending.

Key Features
The Map feature at the sign up page allows users to enter their home address where they will likely be doing most of their travels from. This feature utilizes the MapBox API functionality and is showcased below:

 home.address.mp4 
The CRUD functionality for events allows users to create new events, which are then displayed on the homepage, update and delete events as needed.Users can optionally add attendees from their friends list to the event. This is showcased below:

 event.CRUD.mp4 
Technologies and Technical Challenges
React/Redux
Node
Bcrypt for salting and hashing passwords
MongoDB
Express
Mongoose to connect and interact with MongoDB
Axios
MapBox API
Code Snippets
Sample Frontend
renderMap(){
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
        container: this.mapContainerLogin.current,
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [lng, lat],
        zoom: zoom,
        bearing: 0
    });
    const geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            flyTo:{
                bearing: (Math.random() < 0.5 ? -1 : 1)*Math.floor(Math.random() * 20),
                speed: 2,
                curve: 0.75,
                pitch: 60,
                essential: true
                
            },
            mapboxgl: mapboxgl,
            className: 'geocoder'
        })
        const geolocator= new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: false
            },
            trackUserLocation: true,
            className: 'geolocator'
        })
    map.addControl(
        geocoder, 'top-left'
        )
    map.addControl(
        geolocator
    )
    let that = this;
    geocoder.on('result', function(e) {

        that.props.setParentState({location: e.result.geometry.coordinates})
   
    })
    geolocator.on('geolocate', function(e){

        that.props.setParentState({location: [e.coords.latitude, e.coords.longitude]}
    })
   
}
Sample Backend

router.post('/', 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateEventInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors)
        }
        
        const newEvent = new Event({
            user: req.user.id,
            title: req.body.title,
            category: req.body.category,
            date: req.body.date,
            attendees: req.body.attendees,
            hidden: req.body.hidden
        });

        newEvent.save().then(event => res.json(event));
    }
)

router.get('/user/:user_id', (req, res) => {
    
    Event.find({user: req.params.user_id})
        .sort({ date: -1 })
        .then( events => res.json(events))
        .catch( err => {
            res.status(404).json({ eventsnotfound: 'This user has not created an event'})
        })

});

Group Members and Work Breakdown
Sydney Parsons - Backend/Flex
Daniel Bradley - Backend/Flex
Tyler Koh - Frontend/Flex
Mickey Addai - Frontend/Flex", 
    category_id: 14, 
    location_id: 25, 
    goal: 50000, 
    risks: Faker::ChuckNorris.fact, 
    start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), 
    end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), 
    url: "https://images.unsplash.com/photo-1634843845395-7f13d40e84de?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60")

Project.create!(
    author_id: 42, 
    title: "Seed Bed", 
    description: "SeedBed is a Kickstarter clone where users can sow seeds and investors and fertilize them through various growth stages. Each Seed is represented as a project and can be backed for rewards.",
    body:
"SeedBed is a full stack app with Ruby on Rails/PostgreSQL backend and Javascript React/Redux frontend.`, 
    body: `Technologies
Javascript
React
Redux
Ruby on Rails
PostgreSQL
webpack
jbuilder
SCSS
Heroku
Ajax
Archetecture
Frontend
React/Redux
Javascript
React Router
jQuery/Ajax
React DOM
Backend
Ruby on Rails
PostgreSQL
BCrypt - used to hash passwords and create password digests
Features
Frontend to backend user authentication with hashed passwords using BCrypt
Guests can view all projects without signing in.
Logged in users can Create, Read, Update, and Delete (CRUD) projects.
Users can discover projects by categories or by all
Each project has a show page that shows rewards
reactive display for various screen widths from mobile to pc.
Future Endeavors
+Allow signed in users to back projects

Any user can search for projects.
Logged in users can like projects.
Add modals for discover and search
Improve user experience with a UI modal dashboard
Logged in users can back projects with active credit card.", 
    category_id: 14, 
    location_id: 25, 
    goal: 10000, 
    risks: Faker::ChuckNorris.fact, 
    start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), 
    end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), 
    url: "https://github.com/87danielbradley/Seed/blob/main/app/assets/images/Screen%20Shot%202021-11-11%20at%209.39.53%20PM.png?raw=true")


Project.create!(
    author_id: 42, 
    title: "Node Dominance", 
    description: "This game is a single page app developed in Javascript", 
    body: "Node Dominance is an interactive game project. It is based off the game Sprouts created by John Horton Conway and Micheal S. Paterson in the 1960s. The original game is played with paper and pencil. When you open the app you will have a new game generated with a default of two nodes.

This game will allow variations in gameplay by allowing the players to increase the starting nodes.

Rules of the game
The game is played with two players with at least two starting nodes. The two players take turns by connecting two nodes with an unbroken line. This line may not intersect other lines or nodes before reaching the target node. Following a legal move, a new node is created along the newly created line. Each node may have a maximum of 3 connections. The player left without a legal move is the loser.

Functionality & MVPs
With Node Dominance, users will be able to:

Reset the game board
Draw a custom path to connect nodes
Choose from preset initial states
Select player color
Also included:

Help icon describing rules of the game
Sound with Toggle button
A production README
Wireframes


Navigation links to my Github repo, LinkedIn, Portfolio
On the left, there will be selectable colors for each player
On the right, there will be different themes to select
In the upper right will be and option to remove sound
There will be a help icon in the lower right
There will be a reset game button and an option to add starting nodes
Game Play


Technologies, Libraries, APIs
This project will be implemented with the following technologies:

Canvas to render the game board
Webpack
Paper.js to work with vectors
Implementation Timeline
Friday Afternoon & Weekend: Setup project; getting webpack up and running, have canvas render to screen. Create Board, Player, Node classes. Render intial state of board in canvas.

Monday: Dedicate this day to the underlying logic of Node Dominance.

Tuesday: Get the game to correctly render to canvas. Then focus on rendering lines and additional nodes.

Wednesday: Finish implementing controls, and focus on styling and ensuring all links work.

Thursday Morning: Deploy game and rewrite proposal as production.

Bonus feature
Add a number to each node representing the number available branches from node
Add additional randomly populated nodes
Add motion effects to line while drawing
Highlight available moves
Highlight legal moves from a specific node
Explore variations and multiplayer from separate computers.", 
    category_id: 14, 
    location_id: 25, 
    goal: 10000, 
    risks: Faker::ChuckNorris.fact, 
    start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), 
    end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), 
    url: "https://raw.githubusercontent.com/87danielbradley/NodeDominance/main/screenShot.png")

    Project.create!(
    author_id: 42, 
    title: "City Bike Dashboard",
    description: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), 
    body: Faker::Lorem.paragraph(sentence_count: 2, supplemental: false, random_sentences_to_add: 4), 
    category_id: 14, 
    location_id: 25, 
    goal: 1000, 
    risks: Faker::ChuckNorris.fact, 
    start_date: Faker::Date.between(from: 1.year.ago, to: Date.today), 
    end_date: Faker::Date.between(from: Date.today, to: 1.year.from_now), 
    url: "https://camo.githubusercontent.com/5cd9a3653373b2389b7a776a63938736347fc9f703d9d3ca4e598dd1530ad571/68747470733a2f2f7075626c69632e7461626c6561752e636f6d2f7374617469632f696d616765732f63692f636974695f62696b655f7075626c69632f53746f72792f315f7273732e706e67")
