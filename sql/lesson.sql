### Limits
/*

*/

SELECT occurred_at, account_id, channel
FROM web_events
LIMIT 15; 

### Order_By_statements
default is ascending order but you can add DESC to sort it in descending order;
ex. ORDER BY total_amt_usd 

SELECT id, occurred_at, total_amt_usd
FROM orders
ORDER BY occurred_at 
LIMIT 10;

SELECT id, account_id, total_amt_usd
FROM orders
ORDER BY total_amt_usd DESC
LIMIT 5;

SELECT id, account_id, total_amt_usd
FROM orders
ORDER BY total_amt_usd 
LIMIT 20;

### ORDER BY part II (2 columns)
SELECT id, account_id, total_amt_usd
FROM orders
ORDER BY account_id, total_amt_usd DESC;

SELECT id, account_id, total_amt_usd
FROM orders
ORDER BY total_amt_usd DESC, account_id;

### WHERE
/*
    Can use >, <, >=, <=, =, !=
    has to be after from
*/

SELECT *
FROM orders
WHERE gloss_amt_usd >= 1000
LIMIT 5;


SELECT *
FROM orders
WHERE total_amt_usd < 500
LIMIT 10;

/* single quotes unless data has double quotes */
SELECT name, website, primary_poc
FROM accounts
WHERE name = 'Exxon Mobil';

### AS
SELECT id, account_id, (standard_amt_usd/standard_qty) AS unit_price
FROM orders
LIMIT 10;


SELECT id, account_id, 
poster_amt_usd/(poster_amt_usd + gloss_amt_usd + standard_amt_usd) AS poster_percent
FROM orders
LIMIT 10;

### text introduction to logical operators
/*
    LIKE - performs similar to using where and = 
    but are for cases when you might not know excatly what you are looking for

    IN - perform similiar to using where and =
    but for more that one condition

    NOT is use with IN and LIKE to select all of the rows NOT LIKE or NOT IN a certain condition

    AND & BETWEEN allows you to combine operations where all combined conditions must be true

    OR allows you to combine operations where at least one of the combined conditions must be true
*/

