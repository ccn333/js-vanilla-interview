function checker() {
    var answerDom = document.getElementById("answer");
    var arrayN = document.getElementById("N-input").value;
    // arrayN.map(function(item) {
    //     return parseInt(item, 10);
    // });
    arrayN = Array.from(arrayN.split(','), Number);
    arrayN.sort(function(a, b) { return b - a });
    var bVal = document.getElementById("B-input").value;


    //console.log(arrayN);

    answerDom.value = test(arrayN, bVal);
}

function test(n, b) {
    var answer;
    var sum;

    while (sum != b && n.length > 0) {
        answer = 0;
        sum = 0;
        for (var i = 0; i < n.length; i++) {
            while (sum + n[i] <= b) {

                // inf loop breaker
                if (n[i] == 0) break;
                //
                sum = sum + n[i];
                console.log("added:", n[i], " sum is now:", sum);
                answer++;
            }
        }

        // u slucaju tipa N = [2, 5], B = 6
        // izbacuje se najveca vrijednost iz niza i ponavlja provjera bez najvece vrijednosti
        n.shift();
        console.log("sum will now reset");
    }

    if (sum != b) answer = -1;

    return answer;
}