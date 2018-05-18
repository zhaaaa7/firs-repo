
window.onload=drag;

function drag(){
   // close
   var oClose=document.getElementById('ui_boxyClose');
   oClose.onclick=function(){
   	  document.getElementById('loginPanel').style.display='none';
   }
   // status change
   var loginState=document.getElementById('loginState'),
       stateList=document.getElementById('loginStatePanel'),
       lis=stateList.getElementsByTagName('li'),
       stateTxt=document.getElementById('login2qq_state_txt'),
       loginStateShow=document.getElementById('loginStateShow');

   loginState.onclick=function(e){
   	 e = e || window.event;
     if(e.stopPropagation){
          e.stopPropagation();
     }else{
          e.cancelBubble=true;
     }
    stateList.style.display='block';
       

   }


   for(var i=0,l=lis.length;i<l;i++){
      lis[i].onmouseover=function(){
      	this.style.background='#567';
      }
      lis[i].onmouseout=function(){
      	this.style.background='#FFF';
      }
      lis[i].onclick=function(e){
      	e = e || window.event;
      	if(e.stopPropagation){
          e.stopPropagation();
      	}else{
          e.cancelBubble=true;
      	}
      	var id=this.id;
      	stateList.style.display='none';
        stateTxt.innerHTML=this.getElementsByClassName('stateSelect_text',id)[0].innerHTML;
        loginStateShow.className='';
        loginStateShow.className='login-state-show '+id;

      }
   }
   document.onclick=function(){
   	  stateList.style.display='none';
   }
}

