USE drops;

CREATE TABLE users
(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR
(90) UNIQUE,
    hashedPassword VARCHAR
(90),
    username VARCHAR
(90),
);

CREATE TABLE notes (
    note_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    wine VARCHAR(40) NOT NULL,
    `date` DATE NOT NULL,
    price VARCHAR(40) NOT NULL,
    `year` VARCHAR(40) NOT NULL,
    variety VARCHAR(40) NOT NULL,
    winery VARCHAR(80),
    region VARCHAR(40),
    color VARCHAR(40) NOT NULL,
    aroma VARCHAR(40),
    body VARCHAR(40),
    taste VARCHAR(55) NOT NULL,
    finish VARCHAR(55) NOT NULL,
    mynotes VARCHAR(255),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users (id)
  ) ENGINE = InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET = utf8;

ALTER TABLE notes
ADD CONSTRAINT user_id
FOREIGN KEY (user_id)
REFERENCES user(id)
ON DELETE CASCADE