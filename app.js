var Pizza = 1200, Zinger = 220, Fajita = 350, Mighty = 500;
var Pizza_q=0, Zinger_q=0, Fajita_q=0, Mighty_q=0;
var name = "", email="";
var PizzaBill="",ZingerBill="",FajitaBill="",MightyBill="";
var total_amount=0;
document.getElementById("name").addEventListener("keyup",function(){
    // name = document.getElementById("name").value;
    
    document.getElementById("name2").innerHTML=this.value;
});

document.getElementById("phone").addEventListener("keyup",function(){
    // name = document.getElementById("name").value;
    
    document.getElementById("phone2").innerHTML=this.value;
});



document.getElementById("Pizza").addEventListener("keyup",function(){
if(this.value==""||this.value==0){
    PizzaBill="";
    Pizza_q=0;
    showBill();
}else{
    Pizza_q=this.value;
    PizzaBill="<tr><td>Pizza</td><td>Rs. "+Pizza+"</td><td>"+Pizza_q+"</td><td>"+Pizza+"x"+Pizza_q+" = "+Pizza*Pizza_q+"</td></tr>";
    showBill();

}
});

document.getElementById("Zinger").addEventListener("keyup",function(){
if(this.value==""||this.value==0){
    ZingerBill="";
    Zinger_q=0;
    showBill();

}else{
    Zinger_q=this.value;
    ZingerBill="<tr><td>Zinger</td><td>Rs. "+Zinger+"</td><td>"+Zinger_q+"</td><td>"+Zinger+"x"+Zinger_q+" = "+Zinger*Zinger_q+"</td></tr>";
    showBill();
}
});

document.getElementById("Fajita").addEventListener("keyup",function(){
if(this.value==""||this.value==0){
    FajitaBill="";
    Fajita_q=0;
    showBill();

}else{
    Fajita_q=this.value;
    FajitaBill="<tr><td>Fajita</td><td>Rs. "+Fajita+"</td><td>"+Fajita_q+"</td><td>"+Fajita+"x"+Fajita_q+" = "+Fajita*Fajita_q+"</td></tr>";
    showBill();
}
});

document.getElementById("Mighty").addEventListener("keyup",function(){
if(this.value==""||this.value==0){
    MightyBill="";
     Mighty_q=0;
    showBill();

}else{
     Mighty_q=this.value;
     MightyBill="<tr><td>Mighty</td><td>Rs. "+ Mighty+"</td><td>"+ Mighty_q+"</td><td>"+ Mighty+"x"+ Mighty_q+" = "+ Mighty* Mighty_q+"</td></tr>";
    showBill();
}
});


function showBill(){
    document.getElementById("bill").innerHTML=PizzaBill+ZingerBill+FajitaBill+MightyBill; //table statement
    document.getElementById("amount").innerHTML = Pizza*Pizza_q+Zinger*Zinger_q+Fajita*Fajita_q+Mighty*Mighty_q; // total amount
}
