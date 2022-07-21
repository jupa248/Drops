DROP TABLE IF EXISTS users;

CREATE TABLE users
(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR
(90) UNIQUE,
    hashedPassword VARCHAR
(90),
    firstname VARCHAR
(90),
    lastname VARCHAR
(90),
 city VARCHAR
(90), 
language VARCHAR
(90)
);

CREATE TABLE `notes` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `wine` VARCHAR(40) NOT NULL,
    `date` DATE NOT NULL,
    `price` VARCHAR(40) NOT NULL,
    `year` VARCHAR(40) NOT NULL,
    `variety` VARCHAR(40) NOT NULL,
    `winery` VARCHAR(80),
    `region` VARCHAR(40),
    `color` VARCHAR(40) NOT NULL,
    `aroma` VARCHAR(40),
    `body` VARCHAR(40),
    `taste` VARCHAR(55) NOT NULL,
    `finish` VARCHAR(55) NOT NULL,
    `mynotes` VARCHAR(255),
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8;
