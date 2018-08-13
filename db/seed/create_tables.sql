CREATE TABLE quotes(
  id SERIAL PRIMARY KEY, 
  quote VARCHAR(500),
  author VARCHAR(40),
  submitted_by VARCHAR(40),
  rating INTEGER
);

CREATE TABLE images(
  id SERIAL PRIMARY KEY,
  img TEXT,
  author VARCHAR(40),
  submitted_by VARCHAR(40),
  rating INTEGER
);
