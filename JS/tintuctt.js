const news = "https://61bc10cad8542f0017824543.mockapi.io/News";
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

function addNew() {
    axios(news)
        .then(res => {
            for (var user of res.data) {
                id = user.id;
                dem++;
                var row = "<tr>";
                row += "<td>" + dem + "</td>";
                row += "<td>" + `${user.category}` + "</td>";
                row += "<td>" + `${user.title}` + "</td>";
                row += "<td>" + `${user.content}` + "</td>";
                row += "<td>" + `${user.author}` + "</td>";
                row += "<td>" + `<img class="img"  src='${user.image}' alt=''>` + "</td>";
                row += "<td>" + `${user.date}` + "</td>";
                row += `<td><button onclick=updateid(${id}) class="btn ml-1 btn-outline-primary" data-toggle="modal" data-target="#Chinhsua"><i class="fas fa-cogs"></i></button>`
                row += `<button onclick="deleteAccount(${id})" class="btn ml-1 btn-outline-success"><i class="fas fa-trash"></i></button></td>`;
                row += "</tr>";
                document.getElementById("tbl").innerHTML += row;

            }
        })
}
addNew()

function Them() {
    var danhmuc = document.getElementById('danhmuc').value;
    var tieude = document.getElementById('tieude').value;
    var noidung = document.getElementById('noidung').value;
    var tacgia = document.getElementById('tacgia').value;
    var hinhanh = document.getElementById('hinhanh').value;
    var ngaytao = document.getElementById('ngaytao').value;

    data = {
        category: danhmuc,
        title: tieude,
        content: noidung,
        author: tacgia,
        image: hinhanh,
        date: ngaytao,

    };
    postAccount(data);
    alert('Thêm tin tức thành công')
}

function modify() {
    var danhmucadd = document.getElementById('danhmucadd').value;
    var tieudeadd = document.getElementById('tieudeadd').value;
    var noidungadd = document.getElementById('noidungadd').value;
    var tacgiaadd = document.getElementById('tacgiaadd').value;
    var hinhanhadd = document.getElementById('hinhanhadd').value;
    var ngaytaoadd = document.getElementById('ngaytaoadd').value;
    data = {
        category: danhmucadd,
        title: tieudeadd,
        content: noidungadd,
        author: tacgiaadd,
        image: hinhanhadd,
        date: ngaytaoadd,

    };
    putAccount(idpro, data)
    alert('Chỉnh sửa bảng tin thành công');
    reset()
};
const updateid = (n) => {
    idpro = n;
    getAccount(n).then(res => {
        document.getElementById('danhmucadd').value = res.data.category;
        document.getElementById('tieudeadd').value = res.data.title;
        document.getElementById('noidungadd').value = res.data.content;
        document.getElementById('tacgiaadd').value = res.data.author;
        document.getElementById('hinhanhadd').value = res.data.image;
        document.getElementById('ngaytaoadd').value = res.data.date;

    });
}