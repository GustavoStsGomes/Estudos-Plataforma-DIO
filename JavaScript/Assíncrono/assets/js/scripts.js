/*
Nesta atividade, vamos criar uma página que carrega fotos aleatórias de gatinhos sempre que clicamos em um botão.

Utilize a API https://thatcopy.pw/catapi/rest para fazer as chamadas com o método fetch();
Utilize seus conhecimentos na manipulação do DOM para criar a imagem e ativar o evento de clique do botão!
*/

//const BASE_URL = 'https://thatcopy.pw/catapi/rest/'; // gatos api instavel
const URL_FOX = 'https://randomfox.ca/floof/'; // raposas

const getCats = async () => {
	try {
		//busca dados da URL
		const data = await fetch(URL_FOX);
		//converte em arquivo json
		const json = await data.json();
		//retorna a imagem do api
		return json.image;// raposas
		//return json.webpurl; // gatos
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	const img = document.getElementsByTagName('img')[0];
	img.src = await getCats();
};

loadImg();

const btn = document.getElementById('change-cat');
btn.addEventListener('click', loadImg);



