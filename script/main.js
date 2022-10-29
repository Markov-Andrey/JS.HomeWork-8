//БЛОК ЦВЕТ ЧАЙНИКА

//Список переменных
let colorCode = []; //код цвета
let colorName = []; //наименование цвета
let selectColor = []; //добавление значений в список цветов
let i; //индекс для расчетов
const selectIdColor = document.querySelector('#selectColor');//поиск блока по id в HTML
const selectIdBrand = document.querySelector('#celectBrand');//поиск блока по id в HTML

//Функция смены цвета чайника
let colorKettel = color => {
	let kettel = document.querySelector('#electric-kettle');
	kettel.style.fill = color;
};

//Заполнение массива значениями (код, наменование цвета) и пополнение списка
let addColor = (code,name) => {
	colorCode.push(code)
	colorName.push(name)
	i = colorCode.length - 1; //поиск индекса последней записи
	selectColor[i] = document.createElement('option');
	selectColor[i].innerHTML = colorName[i];
	selectIdColor.appendChild(selectColor[i]);
};

//Подбор значения цвета чайника из списка
selectIdColor.addEventListener('change', () => {
	i = selectIdColor.selectedIndex; //поиск индекса выбранной записи
	colorKettel(colorCode[i]); //вызов покраски
});

//Заполнение массива (код, наименование цвета)
addColor ('Black','Ночной чёрный');
addColor ('Crimson','Насыщенный красный');
addColor ('Tomato','Оранжевый томатный');
addColor ('Gold','Золотой');
addColor ('ForestGreen','Зеленый лесной');
addColor ('DeepSkyBlue','Небесный голубой');
addColor ('RoyalBlue','Королевский синий');
addColor ('Indigo','Индиго');
addColor ('Pink','Нежно-розовый');

//БЛОК БРЕНД

//Список переменных
//SVG-логотипы чайников (из стороннего JS-файла)
let logoSmeg = logo_Smeg();
let logoBraun = logo_Braun();
let logoXiaomi = logo_Xiaomi();
//SVG-Модели чайников (из стороннего JS-файла)
let model1 = model_1();
let model2 = model_2();
let model3 = model_3();
//База наименований чайника
let brandCode = []; //наименование цвета
let brandName = []; //наименование бренда
let brandModel = []; //наименование модели
let selectBrand = []; //добавление значений в список брендов
//поиск класса
let logoClass;
let kettelClass;

//Заполнение массива значениями (логотип, название бренда, изображение модели) и пополнение списка
let addBrand = (code,brand,model) => {
	brandCode.push(code)
	brandName.push(brand)
	brandModel.push(model)
	i = brandName.length - 1; //поиск индекса последней записи
	selectBrand[i] = document.createElement('option');
	selectBrand[i].innerHTML = brandName[i];
	selectIdBrand.appendChild(selectBrand[i])
};

//Подбор значений марки чайника из списка <option>
selectIdBrand.addEventListener('change', () => {
	i = selectIdBrand.selectedIndex;
	logoKettel(brandName[i],brandCode[i],brandModel[i]);
});
//функция выбора названия бренда и модели
let logoKettel = (brandName,brandCode,brandModel) => {
	//прочистка документа от логотипа
	logoClass = document.querySelector('.logo');
	if (logoClass) logoClass.remove();
	//прочистка от изображения чайника
	kettelClass = document.querySelector('.center');
	if (kettelClass) kettelClass.remove();
	//создание изображения чайника
	kettelImage = document.createElement('p');
	kettelImage.classList.add ('center');
	kettelImage.innerHTML = brandModel;
	document.querySelector('#div1').prepend(kettelImage);
	//создание логотипа
	logo = document.createElement('p');
	logo.classList.add (`logo${brandName}`);//добавление специального класса CSS
	logo.classList.add ('logo');//класс-пустышка для поиска
	logo.innerHTML = brandCode;
	document.querySelector('#div1').prepend(logo);
	//выбор цвета при выборе нового бренда
	i = selectIdColor.selectedIndex;
	colorKettel(colorCode[i]);
};

//Заполнение массива (логотип, название бренда, изображение модели)
addBrand(logoSmeg, 'Smeg', model1);
addBrand(logoBraun, 'Braun', model2);
addBrand(logoXiaomi, 'Xiaomi', model3);