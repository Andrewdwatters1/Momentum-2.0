INSERT INTO photos(url, photographer, portfolio, location, views, liked, admin_approved)
VALUES($1, $2, $3, $4, $5, false, false);

SELECT * FROM photos;