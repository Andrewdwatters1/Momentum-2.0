DELETE FROM comments
WHERE id = $1 AND photo_id = $2;