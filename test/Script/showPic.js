/**
 * Created by Melody on 2017/4/12.
 */
function showPic(whichPic){
    var source = whichPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    var text = whichPic.getAttribute("title");
    var description = document.getElementById("description");
<<<<<<< HEAD
    description.firstChild.nodeValue = text;
}
=======
}
/**
function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.nodeType);
}
countBodyChildren();**/


alert(description.childNodes[0].nodeValue);
>>>>>>> d0a48d333056977e93ad0d2145150227cd1c6dc8
