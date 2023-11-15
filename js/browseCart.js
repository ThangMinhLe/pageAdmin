function renderTable() {
    let Carts = localStorage.getItem('GioHang') ? JSON.parse(localStorage.getItem('GioHang')) : [];
    if(Carts.length === 0) {
        document.getElementById('myTable').style.display = 'block';
        return false;
    }
    document.getElementById('myTable').style.display = 'block';
    let tableContent = `
    <thead>
        <tr>
            <th>STT</th>
            <th>Mã đơn hàng</th>
            <th>Tên khách hàng</th>
            <th>Thời gian đặt đơn</th>
            <th>Trạng thái</th>
            <th>Xem chi tiết</th>
            <th>Tổng tiền</th>
            <th>Tác vụ</th>
        </tr>
    </thead>
    <tbody>`;
    Carts.forEach((Cart, index) => {
        index++;
        let tongTien = Cart.GiaBan*Cart.SoLuongMua;
        let SoLuong = Cart.SoLuongMua;
        tableContent += `
        <tr>
            <td>${index}</td>
            <td>${Cart.LoaiSP}</td>
            <td>${Cart.MaSP}</td>
            <td>${SoLuong}</td>
            <td>${Cart.TenSP}</td>
            <td>${Cart.GiaBan}</td>
            <td>${`${tongTien}`+" VNĐ"}</td>
            <td>
                <label class="switch">
                <input onclick="acceptCart()" type="checkbox">
                <span class="slider round"></span>
                </label>
            </td>
        </tr>`;
    })
    tableContent +=`</tbody>`;
    document.getElementById('myTable').innerHTML = tableContent;
}
function randomkeyDH() {
    const random = Math.random() * (9999 - 1000);
    let key = 'DHICY' + Math.round(random);
    return key;
}
function today() {
    var today = new Date();
    let time = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    return `${time}:${minute}:${second}, ${day}/${month}/${year}`;
}

let a = {MaSP: "TPL", TenSP: "Kem chống nắng Peacholic", GiaBan: "760000", SoLuongMua: 2, hinhAnh: "img/CHIU-TEA", ThanhTien: 1500000};
let b = {MaSP: "TPL", TenSP: "Kem chống nắng Peacholic", GiaBan: "760000", SoLuongMua: 2, GiaBan: 700000, ThanhTien: 1500000};

let dsGioHang = localStorage.getItem('GioHang') ? JSON.parse(localStorage.getItem('GioHang')) : [];
let DuyetDonHang1 = [
    {
//         maDonHang: randomkeyDH(),
        maDonHang: 1,
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Chưa duyệt',
        chiTiet: [a, b],
        maKH: 'KHICY1000',
        tongTien: 150000,
    },
    {
        // maDonHang: randomkeyDH(),
        maDonHang: 2,
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Đã duyệt',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 200000,
    },
    {
        // maDonHang: randomkeyDH(),
        maDonHang: 3,
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Đã duyệt',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 1500000,
    },
    {
//        maDonHang: randomkeyDH(),
        maDonHang: 4,
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Đã duyệt',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 350000,
    },
    {
        // maDonHang: randomkeyDH(),
        maDonHang: 5,
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Chưa duyệt',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 300000,
    },
    {
        // maDonHang: randomkeyDH(),
        maDonHang: 6,
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Chưa duyệt',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 450000,
    },
    {
        // maDonHang: randomkeyDH(),
        maDonHang: 7,
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Đã duyệt',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 500000,
    },
    {
        // maDonHang: randomkeyDH(),
        maDonHang: 8,
        tenKH: 'Nguyễn An Thuận',
        thoiGianDat: today(),
        trangThai: 'Chưa duyệt',
        chiTiet: dsGioHang,
        maKH: 'KHICY1000',
        tongTien: 150000,
    },
];
localStorage.setItem('DuyetDonHang1', JSON.stringify(DuyetDonHang1));
// localStorage.setItem('DuyetDonHang1abc', "Hello");




