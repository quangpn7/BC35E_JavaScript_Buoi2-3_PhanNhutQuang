// BÀI 1: TÍNH TIỀN LƯƠNG NHÂN VIÊN
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
