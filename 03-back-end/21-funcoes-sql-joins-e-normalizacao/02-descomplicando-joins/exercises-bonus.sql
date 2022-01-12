-- Exercício 6: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8.
SELECT
  M.*
FROM
  Pixar.Movies AS M
  INNER JOIN Pixar.BoxOffice AS B ON M.id = B.movie_id
WHERE
  B.rating > 8;