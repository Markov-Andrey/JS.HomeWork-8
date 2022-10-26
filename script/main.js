/*
//Фичи для реализации:

СВОЙСТВА:
Цвет чайника из списка (готово)
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
*/

/*
ЗАДАЧА:
Создать структуру объекта через логику ООП. 
Постоянное масштабирование объекта без переписывания кода.
Стуктура подобного объекта?
*/

/* ПОПЫТКА СОЗДАНИЯ ОБЪЕКТА ЧЕРЕЗ ООП (стандарт ES6)
class Kettel {
	//общий набор переменных внутри объекта
	#selectElem
	#objKettel
	//метод конструктор
	constructor(){
		this.#selectElem = document.querySelector('#select')
		this.#objKettel = document.querySelector('#electric-kettle');
	};
	//свойство объекта "Цвет чайника"
	#colorKettel = color => {
		this.#objKettel.style.fill = color;
	};
	//Набор заданных параметров цвета
	#colorChange = () => {this.#selectElem.addEventListener('change', function() {
		let index = selectElem.selectedIndex;
		switch (index){
		  case 0:
			  colorKettel('Black');
			  break;
		  case 1:
			  colorKettel('Crimson');
			  break;
		  case 2:
			  colorKettel('Tomato');
			  break;
		  case 3:
			  colorKettel('Gold');
			  break;
		  case 4:
			  colorKettel('ForestGreen');
			  break;
		  case 5:
			  colorKettel('DeepSkyBlue');
			  break;
		  case 6:
			  colorKettel('RoyalBlue');
			  break;
		  case 7:
			  colorKettel('Indigo');
			  break;
		  default:
			  colorKettel('Black');
			  break;
		};
	  });
	};
};
*/

// РАБОЧИЙ КОД СОЗДАННЫЙ ЧЕРЕЗ ФУНКЦИОНАЛЬНОЕ ПРОГРАММИРОВАНИЕ

//Функция "цвет чайника"
let colorKettel = color => {
	kettel = document.querySelector('#electric-kettle');
	kettel.style.fill = color;
};
//Набор значений цвета чайника из списка <option>
let selectElem = document.querySelector('#select')
selectElem.addEventListener('change', function() {
  let index = selectElem.selectedIndex;
  switch (index){
	case 0:
		colorKettel('Black');
		break;
	case 1:
		colorKettel('Crimson');
		break;
	case 2:
		colorKettel('Tomato');
		break;
	case 3:
		colorKettel('Gold');
		break;
	case 4:
		colorKettel('ForestGreen');
		break;
	case 5:
		colorKettel('DeepSkyBlue');
		break;
	case 6:
		colorKettel('RoyalBlue');
		break;
	case 7:
		colorKettel('Indigo');
		break;
  };
})