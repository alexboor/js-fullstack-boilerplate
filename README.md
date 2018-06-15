# Fullstack nodejs-react-redux boilerplate

Server-side tail built with AdonisJS MVC framework based on service providers and IoC containers. 
If you familiar with modern MVC frameworks like Laravel or Ruby on Rails it's will be not hard to get in. Except classical 
Controllers, Models, and Views the back-end gives powerful ORM implementation (based on knex), migration, seeds.
Completely test ready environment and easy to use CLI interface. Boilerplate including user model and session sign-in 
implementation from the box. JWT included. 

Front-end based on React/Redux stack. 

### How to start

`git clone _path_to_this_repo`

`npm install`

`cp .env.example .env` and put your iwn settings (ie. database, session provider)

then

`npm run start` to start in production mode

### Development

For development, you have to install AdonisJS globally.

`npm i -g @adonisjs/cli`

then run the server in development mode use the following command:

`adonis server --dev`

### Front-end

Front-end files saved in `/frontend` directory and totally separated from the backend. You free to change everything inside the directory. Just remember that all built assets have to put into `/public` directory to serve it in a right way.

`npm run build` Build front-end assets in production mode

`npm run dev` Build front-end assets in development mode with source-map without uglification.

`npm run watch` Will run webpack in watch mode and will be watching your files for changes. It's not so fast but easy to implement for small tasks. HMR not implemented yet.

### Other

Did for me and do spreading as is. No complaints.  