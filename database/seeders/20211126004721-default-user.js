module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      id: '09bde47b-034f-4936-bb22-15a5abb131d5',
      name: 'Max Chou',
      email: 'maxchou415@gmail.com',
      password: 'a664d9e992ee0c2efc924126ef46d60d656a1e32d785d2730aa333bb8e199839d14e8ed22550c22e81dcda5eed5aa60e7b24f6a2edbb2902f950148e20a91691',
      isAdmin: true,
      createdAt: '2021-11-25 18:03:42.898000 +00:00',
      updatedAt: '2021-11-25 18:03:42.898000 +00:00'
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
  }
}
