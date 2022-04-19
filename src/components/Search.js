import React from "react";
import {MdSearch} from "react-icons/md"

class Search extends React.Component {
    // state = {
    //     search:''
    // }
    // handleSeachTodo = (e) => {
    //     let search = e.target.value
    //     let currentTodo = this.state.listTodo;
    //     currentTodo = currentTodo.filter(item => item.title === e.toLowerCase().includes(search))
    //     let todo = {

    //     }
    //     this.props.handleSeach(currentTodo)
    //     // this.setState(
    //     //     {
    //     //         search: e.target.value
    //     //     }
            
    //     // )
    //     console.log(e.target.value)

    
    render() {
        return (
            <div className="search">
                <MdSearch className="search-icon" size="1.4em" />
                <input type="text" placeholder="Search for your notes..."/>
            </div>
        )
    }
}

export default Search