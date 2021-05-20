h3_list = ["Words", "Penalty", "Validate", "Special", "Weakness"]

p_list = ["Your sentence is constructed with the word that you add to it. Each word score points, you can check the points in the chart below.", "If you choose the wrong word, you make a grammar mistake, it makes you lose IQ. Same if you end a sentence in the wrong way.", "When you consider that your sentence is finished, you can validate by clicking in the button next to your IQ bar. It ends your turn. Then you tell your sentence to the opponent and he takes damages according to the words in your sentence.", "Each player has a special. It allows him to add a special word that suits to his sentence. Each player has his own special words. You can activate your special while clicking on your player. When you use your special you employ a lot of concentration, that makes you lose IQ. With great power comes great responsibility. Spend it wisely.", "Each player has his own weaknesses. If your sentence contains a word related to your opponent weakness, it will count twice."]

document.querySelector(".page:nth-of-type(1)").addEventListener('click', () => {
    rules(".page", 1)
})

document.querySelector(".page:nth-of-type(2)").addEventListener('click', () => {
    rules(".page", 2)         
})

document.querySelector(".page:nth-of-type(3)").addEventListener('click', () => {
    rules(".page", 3)
})

document.querySelector(".page:nth-of-type(4)").addEventListener('click', () => {
    rules(".page", 4)
})

document.querySelector(".page:nth-of-type(5)").addEventListener('click', () => {
    rules(".page", 5)
})

function rules(list, number) {
    document.querySelectorAll(list).forEach(element => {
        element.classList.remove("white")
    });
    document.querySelector(".page:nth-of-type(" + number + ")").classList.add("white")
    document.querySelector("#rules > h3").innerHTML = h3_list[number - 1]
    document.querySelector("#rules > p").innerHTML = p_list[number - 1]
}

document.querySelector("#download > .button").addEventListener('mouseover', () => {
    document.querySelector("figure").style.opacity = "80%"
})

document.querySelector("#download > .button").addEventListener('mouseout', () => {
    document.querySelector("figure").style.opacity = "10%"
})
