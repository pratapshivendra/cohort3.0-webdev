import {quizData} from "./data.js";
const stat = document.getElementById("status");
const opts = document.getElementById("options");
const nxtbtn = document.getElementById("next");
const reloadBtn = document.getElementById("reload");
let currQuesIndex = 0;
let score = 0;
let selectedOpt = null;
loadquestion();

function loadquestion() {
    
    const currQues = quizData[currQuesIndex];
    stat.innerHTML = currQues.question;
    opts.innerHTML = '';
    ["a", "b", "c", "d"].forEach((opt)=> {
        const label = document.createElement('label');
        const ip = document.createElement('input');
        ip.type = 'radio';
        ip.name = 'pick';
        ip.value = opt;
        ip.classList.add('option');
        label.appendChild(ip);
        label.appendChild(document.createTextNode(currQues[opt]));
        opts.appendChild(label);
    })
}

opts.addEventListener('change', () => {
    selectedOpt = document.querySelector('input[name="pick"]:checked');
    nxtbtn.style.display = selectedOpt ? "block" : "none";
});

nxtbtn.addEventListener("click", () => {
    if(selectedOpt) {
        const ans = selectedOpt.value;
        if(ans===quizData[currQuesIndex].correct)
            score++;
    }
    currQuesIndex++;

    if (currQuesIndex < quizData.length) {
        loadquestion();
        nxtbtn.style.display = "none"; 
    } else {
        stat.innerText = `Quiz Over! Your score: ${score}/${quizData.length}`;
        opts.innerHTML = '';
        nxtbtn.style.display = "none"; 
        reloadBtn.style.display = "block";
    }
});
reloadBtn.addEventListener("click", () => {
    currQuesIndex = 0;
    score = 0;
    reloadBtn.style.display = "none"; 
    loadquestion(); 
    nxtbtn.style.display = "none"; 
});