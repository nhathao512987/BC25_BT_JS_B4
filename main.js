/* BT 1 - Xuất 3 số theo thứ tự tăng dần */
document.getElementById("xuatkq").onclick = function () {

    //Đầu Vào : DOM tới thẻ input ngayluong lấy value
    var soNguyen1 = document.getElementById("nhapSoNguyen1").value * 1;
    var soNguyen2 = document.getElementById("nhapSoNguyen2").value * 1;
    var soNguyen3 = document.getElementById("nhapSoNguyen3").value * 1;

    // Xử Lý : công thức và điều kiện
    if ( soNguyen1 > soNguyen2 && soNguyen2 > soNguyen3 ) {
        var soSanhKQ = " Thứ Tự Tăng Dần Là " +" " + soNguyen3 + " " + soNguyen2 + " " + soNguyen1;
    }   else if ( soNguyen1 > soNguyen2 && soNguyen1 > soNguyen3 && soNguyen3 > soNguyen2) {
        var soSanhKQ = " Thứ Tự Tăng Dần Là " +" " + soNguyen2 + " " + soNguyen3 + " " + soNguyen1;
    }   else if ( soNguyen2 > soNguyen1 && soNguyen1 > soNguyen3 ) {
        var soSanhKQ = " Thứ Tự Tăng Dần Là " +" " + soNguyen3 + " " + soNguyen1 + " " + soNguyen2;
    }   else if ( soNguyen2 > soNguyen1 && soNguyen2 > soNguyen3 && soNguyen3 > soNguyen1) {
        var soSanhKQ = " Thứ Tự Tăng Dần Là " +" " + soNguyen1 + " " + soNguyen3 + " " + soNguyen2;
    }   else if ( soNguyen3 > soNguyen1 && soNguyen1 > soNguyen2) {
        var soSanhKQ = " Thứ Tự Tăng Dần Là " +" " + soNguyen2 + " " + soNguyen1 + " " + soNguyen3;
    }   else if ( soNguyen3 > soNguyen1 && soNguyen3 > soNguyen2 && soNguyen2 > soNguyen1) {
        var soSanhKQ = " Thứ Tự Tăng Dần Là " +" " + soNguyen1 + " " + soNguyen2 + " " + soNguyen3;
    }

    // Xuất Kết Quả So Sánh
    document.getElementById("thongbaoss").innerHTML = soSanhKQ;
}

/* BT 2 - Viết Chương Trình Chào Hỏi*/
document.getElementById("loichao").onclick = function () {

    //Đầu Vào : DOM tới thẻ input ngayluong lấy value
    var danhTinh = document.getElementById("danhXung").value;

    
    if ( danhTinh == "Bố" ) {
        var chao = "Con Rất Chào bố";
    }  else if ( danhTinh == "Mẹ") {
        var chao = "Con Hơi Chào Mẹ";
    }  else if ( danhTinh == "Anh Trai" ) {
        var chao = "Em chào anh trai nhé";
    }  else if ( danhTinh == "Em Gái" )
        var chao = "Ai vậy ? tui không có em gái";

    // Xuất Kết Quả So Sánh
    document.getElementById("thongbaolc").innerHTML = chao ;
}

/* BT3 Xuất ra bao nhiêu số lẻ và bao nhiêu số chẵn */
document.getElementById("xacDinh").onclick = function () {

    //Đầu Vào : DOM tới thẻ input ngayluong lấy value
    var soThu1 = document.getElementById("nhapSoThu1").value * 1;
    var soThu2 = document.getElementById("nhapSoThu2").value * 1;
    var soThu3 = document.getElementById("nhapSoThu3").value * 1;

    if ( soThu1 % 2 == 0 ) {
        var chanLe1 = soThu1 + " " + "là số chẵn";
    }   else  {
        var chanLe1 = soThu1 + " " + "là số lẻ";
    }

    if ( soThu2 % 2 == 0 ) {
        var chanLe2 = soThu2  + " " + "là số chẵn";
    }   else  {
        var chanLe2 = soThu2 + " " + "là số lẻ";
    }

    if ( soThu3 % 2 == 0 ) {
        var chanLe3 = soThu3 + " " + "là số chẵn";
    }   else  {
        var chanLe3 = soThu3 + " " + "là số lẻ";
    }

    // Xuất Kết Quả So Sánh
    document.getElementById("thongbaocl1").innerHTML = chanLe1 ;
    document.getElementById("thongbaocl2").innerHTML = chanLe2 ;
    document.getElementById("thongbaocl3").innerHTML = chanLe3 ;
}      
    

/* BT 4 - Cho biết tam giác gì ? */
document.getElementById("xuatTamGiac").onclick = function () {

    //Đầu Vào : DOM tới thẻ input ngayluong lấy value
    var canh1 = document.getElementById("nhapCanh1").value * 1;
    var canh2 = document.getElementById("nhapCanh2").value * 1;
    var canh3 = document.getElementById("nhapCanh3").value * 1;

    // Xử Lý : công thức và điều kiện
    var canhHuyen1 = Math.sqrt( canh3*canh3 + canh2*canh2);
    var canhHuyen2 = Math.sqrt( canh1*canh1 + canh3*canh3);
    var canhHuyen3 = Math.sqrt( canh1*canh1 + canh2*canh2);


    if  ((  canh1 == canh2  && canh1 !== canh3) 
        || (canh1 == canh3  && canh1 !== canh2)
        || (canh2 == canh3  && canh1 !== canh2)) {
        var TGG = "Tam Giác Cân";
    }   else if ( canh1 == canh2 && canh1 == canh3 && canh2 == canh3 ) {
        var TGG  = "Tam Giác Đều";
    }   else if (( canhHuyen1 == canh1)
            ||  (  canhHuyen2 == canh2)
            ||  (  canhHuyen3 == canh3)) {
        var TGG = "Tam Giác Vuông";
    }   else  { 
        var TGG  = "Tam Giác Thường";
    }

    //Đầu Ra Kết quả tam giác gì
    document.getElementById("thongbaocTGG").innerHTML = TGG  ;
}