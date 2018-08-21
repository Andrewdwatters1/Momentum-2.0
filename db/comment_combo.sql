INSERT INTO comments(content, photo_id, user_id) 
VALUES ($1, $2, $3)
RETURNING *;