-- 2.5 Consulta com JOIN e Filtragem
-- Dadas as tabelas:

-- PRODUCTS
-- id (INT)
-- name (VARCHAR)
-- category_id (INT)

-- CATEGORIES
-- id (INT)
-- name (VARCHAR)

-- SALES
-- id (INT)
-- product_id (INT)
-- quantity (INT)

-- Escreva uma query para listar o nome da categoria, o nome do produto e a quantidade total vendida de cada produto.
-- Filtre apenas as categorias que possuem mais de 100 unidades vendidas no total.

SELECT 
  categories.name AS category_name, 
  products.name AS product_name, 
  SUM(sales.quantity) AS quantity_total
FROM categories
INNER JOIN products ON products.category_id = categories.id
INNER JOIN sales ON sales.product_id = products.id
GROUP BY categories.name, products.name
HAVING SUM(sales.quantity) > 100;
