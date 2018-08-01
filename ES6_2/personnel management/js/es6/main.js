//hoc
// $('.input-sm').each(function(){
//     console.log($(this).val());
//    })



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
    document.getElementById('datepicker').value = `${dd}/ ${mm} / ${yy}`;
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

var first_empl = 1;
const showListEmployee=(list_empl_company)=>{
    //phan trang
    let sum_empl = list_empl_company.length;
    let number_empl_one_page = 3;
    let sum_page = Math.ceil(sum_empl/number_empl_one_page);
    let ul = document.getElementById("ulPhanTrang");
    ul.innerHTML="";
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
    let star_empl_page = (first_empl -1)*number_empl_one_page;
    let end_empl_page = first_empl*number_empl_one_page; // nếu first_empl = 2 =>star=3 end =6: 0 1 2/ 3 4 5
    let tbody = document.getElementById('tableDanhSach');
    tbody.innerHTML = "";
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
    showListEmployee(Company.list_eml);
    swal("Chỉnh sửa thành công", "Dữ liệu đã được cập nhật", "success")
})

//click chuyển trang
click_number_page = (id_number_page) =>{
    document.getElementById(id_number_page).addEventListener('click',()=>{
        let array_id_page =id_number_page.split('_');
        first_empl = array_id_page[1];
        showListEmployee(Company.list_eml);
    })
}

//add nhân viên
document.getElementById('btnThemNV').addEventListener('click', ()=>{
    $('input').each(function(){
        let input = this.val();
        if(input !== ""){
            let new_id = document.getElementById('msnv').value;
            let new_name = document.getElementById('name').value;
            let new_email = document.getElementById('email').value;
            let new_pass = document.getElementById('password').value;
            let new_date = document.getElementById('datepicker').value;
            let new_position = document.getElementById('chucvu').selectedIndex;
            let new_array = [new_id, new_name, new_email, new_pass,new_date, new_position];
            Company.addEml(new_array);
            showListEmployee(Company.list_eml);
            deleteForm();
        }
        else{
            console.log('Ban chua hoan thnah');
        }
    })

})

//tìm kiếm
document.getElementById('searchName').addEventListener('keyup', ()=>{
    let key = document.getElementById("searchName").value;
    let array = Company.search_name(key);
    showListEmployee(array.list_eml);
})
showListEmployee(Company.list_eml);