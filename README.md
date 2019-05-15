# <a href="https://kyliechao.com/bill-record-table" target="_blank">Bill Record Table</a>
> Full stack project of a content management application for bill payers to track payments
>
> Click on the title above to visit the live site

### App Features

> - Record bill payment details
>   - Pay from
>   - Pay to
>   - Payment type
>   - Payment date
>   - Update payment
>   - Delete payment

### Tools and Technologies

> - Created a full scale application with front-end and back-end integration
> - Technologies used:
>    - React.js
>    - Node.js
>    - Sass
>    - Materialize
> - Tools used:
>    - GitHub
>    - Git
>    - Visual Studio
>    - PhpMyAdmin

### Setup Instructions

> 1. Fork this repo
> 1. Clone your forked copy of this repo
>    - `git clone https://github.com/[your_username]/bill_record_table.git`
> 1. Change directory into the newly cloned repo
>    - `cd bill_record_table`
> 1. Install dependencies 
>    - `npm install`
1. Create credential files
>    1. Database credentials
>        - navigate to the server folder `cd server`
>        - make a copy of the mysqlcreds.js.config file and rename new file to mysqlcreds.js
>        - add your database credentials
> 1. Start node server on the terminal
>    - `node server`
> 1. Open another terminal to start dev server
>    - `npm start`
> 1. Open a browser and navigate to `localhost:3000`

### Bundle For Deployment

> 1. Run webpack to bundle files
>    - `npm run bundle`
> 
> **NOTE:** *After bundling you can not directly run your app locally. You must run your app from the root directory of a server.*
