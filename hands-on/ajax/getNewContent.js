function getNewContent(){
    var request=new XMLHttpRequest();
    if(request){
        request.open ("GET","a.txt",true);
        request.onreadystatechange=function(){
            if(request.readyState==4){
                var para=document.createElement("p");               
                var txt=document.createTextNode(request.responseText);
                alert(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);
    } else {
        alert("not support");
    }
}

window.onload=getNewContent;