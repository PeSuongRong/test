class company{
    constructor(){
        this.list_eml = [];
    }
    addEml(Eml){
        this.list_eml = [...this.list_eml, Eml];
    }
    search_index_empl(id_e){
        for(let id_empl in this.list_eml){
            for(let j = 0; j < this.list_eml.length; j++){
                if(this.list_eml[id_empl][j] === id_e){
                 return id_empl;
                }
            }
        }
    }
    search_array_eml(id_e){
        for(let id_empl of this.list_eml){
            for(let j = 0; j < this.list_eml.length; j++){
                if(id_empl[j]=== id_e){
                    return id_empl;
                }
            }
        }
    }
    edit_eml(edit_emp){
        let id = edit_emp[0];
        let index_emp = this.search_index_empl(id);
        this.list_eml[index_emp] = edit_emp;
    }
    delete(mnv){
        let index = this.search_index_empl(mnv);
        this.list_eml.splice(index, 1);
    }
    //search name
    search_name(keyword){
        let list_search = new company; // khai báo danh sách tìm kiếm
        let keyUpCase = keyword.trim().toUpperCase(); // cắt khảng trắng 2 đầu, viết hoa
        for(let nv of this.list_eml){
            let name = nv[1].trim().toUpperCase();
            if(name.search(keyUpCase) !== -1){ //search() có giá trị 1 & -1, -1 ko có phần tử cần tìm
                list_search.list_eml = [...list_search.list_eml, nv];
            }
        }
        return list_search;
        }
    }