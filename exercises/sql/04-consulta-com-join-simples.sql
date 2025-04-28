-- 2.4 Consulta com JOIN Simples
-- Dadas as tabelas: 
--! orders
-- id (INT)
-- customer_id (INT)
-- total (DECIMAL)

--! customers
-- id (INT)
-- name (VARCHAR)
-- country (VARCHAR)
-- Escreva uma query para listar o nome dos clientes e o total de compras realizadas,
-- ordenando pelo total de compras em ordem decrescente. Inclua apenas os clientes que realizaram compras.

SELECT 
    customers.name,
    SUM(orders.total) as total_purchases
FROM customers
INNER JOIN orders ON orders.customer_id = customers.id
GROUP BY customers.name
ORDER BY total_purchases DESC;