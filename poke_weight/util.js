
      
        var request = new XMLHttpRequest()
        var data2;
        var reqpkm;
        var reqID;
        var pkmnsrc
        var pkmnImg 
        var pkmnWgt = 0;
        var GlbalWgt = 0;

        function addItem()
        {  //  var pkmID = document.getElementById("pokemon-ID").value;
        var pkmName = document.getElementById("pokemon-name").value;
        if(pkmName !== " "&&pkmName !== "")
        {
        reqpkm="https://pokeapi.co/api/v2/pokemon/"+pkmName
        console.log(reqpkm)
        request.open('GET', reqpkm, true)
        request.onload = function ()
        {
        if(request.status == 404)

        {
        console.log('error')
        var border = document.getElementById("error")
        border.style.border = "thick solid red"
        border.innerHTML="INVALID POKEMON"
        throw new Error(reqpkm + ' replied 404');
        }
        var data2 = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400)
        {
        pkmnsrc = data2.sprites.other["official-artwork"].front_default
        pkmnWgt = data2.weight;
        pkmName = data2.name;
        //GlbalWgt = GlbalWgt + pkmnWgt;
  //      console.log(data2)
    //    console.log(data2.weight)
      //  console.log(data2.sprites.other["official-artwork"].front_default)
        pkmnImg = new Image();
        pkmnImg.src = pkmnsrc
        console.log(pkmnImg.src)
        var newLI = document.createElement("LI")
        var mix = pkmName+"       "+pkmnWgt+"        ";
        GlbalWgt = GlbalWgt + pkmnWgt;
                //numVal.innerText = totalPrecio;
        var  newContent = document.createTextNode(mix)
        newLI.appendChild(newContent)
                newContent = document.createElement("button")
                newContent. innerText = "remove pokemon"
                newContent.class="remove_item"
                newLI.appendChild(newContent);
                
                
                var img = document.createElement('img'); 
                img.src = pkmnsrc;
                img.height = "100"
                img.width = "100"
                newLI.appendChild(img)
                   numVal = document.getElementById("GlobalWeight")
             numVal.innerHTML = GlbalWgt;
                
               document.getElementById("itemList").setAttribute("align", "auto");
                document.getElementById("itemList").appendChild(newLI);
                newContent.addEventListener("click", function()
                {
                   
                    var aux2 = newLI.innerText;
                    var aux3 = newLI.parentNode.innerText;
                    
                    aux3 = aux2.split(" "); 
                    // Split on spaces

                    // = totalPrecio - parseInt(aux3[1]);
                    GlbalWgt = GlbalWgt - parseInt(aux3[1])
                   numVal = document.getElementById("GlobalWeight")
             numVal.innerHTML = GlbalWgt;
                   console.log(aux3[1])
                    newLI.parentNode.removeChild(newLI);

                    
                 });

             //      appnd.appendChild(newDiv);
    
       }
               
        else
        {




        console.log('error')
        var border = document.getElementById("error")
        border.style.border = "thick solid red"
        border.innerHTML="INVALID POKEMON"
        }
        }
        var border = document.getElementById("error")
        border.style.border = "hidden"
        border.innerHTML=" "
        }




        else
        {
        var border = document.getElementById("error")
        border.style.border = "thick solid red"

        border.innerHTML="INVALID POKEMON"

        }
        request.send()
        }










        
function removeAll()
   {
          //list = document.getElementById("itemList")
        // parentlist = list.parentNode;

    //     var newUL = document.createElement("UL")
        // newUL.class="items"
      //   newUL.id="itemList"
   //      list.parentNode.removeChild(list);
 //        parentlist.appendChild(newUL)
          // numVal = document.getElementById("numVal")
           //  numVal.innerHTML = 0;
          //   totalPrecio = 0;
      //   class="items" id="itemList
   }



      


        <!--<meta charset="UTF-8">


        // DOMContentLoaded wait until all dom is loaded, check the docs in below link
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event











