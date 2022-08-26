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
/*
    '%google%' -> has google but wildcards on either end of google

*/
### LIKE

SELECT name
FROM accounts
WHERE name LIKE 'C%';

SELECT name 
FROM accounts
WHERE name LIKE '%one%';

SELECT name
FROM accounts
WHERE name LIKE '%s';


### IN

SELECT name, primary_poc, sales_rep_id
FROM accounts
WHERE name IN ('Walmart', 'Target', 'Nordstrom');

SELECT * 
FROM web_events
WHERE channel IN ('organic', 'adwords');

### NOT

SELECT name, primary_poc, sales_rep_id
FROM accounts
WHERE name NOT IN ('Walmart', 'Target', 'Nordstrom');

SELECT *
FROM web_events
WHERE channel NOT IN ('organic', 'adwords');

SELECT name
FROM accounts
WHERE name NOT LIKE 'C%';

SELECT name
FROM accounts
WHERE name NOT LIKE '%one%';

SELECT name 
FROM accounts
WHERE name NOT LIKE '%s';

###AND and BETWEEN


SELECT id, standard_qty, poster_qty, gloss_qty
FROM orders
WHERE standard_qty > 1000 AND poster_qty = 0 AND gloss_qty = 0;

SELECT name
FROM accounts
WHERE name NOT LIKE 'C%' AND name NOT LIKE '%s';

SELECT gloss_qty, occurred_at
FROM orders
WHERE gloss_qty BETWEEN 24 AND 29;

/*
    TImestamp need work on

    SELECT *
    FROM web_events
    WHERE channel IN ('organic', 'adwords') AND occurred_at BETWEEN '2016-01-01' AND '2017-01-01'
    ORDER BY occurred_at DESC;
*/

### OR

SELECT id
FROM orders 
WHERE (gloss_qty > 4000 OR poster_qty > 4000);

SELECT *
FROM orders
WHERE standard_qty = 0 
AND (gloss_qty > 1000 or poster_qty > 1000);


SELECT name, primary_poc 
FROM accounts
WHERE (name LIKE 'C%' OR name LIKE 'W%')
            AND ((primary_poc LIKE '%ana%' OR primary_poc LIKE '%Ana%')
            AND primary_poc NOT LIKE '%eana%');


/*
    Statement	How to Use It	                Other Details
    SELECT	    SELECT Col1, Col2, ...	        Provide the columns you want
    FROM	    FROM Table	                    Provide the table where the columns exist
    LIMIT	    LIMIT 10	                    Limits based number of rows returned
    ORDER BY	ORDER BY Col	                Orders table based on the column. Used with DESC.
    WHERE	    WHERE Col > 5	                A conditional statement to filter your results
    LIKE	    WHERE Col LIKE '%me%'	        Only pulls rows where column has 'me' within the text
    IN	        WHERE Col IN ('Y', 'N')	        A filter for only rows with column of 'Y' or 'N'
    NOT	        WHERE Col NOT IN ('Y', 'N')	    NOT is frequently used with LIKE and IN
    AND	        WHERE Col1 > 5 AND Col2 < 3	    Filter rows where two or more conditions must be true
    OR	        WHERE Col1 > 5 OR Col2 < 3	    Filter rows where at least one condition must be true
    BETWEEN	    WHERE Col BETWEEN 3 AND 5	    Often easier syntax than using an AND
*/