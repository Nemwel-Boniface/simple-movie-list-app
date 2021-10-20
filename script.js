document.addEventListener('DOMContentLoaded', function()
{
    var list = document.querySelector('.movie-list ul');
    var form = document.forms;
    
    //logic for deleting movies
    
    list.addEventListener('click', (event)=> {
        if(event.target.className == 'delete')
            {
                var li = event.target.parentElement;
                li.parentNode.removeChild(li);
            }
    });
    
    
    
    
    
    
    
    
    
    
    
})







