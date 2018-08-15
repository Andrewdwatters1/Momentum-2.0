INSERT INTO quotes(author, quote, category, liked, admin_approved)
VALUES($1, $2, $3, false, false)
RETURNING *;