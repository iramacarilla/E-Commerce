/*/*"paths": {
    "api/books": {
      "post": {
        "tags": ["Book"],
        "summary": "Add a book",
        "security": [{ "Bearer": [] }],
        "parameters": [   
        ],
        "requestBody": {
          "description": "Info about a book",
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/AddingBookRequest"
              }
            }
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AddingBookResponse"
                }
              }
            }
          },
          "400": {
            "description": "Bad request (invalid id) / No token provided",
            "content": {}
          },
          "401": {
            "description": "Unauthorized (invalid access token)",
            "content": {}
          },
          "404": {
            "description": "Contact not found",
            "content": {}
          }
        }
      },
      "patch": {
        "tags": ["Training"],
        "summary": "Update book",
        "security": [{ "Bearer": [] }],
        "parameters": [
          {
            "name": "bookId",
            "in": "path",
            "description": "Book's id ('id' field in book's object)",
            "required": true,
            "type": "string"
          }
        ],
        "requestBody": {
          "description": "Book object",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/PatchBookRequest"
            }
          },
      
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PatchContactResponse"
                }
              }
            }
          },
          "400": {
            "description": "Bad request (invalid id) / No token provided",
            "content": {}
          },
          "401": {
            "description": "Unauthorized (invalid access token)",
            "content": {}
          },
          "404": {
            "description": "Call not found / Invalid user / Invalid session",
            "content": {}
          }
        }
      },
    }
  },

  "components": {
    "schemas": {
      "AddingBookRequest": {
        "required": ["title", "numberOfPages"],
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "description": "Book's title",
            "example": "Harry Potter"
          },
          "author": {
            "type": "string",
            "description": "Book's author",
            "example": "J. K. Rowling"
          },
          "year": {
            "type": "number",
            "description": "Book's year",
            "example": "1997"
          },
          "numberOfPages": {
            "type": "number",
            "description": "numberOfPages's title",
            "example": "123"
          }
        }
      },
      "AddingBookResponse": {
        "type": "object",
        "properties": {
           "title": {
            "type": "string",
            "description": "Book's title",
            "example": "Harry Porter"
          },
          "numberOfPages": {
            "type": "number",
            "description": "numberOfPages's title",
            "example": "123"
          }, 
           "bookId": {
            "type": "string",
            "description": "book's id",
            "example": "07ef3f4358b773378699381"
          },
          "year": {
            "type": "integer",
            "description": "Book's year",
            "example": "1997"
          },
          "numberOfPages": {
            "type": "integer",
            "description": "numberOfPages's title",
            "example": "123"
          }
        }
      }
    },
    "PatchBookRequest": {
        "required": [],
        "type": "object",
        "properties": {
          "review": {
            "type": "string",
            "description": "Book's review",
            "example": "Harry Potter"
          },
          "rating": {
            "type": "string",
            "description": "Book's rating",
            "example": "4"
          },
         
        }
      },
      "PatchBookResponse": {
        "required": [],
        "type": "object",
        "properties": {
          "review": {
            "type": "string",
            "description": "Book's review",
            "example": "Harry Potter"
          },
          "rating": {
            "type": "string",
            "description": "Book's rating",
            "example": "4"
          },
         
        }
      },
    "securitySchemes": {
      "Bearer": {
        "type": "http",
        "scheme": "bearer",
        "bearerFormat": "JWT"
      }
    }
  }
}*/

