let issues = {};
var issue_id;
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
    


    const divElem = document.getElementById("create-issue");
    const inputElements = divElem.querySelectorAll("input");
    if (summary_div.value == "" || description_div.value == "" || person_issue_div.value == "" || date_modified_div.value == "" || project_to_select.value == "" || status_to_select.value == "" || priority_to_select.value == "" || issue_target_date.value == "" || issue_actual_date.value == "") 
    {
        //alert("Please fill all the fields");
        swal("" , "Please fill all the fields" , "error");
        return;    
    }
    else
    {
        issues = 
        {
            // id: issue_id,
            summary: summary_div.value,
            description: description_div.value,
            person_issue_id: person_issue_div.value,
            person_to_solve:issue_select_people.options[issue_select_people.selectedIndex].value,
            date_identified: date_modified_div.value,
            project_to_select: project_to_select.options[project_to_select.selectedIndex].value,
            status_to_select: status_to_select.options[status_to_select.selectedIndex].value,
            priority_to_select: priority_to_select.options[priority_to_select.selectedIndex].value,
            issue_target_date: issue_target_date.value,
            issue_actual_date: issue_actual_date.value,
            resolution_summary: resolution_summary_div.value

        };
        project_bugs_chart_data = 
            {
                selected_project: project_to_select.options[project_to_select.selectedIndex].value,
                number_of_bugs: 1
            };
        people_issues_chart_data = 
        {
            selected_person: issue_select_people.options[issue_select_people.selectedIndex].value,
            number_of_issues: 1
        };
        if(localStorage.getItem("issues") == null)
        {
            let issues_array = [];
            issues_array.push(issues);
            localStorage.setItem("issues", JSON.stringify(issues_array));
            let project_bugs_chart_data_arr = [];
            project_bugs_chart_data_arr.push(project_bugs_chart_data);
            localStorage.setItem('project_bugs_chart_data', JSON.stringify(project_bugs_chart_data_arr));
            let people_issues_chart_data_arr = [];
            people_issues_chart_data_arr.push(people_issues_chart_data);
            localStorage.setItem('people_issues_chart_data', JSON.stringify(people_issues_chart_data_arr));
            
            adding_issues(issue_id,person_issue_div.value,issue_select_people.options[issue_select_people.selectedIndex].value,summary_div.value,description_div.value,date_modified_div.value,project_to_select.options[project_to_select.selectedIndex].value,status_to_select.options[status_to_select.selectedIndex].value,priority_to_select.options[priority_to_select.selectedIndex].value,issue_target_date.value,issue_actual_date.value,resolution_summary_div.value);
            update_charts();
            swal("" , "Issue "+issue_id+" was created " , "success");
            clear_project_en();
        }
        else
        {
            let issues_array = JSON.parse(localStorage.getItem("issues"));
            issues_array.push(issues);
            localStorage.setItem("issues", JSON.stringify(issues_array)); 
            if(localStorage.getItem('project_bugs_chart_data') == null)
            {
                let project_bugs_chart_data_arr = [];
                project_bugs_chart_data_arr.push(project_bugs_chart_data);
                localStorage.setItem('project_bugs_chart_data', JSON.stringify(project_bugs_chart_data_arr));
                
            }
            else
            {
                let project_bugs_chart_data_arr = JSON.parse(localStorage.getItem('project_bugs_chart_data'));
                //project_bugs_chart_data.push(project_bugs_chart_data);
                for(let i = 0; i < project_bugs_chart_data_arr.length; i++)
                {
                    if(project_to_select.options[project_to_select.selectedIndex].value == project_bugs_chart_data_arr[i].selected_project)
                    {
                        project_bugs_chart_data_arr[i].number_of_bugs++;
                        localStorage.setItem('project_bugs_chart_data', JSON.stringify(project_bugs_chart_data_arr));
                        break;
                    }
                     else
                     {
                         project_bugs_chart_data_arr.push(project_bugs_chart_data);
                         localStorage.setItem('project_bugs_chart_data', JSON.stringify(project_bugs_chart_data));
                    }
                }
                
            } 
            if(localStorage.getItem('people_issues_chart_data') == null)
            {
                let people_issues_chart_data_arr = [];
                people_issues_chart_data_arr.push(people_issues_chart_data);
                localStorage.setItem('people_issues_chart_data', JSON.stringify(people_issues_chart_data_arr));
            }
            else
            {
                let people_issues_chart_data_arr = JSON.parse(localStorage.getItem('people_issues_chart_data'));
                //project_bugs_chart_data.push(project_bugs_chart_data);
                for(let i = 0; i < people_issues_chart_data_arr.length; i++)
                {
                    if(issue_select_people.options[issue_select_people.selectedIndex].value == people_issues_chart_data_arr[i].selected_person  )
                    {
                        people_issues_chart_data_arr[i].number_of_issues++;
                        localStorage.setItem('people_issues_chart_data', JSON.stringify(people_issues_chart_data_arr));
                        break;
                    }
                    else
                    {
                        people_issues_chart_data_arr.push(people_issues_chart_data);
                        localStorage.setItem('people_issues_chart_data', JSON.stringify(people_issues_chart_data_arr));
                    }
               
                }
                
           
             
            }
            swal("" , "Issue  was created " , "success");
                //let loc = image_database[person_issue_id];
                adding_issues(issue_id,person_issue_div.value,issue_select_people.options[issue_select_people.selectedIndex].value,summary_div.value,description_div.value,date_modified_div.value,project_to_select.options[project_to_select.selectedIndex].value,status_to_select.options[status_to_select.selectedIndex].value,priority_to_select.options[priority_to_select.selectedIndex].value,issue_target_date.value,issue_actual_date.value,resolution_summary_div.value);
                let count_ids = parseInt(localStorage.getItem('issues_no')) + 1;
                localStorage.setItem('issues_no', count_ids);
                clear_project_en();
                update_charts();
        }
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
