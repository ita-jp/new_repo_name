CREATE TABLE users
(
    id       LONG PRIMARY KEY    NOT NULL AUTO_INCREMENT,
    email    VARCHAR(256) UNIQUE NOT NULL,
    password VARCHAR(50)         NOT NULL,
    username VARCHAR(50)         NOT NULL,
    enabled  BOOLEAN             NOT NULL
);