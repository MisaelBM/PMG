//Funcao que inicia o jogo
function StartGame() {
    //Ordem dos parametros recebidos: typeQuiz, visorQuest, data1, data2, data3, realRes
    let parametersQuest = EquationQuest();
    document.getElementById("spanQuest").innerHTML = `<div class="quiz-multiple-choice" id="multipleChoice">
            <div class="multiple-choice-visor-content">
                <span class="multiple-choice-visor" id="multipleChoiceVisor">${parametersQuest[0]}</span>
            </div>
            <div class="multiple-choice-buttons-content">
                <button class="multiple-choice-buttons" data-buttonData="${parametersQuest[1]}">${parametersQuest[1]}</button>
                <button class="multiple-choice-buttons" data-buttonData="${parametersQuest[2]}">${parametersQuest[2]}</button>
                <button class="multiple-choice-buttons" data-buttonData="${parametersQuest[3]}">${parametersQuest[3]}</button>
            </div>
    </div>`;
    document.querySelectorAll(".multiple-choice-buttons").forEach(e => {
        e.addEventListener('click', () => {
            ConfirmRes(e, parametersQuest[4])
            NextQuest();
        });
    });
};
function ConfirmRes(event, realRes) {
    document.getElementById("spanQuest").innerHTML = "";
    return console.log(parseInt(event.getAttribute("data-buttonData")) == realRes ? true : false);
};
function EquationQuest() {
    const resEquation = parseInt(Math.random() * (20 - 1) + 1);
    let typeOperation = parseInt(Math.random() * 2);
    let secondElementEquation = parseInt(Math.random() * ((resEquation + (resEquation / 2)) - (resEquation / 2)) + (resEquation / 2));
    while (resEquation - secondElementEquation == 0 || resEquation + secondElementEquation == 0) {
        secondElementEquation = parseInt(Math.random() * ((resEquation + (resEquation / 2)) - (resEquation / 2)) + (resEquation / 2));
    };
    let XOfEquation = parseInt(Math.random() * (11 - 1) + 1);
    while (typeOperation ? ((resEquation - secondElementEquation) % XOfEquation != 0) || (resEquation - secondElementEquation) % 1 != 0 : ((resEquation + secondElementEquation) % XOfEquation != 0) || (resEquation + secondElementEquation) % 1 != 0) {
        XOfEquation = parseInt(Math.random() * (11 - 1) + 1);
    };
    let possibleRes = [XOfEquation];
    for (let i = 0; i < 2; i++) {
        let fakeRes = parseInt(Math.random() * (11 - 1) + 1);
        while (possibleRes.indexOf(fakeRes) > -1) {
            fakeRes = parseInt(Math.random() * (11 - 1) + 1);
        };
        possibleRes.push(fakeRes);
    };
    for (let i = possibleRes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [possibleRes[i], possibleRes[j]] = [possibleRes[j], possibleRes[i]];
    };
    return [`${typeOperation ? (resEquation - secondElementEquation) / XOfEquation : (resEquation + secondElementEquation) / XOfEquation}X ${typeOperation ? "+" : "-"} ${secondElementEquation} = ${resEquation}`, possibleRes[0], possibleRes[1], possibleRes[2], XOfEquation];
};
function NextQuest() {
    let parametersQuest = EquationQuest();
    document.getElementById("spanQuest").innerHTML = `<div class="quiz-multiple-choice" id="multipleChoice">
            <div class="multiple-choice-visor-content">
                <span class="multiple-choice-visor" id="multipleChoiceVisor">${parametersQuest[0]}</span>
            </div>
            <div class="multiple-choice-buttons-content">
                <button class="multiple-choice-buttons" data-buttonData="${parametersQuest[1]}">${parametersQuest[1]}</button>
                <button class="multiple-choice-buttons" data-buttonData="${parametersQuest[2]}">${parametersQuest[2]}</button>
                <button class="multiple-choice-buttons" data-buttonData="${parametersQuest[3]}">${parametersQuest[3]}</button>
            </div>
    </div>`;
    document.querySelectorAll(".multiple-choice-buttons").forEach(e => {
        e.addEventListener('click', () => {
            ConfirmRes(e, parametersQuest[4])
            NextQuest();
        });
    });
};
StartGame();