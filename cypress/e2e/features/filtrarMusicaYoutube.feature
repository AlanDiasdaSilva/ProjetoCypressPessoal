Feature: Filtrar Musicas No Youtubeea

Scenario: filtrar uma musica no Youtube
Given que o usuario acesse o site do Youtube
When filtrar pela musica desejada
Then a tela deve trazer a musica filtrada