let inp = document.querySelectorAll(".type");
let word=null;

inp.forEach((input, index) => {
    input.addEventListener("input", function () {
        if (this.value.length == 1 && index < inp.length - 1) {
            inp[index + 1].focus();
        }
    });
});

async function getWord(){
    let response=await fetch(
        "https://random-word-api.herokuapp.com/word?length=6"
    )

    let data=await response.json();
    
    word=data[0]
    console.log(word);
}



getWord();