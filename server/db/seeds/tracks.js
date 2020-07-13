exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tracks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tracks').insert([
        {
          id: 1, 
          track_name: 'rowValue1',
          image: '',
          file:'',  
        },
        {
          id: 2, 
          track_name: 'rowValue2',
          image: '',
          file:'',  
        },
        {
          id: 3, 
          track_name: 'rowValue3',
          image: '',
          file:'',  
        }
      ])
    })
}
