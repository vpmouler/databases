DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  objectId INT NOT NULL AUTO_INCREMENT,
  roomname char(200),
  username char(25),
  text char(200),
  PRIMARY KEY (objectId)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE username (
  userId INT NOT NULL AUTO_INCREMENT,
  username char(25),
  PRIMARY KEY (userId)
);

CREATE TABLE testMessages (
  objectId INT NOT NULL AUTO_INCREMENT,
  roomname char(200),
  userId INT,
  PRIMARY KEY (objectId),
  FOREIGN KEY (userId) REFERENCES username (userId)
);








/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
