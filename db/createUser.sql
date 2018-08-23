INSERT INTO users (auth_id, name, email, picture)
VALUES (${sub}, ${name}, ${email}, ${picture})
RETURNING *;