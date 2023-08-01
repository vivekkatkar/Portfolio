

function openmenu()
{
    var n = document.getElementsByTagName("nav")[0];
    n.style.flexDirection = "Column"
    n.style.alignItems = "center"
    n.style.justifyContent = "center"
    n.style.minHeight = "100vh"

    var l = document.getElementsByClassName("logo")[0];
    l.style.display = "none"

    var link = document.getElementById("links");
    link.style.display = "flex"
    link.style.flexDirection = "Column"
    link.style.alignItems = "center"

    var l1 = document.getElementsByClassName("menu-icon")[0];
    l1.style.display = "none"

    var l2 = document.getElementsByClassName("close-icon")[0];
    l2.style.display = "flex"
}


function closemenu()
{
    var n = document.getElementsByTagName("nav")[0];
    n.style.minHeight = "10px"
    n.style.justifyContent = "space-between"
    n.style.alignItems = "center"
    n.style.flexDirection = "row"

    var l = document.getElementsByClassName("logo")[0];
    l.style.display = "flex"

    var link = document.getElementById("links");
    link.style.display = "none"

    var l1 = document.getElementsByClassName("menu-icon")[0];
    l1.style.display = "flex"

    var l2 = document.getElementsByClassName("close-icon")[0];
    l2.style.display = "none"
}