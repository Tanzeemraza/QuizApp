window.on
var question = [{
    id:1,
    question: "Toyota Parent country is?",
    answer: "Japan",
    options:[
"japan",
"America",
"Canada",
"Pakistan"
    ]
},

{
id: 2,
question: "Asia Biggest Country is ?",
answer: "India",
options:[
"japan",
"America",
"India",
"Pakistan"
]
},

{
id:3,
question: "super powrer country is ?",
answer: "Pakistan",
options:[
"japan",
"America",
"India",
"Pakistan"
]
},




war question_count = 0;
function next(){
    question_count++
    console.log(question_count)
    show(question_count)
}
function show(e){
    var ques = document.getElementById("question")
    ques.innerHTML = `<h1> ${question[e].question} </h1>
    <ul class="list">
    <li class="option">${question[e].options[0]}</li>
    <li class="option">${question[e].options[1]}</li>
    <li class="option">${question[e].options[2]}</li>
    <li class="option">${question[e].options[3]}</li>
</ul> `
active()
}

function active(){
    let option1 = document.querySelectorAll("li.option")


    for(let i = 0; i < option.lenght, i++){
        option1[i].onclick = function(){
            for(let j = 0; j < option1.length, j++){
                if(option1[j].classlist.contains("active"))
                option1[j].classlist.remove("active")
            }
            option1[i].classlist.add("active")
        }
    }
}