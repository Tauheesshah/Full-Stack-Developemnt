const BASE_URL = 'http://localhost:8080/userData';

const btnSubmit = document.querySelector('#btn');
btnSubmit.disabled = true;

const watchmanFunc = () => {
    const watchman = document.querySelector('#watchman').checked;
    if (watchman == true) {
        btnSubmit.disabled = false;
    } else {
        btnSubmit.disabled = true;
    }
};

const handleForm = (e) => {
    e.preventDefault();

    const getEmail = document.querySelector('#email').value;
    const getPass = document.querySelector('#pass').value;
    const getCountry = document.querySelector('#country').value;
    const getGender = document.querySelectorAll('#gender');

    let userData = {
        email: getEmail,
        pass: getPass,
        country: getCountry,
    };

    for (let i = 0; i < getGender.length; i++) {
        if (getGender[i].checked == true) {
            userData.gender = getGender[i].value;
        }
    }

    postData(userData);
};

const postData = (data) => {
    fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
};
