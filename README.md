# Nodejs_usersdata_CURD-

## Table of contents

- [Introduction](#introduction)
- [Run](#run)
- [Technology](#technology)
- [Features](#features)
- [License](#license)

## Introduction

It’s  Rest-API CURD operation for contacts (users), and Login module for the same contacts (users) Using JWT authentication

NOTE: Please read the RUN section before opening an issue.

## Run

To run this application, you have to set your own environmental variables. For security reasons, some variables have been hidden from view and used as environmental variables with the help of dotenv package. Below are the variables that you need to set in order to run the application:


- MONGODB_URL: This is the Mongodb Url (string).

- JWT_KEY:  This is the Jwt key_Secret (string).


After you've set these environmental variables in the .env file at the root of the project, and intsall node modules using  `npm install`

Now you can run `npm start` in the terminal and the application should work.

## Technology

The application is built with:

- node.js
- Express
- Mongodb

## Features

 • Register User
 • Login User
 • Fetch Single User data
 • Fetch All Users
 • Update User data  
 • Delete User Data 


 
## License

[![License](https://img.shields.io/:License-MIT-blue.svg?style=flat-square)](http://badges.mit-license.org)

- MIT License
- Copyright 2022 © [Muhammed Razi BK](https://github.com/RAZIBK/)
