import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
  detelaButtonClick = (idUser) => {
    this.props.detelaButtonClick(idUser)
  }

  mappingDataUser = () => this.props.dataUserProps.map((value, key) => (

    <TableDataRow detelaButtonClick = {(idUser) => this.detelaButtonClick(idUser)}
    changeEditUserStatus = {(idUser) => this.props.changeEditUserStatus(idUser)}

    key={key} stt={key+1} id ={value.id} userName={value.name} phone={value.phone} permission={value.permission}
    
    editFunClick={(user)=> this.props.editFun(value)}/>

  ))
    render() {
        return (
      <div className="col">
        <table className="table table-striped table-inverse table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Điện thoại</th>
              <th>Quyền</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
              {this.mappingDataUser()}
          </tbody>
        </table>
      </div>
        );
    }
}

export default TableData;