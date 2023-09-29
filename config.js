/** Common config for bookstore. */


const USERNAME = 'USERNAME'
const PASSWORD = 'PASSWORD'

let DB_URI = `postgresql://${USERNAME}:${PASSWORD}@localhost:5432`

if (process.env.NODE_ENV === "test") {
  DB_URI = `${DB_URI}/books-test`;
} else {
  DB_URI = process.env.DATABASE_URL || `${DB_URI}/books`;
}


module.exports = { DB_URI };