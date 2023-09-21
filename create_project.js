//let project = {};
//let project_arr= [];
let project_id = document.getElementById("project_id");
let issue_select_project = document.getElementById("projects-to-select");
let project_name  = document.getElementById("project_name");

//check if project id exists in project
function submit_project()
{
    if(project_id.value == "" || project_id.value == null || project_name.value == "" || project_name.value == null)
    {
        //alert("Please enter project id");
        swal("" , "One of the field is missing" , "error");
    }
    else
    {
        let project = 
        {
            project_id: project_id.value,
            project_name: project_name.value
        }
        if (localStorage.getItem('projects') == null)
        {
            var projects = [];
            projects.push(project);
            localStorage.setItem('projects', JSON.stringify(projects));
            swal("Project added successfully" , "" , "success");
            clear_();
            update_projects();    
        }
        else 
          {
            let add= false;
            var project_db = JSON.parse(localStorage.getItem('projects'));
            //check if project id exists in project_db
            for(let i = 0; i < project_db.length; i++)
            {
                if(project_db[i].project_id == project_id.value)
                {
                    add = true;
                }
            }
            if(add)
            {
                swal("Project id already exists" , "" , "error");
            }
            else
            {

            project_db.push(project);
            localStorage.setItem('projects', JSON.stringify(project_db));
            swal("Project added successfully" , "" , "success");
            clear_();
            update_projects();
            }
            
          }
    }

}

function clear_(){
    project_id.value = "";
    project_name.value = "";
}


