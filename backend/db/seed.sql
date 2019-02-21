DROP DATABASE IF EXISTS ribbit;
CREATE DATABASE ribbit;

\c ribbit;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    username VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(40) NOT NULL,
    karma INT
);
´
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
    (username, email, karma)
VALUES
    ('bob_the_builder', 'bob@bobbybuilds.com', 888),
    ('kermit_the_frog', 'kermit@hotmail.com', 9000),
    ('frog_kid', 'dannydevito@IASIP.com', 28709);

INSERT INTO subribbits
    (name, info, subscribbitors)
VALUES
    ('r/Punny', 'This subribbit is a place to post & comment on punny stuff', 75982),
    ('r/AskRibbit', 'Welcome to AskRibbit, feel free to ask any questions that you want answered', 938017),
    ('r/Ponds', 'Here you can post pictures of your favorite pond to chill at', 17193);

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
    ('green tea', 3, 1, null, 100, 8);
