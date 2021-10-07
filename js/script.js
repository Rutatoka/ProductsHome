let products=[];
document.querySelector('#oke').onclick=function payProducts(items){
items={
name: document.querySelector('#name').value,
quantity: document.querySelector('#quantity').value,
price: document.querySelector('#price').value
 }
 console.log(items)

let parentOfText= document.querySelector('#parentOfText');
let textArea= document.createElement('li');
parentOfText.appendChild(textArea)
textArea.innerHTML='Название:   '+[items.name]+' Количество:   '+[items.quantity]+' Цена:   '+[items.price];
let amount=document.querySelector("#amount");
let a;
a=(+items.quantity)*(+items.price);
let result=0;
result+=Number(a);
amount.innerHTML=result;

}

