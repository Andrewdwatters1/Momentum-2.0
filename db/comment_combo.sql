INSERT INTO comments(content, user_id, photo_id, quote_id)
VALUES ($1, $2, $3, (SELECT id FROM quotes WHERE quote LIKE $4))
RETURNING *; --