/*
this is one template function that can be passed to add_item_to_list_with_template 
  and add the remove event of the button
  or you can create another template function wich create a dom element like 
  Document.createElement() and add the event to that element
  https://developer.mozilla.org/es/docs/Web/API/Document/createElement 
*/
/*
let get_element_li  = (name, price) => {
  return `<li class="added-pokemon">name: ${name} <div class="weight">weight: ${price} </div> <button class="remove-pokemon">remove</button></li>`
}

let add_item_to_list_with_template = (template_function) => {
  retu-rn (event) => {

  }
}
/*
 for removing elements could be this way
  let element_to_delete = document.querySelector("selector").lastElementChild;
  element_to_delete.parentNode.removeChild(element_to_delete);
  or we could use ChildNode.remove()
  https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove

let remove_element_event = (event) => {
  // check which dom element triggered the event of remove, that is in event
  let remove_item  = (node_to_remove) => {
    // add the remove logic here 
  }
}

let thenable_handle_for_the_result_of_the_pokemon_request = (result) => {
  //handle here the pokemon from the request
}

let catchable_handle_for_the_error_of_the_pokemon_request = (err) => {
  //handle here the pokemon error from the request
}

/* 
  for this it can be solved by adding a custom XMLHttpRequest but i don't recomend it, try to 
  use other libs that basically solve this, an alternative you can use axios 
  https://www.npmjs.com/package/axios

let get_pokemon_data = () => {
  return new Promise((resolve, reject) => {
    // add the logic of the request here
  })
}
*/



/*
// JavaScript source code
function get_element_li (name, price) {
  return `<li class="added-item">name: ${name} price: ${price}  <button class="remove-item">remove</button></li>`
}
let listaPokemon = [0];
let totalPeso = 0;


var data = JSON.parse(this.response)

data.forEach((movie) => {
  // Log each movie's title
  console.log(movie.title)
})

function addItem()
{
    var itmNm = document.getElementById("pokemon-name").value; 
  //  var itmVl = document.getElementById("item-value").value;
    var appnd = document.getElementsByClassName("items");
    if(isNaN(itmNm))
     {
        if(itmNm !== " ")
        {
        if(itmNm !== "")
          {
            console.log(itmNm,"TRUE");
   
              var newLI = document.createElement("LI")
              var mix = itmNm+"       ";
   
                totalPeso = totalPeso + parseInt(0);

                 //numVal.innerText = totalPrecio;

                var  newContent = document.createTextNode(mix)
                newLI.appendChild(newContent)
                newContent = document.createElement("button")
   
                newContent. innerText = "remove pokemon"
                newContent.class="remove_item"

                newLI.appendChild(newContent);
               /ocument.getElementById("itemList").setAttribute("align", "auto");
    

                document.getElementById("itemList").appendChild(newLI);

                newContent.addEventListener("click", function()
                {
                   
                    var aux2 = newLI.innerText;
                    var aux3 = newLI.parentNode.innerText;
                    
                    aux3 = aux2.split(" ");          // Split on spaces
                  // totalPrecio = totalPrecio - parseInt(aux3[1]);
                   numVal = document.getElementById("numVal")
             numVal.innerHTML = totalPrecio;
               //     console.log(aux3[1])
                    newLI.parentNode.removeChild(newLI);


                 });
                //    appnd.appendChild(newDiv);
    
               }
            }
            // document.getElementById('elementid').value = ""
      
             var border = document.getElementById("container")
            border.style.border = "hidden" 
            // numVal = document.getElementById("numVal")
            // numVal.innerHTML = totalPrecio;


            }     // return `<li class="added-item">name: ${name} price: ${price}  <button class="remove-item">remove</button></li>`


      else
      if((itmNm == " ")||(itmNm == ""))
        {
            console.log("ERROR")
                         var border = document.getElementById("container")
                         border.style.border = "thick solid red" 
                         

        }
  }

function removeAll()
   {
          list = document.getElementById("itemList")
         parentlist = list.parentNode;

         var newUL = document.createElement("UL")
         newUL.class="items"
         newUL.id="itemList"
         list.parentNode.removeChild(list);
         parentlist.appendChild(newUL)
          // numVal = document.getElementById("numVal")
           //  numVal.innerHTML = 0;
          //   totalPrecio = 0;
      //   class="items" id="itemList
   }


function remove(newContent)
{
 newContent.parentNode.removeChild(newContent);
}

let add_item_to_list_with_template = (template_function) => {
  return (event) => {


    /*
      add the item to the list
      add event listener to the button inside the element just added with the remove_item function
      add the value to the total
    */
    /*
  }
}
/*
 for removing elements could be this way
  let element_to_delete = document.querySelector("selector").lastElementChild;
  element_to_delete.parentNode.removeChild(element_to_delete);
  or we could use ChildNode.remove()
  https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
*/





