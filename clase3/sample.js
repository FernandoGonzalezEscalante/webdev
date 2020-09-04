
console.log("hello");
last_var = 11;


function my_first_func(arg_one, arg_two) {

    console.log(arg_one, arg_two)

}
my_first_func(10, "blaaa");

let sec_func = function (arg_one, arg_two) {
    console.log(arg_one, arg_two);

}

let arr_func= () => {
    console.log("inside arrow")
}//arrow function???


//iife javascript , expresion de funcion ejecutada
/*a
 (function()
 {
 statements
})();

 */
((x) => { console.log(x) })(1000)

function identity(price) {
    return price;
}
function double_price(price) {
    return price * 2;
}

function discount_exec(price_cal,price) {
    return price_cal(price) * .70
}

console.log(discount_exec(identity,100))
console.log(discount_exec(double_price, 100))
//funcion identidad= se vuelve el primer argumento
//promesa???
//funcion suscribir??

/*
function my_curr(x) {
    return function (y) {
        console.log('${ x } ${ y }')
    }
}

let x = my_curr("hello");
x("juve");
x("pablo");

*/


function get_li_template(name,price) {
    return `<li class="added_item">${name} price:${price}</li>`
}
/*
document.getElementById("add_item").addEventListener("click", (event) => {
    console.log("clocked")
    console.log(event)

    let item_name = document.querySelector("#items").value;
    let item_price = document.querySelector("#price").value;
    let template = get_li_template(item_name, item_price);
    console.log(template);


    document.getElementById("list_items").innerHTML += template;


})

*/

///

a = {}
a = { A: '100' }
//diccionario mapa

//a.A, a["A"]

a = { B: { C: 1000 } }

//UN DICCIONARIO???

