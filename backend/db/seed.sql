DROP DATABASE IF EXISTS ribbit;
CREATE DATABASE ribbit;

\c ribbit;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    username VARCHAR(20) UNIQUE NOT NULL,
    password VARCHAR(30) NOT NULL,
    email VARCHAR(40) NOT NULL
);

CREATE TABLE subribbits
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) UNIQUE NOT NULL,
    info TEXT NOT NULL,
    subscribbitors INT NOT NULL
);

CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    body TEXT NOT NULL,
    user_id INT REFERENCES users(id) NOT NULL,
    sub_id INT REFERENCES subribbits(id) NOT NULL,
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
    (username, password, email)
VALUES
    ('bob_the_builder', 'abc123', 'bob@bobbybuilds.com'),
    ('kermit_the_frog', 'ilovefrogs9000', 'kermit@hotmail.com'),
    ('frog_kid', 'password', 'dannydevito@IASIP.com'),
    ('homer_simpson', 'duffbeer4lyfe', 'homer@simpson'),
    ('clairebear841', 'bearygoodpassword1234', 'claire@gmail.com');

INSERT INTO subribbits
    (name, info, subscribbitors)
VALUES
    ('punny', 'This subribbit is a place to post & comment on punny stuff', 75982),
    ('askRibbit', 'Welcome to AskRibbit, feel free to ask any questions that you want answered', 938017),
    ('ponds', 'Here you can post pictures of your favorite pond to chill at', 17193);

INSERT INTO posts
    (title, body, user_id, sub_id, upcroaks, downcroaks)
VALUES
    ('What is your favorite type of tea?', 'See title', 1, 2, 749, 92),
    ('Important question', 'How much wood could a woodchuck chuck if a woodchuck couldnt chuck wood?', 3, 2, 777, 7),
    ('To all frogs & toads...', 'How high can you jump?', 2, 2, 19, 2),
    ('Punny title', 'Halo, water you dewing right meow?', 2, 1, 89, 90),
    ('Insert title here', 'Insert pond picture here', 3, 3, 999, 1);

INSERT INTO comments
    (body, user_id, post_id, comment_id, upcroaks, downcroaks)
VALUES
    ('great post, would comment again', 1, 2, null, 5, 4),
    ('I can jump 5 feet high', 2, 3, null, 89, 17),
    ('green tea', 3, 1, null, 100, 8),
    ('your comment is trash and so are you', 2, 2, 1, 900, 87),
    ('I can jump 6 feet high', 4, 3, 2, 3, 0);
