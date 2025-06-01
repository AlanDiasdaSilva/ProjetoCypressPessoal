Feature: Filtrar Musicas No Youtubee

Scenario: filtrar uma musica no Youtube
Given que o usuario acesse o site do Youtube
When filtrar pela musica desejada
Then a tela deve trazer a musica filtrada