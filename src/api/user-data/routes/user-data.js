module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/user-data',
     handler: 'user-data.findAll',
     config: {
       policies: [],
       middlewares: [],
       auth: { strategies: ['users-permissions'] }
     },
    },
    {
      method: 'POST',
      path: '/register',
      handler: 'user-data.register',
      config: {
        policies: [],
        middlewares: [],
      },
     }
  ],
};
