let issues = {};
let issue_id = 1;
let summary_div = document.getElementById('summary_issue');
let description_div = document.getElementById('description_issue');
let assigned_to = document.getElementById('people-to-select');
let person_issue_div = document.getElementById('person_issue_id');
let date_modified_div = document.getElementById('date-identified');
let project_to_select = document.getElementById('projects-to-select');
let status_to_select = document.getElementById('status-to-select');
let priority_to_select = document.getElementById('priority-to-select');
let issue_target_date = document.getElementById('issue-target-date');
let issue_actual_date = document.getElementById('issue-actual-date');
let resolution_summary_div = document.getElementById('resolution-summary');
function clear_project_en()
{
    const divElem = document.getElementById("create-issue");
    const inputElements = divElem.querySelectorAll("input");
    //clear the values of the input elements
    for (let i = 0; i < inputElements.length; i++) {
        inputElements[i].value = "";
    }
    //clear the values of the select elements
    const selectElements = divElem.querySelectorAll("select");
    
    for (let i = 0; i < selectElements.length; i++) {
        //set to default
        selectElements[i].value = selectElements[i].options[0].value;
    }
    
}

function submit_issues()
{
    
//check if all the fields are filled
    project_xvalues.length = 0;
    project_yvalues.length = 0;
    x_values_for_people.length = 0;
    y_values_for_people.length = 0;
    const divElem = document.getElementById("create-issue");
    const inputElements = divElem.querySelectorAll("input");
    if (summary_div.value == "" || description_div.value == "" || person_issue_div.value == "" || date_modified_div.value == "" || project_to_select.value == "" || status_to_select.value == "" || priority_to_select.value == "" || issue_target_date.value == "" || issue_actual_date.value == "") 
    {
        alert("Please fill all the fields");
        return;    
    }
    else
    {
        issues[issue_id] = 
        {
            "summary": summary_div.value,
            "description": description_div.value,
            "person_issue_id": person_issue_div.value,
            "person_to_solve":issue_select_people.options[issue_select_people.selectedIndex].value,
            "date-identified": date_modified_div.value,
            "project-to-select": project_to_select.options[project_to_select.selectedIndex].value,
            "status-to-select": status_to_select.options[status_to_select.selectedIndex].value,
            "priority-to-select": priority_to_select.options[priority_to_select.selectedIndex].value,
            "issue-target-date": issue_target_date.value,
            "issue-actual-date": issue_actual_date.value,
            "resolution-summary": resolution_summary_div.value

        };
        //adding to local storage
        localStorage.setItem("issues", JSON.stringify(issues));
       
        if( project_bugs_chart_data.hasOwnProperty(project_to_select.options[project_to_select.selectedIndex].getAttribute("name")))
        {
            project_bugs_chart_data[project_to_select.options[project_to_select.selectedIndex].getAttribute("name")] = project_bugs_chart_data[project_to_select.options[project_to_select.selectedIndex].getAttribute("name")] + 1;
            
            for(key in project_bugs_chart_data)
            {
                project_xvalues.push(key);
                project_yvalues.push(project_bugs_chart_data[key]);
            }
           
        }
        else
        {
            project_bugs_chart_data[project_to_select.options[project_to_select.selectedIndex].getAttribute("name")] = 1;
            
            for(keys_ in project_bugs_chart_data)
            {
                project_xvalues.push(keys_);
                project_yvalues.push(project_bugs_chart_data[keys_]);
            }
        }
        
        //for people issues chart
        if( people_issues_chart_data.hasOwnProperty(issue_select_people.options[issue_select_people.selectedIndex].value))
        {
            people_issues_chart_data[issue_select_people.options[issue_select_people.selectedIndex].value] = people_issues_chart_data[issue_select_people.options[issue_select_people.selectedIndex].value] + 1;
            
            for(k in people_issues_chart_data)
            {
                x_values_for_people.push(k);
                y_values_for_people.push(people_issues_chart_data[k]);
            }
           
        }
        else
        {
            people_issues_chart_data[issue_select_people.options[issue_select_people.selectedIndex].value] = 1;
            for(keys__ in people_issues_chart_data)
            {
                x_values_for_people.push(keys__);
                y_values_for_people.push(people_issues_chart_data[keys__]);
            }
        }
       
       //update the charts
        c.update();
        people_chart.update();
        //end of the updating the charts
        //adding image
        let loc = image_database[person_issue_id];
        adding_issues(loc,issue_id,person_issue_div.value,issue_select_people.options[issue_select_people.selectedIndex].value,summary_div.value,description_div.value,date_modified_div.value,project_to_select.options[project_to_select.selectedIndex].value,status_to_select.options[status_to_select.selectedIndex].value,priority_to_select.options[priority_to_select.selectedIndex].value,issue_target_date.value,issue_actual_date.value,resolution_summary_div.value);
        issue_id++;
        clear_project_en();
    
    }
}
//get children id from the parent class
function get_children_id(parent_class)
{
    let children_id = [];
    let children = document.getElementsByClassName(parent_class);
    for(let i = 0; i < children.length; i++)
    {
        children_id.push(children[i].id);
    }
    console.log(children_id);
}
