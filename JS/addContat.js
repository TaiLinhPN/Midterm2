const apiUrl = "https://61bc10bed8542f0017824526.mockapi.io/menuContact";

function postC(data) {
    axios.post(apiUrl, data).then(res => console.log(res.data));
}

function addC() {

    var nameC = document.getElementById('name').value;
    var emailC = document.getElementById('email').value;
    var messC = document.getElementById('mess').value;

    data = {
        name: nameC,
        email: emailC,
        message: messC,

    }
    postC(data)
}