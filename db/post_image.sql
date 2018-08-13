INSERT INTO images(img, author, submitted_by, rating)
VALUES($1, $2, $3, null);

SELECT * FROM images;