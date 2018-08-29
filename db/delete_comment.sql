DELETE FROM comments
WHERE $1 = id AND $2 = photo_id;