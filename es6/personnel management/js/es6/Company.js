class Company{
    constructor(){
        this.List_Employee = new Array();
    }
    // add employee
    addEmployee(item){
        this.List_Employee = [...this.List_Employee, item];
    }

    //search vị trí code employee trong array
    search_index_employee(code_empl){
        for(let code in this.List_Employee){
            if(this.List_Employee[code].code_employee === code_empl){
                return code;
                break;
            }
        }
    }

    // search employee with code, show name employee
    search_name_employee(code_emp){
        for(let nv of this.List_Employee){
            if(nv.code_employee === code_emp){
                return nv.name_employee;
                breack;
            }
        }
    }

    // delete employee
    delete_employee(manv){
        let vitri = this.search_index_employee(manv);
        this.List_Employee.splice(vitri, 1);
    }

    //edit employee
    edit_employee(manv){
        let vitri = this.search_index_employee(manv);
        this.List_Employee[vitri]=manv;
    }
}