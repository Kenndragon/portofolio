function opentab(event, tabname){

    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontent = document.getElementsByClassName("tab-content");
    for(tablinks of tablinks){
        tablinks.classList.remove("active-link");
    }
    for(tabcontent of tabcontent){
        tabcontent.classList.remove("active-tab")
    }
    
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function openmenu(){
    document.getElementById("sidemenu").style.right = "0px";
}
function closemenu(){
    document.getElementById("sidemenu").style.right = "-200px";
}

function submitBtn(){
    let x = document.forms["myForm"]["Name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }

    let y = document.forms["myForm"]["Email"].value;
    if (y == "") {
      alert("Email must be filled out");
      return false;
    }
    let z = document.forms["myForm"]["Message"].value;
    if (z == ""){
      alert("Message must be filled out");
      return false;
    }
    alert("Message has been sent");
    return false;
}