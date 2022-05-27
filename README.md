# Sample TS backend

## Introduction

Setting up a TS is somewhat different from JS. Although TS is compiled into JS but there are
a few configuration that needs to be done before getting into actual development.

## Setting Up a TS Backend

1. Create a new directory for your backend.
2. Fire up a console and navigate to the directory.
3. Run the following command:

    ```bash
    yarn init -y
    ```

    Or,

    ```bash
    npm init -y
    ```

4. After the command is run a package.json should appear in the directory.

5. Add TypeScript as a dependency in the package.json file.

    ```bash
    yarn add -DE typescript
    ```

    This will add typescript as a dev dependency in your project. Also add

    ```bash
    npx tsc --init
    ```

6. Inside `tsconfig.json` search for `rootDir` and `outDir`. What this two does is:
    1. `rootDir` is the root directory of your project. Good practice dictates that this should be `./src`.
    2. `outDir` is the directory where the compiled files will be placed. Good practice dictates that this should be `./dist` or `./build`.
    3. Also uncomment `moduleResolution`

7. Installing basic packages:

    ```node
    yarn add express typescript nodemon @types/express @types/node
    ```

    Although one might have nodemon installed globally, it is highly recommended to install it locally, because the application might run on a machine that do not have it installed globally.
8. Configuring the package.json:
    Remember the `package.json` we got as a result of running the `yarn init`/`npm init` command?
    We need to add a few more properties to it:

    ```json
    "scripts": {
        "start": "node ./build/index.js",
        "build": "tsc -p .",
        "dev": "nodemon ./src/index.ts"
    }
    ```

    What this basically does is tells the application that in production mode the application should run the `build` script, and in development mode the application will run the `dev` script.

    During development mode we do not want to restart the application manually every time we make some changes to it so we will use the `nodemon` package, which basically restarts the application when we make changes to it.

9. Running the application in dev:

    ```bash
    nodemon ./src/index.ts
    ```

## Project Structure

Unlike other frameworks like Spring Boot or Django, Nodejs does not come with a built-in project structure. This can be considered a blessing or a hassle depending on the usecase.
In smaller cases or MVPs(Minimum Viable Product) we might want to use a simple project structure, in which cases Nodejs is a good choice considering the project can be built rather quickly and easily.
In larger cases, nodejs can be quite painful to use, as one might have build a clean architecture and in worst case scenario the project will be quite a hassle to maintain.