// Test func
let DuyetDonHang = localStorage.getItem('DuyetDonHang1') ? JSON.parse(localStorage.getItem('DuyetDonHang1')) : [];
function renderTable2() {
    let tongTienDaDuyet = 0;
    let donDaDuyet = 0;
    let donChuaDuyet = 0;
    let tongDonHang = 0;
    let tongTienChuaDuyet = 0;
    let tongTienDH = 0;
    let tableContent = `
    <thead>
        <tr>
            <th>STT</th>
            <th>Mã đơn hàng</th>
            <th>Tên khách hàng</th>
            <th>Thời gian đặt đơn</th>
            <th>Xem chi tiết</th>
            <th>Tổng tiền</th>
            <th>Trạng thái</th>
            <th>Tác vụ</th>
        </tr>
    </thead>
    <tbody>`;
    DuyetDonHang.forEach((duyet, index) => {
        index++;
        tongDonHang++;
        tongTienDH += Number(duyet.tongTien);
        tableContent += `<tr>
        <td>${index}</td>
        <td>${duyet.maDonHang}</td>
        <td>${duyet.tenKH}</td>
        <td>${duyet.thoiGianDat}</td>
        <td>
            <a style="color: blue;" href='#' onclick="xemChiTiet('${duyet.maDonHang}')">Xem chi tiet</a> 
        </td>
        <td>${tienVN(duyet.tongTien)}</td>`;
        if(duyet.trangThai == 'Chưa duyệt') {
            donChuaDuyet++;
            tongTienChuaDuyet += Number(duyet.tongTien);
            tableContent += `
            <td style="color: red"><b>${duyet.trangThai}</b></td>
            <td>
                <label class="switch">
                    <input onclick="checkDH(this, 1)" type="checkbox">
                    <span class="slider round"></span>
                </label>
            </td>`;

        } else {
            donDaDuyet++;
            tongTienDaDuyet += Number(duyet.tongTien);
            tableContent += `
            <td style="color: blue"><b>${duyet.trangThai}</b></td>
            <td>
                <label class="switch">
                    <input onclick="checkDH(this, 1)" type="checkbox" checked>
                    <span class="slider round"></span>
                </label>
            </td>`;
        }
    })
    tableContent += `
        <tr id="tongTienDaDuyet"> 
            <td style="color: blue" colspan="5"><b>TỔNG TIỀN ĐÃ DUYỆT</b></td>
            <td style="color: blue"><b>${tienVN(tongTienDaDuyet)}</b></td> 
            <td style="color: blue"><b>Đơn đã duyệt: ${donDaDuyet}</b></td> 
        </tr>`;
    tableContent += `
        <tr id="tongTienChuaDuyet"> 
            <td style="color: red" colspan="5"><b>TỔNG TIỀN CHƯA DUYỆT</b></td>
            <td style="color: red" ><b>${tienVN(tongTienChuaDuyet)}</b></td> 
            <td style="color: red" ><b>Đơn chưa duyệt: ${donChuaDuyet}</b></td> 
        </tr>`;
    tableContent += `
        <tr> 
            <td style="color: green" colspan="5"><b>TỔNG TIỀN</b></td>
            <td style="color: green" ></b>${tienVN(tongTienDH)}</b></td> 
            <td style="color: green" ></b>Tổng đơn hàng: ${tongDonHang}</b></td>
            <td class="loadDuLieu" onclick="renderTable2()" ></b>LƯU DỮ LIỆU</b></td> 
        </tr>`;

    tableContent += `</tr></tbody>`;
    document.getElementById('myTable').innerHTML = tableContent;
    let DHTT = {
        tongTienDaDuyet: tongTienDaDuyet,
        donDaDuyet: donDaDuyet,
        donChuaDuyet: donChuaDuyet,
        tongTienChuaDuyet: tongTienChuaDuyet,
        tongTienDH: tongTienDH,
        tongDonHang: tongDonHang,
    }
    localStorage.setItem('DHTT', JSON.stringify(DHTT));
}
function xemChiTiet(maDonHang){
    let tongTien = 0;
    document.getElementById('newScreen').innerHTML = `
    <div id="background-color-chiTiet">
    <div style="border-radius: 10px;" id="background-chiTiet">
    <div class="chiTietBox" id="chiTietBox">
        <div class="Title">Xem chi tiết đơn hàng</div>
        <table style="width: 100%;" id="chiTietDonHang">
        </table>
    </div>
    </div>`;
    document.getElementById("background-color-chiTiet").onclick = function(e) {
        if (e.target.matches("#background-color-chiTiet")) {
            document.getElementById("background-color-chiTiet").remove();
        }
    }
    let tableContent = `
    <thead>
        <tr>
            <th>STT</th>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Số lượng</th>
            <th>Giá bán</th>
            <th>Thành tiền</th>
        </tr>
    </thead>
    <tbody>
                <tr>
                <td>${DuyetDonHang1[0].chiTiet[0].MaSP}</td>
                <td>${DuyetDonHang1[0].chiTiet[0].TenSP}</td>
                <td>${DuyetDonHang1[0].chiTiet[0].MaSP}</td>
                <td><img src="${fileInpToTextInp(DuyetDonHang1[0].chiTiet[0].hinhAnh)}" alt="Ảnh sản phẩm" width="40" height="40"></td>
                <td>${DuyetDonHang1[0].chiTiet[0].SoLuongMua}</td>
                <td>${DuyetDonHang1[0].chiTiet[0].GiaBan}</td>
                <td>${DuyetDonHang1[0].chiTiet[0].ThanhTien}</td>
            </label></td>
            </tr>;
            

            <tr>
            <td>${DuyetDonHang1[0].chiTiet[0].MaSP}</td>
            <td>${DuyetDonHang1[0].chiTiet[0].TenSP}</td>
            <td>${DuyetDonHang1[0].chiTiet[0].MaSP}</td>
            <td><img src="no" alt="Ảnh sản phẩm" width="40" height="40"></td>
            <td>${DuyetDonHang1[0].chiTiet[0].SoLuongMua}</td>
            <td>${DuyetDonHang1[0].chiTiet[0].GiaBan}</td>
            <td>${DuyetDonHang1[0].chiTiet[0].ThanhTien}</td>
        </label></td>
        </tr>;
            `;



    // Duyet chi tiet don hang
    // DuyetDonHang1.forEach((duyet, index) => {   
    //     if(duyet.maDonHang === maDonHang) {
    //         (DuyetDonHang1[index].chiTiet).forEach((ct, dem) => {
    //             tongTien += Number(ct.GiaBan)*Number(ct.SoLuongMua);
    //             tableContent += `<tr>
    //             <td>${dem + 1}</td>
    //             <td>${ct.MaSP}</td>
    //             <td>${ct.TenSP}</td>
    //             <td><img src="${fileInpToTextInp(ct.HinhAnh)}" alt="Ảnh sản phẩm" width="40" height="40"></td>
    //             <td>${ct.SoLuongMua}</td>
    //             <td>${tienVN(ct.GiaBan)}</td>
    //             <td>${tienVN(ct.GiaBan*ct.SoLuongMua)}</td>
    //         </label></td>
    //         </tr>`;
    //         })
    //     }
    // })


    {   
        
          
           
        
    }

    tableContent +=`
    <tr>
        <td colspan="6">TỔNG TIỀN</td>
        <td>${tienVN(tongTien)}</td>
    </tr>
        </tbody>`;
    document.getElementById('chiTietDonHang').innerHTML = tableContent;
}


