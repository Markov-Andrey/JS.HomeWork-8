/*
КЛАСС: КОНФИГУРАТОР ЧАЙНИКА
//Фичи для реализации:

СВОЙСТВА:
ГОТОВО! Цвет чайника из списка (ЛЕГКОМАСШТАБИРУЕМО!)
Марка чайника (Модель чайника) (ЛЕГКОМАСШТАБИРУЕМО!)
Объем чайника
Мощность чайника

ОПЦИОНАЛЬНО:
Термометр в чайнике
Защита от "пустого" чайника
Индикатор работы чайника

ЗАДАЧА:
Создать структуру объекта через логику ООП. 
Постоянное масштабирование объекта без переписывания кода.
Стуктура подобного объекта?
*/

//БЛОК ЦВЕТ
//Функция смены цвета чайника
let colorKettel = color => {
	kettel = document.querySelector('#electric-kettle');
	kettel.style.fill = color;
};
//База цветов чайника
let colorCode = []; //код цвета
let colorName = []; //наименование цвета
//Функция заполнения массива значениями - код цвета, наменование цвета
let addColor = (code,name) => {
	colorCode.push(code)
	colorName.push(name)
}
//Заполнение массива кодом и наименованием цвета
addColor ('Black','Ночной чёрный');
addColor ('Crimson','Насыщенный красный');
addColor ('Tomato','Оранжевый томатный');
addColor ('Gold','Золотой');
addColor ('ForestGreen','Зеленый лесной');
addColor ('DeepSkyBlue','Небесный голубой');
addColor ('RoyalBlue','Королевский синий');
addColor ('Indigo','Индиго');
addColor ('Pink','Нежно-розовый');
//Автозаполнение списка с цветами чайника
let selectColor = [];
for (let i = 0; i < colorName.length;i++){
	selectColor[i] = document.createElement('option');
	selectColor[i].innerHTML = colorName[i];
	document.querySelector('#selectColor').appendChild(selectColor[i])
}
//Подбор значений цвета чайника из списка <option>
let selectElem = document.querySelector('#selectColor');
selectElem.addEventListener('change', () => {
	let index = selectElem.selectedIndex;
	colorKettel(colorCode[index]);
});

//БЛОК БРЕНД
// SVG-логотипы подхватываются из др.JS-файла
let logoSmeg = logo_Smeg();
let logoBraun = logo_Braun();
let logoXiaomi = logo_Xiaomi();
//Модели чайников
let model1 = model_1();
let model2 = model_2();
let model3 = model_3();
//База наименований чайника
let brandCode = []; //наименование цвета
let brandName = []; //наименование бренда
let brandModel = []; //наименование модели
//Функция заполнения массива значениями - наменование бренда
let addBrand = (code,brand,model) => {
	brandCode.push(code)
	brandName.push(brand)
	brandModel.push(model)
};
//заполенение массива - логотип, название бренда, изображение модели
addBrand(logoSmeg,'Smeg',model1);
addBrand(logoBraun,'Braun',model2);
addBrand(logoXiaomi,'Xiaomi',model3);
//Автозаполнение списка с брендами чайника
let selectBrand = [];
for (let i = 0; i < brandName.length;i++){
	selectBrand[i] = document.createElement('option');
	selectBrand[i].innerHTML = brandName[i];
	document.querySelector('#celectBrand').appendChild(selectBrand[i])
};
//Подбор значений марки чайника из списка <option>
let selectElem2 = document.querySelector('#celectBrand')
selectElem2.addEventListener('change', () => {
	let index2 = selectElem2.selectedIndex;
	logoKettel(brandName[index2],brandCode[index2],brandModel[index2]);
});
//функция выбора названия бренда и модели
let logoKettel = (brandName,brandCode,brandModel) => {
	//прочистка документа от логотипа
	let logoClass = document.querySelector('.logo');
	logoClass ? logoClass.remove() : false;
	//прочистка от изображения чайника
	let kettelClass = document.querySelector('.center');
	kettelClass ? kettelClass.remove() : false;
	//создание изображения чайника
	kettelImage = document.createElement('p');
	kettelImage.classList.add ('center');
	kettelImage.innerHTML = brandModel;
	document.querySelector('#div1').prepend(kettelImage);
	//создание логотипа
	logo = document.createElement('p');
	logo.classList.add (`logo${brandName}`);
	logo.classList.add ('logo');
	logo.innerHTML = brandCode;
	document.querySelector('#div1').prepend(logo);
	//выбор цвета при выборе нового бренда
	index = selectElem.selectedIndex;
	colorKettel(colorCode[index]);
};

//Конфигуратор чайника
//class Kettel {
//	constructor(){
//		
//	};
//};