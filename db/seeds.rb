require 'faker'

PASSWORD = 'password'

# Users
jim = User.create(first_name: 'Jim', last_name: 'Theriault', email: 'jim@theriault.com', password: PASSWORD, role: :instructor, biography: 'Blah blah blah', avatar: 'https://randomuser.me/api/portraits/lego/7.jpg')

User.create([
  { first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.safe_email, password: PASSWORD },
  { first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.safe_email, password: PASSWORD },
  { first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.safe_email, password: PASSWORD }
])

# Courses

Course.create([
  { instructor: jim, title: 'Plan Reading', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde hic, repellat et tempora! Incidunt laudantium aperiam, commodi suscipit molestiae veritatis accusantium, eius dolorem quia facere, dignissimos, animi dolore consectetur quibusdam!" },
  { instructor: jim, title: 'Estimating 1', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde hic, repellat et tempora! Incidunt laudantium aperiam, commodi suscipit molestiae veritatis accusantium, eius dolorem quia facere, dignissimos, animi dolore consectetur quibusdam!" },
  { instructor: jim, title: 'Estimating 2', description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde hic, repellat et tempora! Incidunt laudantium aperiam, commodi suscipit molestiae veritatis accusantium, eius dolorem quia facere, dignissimos, animi dolore consectetur quibusdam!" }
])

# Lessons

Lesson.create([
  { instructor: jim, course: Course.first, title: 'Intro', url: '', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos porro iste iure error impedit sed laudantium molestias doloremque? Culpa consequatur deleniti eligendi voluptates dignissimos, porro dolorem, quis sunt odio quibusdam.'},
  { instructor: jim, course: Course.first, title: 'Lesson 1', url: '', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos porro iste iure error impedit sed laudantium molestias doloremque? Culpa consequatur deleniti eligendi voluptates dignissimos, porro dolorem, quis sunt odio quibusdam.'},
  { instructor: jim, course: Course.first, title: 'Lesson 2', url: '', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos porro iste iure error impedit sed laudantium molestias doloremque? Culpa consequatur deleniti eligendi voluptates dignissimos, porro dolorem, quis sunt odio quibusdam.'},
  { instructor: jim, course: Course.first, title: 'Lesson 3', url: '', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos porro iste iure error impedit sed laudantium molestias doloremque? Culpa consequatur deleniti eligendi voluptates dignissimos, porro dolorem, quis sunt odio quibusdam.'}
])
