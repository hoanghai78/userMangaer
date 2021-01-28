import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            phone: this.props.userEditObject.phone,
            permission: this.props.userEditObject.permission
            
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    saveButton = () => {
        let info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.phone = this.state.phone;
        info.permission = this.state.permission;

        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus();
    }
    render() {
        return (
            <div className="col"> 
            <div className="card">
              <form method="post">
            <div className="card border-primary mb-3">
              <div className="card-header text-center">Sua doi user</div>
              <div className="card-body text-primary">
                <div className="form-group">
                  <input type="text" onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.name} name="name" className="form-control"/>
                </div>
                <div className="form-group">
                  <input type="text" onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.phone} name="phone" className="form-control"/>
                </div>
                <div className="form-group">
                  <div className="form-group">
                    <select onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.permission} className="custom-select" name="permission" required>
                      <option value>Chon quyen mac dinh</option>
                      <option value={1}>Admin</option>
                      <option value={2}>Modrator</option>
                      <option value={3}>Normal</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input type="button" onClick={() => this.saveButton()} type="reset" className="btn btn-block btn-primary" value="Luu"></input>
                  </div>
                </div>
              </div>
            </div>
            </form>
          </div>
          </div>
        );
    }
}

export default EditUser;