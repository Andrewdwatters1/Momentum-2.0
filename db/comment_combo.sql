INSERT INTO comments(content, user_id, photo_id)
VALUES ($1, $2, $3)
RETURNING *;