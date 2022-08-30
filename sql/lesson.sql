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


### JOIN

SELECT accounts.*, orders.*
FROM accounts
JOIN orders
ON orders.account_id = accounts.id;


SELECT orders.standard_qty, orders.gloss_qty, orders.poster_qty, accounts.website, accounts. primary_poc
FROM orders
JOIN accounts
ON orders.account_id = accounts.id;


SELECT a.primary_poc, w.channel, w.occurred_at, a.name
FROM web_events AS w
JOIN accounts AS a
ON w.account_id = a.id
WHERE a.name = 'Walmart';

SELECT r.name AS region_name, s.name AS sales_rep_name, a.name AS account_name
FROM sales_reps AS s
JOIN accounts AS a
ON a.sales_rep_id = s.id
JOIN region AS r
ON s.region_id = r.id
ORDER BY a.name;

SELECT r.name AS region_name, a.name AS account_name, 
o.total_amt_usd/(o.total + 0.01) AS unit_price
FROM accounts AS a
JOIN sales_reps AS s
ON a.sales_rep_id = s.id
JOIN region AS r
ON s.region_id = r.id
JOIN orders as o
ON o.account_id= a.id;

/*1
Provide a table that provides the region for each sales_rep along with their associated accounts. 
This time only for the Midwest region. Your final table should include three columns: the region name, 
the sales rep name, and the account name. Sort the accounts alphabetically (A-Z) according to account name.
*/

SELECT r.name region, s.name sales_rep, a.name account
FROM sales_reps s
JOIN region r
ON s.region_id = r.id
JOIN accounts a
ON a.sales_rep_id = s.id
WHERE r.name = 'Midwest'
ORDER BY a.name;


/* 2
Provide a table that provides the region for each sales_rep along with their associated accounts. 
This time only for accounts where the sales rep has a first name starting with S and in the Midwest region. 
Your final table should include three columns: the region name, the sales rep name, and the account name. 
Sort the accounts alphabetically (A-Z) according to account name.
*/

SELECT r.name region, s.name sales_rep, a.name account_name
FROM sales_reps s
JOIN region r
ON s.region_id = r.id
JOIN accounts a 
ON a.sales_rep_id = s.id
WHERE s.name LIKE 'S%' 
AND r.name = 'Midwest'
ORDER BY a.name;

/*3
Provide a table that provides the region for each sales_rep along with their associated accounts. 
This time only for accounts where the sales rep has a last name starting with K and in the Midwest region. 
Your final table should include three columns: the region name, the sales rep name, and the account name. 
Sort the accounts alphabetically (A-Z) according to account name.
*/

SELECT r.name region, s.name sales_rep, a.name account
FROM sales_reps s
JOIN region r
ON s.region_id = r.id
JOIN accounts a
ON a.sales_rep_id = s.id
WHERE s.name LIKE '% K%' AND r.name = 'Midwest'
ORDER BY a.name;

/*4
Provide the name for each region for every order, as well as the account name 
and the unit price they paid (total_amt_usd/total) for the order. 
However, you should only provide the results if the standard order quantity exceeds 100. 
Your final table should have 3 columns: region name, account name, and unit price. 
In order to avoid a division by zero error, adding .01 to the denominator here is helpful 
total_amt_usd/(total+0.01).
*/

SELECT r.name region, a.name account, o.total_amt_usd/(o.total + 0.01) unit_price
FROM sales_reps s
JOIN region r
ON s.region_id = r.id
JOIN accounts a
ON a.sales_rep_id = s.id
JOIN orders o
ON o.account_id = a.id
WHERE o.standard_qty > 100;


/*5
Provide the name for each region for every order, as well as the account name 
and the unit price they paid (total_amt_usd/total) for the order. 
However, you should only provide the results if the standard order quantity exceeds 100 
and the poster order quantity exceeds 50. 
Your final table should have 3 columns: region name, account name, and unit price. 
Sort for the smallest unit price first. 
In order to avoid a division by zero error, 
adding .01 to the denominator here is helpful (total_amt_usd/(total+0.01).
*/


SELECT r.name region, a.name account, o.total_amt_usd /(o.total + 0.01) unit_price
FROM sales_reps s
JOIN region r
ON s.region_id = r.id
JOIN accounts a
ON a.sales_rep_id = s.id
JOIN orders o
ON o.account_id = a.id
WHERE o.standard_qty > 100 AND poster_qty > 50
ORDER BY unit_price;

