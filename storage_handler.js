let disable_storage =true;

window.onbeforeunload = function() 
{
    if(disable_storage)
        localStorage.clear();
};


