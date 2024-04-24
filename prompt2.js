function multi(){
	var num; 
	num=prompt('Ingrese un numero(1-10:)');
	num=parseInt(num);
	document.write("");
	for (var x=1;x<=10;x++)
	{
		tabla=num*x;
	document.write(num + "x" + x + "=" + tabla + "<br>");
	}
}