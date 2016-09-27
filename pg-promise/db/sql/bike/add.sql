/*
    Inserts a new bike record.

    NOTE: We only add schema here to demonstrate the ability of class QueryFile
    to pre-format SQL with static formatting parameters when needs to be.
*/
INSERT INTO ${schema~}.Bike(user_id, style, brand, model, color, brakes, speeds, handlebars)
VALUES(${userId}, ${style}, ${brand}, ${model}, ${color}, ${brakes}, ${speeds}, ${handlebars}) -- parameter names come directly from the HTTP handler;
RETURNING id
