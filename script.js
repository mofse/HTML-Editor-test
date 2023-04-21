function lagreVerdi(id){
    var verdi = document.getElementById(id).value
    var elementthing = document.getElementById("selectCont").value
    console.log("verdi lagret som " + verdi)
    console.log("verdi lagret som " + elementthing)
    document.getElementById(elementthing).style.backgroundColor = verdi
}