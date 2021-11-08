const lst = document.querySelector('#lst');

const update = (id) => {
    window.location = `update.html?id=${id}`;
}

const deletion = (e, id) => {

    const result = confirm(`Are you sure that you want to delete this id: ${id}?`);
    if (!result) {
        return;
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(() => {
            e.parentElement.remove();
        })
}

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            lst.innerHTML += `
                <div>
                    <h4>${element.title}</h4>
                    <p>${element.body}</p>
                    <button onclick="update(${element.id})">Update</button>
                    <button onclick="deletion(this, ${element.id})">Delete</button>
                </div>
            
            `
        });
    })