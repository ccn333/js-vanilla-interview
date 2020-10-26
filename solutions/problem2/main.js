function checkPali(input) {
    var answerDom = document.getElementById("answer");
    console.log("1");
    answerDom.value = test(input);
    console.log("a");
}

function test(input) {

    var step1 = input.toLowerCase();
    var step2 = step1.replace(/[^a-zA-Z]+/g, "").split("");

    var step31 = step2.join("");
    var step32 = step2.reverse().join("");

    if (step31 == step32) return "Palindrom";
    else return "Nije palindrom";
}