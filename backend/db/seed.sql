DROP DATABASE IF EXISTS ribbit;
CREATE DATABASE ribbit;

\c ribbit;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS comments;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    email VARCHAR(40) NOT NULL,
    karma INT
);

CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    body TEXT NOT NULL,
    user_id INT REFERENCES users(id) NOT NULL,
    upcroaks INT,
    downcroaks INT
);

CREATE TABLE comments
(
    id SERIAL PRIMARY KEY,
    body TEXT NOT NULL,
    user_id INT REFERENCES users(id) NOT NULL,
    post_id INT REFERENCES posts(id) NOT NULL,
    comment_id INT REFERENCES comments(id),
    upcroaks INT,
    downcroaks INT
);

INSERT INTO users
    (username, email, karma)
VALUES
    ('bob_the_builder', 'bob@bobbybuilds.com', 888),
    ('kermit_the_frog', 'kermit@hotmail.com', 9000),
    ('frog_kid', 'dannydevito@IASIP.com', 28709);

INSERT INTO posts
    (body, user_id, upcroaks, downcroaks)
VALUES
    ('What is your favorite type of tea?', 1, 749, 92),
    ('How much wood could a woodchuck chuck if a woodchuck couldnt chuck wood?', 3, 777, 7),
    ('How high can you jump?', 2, 19, 2);

INSERT INTO comments
    (body, user_id, post_id, comment_id, upcroaks, downcroaks)
VALUES
    ('great post, would comment again', 1, 2, null, 5, 4),
    ('I can jump 5 feet high', 2, 3, null, 89, 17),
    ('green tea', 3, 1, null, 100, 8);

