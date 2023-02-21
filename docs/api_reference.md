# API REFERENCE

This page provides a reference for all endpoints and operations available in the API.

## Base URL
`https://example.com/api/v1`

## Authentication

All endpoints require authentication via an API key. You can obtain an API key by creating an account and generating one in the settings page.

Include the API key in the Authorization header of your requests:

```
Authorization: Bearer <api_key>
```

## Error responses

All error responses will follow this format:

```
{
  "message": "error message",
  "code": "error_code",
  "details": "detailed error message"
}
```

## Endpoints

`**GET /users**`
Retrieves a list of all users.

Query parameters

* `**page**` (optional): page number for pagination
* `**limit**` (optional): maximum number of results per page (default: 20)

Response

```
{
  "data": [
    {
      "id": 1,
      "username": "johndoe",
      "email": "johndoe@example.com"
    },
    {
      "id": 2,
      "username": "janedoe",
      "email": "janedoe@example.com"
    }
  ],
  "page": 1,
  "limit": 20,
  "total": 2
}
```

`*POST /users*`
Creates a new user.

Request body
```
{
  "username": "newuser",
  "email": "newuser@example.com",
  "password": "password"
}
```

Response

```
{
  "id": 3,
  "username": "newuser",
  "email": "newuser@example.com"
}
```
`**GET /users/:id**`

Retrieves a single user by ID.

Path parameters

* `id`: the ID of the user to retrieve

Response
```
{
  "id": 1,
  "username": "johndoe",
  "email": "johndoe@example.com"
}
```
