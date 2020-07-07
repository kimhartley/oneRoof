exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('artists').del()
    .then(function () {
      // Inserts seed entries
      return knex('artists').insert([
        {
          id: 1, 
          name: 'Ash Broke',
          image: '',
          bio: '',
          audio: ''
        },
        {
          id: 2, 
          name: 'Koast',
          image: '',
          bio: '',
          audio: ''
        },
        {
          id: 3, 
          name: 'Dylz',
          image: '',
          bio: '',
          audio: ''
        },
        {
          id: 4, 
          name: '',
          image: '',
          bio: '',
          audio: ''
        },
        {
          id: 5, 
          name: '',
          image: '',
          bio: '',
          audio: ''
        },
        {
          id: 6, 
          name: '',
          image: '',
          bio: '',
          audio: ''
        }
      ])
    })
}

