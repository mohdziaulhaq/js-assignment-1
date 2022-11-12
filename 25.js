// 25. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of you shopping cart if it has not been already added
//     - remove 'Honey' if you are allergic to honey
//     - modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if(!shoppingCart.includes('Meat')){
    shoppingCart.unshift('Meat');//Inserts new elements at the start of an array
}
console.log(shoppingCart);

if(!shoppingCart.includes('Sugar')){
    shoppingCart.push('Sugar');//Appends new elements to the end of an array.
}
console.log(shoppingCart);
let allergeticToHoney = true;
if(allergeticToHoney){
    for(let i=0; i<shoppingCart.length ;i++){
        if(shoppingCart[i]==='Honey'){
            shoppingCart.splice(i,1);//Removes elements from an array
        }
    }
}
console.log(shoppingCart);

for(let i=0; i<shoppingCart.length ;i++){
    if(shoppingCart[i] === 'Tea')
        shoppingCart[i] = 'Green Tea';
}
console.log(shoppingCart);