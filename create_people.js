//people data
let view_people_ = document.getElementById("view-people");
let count_people_div_count = 0;
let count_string; 

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
        let people = 
        {
            id: person_id.value,
            name: person_name.value,
            surname: person_surname.value,
            email: person_email.value,
            username: person_username.value,
            image : images[num_img]

        };
        if(localStorage.getItem("people") == null)
        {
            let people_array = [];
            people_array.push(people);
            localStorage.setItem("people", JSON.stringify(people_array));
            clear_people();
            update_people();
        }
        else
        {
            let add_person = false
            let people_db = JSON.parse(localStorage.getItem("people"));
           //checking if the person is already in the database
            for(let i = 0; i < people_db.length; i++)
            {
                if(people_db[i].id == people.id)
                {
                    add_person = true;
                }
            }
             image_database[person_id.value] = images[num_img];
            if(add_person == false)
            {
                people_db.push(people);
                localStorage.setItem("people", JSON.stringify(people_db));
                swal("","Person added successfully","success");
                clear_people();
                update_people();
            }
            else
            {
                swal("","Person ID already exists","error");
            }
            count_people_div_count++;
            num_img++;
        }



        
    }
}

