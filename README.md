# Job 4 DEV SPA ReactJS Project

This Single Page Application is created as a platform for job offers and positions. Guests, users and companies can make a different type of actions like view, login, register, create, delete and so on depending on user role. 

![picture alt](https://www.studiocooking.com/wp-content/uploads/2022/08/screenshot.png "Job 4 DEV Home page")

## Built With

* ReactJS
* SoftUni Practice Server
* HTML + CSS/SASS by Me (design by Alex Moroz)
* Responsive design

# Client side
## Roles and permissions
### Public part

For non-registered users. These users have access to:

* **Home page** - Main page with some information and ist of the lastest three job offers.
* **About Us** - Static page with information about this web site and aout company.
* **Jobs** - Catalog page with listed all job offers sorting by created date.
* **Job Details Page** - Job details like: Job Titlte, Company Logo, Job Category, City, Job Salary. With no options to apply.
* **Login** - Any registerd user cal login from this page.
* **Register** - Any user/company can register.

### Private part

For regisred companies:

* **Home page** - Main page with some information and list of the lastest three job offers.
* **About Us** - Static page with information about this web site and aout company.
* **Jobs** - Catalog page with listed all job offers sorting by created date.
* **Profile**  - Registred company can see details about them. After this main profile information they can see list of oll job offers added by them.
* **Job Details Page** - Job details like: Job Titlte, Company Logo, Job Category, City, Job Salary. With no options to apply but if this company create this offer they can detete or edit job offer information by the "Edit/Delete" buttons. After all job infomation and description there are list of all job applies. Also they can not "Apply" for job offers from other companies.
* **Create Job** - With this form only registred companies can create new job offer with following inputs: Job Title, Category, City, Salary, Job Description.
* **Edit Job** - With this form only registred companies and creator of job offer can edit existed job offer with following inputs: Job Title, Category, City, Salary, Job Description.
* **Delete Job** - With this button only registred companies and creator of job offer can delete current job offer.
* **Logout** - Logout button provides company to logout from their accout.

For registred users:

* **Home page** - Main page with some information and ist of the lastest three job offers.
* **About Us** - Static page with information about this web site and aout company.
* **Jobs** - Catalog page with listed all job offers sorting by created date.
* **Profile**  - Registred users can see details about their information and list of jobs they already applied for.
* **Job Details Page** - Job details like: Job Titlte, Company Logo, Job Category, City, Job Salary. With options to apply by "Apply" button.
* **Logout** - Logout button provides user to logout from their accout.

## OneDrive

[https://lmetanovgmail-my.sharepoint.com/:f:/g/personal/marina_metanova_metanov_eu/Et6QLou1ik5Dq4kogQjcUwABavXiBa6_sel4k7S_Soz79A?e=ImgZPg](https://marina_metanova/job4dev)

## About project development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

For development, you will need Node.js installed on your environement.
Then in the project directory, you can run:

### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view this project in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).