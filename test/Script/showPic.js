/**
 * Created by Melody on 2017/4/12.
 */
function showPic(whichPic){
    var source = whichPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    var text = whichPic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
    alert(description.firstChild.nodeValue)
}
