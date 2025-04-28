-- 2.1 Consulta com Agregação
-- Dada a tabela sales com AS colunas
-- id (INT)
-- product (VARCHAR)
-- quantity (INT)
-- price (DECIMAL)
-- Escreva uma query para calcular a receita total (quantity * price) para cada produto, ordenando por receita total em ordem decrescente.

SELECT 
    product,
    SUM(quantity * price) total_revenue
FROM sales
GROUP BY product
ORDER BY total_revenue DESC;