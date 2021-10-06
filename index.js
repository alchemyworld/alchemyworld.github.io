// let elements = document.querySelectorAll(".scroll_item");

// Array.from(elements).forEach(function(element) {
//       element.addEventListener('click', myFunction);
// });

const items = [
	{
		name: "water",
		conf: "NaN",
		cons: "NaN",
		img: "https://cdn-icons-png.flaticon.com/128/3105/3105807.png",
		id: 0
	},
	{
		name: "fire",
		conf: "NaN",
		cons: "NaN",
		img: "https://cdn-icons-png.flaticon.com/128/426/426833.png",
		id: 1
	},
	{
		name: "air",
		conf: "NaN",
		cons: "NaN",
		img: "https://cdn-icons-png.flaticon.com/128/2756/2756521.png",
		id: 2
	},
	{
		name: "earth",
		conf: "NaN",
		cons: "NaN",
		img: "https://cdn-icons-png.flaticon.com/128/4284/4284458.png",
		id: 3
	},
	{
		name: "lake",
		conf: "water",
		cons: "water",
		img: "https://cdn-icons-png.flaticon.com/128/4251/4251896.png",
		id: 4
	},
	{
		name: "steam",
		conf: "water",
		cons: "fire",
		img: "https://cdn-icons-png.flaticon.com/128/2451/2451374.png",
		id: 5
	},
	{
		name: "dirt",
		conf: "water",
		cons: "earth",
		img: "https://cdn-icons-png.flaticon.com/128/1191/1191622.png",
		id: 6
	},
	{
		name: "mountain",
		conf: "earth",
		cons: "earth",
		img: "https://cdn-icons-png.flaticon.com/128/619/619010.png",
		id: 7
	},
	{
		name: "lava",
		conf: "earth",
		cons: "fire",
		img: "https://cdn-icons-png.flaticon.com/128/4321/4321227.png",
		id: 8
	},
	{
		name: "wind",
		conf: "air",
		cons: "air",
		img: "https://cdn-icons-png.flaticon.com/128/1458/1458984.png",
		id: 9
	},
	{
		name: "smoke",
		conf: "air",
		cons: "fire",
		img: "https://cdn-icons-png.flaticon.com/128/3501/3501787.png",
		id: 10
	}
]

let firstCond = document.querySelectorAll('.firstCond');
let secondCond = document.querySelectorAll('.secondCond');

function makeFirstRow(array) {
	Array.from(array).forEach(function(e) {
		let cardDiv = document.createElement("div");
		let cardImg = document.createElement("img");
		let cardText = document.createElement("p");

		let parentFirstCont = document.querySelector(".first_container")

		cardDiv.classList.add("firstCond")
		cardImg.classList.add("image_item")
		cardText.classList.add("text_item")

		cardImg.setAttribute("src", e.img);
		cardDiv.setAttribute("id", e.id);
		cardText.innerText = e.name;

		parentFirstCont.append(cardDiv);
		cardDiv.append(cardImg);
		cardDiv.append(cardText);
	})
	firstCond = document.querySelectorAll('.firstCond');
	dragFirst();
}; makeFirstRow(items);

function dragFirst() {
	Array.from(firstCond).forEach(function(element) {
	element.onmousedown = function(e) {
		let newElemId = element.id;
		element.classList.add("secondCond")
		element.classList.remove("firstCond")

		let majorElement = document.createElement("div")
		let cardImg = document.createElement("img");
		let cardText = document.createElement("p");

		cardImg.classList.add("image_item")
		cardText.classList.add("text_item")

		cardImg.setAttribute("src", items[newElemId].img);
		majorElement.setAttribute("id", items[newElemId].id);
		cardText.innerText = items[newElemId].name;

		majorElement.append(cardImg);
		majorElement.append(cardText);

		secondCond = document.querySelectorAll('.secondCond');
		initChange();

		
		majorElement.classList.add("firstCond")
		element.insertAdjacentElement('beforebegin', majorElement)

		firstCond = document.querySelectorAll('.firstCond');
		dragFirst();

		coords = {top: event.clientY, left: event.clientX};
		shiftX = e.pageX - coords.left;
		shiftY = e.pageY - coords.top;
		moveAt(e)

		element.style.position = 'absolute';
		document.querySelector(".second_container").append(element);

		element.style.zIndex = 1000; // над другими элементами

		function moveAt(e) {
			element.style.left = e.pageX - shiftX + 'px';
			element.style.top = e.pageY - shiftY + 'px';
		}

     	document.onmousemove = function(e) {
     		Array.from(secondCond).forEach(function(elem) {
	  		if(getCoords(element).top < getCoords(elem).top + elem.offsetHeight && getCoords(element).top + element.offsetHeight > getCoords(elem).top && elem !== element) {
	  			if(getCoords(element).left < getCoords(elem).left + elem.offsetWidth && getCoords(element).left + element.offsetWidth > getCoords(elem).left) {
	  				checkCollab(element.id, elem.id, element, elem)

	  		}
  		}
  	})
     		moveAt(e);
     	};

     	document.onmouseup = function() {
        	document.onmousemove = null;
        	document.onmouseup = null;
     	};

	


		//makeMinorElement(element.id)
	}
	})
} dragFirst();

