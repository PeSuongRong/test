var nhanvien = new Employee("1a","Hải Yến", "fiststar1995@gmail.com", "123654", "10/4/1995", "1");
var nhanvien1 = new Employee("2b","Hải Yến1", "fiststar1995@gmail.com1", "123654", "10/4/1995", "2");
var nhanvien2 = new Employee("2b","Hải Yến2", "abb5@gmail.com1", "123654", "10/4/1995", "3"); // code_employee change = code_employee want change
var congty = new Company();
congty.addEmployee(nhanvien);
congty.addEmployee(nhanvien1);

 // function call popup
 call_func = (header_title, types) => {
     document.getElementById("header-title").innerHTML = header_title;
    // document.getElementById("mssv").readonly = readonlys;
    if(types == 1){
        document.getElementById("btnThemNV").style.display = "block";
        document.getElementById("btnCapNhatNV").style.display = "none";
    }
    else if(types !== 1){
        document.getElementById("btnThemNV").style.display = "none";
        document.getElementById("btnCapNhatNV").style.display = "block";
    }
    // switch(types){
    //     case 1:
    //     document.getElementById("btnThemNV").style.display = "block";
    //     document.getElementById("btnCapNhatNV").style.display = "none";
    //     break;
    //     case 2:
    //     document.getElementById("btnThemNV").style.display = "none";
    //     document.getElementById("btnCapNhatNV").style.display = "block";
    //     break;
    // }
 }
 delete_form = () =>{
    let input = document.getElementsByClassName("input-sm");
    for(let value_input of input ){
        value_input.value = "";
    }
    document.getElementById("chucvu").selectedIndex = 0;
 }

 //phân trang
 var page_view = 1; //khởi tạo số trang ban đầu
 view_list = (list_employee) =>{
    let tbody = document.getElementById("tableDanhSach"); // khai báo vùng đổ data
    let page_number = document.getElementById("ulPhanTrang"); //khai báo vùng phân trang
    let sum_employee = list_employee.length; // khai báo biến tổng số nhân viên,
    let number_tr_1page = 2; // số dòng tối đa trên 1 page
    let number_page_all = Math.ceil(sum_employee / number_tr_1page); // số phân trang = số nhân viên / số dòng và phải đc làm tròn

    tbody.innerHTML = ""; // refesh rống ban đầu
    page_number.innerHTML = ""; //refesh rỗng ban đầu

    //phân trang
    for(let i=1; i <= number_page_all; i++){
        let li = document.createElement("li"); //tạo thẻ li
        page_number.appendChild(li); // gán li vào vùng phân trang

        let a = document.createElement("a"); //tạo thẻ a
        a.setAttribute("class","page-link"); // gắn class cho thẻ
        a.setAttribute("id","page_"+i);
        a.innerHTML = i; //in số trang

        li.appendChild(a); // li add a
    }
    // add employee in one page
    let  nv, tr, td;
    let star = (page_view - 1)*number_tr_1page; //số đầu tiên mỗi trang
    let end = page_view*number_tr_1page; //số cuối cùng mỗi trang

    if(sum_employee < end){
        end = sum_employee; //nếu tống nhân nhỏ hơn số cuối cùng
    }

    for(let i = star; i < end; i++){
        nv = list_employee[i];
        tr = document.createElement("tr");
        tbody.appendChild(tr);
        for(let j = 0; j < nv.compare_employee.length; j++){
            td = document.createElement("td");
            // if( j = 5){
            //     let text_position;
            //     switch(nv.compare_employee[5]){
            //         case 0:
            //         text_position = "Chọn chức vụ";
            //         case 1:
            //         text_position = "Sếp";
            //         break;
            //         case 2:
            //         text_position = "Trưởng phòng";
            //         break;
            //         case 3:
            //         text_position = "Nhân viên";
            //     }
            //     td.innerHTML = text_position;
            // }else{
            //     td.innerHTML = nv.compare_employee[j];
            // }
            if( nv.compare_employee[j] == '1'){
                td.innerHTML = 'abc';
            }else{
                td.innerHTML = nv.compare_employee[j];
            }
            tr.appendChild(td);
        }
        console.log(nv.compare_employee.length);
        let icon_dele = `<a id="delet_${nv.code_employee}" class="btn btn-primary text-white"><i class="fa fa-trash"></i></a>`;
        let icon_edit = `<a href="#myModal" data-toggle="modal" class="btn btn-danger ml-2" id="edit_${nv.code_employee}"><i class="fa fa-pencil-square-o"></i></a>`;
        td = document.createElement("td");
        td.innerHTML = icon_dele + icon_edit;
        td.setAttribute("align", "center");
        tr.appendChild(td);
    }
 }

 document.getElementById("btnThem").addEventListener("click", ()=>{
     delete_form();
     call_func("Thêm nhân viên mới","1");
 })
 document.getElementById("btnThemNV").addEventListener("click", () =>{
    let code_empl = document.getElementById("msnv").value;
    let name_empl = document.getElementById("name").value;
    let email_empl = document.getElementById("email").value;
    let pass_empl = document.getElementById("password").value;
    let date_star = document.getElementById("datepicker").value;
    let position_empl = document.getElementById("chucvu").selectedIndex;
    let text_position;
    switch(position_empl){
        case 0:
        text_position = "Chọn chức vụ";
        case 1:
        text_position = "Sếp";
        break;
        case 2:
        text_position = "Trưởng phòng";
        break;
        case 3:
        text_position = "Nhân viên";
    }
    let employee_new = new Employee(code_empl, name_empl, email_empl, pass_empl, date_star, text_position);
    congty.addEmployee(employee_new);
    view_list(congty.List_Employee);
    //thư viện Sweet Alert
    swal("Thêm thành công!", "Danh sách nhân viên đã được cập nhật!", "success");
    delete_form();
 })

 //edit info employee
 edit_employee = (id_employee)=>{
    document.getElementById(edit_1a).addEventListener("click", ()=>{
        let id = edit_1a;
        let array_demo = id.slip(_); //ex: tạo ra mảng [edit, a1] ->index: 0 = edit, 1 = a1
        let index_array_demo = array_demo[1];
        let nhanvien = congty.search_index_employee(index_array_demo);

        document.getElementById("msnv").value = index_array_demo;
        document.getElementById("name").value = nhanvien.name_employee;
        document.getElementById("email").value = nhanvien.email_employee;
        document.getElementById("password").value = nhanvien.pass_employee;
        document.getElementById("datepicker").value = nhanvien.date_star;
        document.getElementById("chucvu").selectedIndex = nhanvien.position_employee;


    })
 }
 view_list(congty.List_Employee);
