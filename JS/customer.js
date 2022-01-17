const apiURL = " https://61bec846b25c3a00173f4b70.mockapi.io/customer";

function show() {
    axios(apiURL)
        .then(res => {

            for (var user of res.data) {
                id = user.id;
                dem++;
                var row = "<tr>";
                row += "<td>" + `${user.id}` + "</td>";
                row += "<td>" + `${user.name}` + "</td>";
                row += "<td>" + `${user.email}` + "</td>";
                row += "<td>" + `${user.pass}` + "</td>";

                row += "</tr>";
                console.log(row)
                document.getElementById("tbl").innerHTML += row;


            }
        })
}
show()