
var Nom= prompt("Introduzca su nombre: ","Nombre: ");
var Nom2= (Nom.bold()).italics();


var i=1;
var k=1;
var rc=0;
var ri=0;
function maneja_Continuar(Nom2) {
	// body...
	i++;
	if(i<=10){
		verificar();
		limpiar();
		document.getElementById("Num").innerHTML=i;
	}
	
	document.getElementById('fotos').setAttribute('src','../img/ani0'+i+'.jpg');

	if(i>=10){
		document.getElementById('fotos').setAttribute('src','../img/ani10.jpg');
	}

	if(i==11){
		//i=1;

		if(rc==9){
			rc++;
		}
		if(ri>=1 || ri>=8){
			ri++;
		}
				
		mensaje_Final();
		document.getElementById('Num').innerHTML=" ";
		document.getElementById('Con').style.color="green";
		document.getElementById('Con').innerHTML="Eran 10 animales y lograste clasificar correctamente"+" "+rc+", teniendo"+" "+ri+" fallas. Haga click sobre el texto para ver la practica resuelta correctamente";
		document.getElementById('pie').innerHTML="Aciertos>> "+rc+" "+"Fallas>> "+ri;
	}

	if(i>11){
		document.getElementById('Con').innerHTML="Continuar";
		document.getElementById('Con').style.color="red";
	}
	if(i>=12){
		//k++;
		document.getElementById('fotos').setAttribute('src','../img/ani0'+k+'.jpg');
		respuestas_Correctas();
		if(k>=10){
			document.getElementById('fotos').setAttribute('src','../img/ani10.jpg');
		}
		//respuestas_Correctas();
		k++;
	}

	if(i>=21){
		document.getElementById("Con").innerHTML="FIN";
		document.getElementById("11").style.color="green";
	}
}
function verificar(argument) {
	// body...
	if(i==2){
		var elem= document.getElementById("2");
		if(elem.checked==true){
			rc++;
		}
		else{
			ri++;
		}
	}
	
	else if(i==3){
		var elem= document.getElementById("3");
		if(elem.checked==true){
			rc++;
		}
		else{
			ri++;
		}
	}
	else if(i==4){
		var elem= document.getElementById("4");
		if(elem.checked==true){
			rc++;
		}
		else{
			ri++;
		}
	}
	else if(i==5){
		var elem= document.getElementById("0");
		if(elem.checked==true){
			rc++;
		}
		else{
			ri++;
		}
	}
	else if(i==6){
		var elem= document.getElementById("0");
		if(elem.checked==true){
			rc++;
		}
		else{
			ri++;
		}
	}
	else if(i==7){
		var elem= document.getElementById("4");
		if(elem.checked==true){
			rc++;
		}
		else{
			ri++;
		}
	}
	else if(i==8){
		var elem= document.getElementById("1");
		if(elem.checked==true){
			rc++;
		}
		else{
			ri++;
		}
	}
	else if(i==9){
		var elem= document.getElementById("0");
		if(elem.checked==true){
			rc++;
		}
		else{
			ri++;
		}
	}
	else if(i==10){
		var elem= document.getElementById("3");
		if(elem.checked==true){
			rc++;
		}
		else{
			ri++;
		}
	}
	else if(i==11){
		var elem= document.getElementById("1");
		if(elem.checked==true){
			rc++;
		}
		else{
			ri++;
		}
	}


}
function limpiar(argument) {
	// body...
	var x1= document.getElementById("0");
	var x2= document.getElementById("1");
	var x3= document.getElementById("2");
	var x4= document.getElementById("3");
	var x5= document.getElementById("4");
	x1.checked=false;
	x2.checked=false;
	x3.checked=false;
	x4.checked=false;
	x5.checked=false;
}
function nombre_Usuario() {
	// body...
	var mensaje= document.getElementById("nombre").textContent;
	document.getElementById("nombre").innerHTML= Nom2 + mensaje;
}
function mensaje_Final(argument) {
	// body...
	var msgf= document.getElementById("nombre").firstChild.nextSibling;
	msgf.textContent=" has completado la practica";
}
function respuestas_Correctas(argument) {
	// body...
	color_Radio();
	if(i==12){
		document.getElementById("2").checked=true;
		document.getElementById("12").style.color="green";
	}
	if(i==13){
		document.getElementById("3").checked=true;
		document.getElementById("13").style.color="green";
	}
	if(i==14){
		document.getElementById("4").checked=true;
		document.getElementById("14").style.color="green";
	}
	if(i==15){
		document.getElementById("0").checked=true;
		document.getElementById("10").style.color="green";
	}
	if(i==16){
		document.getElementById("0").checked=true;
		document.getElementById("10").style.color="green";
	}
	if(i==17){
		document.getElementById("4").checked=true;
		document.getElementById("14").style.color="green";
	}
	if(i==18){
		document.getElementById("1").checked=true;
		document.getElementById("11").style.color="green";
	}
	if(i==19){
		document.getElementById("0").checked=true;
		document.getElementById("10").style.color="green";
	}
	if(i==20){
		document.getElementById("3").checked=true;
		document.getElementById("13").style.color="green";
	}
	if(i==21){
		document.getElementById("1").checked=true;
		document.getElementById("11").style.color="green";
	}
}
function color_Radio(argument) {
	// body...
	document.getElementById("10").style.color="blue";
	document.getElementById("11").style.color="blue";
	document.getElementById("12").style.color="blue";
	document.getElementById("13").style.color="blue";
	document.getElementById("14").style.color="blue";
}


window.onload= function () {
	// body...
	nombre_Usuario();
	document.getElementById("Con").style.color= "red";

	document.getElementById("Con").onclick=maneja_Continuar;
}