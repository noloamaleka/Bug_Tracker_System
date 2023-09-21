document.getElementById("create-people").style.display = "none";
document.getElementById("create-project").style.display = "none";
document.getElementById("view-people").style.display = "none";
document.getElementById("view-particular-issue").style.display = "none";
document.getElementById("create-issue").style.display = "none";
document.getElementById("view-all-issue").style.display = "none";


function home()
{
    
    document.getElementById("create-people").style.display = "none";
    document.getElementById("create-issue").style.display = "none";
    document.getElementById("create-project").style.display = "none";
    document.getElementById("view-particular-issue").style.display = "none";
    document.getElementById("view-people").style.display = "none";
    document.getElementById("view-all-issue").style.display = "none";
    document.getElementById("home").style.display = "flex";
}
function create_issue()
{
    document.getElementById("create-people").style.display = "none";
    document.getElementById("create-issue").style.display = "flex";
    document.getElementById("create-project").style.display = "none";
    document.getElementById("view-particular-issue").style.display = "none";
    document.getElementById("view-people").style.display = "none";
    document.getElementById("view-all-issue").style.display = "none";
    document.getElementById("home").style.display = "none";   
}

function view_particular_issue()
{
    document.getElementById("home").style.display = "none";
    document.getElementById("create-project").style.display = "none";
    document.getElementById("view-people").style.display = "none";
    document.getElementById("view-particular-issue").style.display = "flex";
    document.getElementById("create-people").style.display = "none";
    document.getElementById("create-issue").style.display = "none";
    document.getElementById("view-all-issue").style.display = "none";
}
function create_people()
{
    document.getElementById("home").style.display = "none";
    document.getElementById("create-project").style.display = "none";
    document.getElementById("view-people").style.display = "none";
    document.getElementById("view-particular-issue").style.display = "none";
    document.getElementById("create-people").style.display = "flex";
    document.getElementById("create-issue").style.display = "none";
    document.getElementById("view-all-issue").style.display = "none";
}
function view_people()
{
    document.getElementById("home").style.display = "none";
    document.getElementById("create-project").style.display = "none";
    document.getElementById("view-people").style.display = "flex";
    document.getElementById("view-particular-issue").style.display = "none";
    document.getElementById("create-people").style.display = "none";
    document.getElementById("create-issue").style.display = "none";
    document.getElementById("view-all-issue").style.display = "none";
}
function create_project()
{
    
    document.getElementById("home").style.display = "none";
    document.getElementById("create-people").style.display = "none";
    document.getElementById("view-people").style.display = "none";
    document.getElementById("create-project").style.display = "block";  
    document.getElementById("create-issue").style.display = "none";
    document.getElementById("view-particular-issue").style.display = "none";
    document.getElementById("view-all-issue").style.display = "none";
}
function view_all_issue()
{
    
    document.getElementById("view-all-issue").style.display = "flex";
    document.getElementById("home").style.display = "none";
    document.getElementById("create-people").style.display = "none";
    document.getElementById("view-people").style.display = "none";
    document.getElementById("create-project").style.display = "none";  
    document.getElementById("create-issue").style.display = "none";
    document.getElementById("view-particular-issue").style.display = "none";
}