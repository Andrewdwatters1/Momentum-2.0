SELECT c.user_id, c.photo_id, c.content, u.picture, u.name
FROM comments c
JOIN photos p ON p.id = c.photo_id
JOIN users u ON u.id = c.user_id
WHERE c.photo_id = $1;