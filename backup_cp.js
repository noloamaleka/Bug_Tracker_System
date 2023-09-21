//people data
let view_people_ = document.getElementById("view-people");
let count_people_div_count = 0;
let count_string; 
let people = {};
let issue_select_people = document.getElementById("people-to-select");
let person_id = document.getElementById("person_id");
let person_name = document.getElementById("person_name");
let person_surname = document.getElementById("person_surname");
let person_email = document.getElementById("person_email");
let person_username = document.getElementById("person_username");
let fullname = '';
let num_img = 0;
//image database
let image_database = {};


function clear_people()
{
    person_id.value = "";
    person_name.value = "";
    person_surname.value = "";
    person_email.value = "";
    person_username.value = "";
    bannerImage.value = "";
}

function submit_people()
{
    if(person_id.value == "" || person_id.value == null || person_name == "" || person_name == null || person_surname == "" || person_surname == null || person_email == "" || person_email == null || person_username == "" || person_username == null)
    {
        swal("","Please enter all fields","error");
    }
    else
    {
        count_string = "card"+count_people_div_count;
        if(person_id.value in people)
        {
            
            swal("","Person id already exists","error");
        }
        else
        {
            //images.length = 0;
            people[person_id.value] = {
                name: person_name.value,
                surname: person_surname.value,
                email: person_email.value,
                username: person_username.value
            };
           
            //updating the selects 
            fullname = person_name.value + " " + person_surname.value;
            issue_select_people.innerHTML += "<option id="+person_id.value +" name= "+person_username.value+">"+fullname +"</option>";
           //creating the card
           if(images[0] != undefined)
           {
            view_people_.innerHTML += "<div class=card>"+
            "<img class=img src=" +images[num_img] + " alt="+ person_username.value+" image"+">"+
              "<div class=info>"+
                "<span>"+person_name.value + " " + person_surname.value+"</span>"+
                "<p>"+person_username.value + "</p>"+
              "</div>"

           }
           else
           {
            view_people_.innerHTML += "<div class=card>"+
            "<img class=img src=./assests/user.png" + " alt="+ person_username.value+" image"+">"+
              "<div class=info>"+
                "<span>"+person_name.value + " " + person_surname.value+"</span>"+
                "<p>"+person_username.value + "</p>"+
              "</div>"
           }
            //storing the images
            image_database[person_id.value] = images[num_img];
            //clearing the image array
            
            //clearing
            clear_people();
            count_people_div_count++;
            num_img++;
        }
    }
}

