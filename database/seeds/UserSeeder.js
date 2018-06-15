'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/



const Factory = use('Factory');
const User = use('App/Models/User');
const Hash = use('Hash');

class UserSeeder {
  async run () {
      const user = new User();

      user.username = 'sta';
      user.email = 'mail@sta.im';
      user.password = '12345';
      user.isAdmin = true;

      await user.save();

  }
}

module.exports = UserSeeder;