/*6
Provide the name for each region for every order, 
as well as the account name and the unit price they paid (total_amt_usd/total) for the order. 
However, you should only provide the results if the standard order quantity exceeds 100 
and the poster order quantity exceeds 50. 
Your final table should have 3 columns: region name, account name, and unit price. 
Sort for the largest unit price first. 
In order to avoid a division by zero error, 
adding .01 to the denominator here is helpful (total_amt_usd/(total+0.01).
*/

SELECT r.name region, a.name account, o.total_amt_usd/(o.total + 0.01) unit_price
FROM sales_reps s
JOIN region r
ON s.region_id = r.id
JOIN accounts a
ON a.sales_rep_id = s.id
JOIN orders o
ON o.account_id = a.id
WHERE o.standard_qty > 100 AND poster_qty > 50
ORDER BY unit_price DESC;

/*7
What are the different channels used by account id 1001? 
Your final table should have only 2 columns: account name and the different channels. 
You can try SELECT DISTINCT to narrow down the results to only the unique values.
*/

SELECT DISTINCT a.name account, w.channel
FROM accounts a
JOIN web_events w
ON w.account_id = a.id
WHERE a.id= '1001';

/*8
Find all the orders that occurred in 2015. 
Your final table should have 4 columns: occurred_at, account name, order total, and order total_amt_usd.
*/

SELECT w.occurred_at occurred, a.name account, o.total order_total, o.total_amt_usd total_usd
FROM accounts a
JOIN web_events w
ON w.account_id = a.id
JOIN orders o
ON o.account_id = a.id
WHERE w.occurred_at BETWEEN '01-01-2015' AND '01-01-2016'; /* need to check the data */

### aggregation
### SUM
SELECT SUM(poster_qty) poster_qty
FROM orders;

SELECT SUM(standard_qty) standard_qty
FROM orders;

SELECT SUM(total_amt_usd) total_amt_usd
FROM orders;

SELECT standard_amt_usd + gloss_amt_usd total_standard_gloss
FROM orders;

SELECT SUM(standard_amt_usd) / SUM(standard_qty) standard_per_qty
FROM orders


### MIN, MAX, AVG
SELECT MIN(occurred_at) earliest_date
FROM orders;

/*2013-12-04T04:22:44.000Z*/

SELECT occurred_at
FROM orders
ORDER BY occurred_at
LIMIT 1;

/*2013-12-04T04:22:44.000Z*/

SELECT MAX(occurred_at) latest_date
FROM web_events;
/*2017-01-01T23:51:09.000Z*/


SELECT occurred_at
FROM web_events 
ORDER BY occurred_at DESC
LIMIT 1;
/*2017-01-01T23:51:09.000Z*/

SELECT AVG(standard_qty) average_standard_qty,
AVG(gloss_qty) average_gloss_qty,
AVG(poster_qty) average_poster_qty,
AVG(standard_amt_usd) average_standard_amt_usd,
AVG(gloss_amt_usd) average_gloss_amt_usd,
AVG(poster_amt_usd) average_poster_amt_usd
FROM orders;

-- SELECT *
-- FROM (  SELECT total_amt_usd
--         FROM orders
--         ORDER BY total_amt_usd
--         LIMIT 3457) Tabel1
-- ORDER BY total_amt_usd DESC
-- LIMIT 2;

-- GROUP BY
SELECT a.name, o.occurred_at
FROM orders o
JOIN accounts a
ON o.account_id = a.id
ORDER BY o.occurred_at
LIMIT 1;

SELECT a.name, SUM(o.total_amt_usd) total_sales
FROM orders o
JOIN accounts a
ON o.account_id = a.id
GROUP BY a.name;

SELECT w.occurred_at occured_at, w.channel channel, a.name company
FROM web_events w
JOIN accounts a 
ON w.account_id = a.id
ORDER BY w.occurred_at DESC
LIMIT 1;

SELECT channel, COUNT(*)
FROM web_events
GROUP BY channel;

SELECT w.occurred_at occured_at, a.primary_poc prim_poc
FROM web_events w
JOIN accounts a
ON w.account_id = a.id
ORDER BY w.occurred_at 
LIMIT 1;

SELECT a.name, MIN(o.total_amt_usd) minimum
FROM accounts a
JOIN orders o
ON o.account_id = a.id
GROUP BY a.name
ORDER BY minimum;

SELECT r.name, COUNT(s.name) reps
FROM sales_reps s
JOIN region r
ON s.region_id = r.id
GROUP BY r.name
ORDER BY reps;

