import React, { Component } from 'react'

export class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todo: [],
            input: ""
        }
    }
    changeHandler = (e) => {
        // console.log(e.target )
        this.setState({
            input: e.target.value
        })

    }
    addItem = () => {
        if(this.state.input!=='')
        this.setState({
            todo: this.state.todo.concat(this.state.input),
            input: ""
        })

    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.addItem()
    }
    markDone=(event)=>{
        console.log(event.target.id)
        const array=this.state.todo
        array.splice(event.target.id,1);
        this.setState({
            todo:array
        })
    }
    render() {
        const list = this.state.todo.map(
            (item, index) =>
                 <li key={index}>
                     {item }
                     <button id={index}onClick={this.markDone}>  Done</button>
                </li>
            )
        // if(list.size()===0)
        return (

            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.input} onChange={this.changeHandler} />
                    {/* <button onClick={this.addItem}>Add Item</button> */}
                    <input type="submit" value="AddItem" />
                </form>
                {list.length === 0 ? 'well done!! nothing to do enjoy!!' : <ul>{list}</ul>}

            </div>
        )
    }
}

export default Todo
