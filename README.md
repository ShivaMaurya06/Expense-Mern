
# Expense Tracker

## Deployed App

Try it here: https://finflow.onrender.com/
<br />
> Sample Credentials to Log In
```
email: abc@example.com
password: abc12345
```
## Description

This is Expense Tracker Web App to manage all your Daily Expenses.

You can add and delete Expenses easily with different categories.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Bug-Slicers/FinFlow.git
```

Go to the project directory

```bash
  cd finflow
```


Install dependencies in project directory

```bash
  npm install
```
Go to the client folder

```bash
  cd client
```
Install dependencies in client

```bash
  npm install
```

Start the client react project

```bash
  npm run start
```

Come back to project directory

```bash
  cd ..
```
Start Server using node or nodemon

```bash
  node app.js 
  or nodemon app.js
```


Please Use Tailwind CSS for styling components

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`SECRET_KEY` : For verifying jwt tokens.

`DATABASE` : contains the dbURI of MongoDB connections

