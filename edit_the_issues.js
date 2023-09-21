function get_info_about_el(id)
{
    let parent_class_name = id.parentElement.className;
    console.log(parent_class_name);
    let children_id = [];
    let children = document.getElementsByClassName(parent_class_name)[0].children;
    for(let i = 0; i < children.length; i++)
    {
        children_id.push(children[i].id);
    }
    console.log(children_id);
}
