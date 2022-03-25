# :zap: Example MongoDB Connection

* This app connects to a MongoDB database, creates a collection, populates it with items, then drops the collection and closes the connection.
* Credit to Anish Karandikar (anishkny) who wrote the original code. I have taken it to modify and play with so I learn how to use a mlab mongodb database.
* Note: mLab MongoDB Heroku add-on has been shut down - suggest MongoDB Atlas (free tier) is used instead
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/example-mongodb-connection?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/example-mongodb-connection?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/example-mongodb-connection?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/example-mongodb-connection?style=plastic)

## :page_facing_up: Table of contents

* [:zap: FCC Mongo & Mongoose Challenges](#zap-fcc-mongo--mongoose-challenges)
	* [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
	* [:books: General info](#books-general-info)
	* [:signal_strength: Technologies](#signal_strength-technologies)
	* [:floppy_disk: Setup](#floppy_disk-setup)
	* [:computer: Code Examples](#computer-code-examples)
	* [:cool: Features](#cool-features)
	* [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
	* [:clap: Inspiration](#clap-inspiration)
	* [:file_folder: License](#file_folder-license)
	* [:envelope: Contact](#envelope-contact)

## :books: General info

* Database methods used: insert, update, find, drop and close
* Example: [MongoDB insert method](https://docs.mongodb.com/manual/reference/method/db.collection.insert/) used to insert a song document into a songs collection

## :signal_strength: Technologies

* [Express v4](https://expressjs.com/) Fast, unopinionated, minimalist web framework for Node.js
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
* [mongoose v5](https://mongoosejs.com/) object modelling for node.js.

## :floppy_disk: Setup

* Create MongoDB Atlas Cloud database (or local installed MongoDB database)
* Add PORT number and user access/database credentials to create database url(USER_NAME, USER_PASSWORD, DB_CLUSTER, PORT, DB_NAME & SESSION_SECRET) to a new `.env` file. These are used in `server.js`.
* Add your IP address to MongoDB Atlas Network Access whitelist. Or simply whitelist all (IP address 0.0.0.0/0).
* Run `npm run start` or `node server.js` for a dev server.
* Navigate to `http://localhost:4000/` (or other port selected/default port 3000) for home screen.
* The app will not automatically reload if you change any of the source files.

## :computer: Code Examples

* extract from `server.js` to close database

```javascript
// Only close the connection when your app is terminating.
db.close(function (err) {
	dbSongs += 'Closing db ' + process.env.DB;
	dbSongs +=
		'<script src="https://button.glitch.me/button.js" data-style="glitch"></script><div class="glitchButton" style="position:fixed;top:20px;right:20px;"></div>';
	if (err) throw err;
});
```

## :cool: Features

* Nothing cool. MongoDB collection methods have changed - this is old code

## :clipboard: Status & To-Do List

* Status: Working with original dependency versions
* To-Do: Update with latest database access methods

## :clap: Inspiration

* [Github code: Anish Karandikar](https://github.com/anishkny)

## :file_folder: License

* N/A

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
