//цвет чайника
let colorKettel = color => {
	kettel = document.querySelector('#electric-kettle');
	kettel.style.fill = color;
}
// Когда выбран новый элемент <option>
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