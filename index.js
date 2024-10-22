function submitData(name, email) {
    
    return fetch("http://localhost:3000/users", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json", 
            "Accept": "application/json" 
        },
        body: JSON.stringify({
            name: name, 
            email: email 
        })
    })
    .then(response => {
        return response.json(); 
    })
    .then(data => {
    
        const body = document.querySelector('body');
        const newId = document.createElement('p');
        newId.textContent = `New ID: ${data.id}`;
        body.appendChild(newId);
    })
    .catch(error => {

        // Handling errors 
        const body = document.querySelector('body');
        const errorMessage = document.createElement('p');
        errorMessage.textContent = `Error: ${error.message}`;
        body.appendChild(errorMessage);
    });
}

