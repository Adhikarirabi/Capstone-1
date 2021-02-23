<<<<<<< HEAD
# Capstone 1 - Inventory Management System User Interface (UI)

Your task is to Build an Inventory Management for the business of your choice.  It can be for a grocery store, a car dealership, a jewelry shop, a cell phone store, a book store, or any other legitimate business that maintains an inventory.  One limitation is that the business should not contain any content that is potentially ethically offensive or graphic (drugs, sexuality, etc.)  Take some time to plan out your strategy for completing this project.  As the saying goes, <i>"If you fail to plan, you plan to fail."</i>

In the root of this repository, you will find a a pdf file outlining a methodology to approaching & solving any problem.  The file is called : <code>"Polya's Problem Solving Framework.pdf"</code>  Feel free to research and learn more about the framework online, or simply use the .pdf file as a primary reference.

Before you dive into coding, follow the steps of Prolem Solving framework, and document the steps you will be taking for this project in the <code>UPER.md</code> file.

As part of your planning process, you may want to look into some UX design tools, otherwise known as "wireframing" tools.
A few examples are : 

* <code>Figma</code> 
* <code>Sketch</code>
* <code>Balsamiq</code>
* <code>Omni Graffle</code>
* <code>Mockplus</code>
* <code>Adobe XD</code>

******************************************
<h2>
    Minimum Viable Product (MVP)
</h2>

The App must be a Single Page Application (SPA) created using the `React.js`framework as well as `react-router`.  

<h2>
    Required Functionality:
</h2>

- A Product Page View that displays Products with a thumbnail image
- A Shopping Cart View that allows for Purchase Functionality
- A Product Detail View that displays details of the product with the following details : 
  - Product Name
  - Serial Number
  - Price
  - Manufacturer (Optional, especially if there is only 1 manufacturer for **all** products)
  - Category / Tag
  - Quantity
  - Product Image
- Search Functionality
- Inventory of at least 10 items

For this project, no backend database is required.  You can simply store all your "inventory data" in a simple `.json` file, 
initialized in React State, [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), [Dexie.db](https://dexie.org/) or in any way that is easist for you to 
store the inventory data.

<h2>
    Optional Functionality :
</h2>

- Deploy React App using any Hosting solution ([Surge](https://daveceddia.com/deploy-create-react-app-surge/), [Vercel](https://vercel.com/guides/deploying-react-with-vercel-cra), [Netlify](https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/), [AWS](https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-one/?e=gs2020&p=build-a-react-app-intro), [Heroku](https://blog.heroku.com/deploying-react-with-zero-configuration), etc. )
- Staff View - Protected Route
  - Modify Inventory Quantities (which update the inventory data)
  - Add New Products
  - Remove Products
  - Update Product details
- Staff Login View - (to allow access to the Staff View)
- Search functionality by any of the item details (serial,price,manufacturer,category)
- Allow customers to purchase multiple quantities of the same item.
- Integrate with a 3rd party payment processing tool (Stripe / Paypal)
- Error Handling when customers attempt to purchase more than what is currently available
- Error Handling when customers search for something that is not in the inventory

## ********************************************************
## Git Instructions

- [ ] Create a template copy of this repository by clicking : "Use this template"
- [ ] Name the repository the same name as the master template repository.  
- [ ] Add your TM as collaborator
- [ ] Clone YOUR repo to your local computer
- [ ] Create a new branch: <code>git checkout -b `<firstName-lastName>`</code>.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push all of your commits: <code>git push origin `<firstName-lastName>`</code>.
- [ ] When ready for your TM to review, open a Pull Request (PR) and add your TM as a collaborator.

## ********************************************************

=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 1b31ee8 (Initialize project using Create React App)
