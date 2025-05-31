import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import MusicaYoutube from  '../pages/filtrarMusicaYoutube.js';
const YotubeObjeto = new MusicaYoutube();

Given('que o usuario acesse o site do Youtube', () => {
	YotubeObjeto.visitarSiteYoutube();
});

When('filtrar pela musica desejada', () => {
	return true;
});

Then('a tela deve trazer a musica filtrada', () => {
	return true;
});
