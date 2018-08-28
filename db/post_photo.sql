INSERT INTO photos(url, photographer, portfolio, location, liked, admin_approved)
VALUES($1, $2, $3, $4, false, false)
RETURNING *;