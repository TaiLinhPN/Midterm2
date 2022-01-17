const apiUrl = "https://61bc10bed8542f0017824526.mockapi.io/menuContact";



function showC() {
    var id = 0;
    axios.get(`${apiUrl}`).then(res => {
        var row = "";
        for (let i = 0; i < res.data.length; i++) {
            id += 1
            row += `
                <tr class="news">
                <td>${id}</td>
                <td>${res.data[i].name}</td>
                <td>${res.data[i].email}</td>
                <td>${res.data[i].message}</td>
                </tr>`
        }
        document.getElementById("tbl").innerHTML = row
    })
}
showC()