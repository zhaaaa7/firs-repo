function showPic(whichpic) {
    if (!document.getElementById("placeholder")) {
        return false;
    }    
    var source = whichpic.getAttribute("href"),
        placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
        
    if (document.getElementById("description")) {
        var description = document.getElementById("description"),
            text = whichpic.getAttribute("title");
        description.firstChild.nodeValue = text;
    }
    return true;
}


function prepareGallery() {   
   if (!document.getElementsByTagName) { 
        return false;
    }
    if (!document.getElementById) {
        return false; 
    }
    if (!document.getElementById("imagegallery")) { 
        return false;
    }
    var i=0;
    var gallery=document.getElementById("imagegallery");
    var links=gallery.getElementsByTagName("a");
    for(i;i<links.length;i++) {
        links[i].onclick=function() {
            showPic(this);
            return false;
        }
}
}    
window.onload = prepareGallery;
