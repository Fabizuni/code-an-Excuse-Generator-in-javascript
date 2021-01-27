
let whoList = ['The dog','My grandma','His turtle','My bird'];
let actionList = ['ate','peed','crushed','broke'];
let whatList = ['my homework', 'the keys', 'the car'];
let whenList = ['before the class','right on time','when I finished','during my lunch','while I was praying'];



function getExcuseByList(excuseList) {
    return excuseList[Math.floor(Math.random() * excuseList.length)];
}


function createEntireExcuse() {
    const who = getExcuseByList(whoList);
    const action = getExcuseByList(actionList);
    const what = getExcuseByList(whatList);
    const when = getExcuseByList(whenList);

    return `${who} ${action} ${what} ${when}`;
}

window.onload = function() {
    const myExcuse = createEntireExcuse();
  document.getElementById('excuse').innerHTML = myExcuse;
};


function suma(num1, num2) {
    return num1 + num2;
}

