# Alkemy Challenge FullStack JS

```
The App uses React as a frontend and Express in Node as a backend
```

`Versions`

```
Node 18.2.0
```

```
React 18.0.0
```

`The App Tree`

```
folder
    -client
        -src
        -public
    -server
        -DB
        -public
        -src
        -test
```

## 1. Start in development

`By default, The port for the frontend in development is 3000 and for the backend the port is 8080. It can be cahnged in the .env file`

```
frontend: localhost:3000
```

```
backend: localhost:8080
```

`The app uses two types of persistences:`

```
1. File: It uses the fylesystem module from Node for store data
```

```
2. SQL: It uses sql as a non relational data base where knex dependency module was applied for sqlite3 as the DB system
```

`It is possible to change between these two types of persistences modes by changing the .env file in the server folder:`

```
STORAGE=file
```

`or`

```
STORAGE=sql
```

`It uses JWT for authentication, the sercet token can be chenged in the .env file in the server folder:`

```
JWT_SECRET=
```

`It can be set the expires time of the token by changing the .env file in the server folder. In addtion: "s" means seconds, "m" means minutes, "h" means hours, etc`

```
JWT_EXPIRES_IN=30m
```

`To install all dependencies, client folder`

```
npm install
```

`To install all dependencies, server folder`

```
npm install
```

`Running the server by going to the server folder and it can be initialized with:`

```
npm start
```

`It can be watched using nodemon as a dev dependency`

```
npm install nodemon -D
```

```
npm run nodemon
```

`If using sql for the first time and the DB is cleared, it should appears the following message texts in the console:`

```
Budget table created
```

```
Users table created
```

`It runs the tests by using the new test module and the new fetch API by Node in the 18.0.0 version. Server should be running.`

```
npm run test
```

`By starting the server, it is posiible start the frontend (client). It uses Vite to pack and transpile the files in React. It usesExpress framework in the Node runtime environment. Go to the client folder and set:`

```
npm run dev
```

## 2. Start in production

`It is required to have been set the defined variables for the .env file in the server folder explained up above. In the client folder, it can create a build folder`

```
npm run build
```

`It will create a folder named dist with the file that will need to be moved to the /server/public folder and finally run the server in the server folder that will be displaying the frontend app as static`

```
npm start
```

## 3. Use the app

`For the first time, you should sign up. You should provide a Name, an email and a password, the password should be an 8 characters length and contains at least one letter and one number`

```
Name: Alvaro
```

```
Email: tlalvaro15@gmail.com
```

```
Password: aaaa0000
```

`The data provided above is already stored in both file and sql persistence, you could directly login`
