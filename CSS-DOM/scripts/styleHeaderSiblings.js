/**
 * Created by Melody on 2017/9/15.
 */
function styleHeaderSiblings() {
    if(!document.getElementsByTagName) return false;
    var headers = document.getElementsByTagName("h1");
    var elem;
    for (var i=0;i<headers.length;i++){
        elem = getNextElement(headers[i].nextSibling);
        elem.className = "intro";
    }
}
function getNextElement(node) {
    if(node.nodeType ==1){
        return node;
    }
    if (node.nextSibling){
        return getNextElement(node.nextSibling);
    }
    return null;
}
window.onload = styleHeaderSiblings;