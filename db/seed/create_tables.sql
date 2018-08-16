CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  unsplash_id VARCHAR(100),
  url TEXT,
  photographer VARCHAR(100),
  portfolio VARCHAR(200),
  location VARCHAR(100),
  views INTEGER,
  liked BOOLEAN,
  admin_approved BOOLEAN
);

CREATE TABLE quotes (
  id SERIAL PRIMARY KEY,
  author VARCHAR(50),
  category VARCHAR(50),
  liked BOOLEAN,
  admin_approved BOOLEAN
);