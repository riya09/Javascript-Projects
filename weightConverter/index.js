let converter=[
	{'kg':0.453592,'tn':0.000453592,'ounce':16},
	{'pound':2.20462,'tn':0.001,'ounce':35.274},
	{'pound':2204.62,'kg':1000,'ounce':35274},
	{'pound':0.0625,'kg':0.0283495,'tn':0.00002835}
	],
	input=document.querySelector('.num-value');
input.value='';

const allunits=document.querySelector('select'),len=allunits.options.length,
	showUnit=document.querySelectorAll('.showUnit'),
	showAnswer=document.querySelectorAll('.answer');
allunits.selectedIndex='0';

function displayResult(index,getObject,value){
	document.querySelector('.conversion-value').style.visibility='visible';
	let unitHolder=Object.keys(getObject);
	let j=0;
	for (let i = 0; i<len; i++) {
		if(index!=i){
			let text=allunits.options[i].text;
			showUnit[j].innerHTML=text;
			if(value<=0 || value=='' || isNaN(value)){
				showAnswer[j].innerHTML='';
				document.querySelector('.conversion-value').style.visibility='hidden';
			}
			else{
				let answer=value*getObject[unitHolder[j]];
				showAnswer[j].innerHTML=answer;
			}
			j++;
		}
	}
}
function getValue(){
	let index=allunits.selectedIndex,value=(input.value),getObject=converter[index];
	displayResult(index,getObject,value);
}
allunits.addEventListener('change',getValue,false);
input.addEventListener('input',getValue,false);
//displayResult(1,kg,12)