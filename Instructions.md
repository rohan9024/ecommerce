# Getting Started

The following steps are mandatory if you want to run the project in your local directory.

Note: Project is using Firebase as a for login/signin authentication and Stripe for Payment gateway.

## Stripe setup

### Steps for obtaining Stripe secret keys:-

1. Create a .env file in root folder in your project. (Note - you must create the file in root folder only)
2. Go to Stripe.
3. Create a new Stripe account (if you don't have any).
4. Go to your dashboard
5. You will find the Stripe Secret key. Copy this in the .env file (in the format given below).

### Server URL

1. Enter the url of your project if it is hosted online.
2. If you want to test locally, enter `http://localhost:3000`

### Format of .env file

    STRIPE_PRIVATE_KEY=
    SERVER_URL=

## Firebase setup

### Steps for obtaining your API keys:-

1. Create a .env.local file in client folder in your project. (Note - you must create the file in client folder only)
2. Create your Firebase account. (if you don't have any)
3. Create new project.
4. Click on </> icon to create a database for the web app.
5. You will see a config file.
6. Copy all the details in .env.local file in the format given below.

### Format of .env.local file

    REACT_APP_APIKEY=
    REACT_APP_AUTHDOMAIN=
    REACT_APP_DATABASEURL=
    REACT_APP_PROJECTID=
    REACT_APP_STORAGEBUCKET=
    REACT_APP_MESSAGINGSENDERID=
    REACT_APP_APPID=
    REACT_APP_MEASUREMENTID=

### Steps for activating authentication:-

1. Go to your Firebase account.
2. Open the project that you have created.
3. On the left panel click "Authentication"
4. Click Sign-in method
5. Enable email-password sign in.
6. You are good to go!

If you have any doubts, feel free to ask in the [Discord](https://discord.gg/wUeTqEXDrb) Channel