function initChange() {
  secondCond = document.querySelectorAll('.secondCond');

  Array.from(secondCond).forEach(function(element) {
  element.onmousedown = function(e) {

  let coords = getCoords(element);
  let shiftX = e.pageX - coords.left;
  let shiftY = e.pageY - coords.top;

  element.style.position = 'absolute';
  document.querySelector(".second_container").append(element);
  moveAt(e);

  element.style.zIndex = 1000; // над другими элементами

  function moveAt(e) {
    element.style.left = e.pageX - shiftX + 'px';
    element.style.top = e.pageY - shiftY + 'px';
}

  document.onmousemove = function(e) {

  	Array.from(secondCond).forEach(function(elem) {
  		if(getCoords(element).top < getCoords(elem).top + elem.offsetHeight && getCoords(element).top + element.offsetHeight > getCoords(elem).top && elem !== element) {
  			if(getCoords(element).left < getCoords(elem).left + elem.offsetWidth && getCoords(element).left + element.offsetWidth > getCoords(elem).left) {
  				checkCollab(element.id, elem.id, element, elem)
  			}
  		}
  	})
    moveAt(e);
  };

  document.onmouseup = function() {
    document.onmousemove = null;
    document.onmouseup = null;
  };

}

element.ondragstart = function() {
  return false;
};   
});
}


function getCoords(elem) {   // кроме IE8-
  let box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

function checkCollab(idF, idS, element, elem) {
	let colf = items[idF].name;
	let cols = items[idS].name;

	Array.from(items).forEach(function(e) {
		if(e.conf === colf && e.cons === cols ) {
			collab(element, elem, e)
		}
		else if(e.conf === cols && e.cons === colf) {
			collab(element, elem, e)
		}
	});
}

function collab(element, elem, e) {

	document.onmousemove = null;

	let top = (element.getBoundingClientRect().top + elem.getBoundingClientRect().top) / 2;
	let left = (element.getBoundingClientRect().left + elem.getBoundingClientRect().left) / 2;

	elem.style.top = element.style.top;

	elem.classList.add("animate__animated")
	element.classList.add("animate__animated")
	elem.classList.add("animate__fadeOutLeft")
	element.classList.add("animate__fadeOutRight")
	setTimeout(() => {elem.remove; element.remove}, 1000)


	let newElemId = e.id;
	let majorContainer = document.querySelector(".second_container")
	let minorElement = document.createElement("div")
	let cardImg = document.createElement("img");
	let cardText = document.createElement("p");

	cardImg.classList.add("image_item")
	cardText.classList.add("text_item")

	cardImg.setAttribute("src", e.img);
	minorElement.setAttribute("id", e.id);
	cardText.innerText = e.name;

	minorElement.append(cardImg);
	minorElement.append(cardText);

	majorContainer.append(minorElement)

	minorElement.classList.add("secondCond")
	minorElement.classList.add("animate__animated")
	minorElement.classList.add("animate__fadeIn")

	setTimeout(() => {minorElement.classList.remove("animate__animated"); minorElement.classList.remove("animate__fadeIn")}, 1000)

	minorElement.style.top = top;
	minorElement.style.left = left;

	secondCond = document.querySelectorAll('.secondCond');
	initChange();
}

