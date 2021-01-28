import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow = () => {
        if(this.props.permission === 1) return "Admin"
        if(this.props.permission === 2) return "Moderator"
        if(this.props.permission === 3) return "Normal user"
    }
    editClick = () => {
      this.props.editFunClick();
      this.props.changeEditUserStatus();
    }
    deteleButtonClick = (idUser) => {
      this.props.detelaButtonClick(idUser);
    }
    render() {
        return (
            <tr>
            <td>{this.props.stt}</td>
            <td>{this.props.userName}</td>
            <td>{this.props.phone}</td>
            <td>{this.permissionShow()}</td>
            <td>
              <div className="btn-group">
                <div className="btn btn-warning sua">
                  <i onClick={() =>this.editClick()} className="fa fa-edit">Sua</i>
                </div>
                <div className="btn btn-danger xoa" onClick={(idUser) => this.deteleButtonClick(this.props.id)}>
                  <i className="fa fa-delete">Xoa</i>
                </div>
              </div>
            </td>
          </tr>
        );
    }
}

export default TableDataRow;