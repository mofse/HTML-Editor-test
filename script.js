
var boxses = ["box1", "box2", "box3"];
var verdi = Number();
var elementthing = Number();


function lagreVerdi(){
    var verdi = document.getElementById("colin").value;                    //Color input
    var elementthing = document.getElementById("selectCont").value;  //Box input
    var rangeval = document.getElementById("test").value;           //Range input

    console.log("color lagret som " + verdi);
    console.log("box lagret som " + elementthing);
    console.log("range lagret som " + rangeval);


    document.getElementById("testus").innerHTML = rangeval;
    document.getElementById(elementthing).style.backgroundColor = verdi;
}

function updateBoks(){
    document.getElementById("elementsCont").innerHTML += '<div class="elements" id="box' + (boxses.length + 1) + '"></div>';
    document.getElementById("selectCont").innerHTML += '<option value="box' + (boxses.length + 1) + '">boks ' + (boxses.length + 1) + '</option>'
    boxses.push('box' + (boxses.length + 1));
    console.log(boxses)
}