function fileInpToTextInp(event) {
    let fileChuk = event.split("\\");
    return '.' + fileChuk[fileChuk.length - 1];
}

function tienVN(giaTri){
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(giaTri);
}

function checkDH(e, t) {
    let row = e.parentElement.parentElement.parentElement;
    let id =  row.cells[1].innerText;
    DuyetDonHang1.forEach((dh) => {
        if(dh.maDonHang === id) {
            if(dh.trangThai === "Đã duyệt")
            {
                dh.trangThai = "Chưa duyệt";
                row.cells[6].innerHTML = `<p style="color: red;"><b>Chưa duyệt</b></p>`;
            } else if( dh.trangThai === "Chưa duyệt"){
                dh.trangThai = "Đã duyệt";
                row.cells[6].innerHTML = `<p style="color: blue;"><b>Đã duyệt</b></p>`;
            }
        }
    })
    localStorage.setItem('DuyetDonHang', JSON.stringify(DuyetDonHang));
}
function TimKiemDH() {
    var DuyetDonHang = JSON.parse(localStorage.getItem('DuyetDonHang'));
    let input = document.getElementById('tkiem').value;
    console.log(input);
    let index = 1;
    let tongTienHienTai = 0;
    let tongTienDaDuyet = 0;
    let donDaDuyet = 0;
    let donChuaDuyet = 0;
    let tongTienChuaDuyet = 0;
    let tableContent = `
    <thead>
        <tr>
            <th>STT</th>
            <th>Mã đơn hàng</th>
            <th>Tên khách hàng</th>
            <th>Thời gian đặt đơn</th>
            <th>Xem chi tiết</th>
            <th>Tổng tiền</th>
            <th>Trạng thái</th>
            <th>Tác vụ</th>
        </tr>
    </thead>
    <tbody>`;
    if (input != "") {
        DuyetDonHang.forEach((duyet) => {
            if (
                Number(duyet.tongTien) <= Number(input) ||
                duyet.maDonHang.toLowerCase().search(input.toLowerCase()) != -1 ||
                duyet.maKH.toLowerCase().search(input.toLowerCase()) != -1 ||
                duyet.tenKH.toLowerCase().search(input.toLowerCase()) != -1 ||
                duyet.thoiGianDat.toLowerCase().search(input.toLowerCase()) != -1 ||
                duyet.trangThai.toLowerCase().search(input.toLowerCase()) != -1 ) {
                tongTienHienTai += Number(duyet.tongTien);
                tableContent += `<tr>
                <td>${index}</td>
                <td>${duyet.maDonHang}</td>
                <td>${duyet.tenKH}</td>
                <td>${duyet.thoiGianDat}</td>
                <td>
                    <a style="color: blue;" href='#' onclick="xemChiTiet('${duyet.maDonHang}')">Xem chi tiet</a> 
                </td>
                <td>${tienVN(duyet.tongTien)}</td>`;
                if(duyet.trangThai == 'Chưa duyệt') {
                    tongTienChuaDuyet += Number(duyet.tongTien);
                    tableContent += `
                    <td style="color: red"><b>${duyet.trangThai}</b></td>
                    <td>
                        <label class="switch">
                            <input onclick="checkDH(this, 0)" type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </td>`;
                } else {
                    tongTienDaDuyet += Number(duyet.tongTien);
                    tableContent += `
                    <td style="color: blue"><b>${duyet.trangThai}</b></td>
                    <td>
                        <label class="switch">
                            <input onclick="checkDH(this)" type="checkbox" checked>
                            <span class="slider round"></span>
                        </label>
                    </td>`;
                }
                index++;
            }
        })
        tableContent += `
            <tr id="tongTienDaDuyet"> 
                <td style="color: blue" colspan="5"><b>TỔNG TIỀN ĐÃ DUYỆT</b></td>
                <td style="color: blue"><b>${tienVN(tongTienDaDuyet)}</b></td> 
            </tr>`;
        tableContent += `
            <tr id="tongTienChuaDuyet"> 
                <td style="color: red" colspan="5"><b>TỔNG TIỀN CHƯA DUYỆT</b></td>
                <td style="color: red" ><b>${tienVN(tongTienChuaDuyet)}</b></td> 
            </tr>`;
        tableContent += `
            <tr> 
                <td style="color: green" colspan="5"><b>TỔNG TIỀN</b></td>
                <td style="color: green" ></b>${tienVN(tongTienHienTai)}</b></td> 
                <td class="loadDuLieu" onclick="renderTable2()" ></b>LƯU DỮ LIỆU</b></td> 
            </tr>`;
        tableContent += `</tr></tbody>`;
        document.getElementById('myTable').innerHTML = tableContent;
    }
    else if (input == ""){
        alert("Bạn chưa nhập nội dung tìm kiếm!");
    }
    else{
        alert("Mục bạn muốn tìm không tồn tại!");
    }
    document.getElementById('tkiem').value = "";
} 