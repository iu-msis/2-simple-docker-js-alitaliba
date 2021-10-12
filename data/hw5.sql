CREATE DATABASE IF NOT EXISTS msisdb;
USE msisdb;

-- HW 5 --
CREATE TABLE books (
	id int PRIMARY KEY AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    author varchar(255) UNIQUE NOT NULL,
    year int NOT NULL,
    publisher varchar(255),
	page int,
    MSRP int
);

INSERT INTO books (id, title, author, year, publisher, page, MSRP) VALUES 
(1, '12 Rules for Life: An Antidote to Chaos', 'Jordan B. Peterson', 2018, 'Random House Canada Penguin Allen Lane (UK)', 448, 15),
(2, '1984 (Signet Classics)', 'George Orwell', 2017, 'Harvill Secker', 328, 6),
(3, 'A Man Called Ove: A Novel', 'Fredrik Backmna', 2016, 'Atri Books', 368, 8),
(4, 'A Wrinkle in Time (Time Quintet)', 'Madeleine L Engle', 2018, 'Farra, Straus and Giroux', 256, 5),
(5, 'Alexander Haimlton', 'Ron Chernow', 2016, 'Penguin Group', 818, 13);

SELECT * FROM books;


