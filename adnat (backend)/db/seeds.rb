# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "date"

User.destroy_all
Organisation.destroy_all
Shift.destroy_all

org_one = Organisation.create( name: "Burger King", hourly_rate: 10)

org_two = Organisation.create( name: "Foot Locker", hourly_rate: 7)

org_three = Organisation.create( name: "Toys R' Us", hourly_rate: 30)

user_one = User.create(organisation_id: org_one.id, name: "Jen", email: "jen@gmail.com", password: "123")

user_two = User.create(organisation_id: org_two.id, name: "Hain", email: "hain@gmail.com", password: "456")

user_three = User.create(organisation_id: org_three.id, name: "gehrig", email: "g@gmail.com", password: "789")

shift_one = Shift.create(user_id: user_one.id, start: DateTime.parse("16/05/2022 10:00"), finish: DateTime.parse("14/05/2022 15:00"), break: 30, employee_name: "jen")
shift_one = Shift.create(user_id: user_one.id, start: DateTime.parse("16/05/2022 10:00"), finish: DateTime.parse("15/05/2022 15:00"), break: 30, employee_name: "jen")



