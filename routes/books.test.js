process.env.NODE_ENV = 'test'

const request = require('supertest')
const app = require('../app')



describe('GET /books & /books:id', function () {
    test('Gets all books', async function() {
        const response = await request(app).get(`/books`)
        expect(response.statusCode).toEqual(200)
        expect(response.body.books).toEqual(
            [
                {
                    "isbn": "0691161518",
                    "amazon_url": "http://a.co/eobPtX2",
                    "author": "Matthew Lane",
                    "language": "english",
                    "pages": 264,
                    "publisher": "Princeton University Press",
                    "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games",
                    "year": 2017
                }
            ]

        )
    })

    test('Gets a book', async function() {
        const response = await request(app).get(`/books/0691161518`)
        expect(response.statusCode).toEqual(200)
        expect(response.body).toEqual(
            {
                "book": {
                    "isbn": "0691161518",
                    "amazon_url": "http://a.co/eobPtX2",
                    "author": "Matthew Lane",
                    "language": "english",
                    "pages": 264,
                    "publisher": "Princeton University Press",
                    "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games",
                    "year": 2017
                }
            }
        )
    })
})

describe('POST /books', function () {
    test('Adds a book', async function() {
        const response = await request(app).post(`/books`).send({isbn: '0691161520', 
                                                                 amazon_url: "http://a.co/eobPtX2", 
                                                                 author: "Matthew Lane", 
                                                                 language: "english",
                                                                 pages: 264,
                                                                 publisher: "Princeton University Press",
                                                                 title: "Power-Up: Unlocking the Hidden Mathematics in Video Games",
                                                                 year: 2017
                                                                })
        expect(response.statusCode).toEqual(201)
        expect(response.body).toEqual(
            {
                book : {
                    "isbn": "0691161520",
                    "amazon_url": "http://a.co/eobPtX2",
                    "author": "Matthew Lane",
                    "language": "english",
                    "pages": 264,
                    "publisher": "Princeton University Press",
                    "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games",
                    "year": 2017
                }
            }
            
        )
    })
})

describe('PUT /books:if', function () {
    test('Updates a book', async function() {
        const response = await request(app).put(`/books/0691161520`).send({isbn: '0691161520', 
                                                                             amazon_url: "http://a.co/eobPtX2", 
                                                                             author: "Matthew Lane", 
                                                                             language: "spanish",
                                                                             pages: 264,
                                                                             publisher: "Princeton University Press",
                                                                             title: "Power-Up: Unlocking the Hidden Mathematics in Video Games",
                                                                             year: 2017
                                                                            })
        expect(response.statusCode).toEqual(200)
        expect(response.body).toEqual(
            {
                book : {
                    "isbn": "0691161520",
                    "amazon_url": "http://a.co/eobPtX2",
                    "author": "Matthew Lane",
                    "language": "spanish",
                    "pages": 264,
                    "publisher": "Princeton University Press",
                    "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games",
                    "year": 2017
                }
            }
        )
    })
})

describe('DELETE /books:id', function () {
    test('Deletes a book', async function() {
        const response = await request(app).delete(`/books/0691161520`)
        expect(response.statusCode).toEqual(200)
        expect(response.body).toEqual(
            {message: "Book deleted"}
        )
    })
})