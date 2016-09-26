/*
    Inserts a new bike record.

    NOTE: We only add schema here to demonstrate the ability of class QueryFile
    to pre-format SQL with static formatting parameters when needs to be.
*/
INSERT INTO ${schema~}.Bike(user_id, style)
VALUES(${userId}, ${style})
RETURNING id
