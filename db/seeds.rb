# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

admin_user = User.create!(username: "admin", password: "password", admin: true)
user2 = User.create!(username: "testuser", password: "password")
user3 = User.create!(username: "another", password: "password")

Questionnaire.destroy_all

survey1 = Questionnaire.create!(title: "testsurvey", author: admin_user)

Question.destroy_all

question1 = Question.create!(name: "Question 1", label: "Favorite food?", questionnaire_id: 1)
question2 = Question.create!(name: "Question 2", label: "Favorite color?", questionnaire_id: 1)

Response.destroy_all

response1 = Response.create!(body: "Lasagna", author: user2, question: question1)
response2 = Response.create!(body: "Pizza", author: user3, question: question1)
response3 = Response.create!(body: "Red", author: user3, question: question2)
response4 = Response.create!(body: "Blue", author: user2, question: question2)
