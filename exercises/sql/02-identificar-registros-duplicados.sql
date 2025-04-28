-- 2.2 Identificar Registros Duplicados
-- Dada a tabela users com AS colunas:
-- id (INT)
-- email (VARCHAR)
-- name (VARCHAR)
-- Escreva uma query para identificar os emails que estão duplicados, juntamente com o número de ocorrências. 

SELECT 
    email,
    COUNT(*) AS duplicate_count
FROM users
GROUP BY email
HAVING COUNT(*) > 1