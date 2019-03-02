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
    title VARCHAR(100) NOT NULL,
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
<<<<<<< HEAD

    ('What did the chinese food restaurant name their band?', 'Wok n Roll', '2 days ago', 7, 1),
    ('Important question', 'How much wood could a woodchuck chuck if a woodchuck couldnt chuck wood?', '1 day ago', 3, 2),
    ('Insert title here', 'Insert pond picture here', 'a week ago', 3, 3),
    ('Breaking News!', 'Baracka Flaka Obama challenges Donald Drumpf to engage in fisticuffs!!!', '1 minute ago', 7, 4),
    ('BEST FILMS OF THE DECADE', 'Bee Movie, A Bugs Life, Shrek, The Princess and the Frog, Frog Kingdom', '11 hours ago', 4, 5),
    ('Favorite tea?', 'As the title says, what is your favorite type of tea?', '9 hours ago', 1, 2),
    ('LeBron... King or Joker?', 'Is LeBron James a king or is he a joker?', '11 minutes ago', 5, 6),
    ('Kimchi fried rice recipe', 'Do you have any links to recipes for kimchi fried rice?', 'just now', 5, 7),
    ('Meditation Routine?', 'Does anyone have a daily/weekly meditation routine that they want to share?', '22 hours ago', 6, 8),
    ('Punny title', 'Halo, water you dewing right meow?', '10 minutes ago', 2, 1),
    ('Queen Elizardbeth II', 'Human or Lizard?', '3 weeks ago', 7, 4),
    ('To all frogs & toads...', 'How high can you jump?', '1 hour ago', 2, 2),
    ('Best Pond Pun', 'The names Pond... James Pond', '18 hours ago', 1, 3);

INSERT INTO comments
    (body, user_id, post_id, comment_id)
VALUES
    ('great post, would comment again', 1, 2, null),
    ('I can jump 5 feet high', 2, 12, null),
    ('green tea', 3, 6, null),
    ('your comment is trash and so are you', 2, 2, 1),
    ('I can jump 6 feet high', 4, 12, 2),
    ('$1000 on Baracka', 1, 4, null),
    ('No way jose, my moneys on Drumpf', 6, 4, 6),
    ('What about Shrek 2?!', 5, 5, null),
    ('Why yes, it was a splendid movie', 7, 5, 8),
    ('My favorite recipe is from Maangchi. You can find her on youtube or buy her book :)', 6, 8, null),
    ('Yes that is also my favorite recipe! Lettuce meat and be friends', 7, 8, 10),
    ('My meditation is as follows: I have no meditation routine.', 4, 9, null),
    ('Wow you are so punny m8', 2, 13, null),
    ('No that was not punny and you should be ashamed', 7, 13, 13),
    ('LBJ is the GOAT', 3, 7, null),
    ('No way are you blind?', 6, 7, 15),
    ('That was funny... but now I am craving beef and broccoli', 4, 1, null),
    ('If you call right now you can still make it in time for the lunch special!', 7, 1, 17),
    ('Definitely Lizard', 2, 13, null),
    ('Human!', 6, 13, null);

INSERT INTO croaks
    (croak_value, croaker_id, post_id, comment_id)
VALUES
    (1, 1, 1, null),
    (-1, 2, 1, null),
    (1, 3, 1, null),
    (1, 4, 1, null),
    (1, 5, 1, null),
    (-1, 6, 1, null),
    (1, 7, 1, null),

    (1, 1, 2, null),
    (-1, 1, 2, null),
    (-1, 1, 2, null),
    (-1, 1, 2, null),
    (1, 1, 2, null),

    (-1, 1, 3, null),
    (-1, 2, 3, null),
    (-1, 3, 3, null),
    (-1, 4, 3, null),
    (-1, 5, 3, null),
    (-1, 6, 3, null),
    (-1, 7, 3, null),

    (-1, 1, 4, null),
    (1, 3, 4, null),
    (-1, 4, 4, null),
    (-1, 5, 4, null),
    (1, 6, 4, null),
    (1, 7, 4, null),

    (1, 1, 5, null),
    (1, 2, 5, null),
    (1, 3, 5, null),
    (1, 4, 5, null),
    (-1, 5, 5, null),
    (-1, 6, 5, null),
    (-1, 7, 5, null),

    (1, 1, 6, null),
    (1, 3, 6, null),
    (1, 6, 6, null),

    (-1, 2, 7, null),
    (1, 4, 7, null),
    (-1, 6, 7, null),
    (1, 7, 7, null),

    (1, 3, 8, null),

    (1, 1, 9, null),
    (1, 2, 9, null),
    (-1, 5, 9, null),
    (1, 6, 9, null),

    (-1, 1, 10, null),
    (-1, 2, 10, null),
    (-1, 3, 10, null),
    (-1, 4, 10, null),
    (-1, 6, 10, null),
    (-1, 7, 10, null),

    (1, 3, 11, null),
    (-1, 4, 11, null),
    (-1, 5, 11, null),
    (-1, 6, 11, null),
    (-1, 7, 11, null),

    (1, 1, 12, null),
    (1, 6, 12, null),

    (-1, 4, 13, null),
    (-1, 5, 13, null),
    (1, 6, 13, null),

=======
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
>>>>>>> 3129d9102c0dad51bb9ac9065053b128427ea110
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
<<<<<<< HEAD
    (-1, 7, null, 4);

=======
    (-1, 7, null, 4)
>>>>>>> 3129d9102c0dad51bb9ac9065053b128427ea110


