//hoc
// $('.input-sm').each(function(){
//     console.log($(this).val());
//    })

//kiểm tra dữ liệu
//bước 1: Tạo array thông báo
var mangThongBao = ["Vui lòng nhập mã nhân viên chỉ có số!",
                "Vui lòng nhận họ tên nhân viên!",
                "Vui lòng nhập Email!",
                "Vui lòng nhập mật khẩu!",
                "Vui lòng chọn chức vụ!",
                "Họ tên phải là ký tự!",
                "Mật khẩu phải có ít nhất 8 ký tự.",
                "Email chưa đúng định dạng.",
                "Vui lòng chọn ngày"];

function getElement(e){
	return document.getElementById(e);
}

function KiemTraDuLieu(idField, idThongBao, indexChuoiTB, typeKiemTra, typeDinhDang, minLength){
	var kq = false;

	var idField = getElement(idField);
	var thongBao = getElement(idThongBao);

	switch (typeKiemTra) {
		case 1: //Kiểm tra dữ liệu bắt buộc
			kq = KiemTraNhap(idField);
		break;
		case 2: //Kiểm tra dữ liệu định dạng
			kq = KiemTraDinhDang(idField, typeDinhDang);
		break;
		case 3: //Kiểm tra độ dài chuỗi
			kq = KiemTraDoDaiChuoi(idField, minLength);
		break;
		case 4: //Kiểm tra dữ liệu chọn
			kq = KiemTraChon(idField);
		break;
	}

	if (kq){
		thongBao.style.display = "none";
	} else {
		thongBao.style.display = "block";
		thongBao.innerHTML = mangThongBao[indexChuoiTB];
	}

	return kq;
}
function KiemTraNhap(idField){
	if (idField.value === ""){
		return false;
	} else {
		return true;
	}
}
function KiemTraChon(idField){
	if (idField.selectedIndex === 0){
		return false;
	} else {
		return true;
	}
}
function KiemTraDinhDang(idField, typeDinhDang){
	var mangKiTu;

	switch (typeDinhDang){
		case 1: // Định dạng ký tự
			mangKiTu = /^[A-Za-z]\/+$/;
		break;
		case 2: // Định dạng Email
			mangKiTu = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		break;
		case 3:
			mangKiTu = /^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
		break;
	}

	if (!idField.value.match(mangKiTu)){
		return false;
	} else {
		return true;
	}
}
function KiemTraDoDaiChuoi(idField, minLength){
	if (idField.value.length < minLength){
		return false;
	} else {
		return true;
	}
}
function isNumberKey(evt)
    {
        let tb = document.getElementById('tbMaNV');
        var charCode = (evt.which) ? evt.which : event.keyCode;
       if(charCode == 59 || charCode == 46)
        {
            return true;}
        else{
            tb.style.display="block";
            tb.innerHTML = "Vui lòng chỉ nhập số";
        }
       if (charCode > 31 && (charCode < 48 || charCode > 57))
          return false;
          tb.style.display="none";
       return true;
    }
function KtHopLe(){
	var kq1 = KiemTraDuLieu("msnv", "tbMaNV", 0, 1, 0, 0, 0);

	var kq2 = KiemTraDuLieu("name", "tbTen", 1, 1, 0, 0, 0);
	var kq3 = KiemTraDuLieu("email", "tbEmail", 2, 1, 0, 0, 0);
	if (kq3){
		kq3 = KiemTraDuLieu("email", "tbEmail", 7, 2, 2, 0, 0);
	}
	var kq4 = KiemTraDuLieu("password", "tbMatKhau", 3, 1, 0, 0, 0);
	if (kq4){
		kq4 = KiemTraDuLieu("password", "tbMatKhau", 6, 3, 0, 8);
	}
	var kq5 = KiemTraDuLieu("datepicker", "tbNgay", 8, 2, 3, 0, 0);
	var kq6 = KiemTraDuLieu("chucvu", "tbChucVu", 4, 4, 0, 0, 0);

	if (kq1 && kq2 && kq3 && kq4 && kq5 && kq6)
		return true;
	else
		return false;
}


