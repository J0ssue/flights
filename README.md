## Running Application Steps

The app was built using Inertia (React/Typescript) on the Frontend and Laravel on the backend
For the backend Laravel Herd was used to run it locally which is the easiest way to Run the backend

1. Follow this instructions to install laravel Herd https://herd.laravel.com/docs/windows/1/getting-started/installation
2. After once laravel Herd is installed open the Herd dashboard app
3. There should be a new folder created named Herd, any application put in it will be run by the Herd server if it doesnt exist make a Herd folder
4. download the flights project into the Herd folder using command line "git pull https://github.com/J0ssue/flights.git"
5. from the command line cd into flights
6. run "npm install"
7. run "composer install"
8. run "php artisan migrate:fresh"
9. run "npn run install"
10. run "npm run dev"
11. use the .env.example file remove the .example from it
12. change the enviroment variable for the proper url APP_URL=http://flights.test (this is how Herd serves its sites with a .test)
13. navigate to http://flights.test to see the site runing on development
