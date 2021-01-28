import React, { Component } from 'react';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state={
      id:'',
      name:'',
      phone:'',
      permission:''
    }
  }
  
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]:value
    });
    let item = {}
    item.id = this.state.id;
    item.name = this.state.name;
    item.phone = this.state.phone;
    item.permission = this.state.permission;
  }
    kiemTraTrangThai = () => {
        if(this.props.hienThiForm === true){
            return (
              <div className="col"> 
                <div className="card">
                  <form>
                <div className="card border-primary mb-3" style={{maxWidth: '18rem'}}>
                  <div className="card-header">Them moi</div>
                  <div className="card-body text-primary">
                    <div className="form-group">
                      <input onChange={(event) => this.isChange(event)} type="text" name="name" className="form-control" placeholder="Ten User"/>
                    </div>
                    <div className="form-group">
                      <input onChange={(event) => this.isChange(event)} type="text" name="phone" className="form-control" placeholder="Dien thoai"/>
                    </div>
                    <div className="form-group">
                      <div className="form-group">
                        <select onChange={(event) => this.isChange(event)} className="custom-select" name="permission" required>
                          <option value>Chon quyen mac dinh</option>
                          <option value={1}>Admin</option>
                          <option value={2}>Modrator</option>
                          <option value={3}>Normal</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <input type="reset" onClick={(name, phone, permission) => this.props.Add(this.state.name, this.state.phone, this.state.permission)} className="btn btn-block btn-primary" value="Them moi"></input>
                      </div>
                    </div>
                  </div>
                </div>
                </form>
              </div>
              </div>
            )
        }
    }

    render() {
        return (
        <div>
            {this.kiemTraTrangThai()}
        </div>
        );
    }
}

export default AddUser;