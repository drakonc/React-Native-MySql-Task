CREATE DATABASE IF NOT EXISTS tasksdb;

USE tasksdb;

CREATE TABLE IF NOT EXISTS tasks(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    PRIMARY KEY (id)
);

INSERT INTO taskS (title,description) VALUES
                  ('Task 1', 'Some Description'),
                  ('Task 2', 'Some Description 2');