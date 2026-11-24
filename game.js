let inp = document.querySelectorAll(".type");
let word="";
let currindex=0;

inp.forEach((input, index) => {
    input.addEventListener("input", function () {
        if (this.value.length == 1 && index < inp.length - 1) {
            inp[index + 1].focus();
        }

        
    });

    input.addEventListener("keydown",function(dets){

        if(this.value===""&&index>0&& dets.key=="Backspace"){
            inp[index-1].focus();
        }

    });

    
});

// function backspace(dets.key){

// }

// window.addEventListener("keydown",function(dets){
//     console.log(dets.key);
// })

async function getWord(){
    let response=await fetch(
        "https://random-word-api.herokuapp.com/word?length=6"
    )

    let data=await response.json();
   
    
    word=data[0]
    console.log(word);
    let cindex=word.length;

let answer=word.toUpperCase();
 inp.forEach((input,index)=>{
    if(input.value.toUpperCase===answer[index]){
        console.log("correct word")
        currindex++;
    }

     if(currindex===cindex){
    console.log("allwords are correct")
 }

 })
}







getWord();