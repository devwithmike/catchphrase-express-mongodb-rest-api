
# Catchphrase Express and MongoDB REST API

An API built with Express and MongoDB. Documented with Swagger.

Tutorial available at: [dev.to](https://dev.to/mikefmeyer/build-a-node-js-express-rest-api-with-mongodb-and-swagger-3de9)


## API Reference

```http
https://express-mongodb-rest-api.herokuapp.com/catchphrases
```

#### Get all catchphrases

```http
  GET /catchphrases
```

#### Get catchphrase

```http
  GET /catchphrases/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of catchphrase to fetch |


#### Add catchphrase

```http
  POST /catchphrases
```


```json
{
	"movieName": "AUSTIN POWERS: INTERNATIONAL MAN OF MYSTERY",
	"catchphrase": "Yeah baby, yeah!",
	"movieContext": "Austin Powers, conversing with his partner, Mrs. Kensington"
}

```

#### Update catchphrase

```http
  PATCH /catchphrases/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of catchphrase to update |


```json
{
	"movieName": "AUSTIN POWERS: INTERNATIONAL MAN OF MYSTERY",
	"catchphrase": "Yeah baby, yeah!",
	"movieContext": "Austin Powers, conversing with his partner, Mrs. Kensington"
}

// All three fields are optional when updating

```

#### Remove catchphrase

```http
  DELETE /catchphrases/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of catchphrase to delete |


## Links

[Docs](https://express-mongodb-rest-api.herokuapp.com/)

[Demo](https://express-mongodb-rest-api.herokuapp.com/catchphrases)

[Tutorial](https://dev.to/mikefmeyer/build-a-node-js-express-rest-api-with-mongodb-and-swagger-3de9)
