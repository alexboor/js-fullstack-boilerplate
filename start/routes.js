'use strict';

const Route = use('Route');

Route.on('/').render('index');

Route.get('signin', 'UserController.signinForm');
Route.get('logout', 'UserController.logout');

Route.get('dashboard', 'PageController.showDashboard').middleware('auth');


/**
 * API
 */
Route.group(() => {

    Route.post('users/signin', 'UserController.signinPost');

}).prefix('api/v1');