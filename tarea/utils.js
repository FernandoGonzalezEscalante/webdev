// JavaScript source code
function get_element_li (name, price) {
  return `<li class="added-item">name: ${name} price: ${price}  <button class="remove-item">remove</button></li>`
}
let listaTotal = [0];
let totalPrecio = 0;


function addItem()
{
    var itmNm = document.getElementById("item-name").value; 
    var itmVl = document.getElementById("item-value").value;
    var appnd = document.getElementsByClassName("items");
    if(!isNaN(itmVl))
     {
        if(itmVl !== " " && itmNm !== " ")
        {
        if(itmVl !== "" && itmNm !== "")
          {
            console.log(itmVl, itmNm,"TRUE");
   
              var newLI = document.createElement("LI")
              var mix = itmNm+"   "+itmVl+"     ";
   
                totalPrecio = totalPrecio + parseInt(itmVl);

                 //numVal.innerText = totalPrecio;

                var  newContent = document.createTextNode(mix)
                newLI.appendChild(newContent)
                newContent = document.createElement("button")
   
                newContent. innerText = "remove item"
                newContent.class="remove_item"

                newLI.appendChild(newContent);
                document.getElementById("itemList").setAttribute("align", "auto");
    

                document.getElementById("itemList").appendChild(newLI);

                newContent.addEventListener("click", function()
                {
                   
                    var aux2 = newLI.innerText;
                    var aux3 = newLI.parentNode.innerText;
                    
                    aux3 = aux2.split(" ");          // Split on spaces
                   totalPrecio = totalPrecio - parseInt(aux3[1]);
                   numVal = document.getElementById("numVal")
             numVal.innerHTML = totalPrecio;
                    console.log(aux3[1])
                    newLI.parentNode.removeChild(newLI);


                 });
                //    appnd.appendChild(newDiv);
    
               }
            }
            // document.getElementById('elementid').value = ""
      
             var border = document.getElementById("container")
            border.style.border = "hidden" 
             numVal = document.getElementById("numVal")
             numVal.innerHTML = totalPrecio;


            }     // return `<li class="added-item">name: ${name} price: ${price}  <button class="remove-item">remove</button></li>`


      else
      if(isNaN(itmVl)|| (itmVl == " ")||(itmNm == " ")||(itmNm == "") ||(itmVl == " "))
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
           numVal = document.getElementById("numVal")
             numVal.innerHTML = 0;
             totalPrecio = 0;
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
  }
}
/*
 for removing elements could be this way
  let element_to_delete = document.querySelector("selector").lastElementChild;
  element_to_delete.parentNode.removeChild(element_to_delete);
  or we could use ChildNode.remove()
  https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
*/





