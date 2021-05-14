
# Catchphrase REST API

An API built with Express and MongoDB.


## API Reference

```http
https://catchphrase-express-rest-api.herokuapp.com/catchphrases
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

[Docs](https://catchphrase-express-rest-api.herokuapp.com/)

[Demo](https://catchphrase-express-rest-api.herokuapp.com/catchphrases)
