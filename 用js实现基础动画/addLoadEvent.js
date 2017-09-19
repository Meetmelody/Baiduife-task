/**
 * Created by Melody on 2017/9/14.
 */
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload !='function') {
        window.onload = func;
    }else{
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
addLoadEvent(positionMessage);
addLoadEvent(moveMessage);