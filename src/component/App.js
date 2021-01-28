import React, { Component } from 'react'
import './../App.css';
import AddUser from './AddUser';
import Header from './Header'
import SearchForm from './SearchForm';
import TableData from './TableData';
import DataUser from './Data.json'
import { v1 as uuidv1 } from 'uuid';
class App extends Component {
  constructor(props) {
    super(props);
      this.state={
        hienThiForm: true,
        data: [],
        searchText: '',
        editUserStatus:false,
        userEditObject: {}
      }
  }
  
  componentWillMount() {
    // kiem tra xem co localStore chua
    if(console.log(localStorage.getItem('userData') === null )){
      localStorage.getItem('userData', JSON.stringify(DataUser))
    } else{
      let temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data: temp
      });
    }
  }
  
  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    })
  }
  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    });
  }
  getUserNewData = (name, phone, permission) => {
    let item ={};
    item.id = uuidv1();
    item.name = name;
    item.phone = phone;
    item.permission = permission;
    let items = this.state.data;
    items.push(item)
    console.log(items);
    this.setState({
      data:items
    });
    localStorage.setItem('userData', JSON.stringify(items))
  }
  editUser = (user) => {  
    this.setState({
      userEditObject: user
    });
  }
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }
  getUserEditInfoApp = (info) => {
    console.log("thong tin sua "+info.name);
    this.state.data.forEach((value, key) => {
      if(value.id === info.id){
        value.name = info.name;
        value.phone = info.phone;
        value.permission = info.permission;
      }
    })
    localStorage.setItem('userData', JSON.stringify(this.state.data))
  }
  detelaButtonClick = (idUser) => {
    let tempData = this.state.data;
    tempData = tempData.filter(item => item.id !== idUser)
    this.setState({
      data: tempData
    });
    localStorage.setItem('userData', JSON.stringify(tempData))
  }
  render () {
    // localStorage.setItem("userData",JSON.stringify(DataUser))
    let ketQua = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1){
        ketQua.push(item);
      }
    })
     return (
       <div>
         <Header/>
         <div className="searchForm">
                <div className="container">
                    <div className="row">
                        <SearchForm getUserEditInfoApp = {(info) => this.getUserEditInfoApp(info)}
                        userEditObject={this.state.userEditObject}
                        editUserStatus={this.state.editUserStatus}
                        changeEditUserStatus = {() => this.changeEditUserStatus()}
                        checkKetNoiProps={(dl) => this.getTextSearch(dl)}
                        ketNoi={()=>this.doiTrangThai()} hienThiForm={this.state.hienThiForm}/>

                        <TableData detelaButtonClick = {(idUser) => this.detelaButtonClick(idUser)}
                        changeEditUserStatus = {() => this.changeEditUserStatus()}
                        dataUserProps={ketQua} editFun ={(user) => this.editUser(user)}/>

                        <AddUser Add={(name, phone, permission)=> this.getUserNewData(name, phone, permission)} hienThiForm={this.state.hienThiForm}/>
                    </div>
                </div>
            </div>
       </div>
     )
   }  
 }

export default App;
