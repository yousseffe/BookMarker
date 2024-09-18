var prodNameInput = document.getElementById('bookmarkname');
var prodURLinput = document.getElementById('bookmarkurl');
var button = document.getElementById('myBtn');

var productslist= []

if(localStorage.getItem('products')){
	productslist =JSON.parse(localStorage.getItem('products'))
	showProducts()
}
function main(){
	addProduct()
	showProducts()
	reset()
}
function addProduct (){
	if(!button.hasAttribute("data-bs-toggle") && !button.hasAttribute("data-bs-target")){
		if(prodNameInput.value && prodURLinput.value){
			var product ={
				Name: prodNameInput.value ,
				URL : prodURLinput.value ,
			}
		productslist.push(product)
		localStorage.setItem('products',JSON.stringify(productslist))
		}
			
	}
}
function showProducts(){
	var cartona = ``
	for(var i = 0 ; i < productslist.length ; ++i){
		cartona+=`
		<tr>
			<td>${i}</td>
            <td>${productslist[i].Name}</td>
            <td><a target="_blank"  class="btn btn-bg-main text-white" href="${productslist[i].URL}"><i class="fa-solid fa-eye pe-2"></i> Visit</a></td>
			<td><button onclick="Deleteproduct(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
        </tr>
		`
	}
   document.getElementById('tbodyID').innerHTML=cartona;
	
}

function reset(){
	prodNameInput.value = ""
	prodURLinput.value = ""
	button.setAttribute("data-bs-toggle","modal");
	button.setAttribute("data-bs-target","#exampleModal");
}
function Deleteproduct(i){
	productslist.splice(i,1)
	localStorage.setItem('products',JSON.stringify(productslist))
	showProducts()
}

var regexname=/^[a-zA-Z1-9]{3,}$/;

function checkName(){
	
	if(!regexname.test(prodNameInput.value)){
		 button.setAttribute("data-bs-toggle","modal");
		 button.setAttribute("data-bs-target","#exampleModal");
		 prodNameInput.classList.add("is-invalid");
	}else{
		 button.removeAttribute("data-bs-toggle");
		 button.removeAttribute("data-bs-target");
		 prodNameInput.classList.add("is-valid");
       prodNameInput.classList.remove("is-invalid");
	}
	if(prodNameInput.value == ""){
      prodNameInput.classList.remove("is-valid");
		prodNameInput.classList.remove("is-invalid");
	}
}

function checkURL(){
	var regexURL=/^https:\/\/(www.)?[a-zA-Z1-9]{2,20}\.[a-zA-Z]{2,5}$/;
	if(!regexURL.test(prodURLinput.value)){
		 button.setAttribute("data-bs-toggle","modal");
		 button.setAttribute("data-bs-target","#exampleModal");
		 prodURLinput.classList.add("is-invalid");
	}else{
		 button.removeAttribute("data-bs-toggle");
		 button.removeAttribute("data-bs-target");
		 prodURLinput.classList.add("is-valid");
       prodURLinput.classList.remove("is-invalid");
	   if(!regexname.test(prodNameInput.value)){
		button.setAttribute("data-bs-toggle","modal");
		button.setAttribute("data-bs-target","#exampleModal");
	   }
	}
	if(prodURLinput.value == ""){
		 prodURLinput.classList.remove("is-invalid");
       prodURLinput.classList.remove("is-valid");
	}
}

