const txtTitle = document.querySelector('#txtTitle');
const txtBody = document.querySelector('#txtBody');
const btnSubmit = document.querySelector('#btnSubmit');
const message = document.querySelector('.blue');

const param = new URLSearchParams(location.search);
const id = param.get('id');

message.removeAttribute('hidden');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
    .then(data => {
        
        message.setAttribute('hidden', '');
        txtTitle.value = data.title;
        txtBody.value = data.body;
    })

btnSubmit.addEventListener('click', () => {

    const titleValue = txtTitle.value;
    const bodyValue = txtBody.value;

    if (titleValue === '' || bodyValue === '') {
        return;
    }

    const payload = {
        title: titleValue,
        body: bodyValue
    };

    const options = {
        method: 'PUT',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(payload)
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, options)
        .then(response => response.json())
        .then(data => {

            message.setAttribute('hidden', '');

            alert(`Record updated with id: ${data.id}`);

            window.location = "index.html"
        })
})