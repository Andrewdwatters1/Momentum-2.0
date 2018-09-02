SELECT f.id, p.url, q.quote
FROM favorites f
JOIN photos p ON p.id = f.photo_id
JOIN quotes q ON q.id = f.quote_id
WHERE f.user_id = $1;