/**
 * Created by Melody on 2017/4/12.
 */
function preparePlaceholder(){
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","image/placeholder.jpg");
    placeholder.setAttribute("alt","my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id","description");
    var desctext = document.createTextNode("Choose an imgage");
    description.appendChild(desctext);
    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}

function prepareGallery(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i=0;i<links.length;i++){
        links[i].onclick  = function(){
            return showPic(this);
        };
        links[i].onkeypress = links[i].onclick;
    }
}
function showPic(whichPic) {
    if (!document.getElementById("placeholder")) return false;
    var source = whichPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    if (!document.getElementById("description")) return false;
    if (whichPic.getAttribute("title")){
        var text = whichPic.getAttribute("title");
    }else {
    var text = "";
    }
    var description = document.getElementById("description");
    if (description.firstChild.nodeType ==3) {
        description.firstChild.nodeValue = text;
    } return false;
}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);


document.getElementsByTagName("body")[0].appendChild(placeholder);
document.getElementsByTagName("body")[0].appendChild(description);
document.body.appendChild(placeholder);
document.body.appendChild(description);

insertAfter();