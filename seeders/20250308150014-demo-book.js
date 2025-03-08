'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        publishedDate: new Date('1925-04-10'),
        pages: 180,
        genre: 'Novel',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        publishedDate: new Date('1960-07-11'),
        pages: 281,
        genre: 'Novel',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
