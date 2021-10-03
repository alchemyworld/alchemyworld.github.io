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
		id: 1
	},
	{
		name: "fire",
		conf: "NaN",
		cons: "NaN",
		img: "https://cdn-icons-png.flaticon.com/128/426/426833.png",
		id: 2
	},
	{
		name: "air",
		conf: "NaN",
		cons: "NaN",
		img: "https://cdn-icons-png.flaticon.com/128/2756/2756521.png",
		id: 3
	},
	{
		name: "earth",
		conf: "NaN",
		cons: "NaN",
		img: "https://cdn-icons-png.flaticon.com/128/4284/4284458.png",
		id: 4
	},
	{
		name: "lake",
		conf: "water",
		cons: "water",
		img: "https://cdn-icons-png.flaticon.com/128/4251/4251896.png",
		id: 5
	},
	{
		name: "steam",
		conf: "water",
		cons: "fire",
		img: "https://cdn-icons-png.flaticon.com/128/2451/2451374.png",
		id: 6
	},
	{
		name: "dirt",
		conf: "water",
		cons: "earth",
		img: "https://cdn-icons-png.flaticon.com/128/1191/1191622.png",
		id: 7
	},
	{
		name: "mountain",
		conf: "earth",
		cons: "earth",
		img: "https://cdn-icons-png.flaticon.com/128/619/619010.png",
		id: 8
	},
	{
		name: "lava",
		conf: "earth",
		cons: "fire",
		img: "https://cdn-icons-png.flaticon.com/128/4321/4321227.png",
		id: 9
	},
	{
		name: "wind",
		conf: "air",
		cons: "air",
		img: "https://cdn-icons-png.flaticon.com/128/1458/1458984.png",
		id: 10
	},
	{
		name: "smoke",
		conf: "air",
		cons: "fire",
		img: "https://cdn-icons-png.flaticon.com/128/3501/3501787.png",
		id: 11
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

		cardImg.setAttribute("src", items[newElemId-1].img);
		majorElement.setAttribute("id", items[newElemId-1].id);
		cardText.innerText = items[newElemId-1].name;

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
	  				console.log("Workin!")
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
  				console.log("Workin!")
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