SELECT a.name,
AVG(o.standard_qty) mean_standard,
AVG(o.gloss_qty) mean_gloss,
AVG(o.poster_qty) mean_poster
FROM accounts a
JOIN orders o
ON o.account_id = a.id
GROUP BY a.name;

SELECT a.name,
AVG(o.standard_amt_usd) avg_standard_usd,
AVG(o.gloss_amt_usd) avg_gloss_usd,
AVG(o.poster_amt_usd) avg_poster_usd
FROM accounts a
JOIN orders o
ON o.account_id = a.id
GROUP BY a.name;

SELECT s.name, w.channel, COUNT(*) occurrences
FROM web_events w
JOIN accounts a
ON w.account_id = a.id
JOIN sales_reps s
ON a.sales_rep_id = s.id
GROUP BY s.name, w.channel
ORDER BY occurrences DESC;

SELECT r.name region, w.channel channel, COUNT(*) occurrences
FROM web_events w
JOIN accounts a
ON w.account_id = a.id
JOIN sales_reps s
ON a.sales_rep_id = s.id
JOIN region r
ON s.region_id = r.id
GROUP BY r.name, w.channel
ORDER BY occurrences DESC;

SELECT DISTINCT a.name company, r.name region, r.id region_id, a.id account_id
FROM accounts a 
JOIN sales_reps s
ON a.sales_rep_id = s.id
JOIN region r
ON s.region_id = r.id
ORDER BY a.name;

SELECT DISTINCT id, name
FROM accounts;

SELECT s.id sales_id, s.name sales_rep, COUNT(*) num_accounts
FROM accounts a
JOIN sales_reps s
ON a.sales_rep_id = s.id
GROUP BY s.id, s.name
ORDER BY num_accounts;

SELECT DISTINCT id, name
FROM sales_reps; 
--50

-- having 2
SELECT s.name, COUNT(*) accounts
FROM accounts a
JOIN sales_reps s
ON a.sales_rep_id = s.id
GROUP BY s.name
HAVING COUNT(*) > 5;


SELECT a.name, COUNT(*) orders
FROM orders o
JOIN accounts a
ON o.account_id = a.id
GROUP BY a.name
HAVING COUNT(*) > 20;

SELECT a.name, COUNT(*) total_order
FROM orders o
JOIN accounts a
ON o.account_id = a.id
GROUP BY a.name
ORDER BY total_order DESC
LIMIT 1;

SELECT a.name, SUM(o.total_amt_usd) total_amt_usd_all_orders
FROM accounts a 
JOIN orders o
ON o.account_id = a.id
GROUP BY a.name
HAVING SUM(o.total_amt_usd) > 30000;

SELECT a.name, SUM(o.total_amt_usd) total_amt_usd_all_orders
FROM accounts a 
JOIN orders o
ON o.account_id = a.id
GROUP BY a.name
HAVING SUM(o.total_amt_usd) < 1000;

SELECT a.name, SUM(o.total_amt_usd) total_amt_usd_all_orders
FROM accounts a 
JOIN orders o
ON o.account_id = a.id
GROUP BY a.name
ORDER BY total_amt_usd_all_orders DESC
LIMIT 1;

SELECT a.name, SUM(o.total_amt_usd) total_amt_usd_all_orders
FROM accounts a 
JOIN orders o
ON o.account_id = a.id
GROUP BY a.name
ORDER BY total_amt_usd_all_orders 
LIMIT 1;

SELECT a.name, w.channel, COUNT(*) use_of_channel
FROM accounts a
JOIN web_events w
ON w.account_id = a.id
GROUP BY a.name, w.channel
HAVING w.channel LIKE 'facebook' AND COUNT(*) > 6
ORDER BY use_of_channel;

SELECT a.name, w.channel, COUNT(*) use_of_channel
FROM accounts a
JOIN web_events w
ON w.account_id = a.id
GROUP BY a.name, w.channel
ORDER BY use_of_channel DESC
LIMIT 1;

SELECT a.id, a.name, w.channel, COUNT(*) freq_of_acc
FROM accounts a
JOIN web_events w
ON w.account_id = a.id
GROUP BY a.id, a.name, w.channel
ORDER BY freq_of_acc DESC;

-- DATE

SELECT DATE_TRUNC('year', occurred_at) ord_year, SUM(total_amt_usd)
FROM orders
GROUP BY 1
ORDER BY 2 DESC;