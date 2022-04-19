import React from "react";
import './Noteslist.css'
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';
import {MdDeleteForever, MdEdit, MdSave, MdSearch} from 'react-icons/md'
import Search from "./Search";
class Notelist extends React.Component {
    dates = new Date();
    state = {
        listTodo: [
            {id: 'todo1', title: 'Doing homeword', date: '4/13/2022'},
            {id: 'todo2', title: 'code', date: '4/13/2022'},
            {id: 'todo3', title: 'play video', date: '4/13/2022'},
        ],
        editTodo: {

        },
        filterTodo: {...this.listTodo},
        handleSearchTodo: false
    }

    addNewTodo = (todo) => {
        
        this.setState ({
            handleSearchTodo: false,
            listTodo: [...this.state.listTodo, todo]
        })
        toast.success('Successfully')
    }

    handleDelete = (todo) => {
        let currentTodo = this.state.listTodo;
        currentTodo = currentTodo.filter(item => item.id !== todo.id)
        this.setState({
            listTodo : currentTodo
        })
        toast.success("Delete success!!")
    }

    handleEdit = (todo) => {
        let {editTodo, listTodo} = this.state
        let isEmpty = Object.keys(editTodo).length === 0
        if(isEmpty === false && editTodo.id === todo.id) {
            let listTodoCopy = [...listTodo];
            let objIndex = listTodoCopy.findIndex((item => item.id === todo.id))
            listTodoCopy[objIndex].title = editTodo.title
            this.setState({
                listTodo: listTodoCopy,
                editTodo: {}
            })
            toast.success("Update todo successed")
            return
        }

        this.setState({
            editTodo: todo
        })
    }
    handleOnChangeTodo = (todo) => {
        let editTodoCopy = {...this.state.editTodo}
        editTodoCopy.title = todo.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }

    handleSeach = (todo) => {
        
        let todoTitle = todo.target.value
        let currentTodo = this.state.listTodo;
        let listTodoCopy = []
        {
            todoTitle === '' ? listTodoCopy = currentTodo : listTodoCopy = currentTodo.filter(item => item.title.toLowerCase().includes(todoTitle))
        }
        
        
        this.setState({
            filterTodo: listTodoCopy,
            handleSearchTodo: true
        })
        

    }

    render() {
        let {listTodo, editTodo, filterTodo, handleSearchTodo} = this.state;
        let todos = []
        
        {handleSearchTodo === false ? todos = listTodo : todos = filterTodo}
        
        let isEmpty = Object.keys(editTodo).length === 0
        return (
            <>
                <div className="search">
                    <MdSearch className="search-icon" size="1.4em" />
                    <input type="text" placeholder="Search for your notes..." onChange={(e) => this.handleSeach(e)}/>
                </div>
                <div className="list-todo-container">
                    
                    {todos && todos.length > 0 && todos.map((item,index) => {
                        return (
                            <div className="list-todo-child" key={item.id}>
                                
                                {isEmpty === true ?
                                    
                                        <span>{item.title}</span>
                                        :
                                        <>
                                            {
                                                editTodo.id === item.id ? 
                                                    <span><input value={editTodo.title} onChange={(e) => this.handleOnChangeTodo(e)}/></span>
                                                    :
                                                    <span>{item.title}</span>
                                            }
                                        </>
                                }
                                        <div className="note-footer">
                                            <small>{item.date}</small>

                                            <button onClick={() => this.handleEdit(item)} className="icon">
                                                {isEmpty === false && editTodo.id === item.id ? <MdSave />:<MdEdit />}
                                            </button>
                                            <MdDeleteForever onClick={()=>this.handleDelete(item)} className="icon" size="1.3em" />
                                        </div>
                            </div>
                                
                        )
                            
                    })}
                    
                    <AddTodo addNewTodo = {this.addNewTodo}/>
                </div>
            
            </>
        )
    }
}

export default Notelist