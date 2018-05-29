import React, {Component} from 'react';
import Itemlist from './Item-list';
class List extends Component{
    render(){
        return(
            <div className="col-sm-12 col-xs-12 table-responsive tb-product-list">
                <table className="table table-bordered table-hover column-table">
                <thead>
                    <tr>
                    <th>STT</th>
                    <th>Hình đại diện</th>
                    <th>Mã sản phẩm</th>
                    <th>Thông tin sản phẩm</th>
                    <th>Thương hiệu</th>
                    <th>Giá bán(VNĐ)</th>
                    <th>Trạng thái</th>
                    <th>TÌnh trạng</th>
                    <th>Số lượng</th>
                    <th>Ngày tạo</th>
                    <th>Lần update cuối</th>
                    </tr>
                </thead>
                <tbody>
                    <Itemlist></Itemlist>
                    <Itemlist></Itemlist>
                    <Itemlist></Itemlist>
                    <Itemlist></Itemlist>
                </tbody>
                </table>
            </div>
        );
    }
}
export default List;