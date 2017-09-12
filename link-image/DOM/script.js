function changeFontSize(x){
		x = parseInt(x);
	 
		var text = document.getElementsByClassName('text')
		for (var i=0 ; i < text.length ; i++) {
			text[i].style.fontSize = x +'px';
		}
		
	}

function increaseFontSize(paragraph){
    var div = document.getElementById(paragraph);
    var currentFont = div.style.fontSize;

    if (parseInt(currentFont) + 1 > 30) {
    	alert('the font size if not applicable')
    }
    else{
    	    div.style.fontSize = parseInt(currentFont) + 1 + "px";
    }
  
}

function decreaseFontSize(paragraph){

    var div = document.getElementById(paragraph);
    var currentFont = div.style.fontSize;
    if (parseInt(currentFont) - 1 < 10) {
    	alert('the font size if not applicable')
    }
    else {
    	div.style.fontSize = parseInt(currentFont) - 1 + "px";
    }
}
function changeColor(){
	var color = document.getElementsByClassName('text')
		for (var i = 0; i < color.length; i++) {
			if (i == 0) {
				color[i].style.color = 'blue'
			}
			if (i == 1){
				color[i].style.color ='yellow'
			}
			if (i == 2){
				color[i].style.color = 'red'
			}
			if (i == 3) {
				color[i].style.color = 'green'
			}
		}

}