import React, {Component} from 'react';

class Itemlist extends Component {
    render(){
        return(
            <tr>
                <td>1</td>
                <td>hình</td>
                <td>142MK</td>
                <td>
                    <p>Điện thoại acd</p>
                    <p>thietbi/dungcu/dien-thoai-acd</p>
                </td>
                <td>Samsung</td>
                <td>100000đ</td>
                <td><span className="badge badge-primary">Đã duyệt</span></td>
                <td>
                    <div className="toggle-button toggle-button--aava">
                    <input id="toggleButton" type="checkbox" />
                    <label htmlFor="toggleButton" data-on-text="On" data-off-text="Off"></label>
                    <div className="toggle-button__icon"></div>
                    </div>
                </td>
                <td>10</td>
                <td>10/4/2018 10:10</td>
                <td>10/4/2018 10:20</td>
            </tr>
        );
    }
}
export default Itemlist;