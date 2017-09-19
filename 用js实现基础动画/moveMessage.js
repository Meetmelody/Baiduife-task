/**
 * Created by Melody on 2017/9/19.
 */
function moveMessage() {
    if (!document.getElementById) return false;
    if (!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    elem.style.left = "200px";
}