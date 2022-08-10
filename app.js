let person = prompt("Whats your name? ")

let gender = prompt("Your Gender?" , "male-female ")

let age = prompt("how old are you ?")

let welcome = confirm("you want to skip welcoming message ?")

if (age <=0 ){
alert("Wrong Age ")
}




if(!welcome){
    
        if(gender== "male"){
            alert( "hello Mr . " +person)
    
        }
    
        else if(gender=="female"){
            alert( "hello Ms . " +person)
    
        }
        else{
            alert("hello "+ person)
        }
    
    }
