function compute()
{

 var principal = document.getElementById("principal").value;

 if((principal =="")||(principal<=0))//we check if the inpute is empty or < = 0
 {
   document.getElementById("principal").focus(); 
    alert(" Please Enter a positive number");  
   
 }
 else
 {

    var rate =document.getElementById('rate').value;
    var years = document.getElementById("years").value;
    var interest =principal * years *rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    showResult(principal,rate,interest,year);//this function is in the bottom (line 37)


 }
 
}
        

//function of updating the rate 
function updateRate()

{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";


}


//this function shows the result (for mor practice) 
function showResult(principal ,rate,amount ,year)
{
    document.getElementById("result").innerHTML="If you deposit  <strong> "+principal+"</strong>,  \<br\>at an interest rate of <strong> "+rate+"</strong>%\<br\>You will receive an amount of <strong> "+amount+"</strong>,\<br\>in the year <strong> "+year+"</strong>\<br\>";

}
