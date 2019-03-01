DROP DATABASE IF EXISTS ribbit;
CREATE DATABASE ribbit;

\c ribbit;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    username VARCHAR(20) UNIQUE NOT NULL,
    password_digest VARCHAR NOT NULL,
    email VARCHAR(40) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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
    created_at VARCHAR NOT NULL,
    user_id INT REFERENCES users(id) NOT NULL,
    sub_id INT REFERENCES subribbits(id) NOT NULL
);

CREATE TABLE comments
(
    id SERIAL PRIMARY KEY,
    body TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT
CURRENT_TIMESTAMP,
    user_id INT REFERENCES users(id) NOT NULL,
    post_id INT REFERENCES posts(id) NOT NULL,
    comment_id INT REFERENCES comments(id)
);

CREATE TABLE croaks
(
    id SERIAL PRIMARY KEY,
    croak_value INT NOT NULL,
    croaker_id INT REFERENCES users(id),
    post_id INT REFERENCES posts(id),
    comment_id INT REFERENCES comments(id)
);

INSERT INTO users
    (username, password_digest, email)
VALUES
    ('bob_the_builder', 'abc123', 'bob@bobbybuilds.com'),
    ('kermit_the_frog', 'ilovefrogs9000', 'kermit@hotmail.com'),
    ('frog_kid', 'password', 'dannydevito@IASIP.com'),
    ('homer_simpson', 'duffbeer4lyfe', 'homer@simpson'),
    ('clairebear841', 'bearygoodpassword1234', 'claire@gmail.com'),
    ('ed_edd_eddy', 'derp101', 'edEddEddy@ed.edu'),
    ('samIAm', 'kjewknfdsalei482794', 'sam@samMail.com');

INSERT INTO subribbits
    (name, info, subscribbitors)
VALUES
    ('punny', 'This subribbit is a place to post & comment on punny stuff', 75982),
    ('askRibbit', 'Welcome to AskRibbit, feel free to ask any questions that you want answered', 938017),
    ('ponds', 'Here you can post pictures of your favorite pond to chill at', 17193),
    ('tadPOLITICS', 'A subribbit to share anything related to politics', 2),
    ('moo-vies', 'Everything from blockbusters to indie films', 11111),
    ('sports', 'The best sports subribbit in all of ribbit.com', 840192),
    ('cooking', 'Post recipes, videos, etc', 938),
    ('healthyHabits', 'Anything related to implementing healthy habits into your life', 8888);

INSERT INTO posts
    (title, body, created_at, user_id, sub_id)
VALUES
    ('Punny title', 'Halo, water you dewing right meow?', '10 minutes ago', 2, 1),
    ('What did the chinese food restaurant name their band?', 'Wok n Roll', 7, 1),
    ('Favorite tea?', 'As the title says, what is your favorite type of tea?', '9 hours ago', 1, 2),
    ('Important question', 'How much wood could a woodchuck chuck if a woodchuck couldnt chuck wood?', '1 day ago', 3, 2),
    ('To all frogs & toads...', 'How high can you jump?', '1 hour ago', 2, 2),
    ('Insert title here', 'Insert pond picture here', 'a week ago', 3, 3),
    ('Breaking News!', 'Baracka Flaka Obama challenges Donald Drumpf to engage in fisticuffs!!!', '1 minute ago', 7, 4),
    ('BEST FILMS OF THE DECADE', 'Bee Movie, A Bugs Life, Shrek, The Princess and the Frog, Frog Kingdom', '11 hours ago', 4, 5),
    ('LeBron: King or Joker?', 'Is LeBron James a king or is he a joker?', 5, 6),
    ('Kimchi fried rice recipe', 'Do you have any links to recipes for kimchi fried rice?', 'just now', 5, 7),
    ('Meditation Routine?', 'Does anyone have a daily/weekly meditation routine that they want to share?', '22 hours ago', 6, 8)

INSERT INTO comments
    (body, user_id, post_id, comment_id)
VALUES
    ('great post, would comment again', 1, 2, null),
    ('I can jump 5 feet high', 2, 3, null),
    ('green tea', 3, 1, null),
    ('your comment is trash and so are you', 2, 2, 1),
    ('I can jump 6 feet high', 4, 3, 2),
    ('$1000 on Baracka', 1, 7, null),
    ('No way jose, my moneys on Drumpf', 6, 7, 7),
    ('What about Shrek 2?!', 5, 6, null),
    ('Why yes, it was a splendid movie', 7, 6, 8),
    ('My favorite recipe is from Maangchi. You can find her on youtube or buy her book :)', 6, 7, null),
    ('Yes that is also my favorite recipe! Lettuce meat and be friends', 7, 7, 10),
    ('My meditation is as follows: I have no meditation routine.', 4, 8, null);

INSERT INTO croaks
    (croak_value, croaker_id, post_id, comment_id)
VALUES
    (1, 1, null, 1),
    (1, 2, null, 1),
    (-1, 4, null, 1),
    (1, 5, null, 1),
    (1, 6, null, 1),
    (1, 7, null, 1),
    (-1, 1, null, 2),
    (-1, 2, null, 2),
    (-1, 4, null, 2),
    (-1, 7, null, 2),
    (1, 1, null, 3),
    (-1, 2, null, 3),
    (-1, 5, null, 3),
    (1, 6, null, 3),
    (1, 7, null, 3),
    (1, 1, null, 4),
    (-1, 2, null, 4),
    (-1, 3, null, 4),
    (-1, 4, null, 4),
    (-1, 5, null, 4),
    (-1, 6, null, 4),
    (-1, 7, null, 4)


