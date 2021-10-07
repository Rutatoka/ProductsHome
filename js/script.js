
let table  = document.querySelector('.table');
document.querySelector('#oke').onclick=function payProducts(items){
    recountTotal();
items={
name: document.querySelector('#name').value,
quantity: document.querySelector('#quantity').value,
 }


 let ol = document.createElement('ol');
 let quantities=document.createElement('span');
 let names=document.createElement('div');
 let li = document.createElement('li')
 quantities.innerHTML = items.quantity;
 names.innerHTML = items.name;


 ol.append(li);
 li.append(names);
 li.append(quantities);
 table.append(li);
 document.querySelector('#amount').innerHTML=recountTotal();
}


function recountTotal() {
	let spisok=document.querySelectorAll('table li span');
	let result=0;
	for(let elem of spisok){
	result+=Number(elem.innerHTML);
	}
	document.querySelector('#amount').innerHTML=result;
	console.log(result);
	return result;
}