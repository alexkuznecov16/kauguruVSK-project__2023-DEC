//! Function - onclick check on click values and do changes
function mainFunc(clickedBtnValue) {
	let myText1 = document.getElementById('myText1');
	let myText2 = document.getElementById('myText2');
	let myTitle = document.getElementById('title');
	let myAdvertImg = document.getElementById('advertImg');
	let myBody = document.body;

	// change theme to dark
	if (clickedBtnValue == 'dark-theme') {
		myBody.classList.add('dark-theme'); // do dark theme
	} else if (clickedBtnValue == 'light-theme') {
		myBody.classList.remove('dark-theme'); // do light theme
	} else if (clickedBtnValue == 'plusSize') {
		myText1.classList.add('big-size'); // do size more
		myText2.classList.add('big-size'); // do size more

		myText1.classList.remove('small-size'); // remove small size
		myText2.classList.remove('small-size'); // remove small size
	} else if (clickedBtnValue == 'minusSize') {
		myText1.classList.remove('big-size'); // remove big size
		myText2.classList.remove('big-size'); // remove big size

		myText1.classList.add('small-size'); // do size less
		myText2.classList.add('small-size'); // do size less
	} else if (clickedBtnValue == 'defaultSize') {
		myText1.classList.remove('small-size', 'big-size'); // do size default
		myText2.classList.remove('small-size', 'big-size'); // do size default
	} else if (clickedBtnValue == 'toLV') {
		myText1.innerHTML =
			'Gaišie krāsu toņi ir unikāla spēja ietekmēt cilvēka emocionālo stāvokli. Tie radīt viegluma, prieka un optimisma atmosfēru. Piemēram, dzeltenā krāsa ir saistīta ar sauli un siltumu, sniedzot prieka un enerģijas sajūtu. Zila krāsa nomierina un rada sajūtu svaiguma, kā pēc skaidra vasaras dienas. Zaļā krāsa ir saistīta ar dabu un mieru.'; // do lvlanguage

		myText2.innerHTML =
			'Animācijas uz tīmekļa vietnes uzlabo lietotāja pieredzi, padarot saturu pievilcīgāku un interesantāku. Piemēram, izkrišanas animācija var padarīt elementu parādīšanos plūstošāku un patīkamāku acīm.';

		myTitle.innerHTML = 'Pielāgojams Dizains'; // do lv language
	} else if (clickedBtnValue == 'toEN') {
		myText1.innerHTML =
			"Light colors have a unique ability to influence a person's emotional state. They create an atmosphere of lightness, joy, and optimism. For example, yellow is associated with the sun and warmth, giving a sense of joy and energy. Blue has a calming effect and creates a feeling of freshness, like after a clear summer day. Green is associated with nature and tranquility."; // do en language

		myText2.innerHTML =
			'Animations on a website enhance the user experience, making the content more engaging and interesting. For instance, the fade-in animation can make the appearance of elements smoother and more pleasing to the eye.'; // do en language

		myTitle.innerHTML = 'Adaptable design'; // do en language
	} else if (clickedBtnValue == 'toRU') {
		myText1.innerHTML =
			'Светлые цвета имеют уникальную способность воздействовать на эмоциональное состояние человека. Они создают атмосферу легкости, радости и оптимизма. Например, желтый ассоциируется с солнцем и теплом, придавая чувство радости и энергии. Голубой успокаивает и создает ощущение свежести, как после ясного летнего дня. Зеленый ассоциируется с природой и спокойствием.'; // do ru language

		myText2.innerHTML =
			'Анимации на веб-сайте обогащают пользовательский опыт, делая контент более привлекательным и интересным. Например, анимация появления (fadeIn) может сделать появление элементов более плавным и приятным для глаза.'; // do ru language

		myTitle.innerHTML = 'Адаптивный дизайн'; // do ru language
	} else if (clickedBtnValue == 'stopAnimation') {
		myAdvertImg.style.animationPlayState = 'paused'; // do animation paused
	} else if (clickedBtnValue == 'startAnimation') {
		myAdvertImg.style.animationPlayState = ''; // do animation play
	} else if (clickedBtnValue == 'resetAll') {
		myBody.classList.remove('dark-theme'); //! do theme default

		//! do default text sizes
		myText1.classList.remove('big-size', 'small-size'); // do size default
		myText2.classList.remove('big-size', 'small-size'); // do size default

		myAdvertImg.style.animationPlayState = ''; //! do animation default

		//! default languages
		myText1.innerHTML =
			"Light colors have a unique ability to influence a person's emotional state. They create an atmosphere of lightness, joy, and optimism. For example, yellow is associated with the sun and warmth, giving a sense of joy and energy. Blue has a calming effect and creates a feeling of freshness, like after a clear summer day. Green is associated with nature and tranquility."; // do default language
		myText2.innerHTML =
			'Animations on a website enhance the user experience, making the content more engaging and interesting. For instance, the fade-in animation can make the appearance of elements smoother and more pleasing to the eye.'; // do default language
		myTitle.innerHTML = 'Adaptable Design'; // do default language
	}
}
