
 var contactNav = document.getElementById("navId2");
 var btn2 = document.getElementById("toggleButton2");
btn2.innerHTML = "&#8592";

contactNav.style.right = "-255px";

function toggleRight(){
	contactNav.style.height = window.innerHeight - 60+"px";
	if(contactNav.style.right == "-255px"){
		contactNav.style.right = "0px";
        btn2.innerHTML = "&#8594";
	} else {
		contactNav.style.right = "-255px";
        btn2.innerHTML = "&#8592";
	}
}

 var contactDiv = document.getElementById("contacts");

function address(){

var descriptString = "Bombay Sunshine is  a candid picture of the  life of a girl called  Tara  growing  up  in  middle class  Mumbai  in  the eighties. The book takes you through a journey of the coming of age  of Tara while  capturing the culture of  Mumbai from that time period. The antics of Tara and her friends provide plenty of laughter and some serious thought.";


var addString= " <br/> <br/> &copy; Punjiri Web and Mobile Technologies, 2016.  <br/> Mangalore, Karnataka, India  <br/>  Email: maya.ahmed@gmail.com <br/>";

var newString = descriptString + addString;
contactDiv.innerHTML= newString;
}

address();

