import React, {Component} from 'react';
class Search extends Component {
    render() {
        return(
            <div className="col-sm-12 col-xs-12">
            <form className="formy">
                <span className="span-asb">Tìm kiếm</span>
                <div className="col-sm-4 col-xs-12">
                <div className='form-group'>
                    <select className="form-control" name="category">
                    <option value="0">--- Chọn danh mục ---</option>
                        <option className="level-1">Sản phẩm A</option>
                        <option className="level-1">Sản phẩm B</option>
                    </select>
                </div>
                </div>
                <div className="col-sm-4 col-xs-12">
                <div className='form-group'>
                    <select className="form-control" name="status">
                    <option value="">--- Chọn trạng thái ---</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    </select>
                </div>
                </div>
                <div className="col-sm-4 col-xs-12">
                <div className="form-group">
                    <select className="form-control" name="active">
                    <option value="">--- Chọn tình trạng ---</option>
                    <option value="">gg 1</option>
                    <option value="">gdeg 2</option>
                    </select>
                </div>
                </div>
                <div className="col-sm-4 col-xs-6">
                <div className="form-group">
                    <input type="text" name="name" className="form-control" placeholder="Tên sản phẩm" />
                </div>
                </div>
                <div className="col-sm-4 col-xs-6">
                <div className='form-group'>
                    <input type="text" name="code" className="form-control" placeholder="Mã sản phẩm" />
                </div>
                </div>
                <div className="col-sm-2 col-md-3 col-xs-6">
                <div className="form-group">
                    <input type="text" placeholder="Ngày" name="inputDate" id="inputDate" className="form-control active" />
                </div>
                </div>
                <div className="col-sm-2 col-md-1 col-xs-6">
                <button className="btn btn-primary widht100">Tìm</button>
                </div>
            </form>
            </div>
        );
    }
}
export default Search;