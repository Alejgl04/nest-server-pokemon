<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


# Execute a development

1. Clone the repository

2. Execute
```
 yarn install
```

3. Nest cli installed
```
  npm i -g @nestjs/cli
```

4. Execute database with docker
```
docker-compose up -d
```

5. Clone file __.env.develop__ and rename to __.env__

```
.env

```

6. Fill the enviroment vars in ```.env````

7. Execute the app with:
__yarn start:dev__


8. Rebuild database with seed
```
  localhost:3000/api/v2/seed
``` 


## Stack 
* MongoDB
* Nest
* Docker
* Table plus