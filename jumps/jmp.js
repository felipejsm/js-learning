console.log("******************** TRY/CATCH ******************")
try {
    var n = Number(prompt('Do U like to Jump?(1) yes (2) no',''));
    var f = answerIsNumeric(n);
} catch (error) {
    alert(error);
}

function answerIsNumeric(answer) {
    if(answer !== 1 && answer !== 2)
        throw new Error("Enter a valid number!");
    var msg = answer == 1 ? "I like to jump!" : "Nah, don't like it";
    alert(msg);
}

