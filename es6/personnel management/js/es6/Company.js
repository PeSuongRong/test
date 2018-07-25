class Company{
    constructor(){
        this.List_Employee = new Array();
    }
    // add employee
    addEmployee(item){
        this.List_Employee = [...this.List_Employee, item];
    }

    //search index employee in the array follow code employee
    search_index_employee(code_empl){
        for(let code in this.List_Employee){
            if(this.List_Employee[code].code_employee === code_empl){
                return code;
                break;
            }
        }
    }

    // search employee follow code, show info employee
    search_employee(code_emp){
        for(let nv of this.List_Employee){
            if(nv.code_employee === code_emp){
                return nv;
                breack;
            }
        }
    }

    //seach employee follow name employee, show info employee
    search_name_employee(name_emp){
        let list_search = new Company(); //Khai báo danh sách tìm kiếm
        name_emp = name_emp.trim().toUpperCase(); // chuỗi nhập vào đc cắt khoảng trắng 2 đầu và viết hoa
        for(let nv of this.List_Employee){
            let name = nv.name_employee.trim().toUpperCase(); // chuyển chuỗi trong array thành chữ hoa và ko có khoảng cách 2 đầu
            if(name.search(name_emp) !== -1){ //nếu search có giá trị # -1
                list_search.List_Employee = [...list_search.List_Employee, nv]; // tạo mảng kết quả tìm kiếm
            }
        }
        return list_search; //xuất ra giá trị
    }

    // delete employee
    delete_employee(manv){
        let vitri = this.search_index_employee(manv);
        this.List_Employee.splice(vitri, 1);
    }

    //edit employee
    edit_employee(edit_code){
        let edit_code = this.search_index_employee(edit_code.code_employee);
        this.List_Employee[vitri] = edit_code;
    }



}