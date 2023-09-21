let view_issue_window = document.getElementById('view-all-issue');
function adding_issues(id,identfied_by_who,assigned_to,summary,description,date_identified,project_to_select,status_to_select,priority_to_select,issue_target_date,issue_actual_date,resolution_summary)
{
  let loc;
  let get_image_from_local_storage = localStorage.getItem('people');
  let image_database = JSON.parse(get_image_from_local_storage);
  for(let i = 0; i < image_database.length; i++)
  {
    //if fullname is equal to the name in the database
    let fullname = image_database[i].name + " " + image_database[i].surname;
    if(fullname == assigned_to)
    {
      loc = image_database[i].image;
      break;
    }
    else
    {
      loc = localStorage.getItem('default_image_for_people');
    }
  }
    view_issue_window.innerHTML += 
    "<div id="+"issue-card"+">" +
    "<div id="+"issue-id"+">"+id+"</div>"+
    "<div id="+"img-person-issue"+">"+
  "<img src="+loc+" alt="+"image"+">"+
        "<p>assigned to:</p>"+
        "<p id="+"issue-assigned-to"+">"+assigned_to+"</p>"+
  "</div>"
  +
  "<div id="+"issue-summary"+">"
  +summary+
  "<div id="+"issue-status"+">"+status_to_select+"</div>"+
  "<div id="+"issue-priority"+">"+"priority "+priority_to_select+"</div>"+
  "</div>"+

  "<div id="+"issue-description"+">"+description+"</div>"+
  
  "<div id="+"issue-identifier"+">"+
      "<div>identified by:"+" "+"</div>"+
      "<div id="+"issue-identified-by"+">"+identfied_by_who+"</div>"
  +"</div>"+

  "<div id="+"issue-date-identified"+">Date identfied:"+" "+date_identified+"</div>"+
  
  "<div id="+"issue-project"+">Project Name:"+" "+project_to_select +"</div>"+
  
  "<ul>"+
      "<li> <div id="+"issue-target-date"+">"+"Target Date:"+" "+issue_actual_date+"</div></li>"+
     "<li><div id="+"issue-actual-date"+">"+"Actual Date:"+" "+issue_target_date+"</div></li>"+
  "</ul>"+
  
  "<div id="+"issue-resolution-summary"+"> resolution summary: <br>"+resolution_summary+"</div>"
+
"<div id=centerbtn"+">"+
"<button id=edit onclick=edit_this_div(this)"+"> Edit </button>"+
"</div>"
  +"</div>" 
;
}