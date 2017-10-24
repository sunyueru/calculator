//console.log("sun");
var output=document.getElementsByClassName('output')[0];
var content=output.getElementsByTagName('p')[0];
var btnContainer=document.getElementsByClassName('btn-container')[0];
btnContainer.onclick=function(e){
	target=e.target;
	console.log(target);
	// <button class="func-btn deepGrey">)</button>
	if (target.nodeName==="BUTTON") {
		var btnType=target.innerHTML;
		if(btnType=="AC"){
			content.innerHTML='0';
		}else if(btnType=="CE"){
			if(content.innerHTML!=''){
				if(content.innerHTML.length===1){
					content.innerHTML='0';
				}else{
					// 正数表示从前往后，负数表示从后往前，此处表示开始是从前往后，结束是倒数第一个
					content.innerHTML=content.innerHTML.slice(0,-1);
				}
			}
		}else if(btnType=='='){
			var text=content.innerHTML;
			console.log(text);
			if(!text){
				return;
			}else{
				var result;
				result=eval(text)+'';
				content.innerHTML=result;
			}
		} else{
			if (content.innerHTML=='0') {
				content.innerHTML='';
			}
			content.innerHTML=content.innerHTML+btnType;
		}
	}

}