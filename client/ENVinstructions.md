# Getting Started

The following steps are mandatory if you want to run the project in your local directory.

Note: Project is using Firebase as a for login/signin authentication.

## Steps for obtaining your API keys:-

1. Create a .env.local file in root directory in your project. (Note - you must create the file in root directory only)
2. Create your Firebase account. (if you don't have any)
3. Create new project.
4. Click on </> icon to create a database for the web app.
5. You will see a config file.
6. Copy all the details in .env.local file in the format given below.

## Format of .env.local file

    REACT_APP_APIKEY=
    REACT_APP_AUTHDOMAIN=
    REACT_APP_DATABASEURL=
    REACT_APP_PROJECTID=
    REACT_APP_STORAGEBUCKET=
    REACT_APP_MESSAGINGSENDERID=
    REACT_APP_APPID=
    REACT_APP_MEASUREMENTID=

## Steps for activating authentication:-

1. Go to your Firebase account.
2. Open the project that you have created.
3. On the left panel click "Authentication"
4. Click Sign-in method
5. Enable email-password sign in.
6. You are good to go!

If you have any doubts, feel free to ask in the [Discord](https://discord.gg/wUeTqEXDrb) Channel
