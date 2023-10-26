import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {

Route.group(() => {
  Route.get('/api/cvs', 'CvsController.index');
  Route.post('/api/cvs', 'CvsController.store');
  Route.put('/api/cvs/:id', 'CvsController.update');
  Route.delete('/api/cvs/:id', 'CvsController.destroy');
}).middleware("auth:api");
  Route.post('/api/register', 'AuthController.register')
  Route.post('/api/login', 'AuthController.login')

})