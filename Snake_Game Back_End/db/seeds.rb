# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Score.delete_all

User.create(name: 'Luke')
User.create(name: 'James')
User.create(name: 'Tk')


Score.create(user_id: '1', s: 34)
Score.create(user_id: '2', s: 235)
Score.create(user_id: '3', s: 1234)




