SELECT *
FROM quotes q 
JOIN photos p ON p.admin_approved = q.admin_approved
WHERE p.admin_approved = true AND q.admin_approved
ORDER BY RANDOM()
LIMIT 600;