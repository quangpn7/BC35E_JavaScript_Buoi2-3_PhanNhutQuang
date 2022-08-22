// BÀI 1: TÍNH TIỀN LƯƠNG NHÂN VIÊN
/**
 * -GIẢ SỬ: Người dùng nhập số ngày làm sau đó tính toán và xuất ra kết quả
 * +Đầu vào: người dùng nhập số ngày làm
 * +Xử lý: ketQua = soNgayLam * 1000000
 * +Đầu ra: ketQua = ?
 */
btnTinh = document.getElementById("btnTinh");
btnTinh.onclick = function () {
  const soLuongNgay = 100000;
  // CREATE CURRENCY FORMAT
  var currentFormat = new Intl.NumberFormat("VN-vn");
  soNgayLam = document.getElementById("day").value * 1;
  tongLuong = soLuongNgay * soNgayLam;
  var soTienLuong =
    "<p>Tổng lương là: " +
    "<span style='color: red; font-weight: bold;'>" +
    currentFormat.format(tongLuong) +
    " VND" +
    "</span>" +
    "</p>";
  document.getElementById("soTienLuong").innerHTML = soTienLuong;
};
//BÀI 2: TÍNH GIÁ TRỊ TRUNG BÌNH CỦA 5 SỐ
/**
 * GIẢ SỬ: NHẬP 5 SỐ VÀO VÀ TÍNH GIÁ TRỊ TRUNG BÌNH CỦA 5 SỐ
 * +Đầu vào: người dùng nhập vào 5 số bất kì
 * XỬ LÝ: ketQua = (num1+num2+num3+num4+num5)/5
 * ĐẦU RA: ketQua = ?
 */
var btnTB = document.getElementById("btnTB");
btnTB.onclick = function () {
  var num1 = document.getElementById("num1").value * 1;
  var num2 = document.getElementById("num2").value * 1;
  var num3 = document.getElementById("num3").value * 1;
  var num4 = document.getElementById("num4").value * 1;
  var num5 = document.getElementById("num5").value * 1;
  var ketQua = (num1 + num2 + num3 + num4 + num5) / 5;
  console.log(ketQua);
  var tagKetQua =
    "<p>Trung bình của 5 số trên là: " +
    "<span class='text-danger font-weight-bold pl-2 h3'>" +
    ketQua +
    "</span>" +
    "</p>";
  document.getElementById("ketQuaTB").innerHTML = tagKetQua;
};
// BÀI 3: ĐỔI TIỀN ĐÔ
/**
 * GIẢ SỬ: NGƯỜI DÙNG NHẬP VÀO SỐ TIỀN ĐÔ VÀ CHƯƠNG TRÌNH SẼ QUY ĐỔI RA THÀNH TIỀN VIỆT
 * +Đầu vào: Nugời dùng nhập vào số tiền đô
 * +Xử lý: ketQua = usd * VND (VND = 23500)
 * +Đầu ra: ketQua = ?
 * *Ngược lại với chương trình qui đổi VND sang USD
 */
// USD TO VND
document.getElementById("do_vnd").onclick = function () {
  const usd_vnd = 23500;
  var dollar = document.getElementById("dollar").value * 1;
  ketQuaVND = dollar * usd_vnd;
  var currentFormat = new Intl.NumberFormat("VN-vn");
  var ketQuaVNDtag =
    "<p class='text-danger mb-0'>" +
    +dollar +
    " USD" +
    " = " +
    "<span class='font-weight-bold'>" +
    currentFormat.format(ketQuaVND) +
    " VND" +
    "</span>" +
    "</p>";
  document.getElementById("ketQuaVND").innerHTML = ketQuaVNDtag;
};
// VND TO USD
document.getElementById("vnd_do").onclick = function () {
  const usd_vnd = 23500;
  var vnd = document.getElementById("vnd").value * 1;
  ketQuaUSD = vnd / usd_vnd;

  var currentFormat = new Intl.NumberFormat("US-us");
  var ketQuaUSDtag =
    "<p class='text-danger mb-0'>" +
    +vnd +
    " VND" +
    " = " +
    "<span class='font-weight-bold'>" +
    currentFormat.format(ketQuaUSD) +
    " USD" +
    "</span>" +
    "</p>";
  document.getElementById("ketQuaUSD").innerHTML = ketQuaUSDtag;
};
// BÀI 4: TÍNH CHU VI VÀ DIỆN TÍCH HÌNH CHỮ NHẬT
/**
 * GIẢ SỬ: NGƯỜI DÙNG NHẬP VÀO GIÁ TRỊ CỦA CHIỀU RỘNG VÀ DÀI CỦA 1 HÌNH CHỮ NHẬT, SAU ĐÓ TÍNH TOÁN VÀ OUTPUT RA 2 KẾT QUẢ
 * +Đầu vào: người dùng nhập vào 2 giá trị length và width
 * +Xử lý: dienTich = length * width, chuVi = (length + width)*2
 * +Đầu ra: dienTich = ? , chuVi = ?
 */
document.getElementById("calc").onclick = function () {
  var length = document.getElementById("length").value * 1;
  var weight = document.getElementById("weight").value * 1;
  dienTich = length * weight;
  chuVi = (length + weight) * 2;
  var ketQuaCN =
    "<p> Diện tích hình chữ nhật là: " +
    "<span class='text-danger font-weight-bold'>" +
    dienTich +
    " m" +
    "<sup>2</sup>" +
    "</span>" +
    "</p>" +
    "<p> Chu vi hình chữ nhật là: " +
    "<span class='text-danger font-weight-bold'>" +
    chuVi +
    " m" +
    "</span>" +
    "</p>";
  document.getElementById("chuViDienTich").innerHTML = ketQuaCN;
};
// BÀI 5: TÍNH KÝ SỐ
/**
 * GIẢ SỬ: NGƯỜI DÙNG NHẬP VÀO CHỮ SỐ GỒM 2 CHỮ SỐ, TÍNH TỔNG CỦA 2 KÝ TỰ SỐ NÀY VÀ OUTPUT RA
 * +Đầu vào: người dùng nhập vào chữ số có 2 chữ số
 * +Xử lý: soHangChuc =  Math.floor(numInput)/10
 *         soDonVi = numInput % 10
 *         ketQua = soHangChuc * soDonVi
 * +Đầu ra: ketQua = ?
 *
 */
document.getElementById("btn_2char").onclick = function () {
  var numInput = document.getElementById("num_2char").value * 1;
  var soHangChuc = Math.floor(numInput / 10);
  var soHangDV = numInput % 10;
  var totalChar = soHangChuc + soHangDV;
  var totalTag =
    "<p>Tổng ký số của số " +
    "<span class='text-danger font-weight-bold'>" +
    numInput +
    "</span>" +
    " là: " +
    "<span class='text-danger font-weight-bold'>" +
    totalChar +
    "</span>" +
    "</p>";
  document.getElementById("totalChar").innerHTML = totalTag;
};
