// JavaScript Document

var screenObj=document.getElementById('screen');
function inputKey(num){
	
	
	if(clearBool){
		screenObj.value=' ';
		clearBool=false;
		afterGlobal=beforesingGlobal;
		beforesingGlobal='';
		
		}
	if(screenObj.value=="0"&&num!=="."){
		screenObj.value=num;
		}
		
		else {
			if((screenObj.value.indexOf(".")==-1 ) || num!=="."){
				screenObj.value=screenObj.value+num;
				
				}
			
			}
	
	}

var beforeNum,afterNum,beforesingGlobal,afterGlobal,clearBool=false;
function operatingFun(sign){//按了符号
	beforeNum=screenObj.value; 
	beforesingGlobal=sign;
	clearBool=true;
	

	
	}
function result(){
	afterNum=screenObj.value;
	if(beforesingGlobal="+"){
		screenObj.value=parseFloat(beforeNum)+parseFloat(afterNum);
		}
	else if(beforesingGlobal="-"){
		screenObj.value=parseFloat(beforeNum)-parseFloat(afterNum);
		}
	else if(beforesingGlobal="*"){
		screenObj.value=parseFloat(beforeNum)*parseFloat(afterNum);
		}
	
	}
	
function del(){
	
	screenObj.value=screenObj.value.slice(0,-1);//从屏幕上删除一位
	
	}
	
function clearFun(){//清空
	screenObj.value=' ';
	beforeNum='';
	afterNum='';
	beforesingGlobal='';
	}

function sqr(){//根号
	screenObj.value=Math.sqrt(screenObj.value);
	
	}
