import React, { Component } from 'react'
import { Input,Button,List  } from 'antd';
import store from './store'
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = store.getState()
        //console.log(store.getState())
        store.subscribe(this.handleStoreChange)//监听store数据变化
    }
    onhchange =(e)=>{
        //创建action
        const action = {
            type:'change_input_value',
            value:e.target.value
        }
        //把action通过dispatch传给store
        store.dispatch(action)
        //console.log(e.target.value)
    }
    handleStoreChange =()=>{
        this.setState(store.getState())
    }
    handleBtnClick =()=>{
        //创建action
        const action = {
            type:'add_todo_item'
        }
        //把action通过dispatch传给store
        store.dispatch(action)
    }
    render() {
        return (
            <div>
                <div>
                    <Input placeholder="Basic usage" value={this.state.inputValue} style={{width:"300px"}} onChange={this.onhchange}/>
                    <Button type="primary" onClick = {this.handleBtnClick}>Primary</Button>
                </div>
                <List
                    size="small"
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
            </div>
        )
    }
}

export default TodoList
