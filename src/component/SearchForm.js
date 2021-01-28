import React, { Component } from 'react';
import EditUser from './EditUser';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            temValue: '',
            userObj: {}
        }
    }
    getUserEditInfo = (info) => {
        this.setState({
            userObj: info
        });
        this.props.getUserEditInfoApp(info);
    }
    
    isChange = (event) => {
        console.log(event.target.value);
        this.setState({
            temValue: event.target.value
        })
        this.props.checkKetNoiProps(this.state.temValue)
    }
    hienThiForm = () => {
        if(this.props.hienThiForm === false){
            return (
                <div className="btn btn-block btn-outline-info" onClick={() => this.props.ketNoi()}> Them moi </div>
            )
        }
        else{
            return (
                <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.ketNoi()}> Dong lai </div>
            )
        }
    }
    isShowEditUser = () => {
        if (this.props.editUserStatus === true){
            return <EditUser getUserEditInfo={(info) => this.getUserEditInfo(info)}
            userEditObject = {this.props.userEditObject}
            changeEditUserStatus={() => this.props.changeEditUserStatus()}/>
        }
    }
    render() {
        return (
            <div className="col-12">
                {this.isShowEditUser()}
                <div className="form-group">
                <div className="btn-group">
                    <input onChange = {(event) => this.isChange(event)} type="text" className="form-control" placeholder="TÌm kiếm" style={{width: '500px'}} />
                    <div onClick={(dl) => this.props.checkKetNoiProps(this.state.temValue)} className="btn btn-info" >Tìm </div>
                </div>
                </div>
                <div className="form-group">
                    {this.hienThiForm()}
                </div>
            </div>
      
        );
    }
}

export default SearchForm;