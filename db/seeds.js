const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const config = require('../nodemon.json')
const User = require('../api/models/user')

const reset = async () => {
  mongoose.connect(config.env.MONGO_DB_CONNECTION, { useNewUrlParser: true })
  // Careful with .remove() -- it sends a command directly to the database
  // and skips any mongoose validations
  await User.deleteMany() // Deletes all records
  return User.create([
    // Admin
    {
      email: 'admin@email.com',
      password: bcrypt.hashSync('password', 10),
      first_name: 'admin',
      last_name: '',
      admin: true,
      assignments: [
        {
          title: 'HTML & CSS Project',
          link: 'http://github.com/username/project=html-css',
          description: 'This is an HTML & CSS Project I worked on during our class.',
          max_grade:50
        },
        {
          title: 'Flexbox Exercise',
          link: 'http://github.com/username/project=flexbox',
          description: 'An exercise for working with Flexbox',
          grade:'',
          max_grade:100
        },
        {
          title: 'React Project',
          link: 'http://github.com/username/project=react',
          description: 'Project using React Redux',
          max_grade:125
        }
      ]
    },
    //Student 1
    {
      email: 'student@email.com',
      password: bcrypt.hashSync('password', 10),
      first_name: 'student',
      last_name: 'user',
      assignments: [
        {
          title: 'HTML & CSS Project',
          link: 'http://github.com/username/project=html-css',
          description: 'This is an HTML & CSS Project I worked on during our class.',
          grade:48,
          max_grade:50
        },
      ]
    },
    // Stdent 2
    {
      email: 'developer@email.com',
      password: bcrypt.hashSync('password', 10),
      first_name: 'Jordan',
      last_name: 'Dev',
      assignments: [
        {
          title: 'HTML & CSS Project',
          link: 'http://github.com/username/project=html-css',
          description: 'This is an HTML & CSS Project I worked on during our class.',
          grade:50,
          max_grade:50
        },
        {
          title: 'Flexbox Exercise',
          link: 'http://github.com/username/project=flexbox',
          description: 'An exercise for working with Flexbox',
          grade:79,
          max_grade:100
        }
      ]
    },
    // Student 3
    {
      email: 'myemail@email.com',
      password: bcrypt.hashSync('password', 10),
      first_name: 'Jennifer',
      last_name: 'Jenner',
      assignments: [
        {
          title: 'HTML & CSS Project',
          link: 'http://github.com/username/project=html-css',
          description: 'This is an HTML & CSS Project I worked on during our class.',
          grade:49,
          max_grade:50
        },
        {
          title: 'Flexbox Exercise',
          link: 'http://github.com/username/project=flexbox',
          description: 'An exercise for working with Flexbox',
          grade:90,
          max_grade:100
        }
      ]
    },
    // Student 4
    {
      email: 'Becky@email.com',
      password: bcrypt.hashSync('password', 10),
      first_name: 'Becky',
      last_name: 'Beckster',
      assignments: [
        {
          title: 'HTML & CSS Project',
          link: 'http://github.com/username/project=html-css',
          description: 'This is an HTML & CSS Project I worked on during our class.',
          max_grade:50
        },
        {
          title: 'Flexbox Exercise',
          link: 'http://github.com/username/project=flexbox',
          description: 'An exercise for working with Flexbox',
          max_grade:100
        }
      ]
    },
    // Student 5
    {
      email: 'coolio@email.com',
      password: bcrypt.hashSync('password', 10),
      first_name: 'Coolio',
      last_name: 'Paradise',
      assignments: [
        {
          title: 'HTML & CSS Project',
          link: 'http://github.com/username/project=html-css',
          description: 'This is an HTML & CSS Project I worked on during our class.',
          grade:50,
          max_grade:50
        },
        {
          title: 'Flexbox Exercise',
          link: 'http://github.com/username/project=flexbox',
          description: 'An exercise for working with Flexbox',
          grade:10,
          max_grade:100
        },
        {
          title: 'React Project',
          link: 'http://github.com/username/project=react',
          description: 'Project using React Redux',
          grade:115,
          max_grade:125
        }
      ]
    },
    //Student 6
    {
      email: 'lizzy@email.com',
      password: bcrypt.hashSync('password', 10),
      first_name: 'Lizzy',
      last_name: 'Maguire',
      assignments: [
        {
          title: 'HTML & CSS Project',
          link: 'http://github.com/username/project=html-css',
          description: 'This is an HTML & CSS Project I worked on during our class.',
          grade:40,
          max_grade:50
        },
      ]
    },
    // Stdent 7
    {
      email: 'lester@email.com',
      password: bcrypt.hashSync('password', 10),
      first_name: 'Lester',
      last_name: 'Listerine',
      assignments: [
        {
          title: 'HTML & CSS Project',
          link: 'http://github.com/username/project=html-css',
          description: 'This is an HTML & CSS Project I worked on during our class.',
          grade:26,
          max_grade:50
        },
        {
          title: 'Flexbox Exercise',
          link: 'http://github.com/username/project=flexbox',
          description: 'An exercise for working with Flexbox',
          grade:19,
          max_grade:100
        }
      ]
    },
    // Student 8
    {
      email: 'jojo@email.com',
      password: bcrypt.hashSync('password', 10),
      first_name: 'Jo',
      last_name: 'Jo',
      assignments: [
        {
          title: 'HTML & CSS Project',
          link: 'http://github.com/username/project=html-css',
          description: 'This is an HTML & CSS Project I worked on during our class.',
          max_grade:50
        },
        {
          title: 'Flexbox Exercise',
          link: 'http://github.com/username/project=flexbox',
          description: 'An exercise for working with Flexbox',
          max_grade:100
        }
      ]
    },
    // Student 9
    {
      email: 'faleior@email.com',
      password: bcrypt.hashSync('password', 10),
      first_name: 'Faleior',
      last_name: 'Fallen',
      assignments: [
        {
          title: 'HTML & CSS Project',
          link: 'http://github.com/username/project=html-css',
          description: 'This is an HTML & CSS Project I worked on during our class.',
          grade:4,
          max_grade:50
        },
        {
          title: 'Flexbox Exercise',
          link: 'http://github.com/username/project=flexbox',
          description: 'An exercise for working with Flexbox',
          grade:2,
          max_grade:100
        },
      ]
    },
    // Student 10
    {
      email: 'namby@email.com',
      password: bcrypt.hashSync('password', 10),
      first_name: 'Namby',
      last_name: 'Nambster',
      assignments: [
        {
          title: 'HTML & CSS Project',
          link: 'http://github.com/username/project=html-css',
          description: 'This is an HTML & CSS Project I worked on during our class.',
          max_grade:50
        },
        {
          title: 'Flexbox Exercise',
          link: 'http://github.com/username/project=flexbox',
          description: 'An exercise for working with Flexbox',
          grade:80,
          max_grade:100
        },
        {
          title: 'React Project',
          link: 'http://github.com/username/project=react',
          description: 'Project using React Redux',
          max_grade:125
        }
      ]
    }
  ])
}

reset().catch(console.error).then((response) => {
  console.log(`Seeds successful! ${response.length} users created.`)
  return mongoose.disconnect()
})
