const news = " https://61bec846b25c3a00173f4b70.mockapi.io/music";
var id = -1;


function getAccount(id) {
    return axios(`${news}/${id}`);
};

function deleteAccount(id) {
    axios.delete(`${news}/${id}`)
        .then(
            () => { location.reload() }
        )
};

function postAccount(data) {
    axios.post(news, data);
};

function putAccount(id, data) {
    axios.put(`${news}/${id}`, data)
        .then(() => { location.reload() });
};
var idpro = 0;
var dem = 0;

function showPlace() {
    axios(news)
        .then(res => {

            for (var i = 0; i < res.data.length; i++) {
                // id = place.id;
                dem++;
                var row = "<tr>";
                row += "<td>" + `${i+1}` + "</td>";
                row += "<td>" + `${res.data[i].category}` + "</td>";

                row += "<td>" + `<img class="img"  src='${res.data[i].image}' alt=''>` + "</td>";
                row += "<td>" + `${res.data[i].title}` + "</td>";
                row += "<td>" + `${res.data[i].date}` + "</td>";
                row += "<td>" + `${res.data[i].content}` + "</td>";
                row += `<td><button onclick=updateid(${res.data[i].id}) class="btn btn-light"" data-toggle="modal" data-target="#Chinhsua"><i class="fas fa-cogs"></i>Update</button>`
                row += `<button onclick="deleteAccount(${res.data[i].id})" class="btn btn-light"><i class="fas fa-trash"></i>Delete</button></td>`;
                row += "</tr>";
                console.log(row)
                document.getElementById("tbl").innerHTML += row;

            }
        })

}
showPlace()


function Them() {
    var danhmuc = document.getElementById('danhmuc').value;
    var image = document.getElementById('image').value;
    var title = document.getElementById('title').value;
    var date = document.getElementById('date').value;
    var content = document.getElementById('content').value;

    data = {
        category: danhmuc,
        image: image,
        title: title,
        date: date,
        content: content,

    };
    postAccount(data);
    alert('Thêm tin tức thành công')
}

function modify() {
    var danhmucAdd = document.getElementById('danhmucAdd').value;
    var titleAdd = document.getElementById('titleAdd').value;
    var contentAdd = document.getElementById('contentAdd').value;
    var imageAdd = document.getElementById('imageAdd').value;
    var dateAdd = document.getElementById('dateAdd').value;
    data = {
        category: danhmucAdd,
        title: titleAdd,
        content: contentAdd,
        image: imageAdd,
        date: dateAdd,

    };
    console.log("hueeeeeee", data)
    putAccount(idpro, data)
    alert('Chỉnh sửa bảng tin thành công');
    reset()
};
const updateid = (n) => {
    idpro = n;
    getAccount(n).then(res => {
        document.getElementById('danhmucAdd').value = res.data.category;
        document.getElementById('titleAdd').value = res.data.title;
        document.getElementById('contentAadd').value = res.data.content;
        document.getElementById('imageAdd').value = res.data.image;
        document.getElementById('dateAdd').value = res.data.date;

    });
}

// function checkday() {
//     var datec = new Date();
//     var datec = datec.getDate() + '/' + (datec.getMonth() + 1) + '/' + datec.getFullYear();
//     axios(news)
//         .then(res => {
//             for (var place of res.data) {
//                 var row = `${place.date}`;
//                 if (row < datec) {
//                     axios.delete(`${news}/${row}`)
//                 }
//             }
//         })
// }
// checkday()