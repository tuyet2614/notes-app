import React from "react";
import { toast } from 'react-toastify';



class AddTodo extends React.Component {

    dates = new Date();
    state = {
        title: '',
        date : this.dates.toLocaleDateString()

    }
    charLimit = 300
    noteText = ''
    handleChange = (e) => {
        if(this.charLimit - e.target.value.length >= 0){
            this.setState({
                title: e.target.value
            })
        }
        
    }
    handleSaveClick = () => {
        if (!this.state.title ){
            
            toast.error('Missing the todo')
            return
        }
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title,
            date: this.state.date
            
        }
        this.props.addNewTodo(todo)
        
        this.setState({
            title: ''
            
        })
        console.log('done')
    }
    handleEditTodo = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    render() {
        let title = this.state.title
        return(
            <div className="list-todo-child new">
                <textarea  cols="10" rows="8" placeholder="Type to add a new note..." value={title}
                onChange={(e) => this.handleChange(e)} onClick={(e) => this.handleEditTodo()}
                ></textarea>
                <div className="note-footer">
                    <small>{this.charLimit - this.state.title.length} Remaining</small>
                    <button className="save" onClick={() => this.handleSaveClick()}>Save</button>
                </div>
            </div>
        )
        
    }
}

export default AddTodo