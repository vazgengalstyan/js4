//task 5 Էկրանի ցանկացած տեղի վրա քլիք անելիս, էլեմենտը պետք է հայտնվի այնտեղ 
field.onclick = function (event) {
	let cordinate = this.getBoundingClientRect()

	let elemCordinate = {
		top: event.clientY - cordinate.top - field.clientTop - element.clientHeight,
		left: event.clientX - cordinate.left - field.clientLeft - element.clientWidth 
	};

	if (elemCordinate.top < 0){
		elemCordinate.top = 0;
	}


	if (elemCordinate.left < 0){
		elemCordinate.left = 0;
	}


	if (elemCordinate.left + element.clientWidth > field.clientWidth) {
		elemCordinate.left = field.clientWidth - element.clientWidth;
	}


	if (elemCordinate.top + element.clientHeight > field.clientHeight) {
		elemCordinate.top = field.clientHeight - element.clientHeight;
	}

	element.style.left = elemCordinate.left + 'px';
	element.style.top = elemCordinate.top + 'px';
}



//task 3 Էլեմենտի վրա սեղմելիս պետք է ստանա ռանդոմ գույն
form.onclick = function(event) {
	let changeColor = ()=>{
		form.style.backgroundColor = `#${Math.floor(Math.random() * 1000).toString(16)}`;
	    }
	    changeColor();
}

