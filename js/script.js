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
function operatingFun(sign){//���˷���

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
				alert("�������");
				break;
		}
		beforeNum=screenObj.value;
		//beforeNum=null;
		signGlobal=null;
	
	}
	
function del(){
	
	screenObj.value=screenObj.value.slice(0,-1);//����Ļ��ɾ��һλ
	
	}
	
function clearFun(){//���
	screenObj.value=' ';
	beforeNum='';
	afterNum='';
	}

function sqr(){//����
	screenObj.value=Math.sqrt(screenObj.value);
	
	}
