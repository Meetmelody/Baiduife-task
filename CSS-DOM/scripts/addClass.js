/**
 * Created by Melody on 2017/9/17.
 */
function addClass(element,value) {
    if(!element.className) {
        element.className = value;
    }else{
        newClassName = element.className;
        newClassName +="";
        newClassName +=value;
        element.className = newClassName;
    }
}