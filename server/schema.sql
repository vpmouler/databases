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









/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
