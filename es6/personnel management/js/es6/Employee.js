class Employee{
    constructor(code_employee, name_employee,email_employee, pass_employee, date_start, position_employee){
        this.code_employee = code_employee;
        this.name_employee = name_employee;
        this.email_employee = email_employee;
        this.pass_employee = pass_employee;
        this.date_start = date_start;
        this.position_employee = position_employee;

        this.compare_employee = [this.code_employee, this.name_employee, this.email_employee, this.date_start, this.position_employee]; // dont compare passwork
    }
}