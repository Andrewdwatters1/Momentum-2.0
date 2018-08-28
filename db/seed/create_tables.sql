CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  unsplash_id VARCHAR(100), -- CAN DROP
  url TEXT,
  photographer VARCHAR(100), 
  portfolio VARCHAR(200), -- CAN DROP
  location VARCHAR(100), 
  views INTEGER, -- CAN DROP
  liked BOOLEAN,
  admin_approved BOOLEAN
);

CREATE TABLE quotes (
  id SERIAL PRIMARY KEY,
  author VARCHAR(50), 
  category VARCHAR(50), 
  liked BOOLEAN,
  admin_approved BOOLEAN,
  quote TEXT
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    auth_id TEXT,
    name VARCHAR,
    email VARCHAR, 
    picture TEXT
);

CREATE TABLE comments ( -- good
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  photo_id INTEGER REFERENCES photos,
  content VARCHAR(750)
);