# Models

A model is a data structure that represents a database table.

## ORM (Object-Relational Mapping)

ORM or Object-Relational Mapping is a way to map a database table to a data structure. Writing queries manually is tedious and error-prone process.
Manual query should only be written when complex queries are needed.

## Sequelize

Sequelize is a ORM (Object-Relational Mapping) library for Node.js, particularly for MySQL.
A detailed guide can be found in the [Sequelize documentation](https://sequelize.org/docs/v6/other-topics/typescript/).

## Good Practices

When working with nodejs it is always a good practice to expose a single `index.js`/`index.ts` file that exports the different modules.
In our case we exported `Product` from `index.ts`. This is a good practice because it makes it easier to import the module.

If we had more than one model in our models directory we would have exported them in similar fashion.

    ```ts
    export {
        Product,
        Category,
        User,
    }
    ```