let Company = new company();
for(let Employee of data){
    let codeEmploy = Employee.dataCode;
    let nameEmploy = Employee.dataName;
    let emailEmploy= Employee.dateEmail;
    let passEmploy = Employee.dataPass;
    let dateEmlpoy = Employee.dataDate;
    let posionEmploy = Employee.dataPosition;

    let newEmploy = [codeEmploy,nameEmploy, emailEmploy,passEmploy, dateEmlpoy, posionEmploy];
    Company.addEml(newEmploy);
}

const showPopup=(titlePopup,readOnly = false, type = 1)=>{
    document.getElementById('header-title').innerHTML=titlePopup;
    document.getElementById('msnv').readOnly = readOnly;
    if(type === 1){
        document.getElementById('btnThemNV').style.display='block';
        document.getElementById('btnCapNhatNV').style.display='none';
    }
    else{
        document.getElementById('btnThemNV').style.display='none';
        document.getElementById('btnCapNhatNV').style.display='block';
    }
}

const deleteForm=()=>{
    let classInput = document.getElementsByClassName('input-sm');
    for(let element_input of classInput){
        element_input.value = '';
    }
    document.getElementById('chucvu').selectedIndex = 0;
    let dmy = new Date();
    let dd = dmy.getDay();
    let mm = dmy.getMonth();
    let yy = dmy.getFullYear();
    if(dd<10){
        dd = '0'+dd;
    }
    if(mm<10){
        mm = '0'+mm;
    }
    document.getElementById('datepicker').value = `${dd}/ ${mm} / ${yy}`;
    //không tối tưu
    // for(let i = 0;  i <=5; i++){
    //     document.getElementsByClassName('sp-thongbao')[i].innerHTML="";
    // }
    //tối ưu
    let classSpan = document.getElementsByClassName('sp-thongbao');
    for(let elementSpan of classSpan){
        elementSpan.innerHTML="";
    }
}
document.getElementById('btnThem').addEventListener('click',()=>{
    deleteForm();
    showPopup('Thêm nhân viên');
})

//edit page
edit_employee = (id_employee) =>{
    document.getElementById(id_employee).addEventListener('click', ()=>{
        let arrayNV = id_employee.split("_");
        let first_e = arrayNV[1];
        let index_empl = Company.search_array_eml(first_e);
        document.getElementById('msnv').value = index_empl[0];
        document.getElementById('name').value = index_empl[1];
        document.getElementById('email').value = index_empl[2];
        document.getElementById('password').value = index_empl[3];
        document.getElementById('datepicker').value = index_empl[4];
        document.getElementById('chucvu').selectedIndex = index_empl[5];
        showPopup('Sửa nhân viên', true, 2);
    })
}

//xóa nhân viên
delete_emp = (id_delete) =>{
    document.getElementById(id_delete).addEventListener('click', ()=>{
        let id = id_delete;
        let array_id = id.split('_');
        let first_arr = array_id[1];
        Company.delete(first_arr);
        showListEmployee(Company.list_eml);
        swal("Xóa thành công", "Dữ liệu đã được cập nhật", "success");
    })
}
var first_empl = 1;// li_page
const showListEmployee=(list_empl_company, first_empl)=>{
    //phan trang
    let sum_empl = list_empl_company.length;
    let number_empl_one_page = 3;
    let sum_page = Math.ceil(sum_empl/number_empl_one_page);
    let ul = document.getElementById("ulPhanTrang");
    ul.innerHTML="";

    let star_empl_page = (first_empl -1)*number_empl_one_page;
    let end_empl_page = first_empl*number_empl_one_page; // nếu first_empl = 2 =>star=3 end =6: 0 1 2/ 3 4 5
    let tbody = document.getElementById('tableDanhSach');
    tbody.innerHTML = "";

    for(let i=1; i<= sum_page; i++){
        let a = document.createElement('a');
        a.setAttribute("class","page-link");
        a.innerHTML = i;
        let li = document.createElement('li');
        let id_li= "page_"+i;
        li.setAttribute("id",id_li);
        li.appendChild(a);
        ul.appendChild(li);
        click_number_page(id_li);
    }
    //xuất mảng nhân viên

    if(sum_empl<end_empl_page){
        end_empl_page = sum_empl;
    }
    for(let i = star_empl_page; i < end_empl_page; i++){
        let tr = document.createElement('tr');
        tr.setAttribute('id','tr'+i);
        tbody.appendChild(tr);

        let nv_i=list_empl_company[i];
        for(let j = 0; j< nv_i.length; j++){
            if(j !== 3){
                let td = document.createElement('td');
                td.innerHTML = nv_i[j];
                if(nv_i[j] == "1"){
                    td.innerHTML ="Sếp";
                }
                if(nv_i[j] == "2"){
                    td.innerHTML ="Trưởng phòng";
                }
                if(nv_i[j] == "3"){
                    td.innerHTML ="Nhân viên";
                }
                tr.appendChild(td);
            }
        }
        let td_icon = document.createElement('td');
        let iconEdit = `<span class="btn btn-xs btn-primary" data-toggle="modal" data-target="#myModal" id="edit_${nv_i[0]}">Sửa</span>`;
        let iconDel = `<span class="btn btn-xs btn-danger ml-2" id="del_${nv_i[0]}">Xóa</span>`;
        td_icon.innerHTML = iconEdit + iconDel;
        tr.appendChild(td_icon);
        edit_employee(`edit_${nv_i[0]}`);
        delete_emp(`del_${nv_i[0]}`);
    }
}

