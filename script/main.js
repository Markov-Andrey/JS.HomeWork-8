/*
//Фичи для реализации:

СВОЙСТВА:
ГОТОВО! Цвет чайника из списка (ЛЕГКОМАСШТАБИРУЕМО!)
Марка чайника (Модель чайника)
Объем чайника
Мощность чайника

ОПЦИОНАЛЬНО:
Термометр в чайнике
Защита от "пустого" чайника
Индикатор работы чайника

ВЗАИМОДЕЙСТВИЕ:
Добавление воды (несколько опций)
Выливание всей воды из чайника
Включение чайника
Иммитация работы (нагрев с течением временем)
Расчет нагрева воды в зависмости от налитой воды и мощности
Автоотключение чайника при закипании воды

ОПЦИОНАЛЬНО:
Отслеживание температуры вливаемой воды, подсчет средней температуры

ЗАДАЧА:
Создать структуру объекта через логику ООП. 
Постоянное масштабирование объекта без переписывания кода.
Стуктура подобного объекта?
*/

//Функция смены цвета чайника
let colorKettel = color => {
	kettel = document.querySelector('#electric-kettle');
	kettel.style.fill = color;
};
//База цветов чайника
let colorCode = []; //код цвета
let colorName = []; //наименование цвета
//Функция заполнения массива значениями - код цвета, наменование цвета
let colorCodeName = (code,name) => {
	colorCode.push(code)
	colorName.push(name)
}
//Заполение массива кодом и наименованием цвета
colorCodeName ('Black','Ночной чёрный');
colorCodeName ('Crimson','Насыщенный красный');
colorCodeName ('Tomato','Оранжевый томатный');
colorCodeName ('Gold','Золотой');
colorCodeName ('ForestGreen','Зеленый лесной');
colorCodeName ('DeepSkyBlue','Небесный голубой');
colorCodeName ('RoyalBlue','Королевский синий');
colorCodeName ('Indigo','Индиго');
colorCodeName ('Pink','Нежно-розовый');
//Автозаполнение списка с цветами чайника
let selectColor = [];
for (let i = 0; i < colorName.length;i++){
	selectColor[i] = document.createElement('option');
	selectColor[i].innerHTML = colorName[i];
	document.querySelector('#selectColor').appendChild(selectColor[i])
}
//Подбор значений цвета чайника из списка <option>
let selectElem = document.querySelector('#selectColor')
selectElem.addEventListener('change', () => {
	let index = selectElem.selectedIndex;
	colorKettel(colorCode[index]);
});