exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('artists').del()
    .then(function () {
      // Inserts seed entries
      return knex('artists').insert([
        {
          id: 1, 
          name: 'Ash Broke',
          image: 'https://i1.sndcdn.com/avatars-000671134043-0ebpuv-t500x500.jpg',
          bio: 'I go by the name of ASH BROKE, I represent ONEROOF. My music is basically stories of my life and is a way for me to talk about things I couldn\'t talk about in conversation, it is my type of self-therapy.',
          audio: '/music/Girl (INSTUMENTAL MSTR).wav;take it back ref.mp3', 
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