//cập nhật chỉnh sửa nhân viên
document.getElementById('btnCapNhatNV').addEventListener('click', ()=>{
    let new_id_emp = document.getElementById('msnv').value;
    let new_name_emp = document.getElementById('name').value;
    let new_email_emp = document.getElementById('email').value;
    let new_pass_emp = document.getElementById('password').value;
    let new_date_emp = document.getElementById('datepicker').value;
    let new_position_emp = document.getElementById('chucvu').selectedIndex;
    let new_emp_edit = [new_id_emp, new_name_emp, new_email_emp, new_pass_emp, new_date_emp, new_position_emp];
    Company.edit_eml(new_emp_edit);
    showListEmployee(Company.list_eml,first_empl);
    swal("Chỉnh sửa thành công", "Dữ liệu đã được cập nhật", "success")
})

//click chuyển trang
click_number_page = (id_number_page) =>{
    document.getElementById('page_1').setAttribute("class", "act");
    document.getElementById(id_number_page).addEventListener('click',()=>{
        let array_id_page =id_number_page.split('_');
        first_empl = array_id_page[1];
        showListEmployee(Company.list_eml, first_empl);
        if(id_number_page !== 'page_1'){
            document.getElementById(id_number_page).setAttribute("class", "act");
            document.getElementById('page_1').removeAttribute('class');
        }
    })
}

//add nhân viên
document.getElementById('btnThemNV').addEventListener('click', ()=>{
    var kiemTraHopLe = KtHopLe();
    if (kiemTraHopLe){
    let new_id = document.getElementById('msnv').value;
    let new_name = document.getElementById('name').value;
    let new_email = document.getElementById('email').value;
    let new_pass = document.getElementById('password').value;
    let new_date = document.getElementById('datepicker').value;
    let new_position = document.getElementById('chucvu').selectedIndex;

    let new_array = [new_id, new_name, new_email, new_pass,new_date, new_position];
    Company.addEml(new_array);
    showListEmployee(Company.list_eml,first_empl);
    deleteForm();
    }
})

//tìm kiếm
document.getElementById('searchName').addEventListener('keyup', ()=>{
    let key = document.getElementById("searchName").value;
    let array = Company.search_name(key);
    let first_empl = 1;
    showListEmployee(array.list_eml,first_empl);
})

//sắp xem theo mã
document.getElementById("SapXepTang").addEventListener("click", ()=>{
    document.getElementById("SapXepTang").style.display = "none";
    document.getElementById("SapXepGiam").style.display = "inline-block";
    Company.sort_employ(1);
    showListEmployee(Company.list_eml, 1);
})
document.getElementById("SapXepGiam").addEventListener("click", ()=>{
    document.getElementById("SapXepGiam").style.display = "none";
    document.getElementById("SapXepTang").style.display = "inline-block";
    Company.sort_employ(2);
    showListEmployee(Company.list_eml, 1);
})
showListEmployee(Company.list_eml, first_empl);

