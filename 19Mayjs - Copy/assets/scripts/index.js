let arr = ["Abdul", "Hannan","Shehzad" ];
document.write("your numbers are "+arr) ;

function prmpt() {
    let a =    prompt("enter your index number");
    document.write("your number is "+ arr[a]);
    
    
}
function prmpt2() {
    let b =   prompt("enter your number");
    if (b<=2 && b>=0) {
        document.write("your number is "+ arr[b]);
        
    } else {
        document.write("your number is not valid");
        
    }

   
}