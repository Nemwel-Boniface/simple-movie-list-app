document.addEventListener('DOMContentLoaded', function()
{
    const list = document.querySelector('.movie-list ul');
    const form = document.forms;
    
    //logic for deleting movies
    
    list.addEventListener('click', (event)=> {
        if(event.target.className == 'delete')
            {
                const li = event.target.parentElement;
                li.parentNode.removeChild(li);
            }
        
        //Logic for adding new elements
        
        const addform = form['add-movie'];
        addform.addEventListener('submit', function(event){
            event.preventDefault();
            
            //Create the elements
            
            const value = addform.querySelector('input[type="text"]').value;
            const li = document.createElement('li');
            const moviename = document.createElement('span');
            const deletebtn = document.createElement('span');
            
            //add the text content
            
            moviename.textContent = value;
            deletebtn.textContent = 'Delete';
            
            //add the styling(classes)
            
            moviename.classList.add('name');
            deletebtn.classList.add('delete');
            
            //append to the DOM
            
            li.appendChild(moviename);
            li.appendChild(deletebtn);
            list.appendChild(li);
             
        });
          
    });
      
    
})


