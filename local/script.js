function handleFormSubmit(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = {
        username: username,
        email: email,
        password: password
    };

    if (typeof(Storage) !== 'undefined') {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = 'datalist.html';
    } else {
        alert('Local storage is not supported. User data cannot be saved.');
    }
}

document.getElementById('registrationForm').addEventListener('submit', handleFormSubmit);
