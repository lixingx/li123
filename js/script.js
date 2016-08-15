// JavaScript Document

var screenObj=document.getElementById('screen');
function inputKey(num){
	
	
	if(clearBool){
		screenObj.value="";
		clearBool=false;
		
		
		
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

var beforeNum,afterNum,signGlobal,signResult,clearBool=false;
function operatingFun(sign){//按了符号

	if(signGlobal!=null)
	{
		afterNum=screenObj.value;
		result();
		
	}
	afterNum=null;
	beforeNum=screenObj.value; 
	signGlobal=sign;
	clearBool=true;
	

	
	}
function result(){
	if(signGlobal!=null)
	{
		signResult=signGlobal;
	}
	if(afterNum==null)
	{
		afterNum=screenObj.value;
	}

	switch(signGlobal)
		{
			case "+":
				screenObj.value=Number(beforeNum)+Number(afterNum);
				break;
			case "-":
				screenObj.value=Number(beforeNum)-Number(afterNum);
				break;
			case "*":
				screenObj.value=Number(beforeNum)*Number(afterNum);
				break;
			case "/":
				screenObj.value=Number(beforeNum)/Number(afterNum);
				break;
			case "%":
				screenObj.value=Number(beforeNum)%Number(afterNum);
				break;
			default:
				alert("程序错误！");
				break;
		}
		beforeNum=screenObj.value;
		//beforeNum=null;
		signGlobal=null;
	
	}
	
function del(){
	
	screenObj.value=screenObj.value.slice(0,-1);//从屏幕上删除一位
	
	}
	
function clearFun(){//清空
	screenObj.value=' ';
	beforeNum='';
	afterNum='';
	}

function sqr(){//根号
	screenObj.value=Math.sqrt(screenObj.value);
	
	}
