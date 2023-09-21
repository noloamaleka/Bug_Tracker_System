let default_image_for_people = localStorage.setItem("default_image_for_people", JSON.stringify("data:image/png;base64,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"));



function update_projects()
{
    let issues_for_uci = JSON.parse(localStorage.getItem("projects"));
    if(issues_for_uci == null){
        return;
    }
    else
    {
        let issue_select_project = document.getElementById("projects-to-select");
        issue_select_project.innerHTML =  "<option value>Select Project with issue</option>";
        for(var i = 0; i < issues_for_uci.length; i++)
        {
        
            let project_n = issues_for_uci[i].project_name;
            let project_i = issues_for_uci[i].project_id;
        
            issue_select_project.innerHTML += "<option value="+project_n+ " name= "+project_n+">"+project_n+"</option>";
            
        }
    }
}
function update_people()
{
    let people_for_uci = JSON.parse(localStorage.getItem("people"));
    if(people_for_uci == null){
        return;
    }
    else
    {
        let issue_select_people = document.getElementById("people-to-select");
        
        issue_select_people.innerHTML =  "<option value>Select Person with issue</option>";
        view_people_.innerHTML = "";
        for(var i = 0; i < people_for_uci.length; i++)
        {
        
            let people_n = people_for_uci[i].name;
            let people_s = people_for_uci[i].surname;
            let people_u = people_for_uci[i].username;
            let people_i = people_for_uci[i].id;
            let people_e = people_for_uci[i].email;
            let people_img = people_for_uci[i].image;
            
            issue_select_people.innerHTML += "<option id="+people_i+ " name= "+people_u+">"+people_n +" " + people_s +"</option>";
            if(people_img != undefined)
            {
             view_people_.innerHTML += "<div class=card>"+
             "<img class=img src=" +people_img + " alt="+ people_u+" image"+">"+
               "<div class=info>"+
                 "<span>"+people_n + " " + people_n+"</span>"+
                 "<p>"+people_u + "</p>"+
               "</div>"
 
            }
            else
            {
                view_people_.innerHTML += "<div class=card>"+
             "<img class=img src=" +localStorage.getItem('default_image_for_people') + " alt="+ people_u+" image"+">"+
               "<div class=info>"+
                 "<span>"+people_n + " " + people_n+"</span>"+
                 "<p>"+people_u + "</p>"+
               "</div>"
            }
        }
    }
}
function update_charts()
{
    x_people.length = 0;
    y_people.length = 0;
    x_project.length = 0;
    y_project.length = 0;
    let people_data_ls = JSON.parse(localStorage.getItem("people_issues_chart_data"));
    let project_data_ls = JSON.parse(localStorage.getItem("project_bugs_chart_data"));
        for(let i = 0; i < people_data_ls.length; i++)
        {
            x_people.push(people_data_ls[i].selected_person);
            y_people.push(people_data_ls[i].number_of_issues);
        }

        for(let i = 0; i < project_data_ls.length; i++)
        {
            x_project.push(project_data_ls[i].selected_project);
            y_project.push(project_data_ls[i].number_of_bugs);
        }
        people_chart.update();
        c.update();
   
}

update_projects();
update_people();
update_charts();
//update_charts();