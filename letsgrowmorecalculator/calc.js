let string=" ";
let Buttons=document.querySelectorAll(".btn");
Array.from(Buttons).forEach((button) => {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="=")
        {
           string= eval(string);
           document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=="c")
        {
          string=" ";
          document.querySelector('input').value=string;

        }
        else{
        console.log("e.target");
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
        }
    })
});