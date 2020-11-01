import React from "react";
import './App.css';
import Button from '@material-ui/core/Button';
import Listitems from "./Listitems";


class App extends React.Component{
  constructor(props){
    super(props)
    // current state value
    this.state = {
      items : [],
      currentItem : {
        text : '',
        key : ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItems = this.addItems.bind(this);
    this.deleteItems = this.deleteItems.bind(this);
    this.editItems = this.editItems.bind(this);
  }

  // handleInput function for input
  handleInput(e){
    // update state
    this.setState({
      currentItem : {
        text : e.target.value,
        key : Date.now()
      }
    })
  }

  // AddItems function
  addItems(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !== ""){
        const newItems = [...this.state.items, newItem];
        this.setState({
          items : newItems,
          currentItem : {
            text : '',
            key : ''
          }
        })
    }
  }

  // delete item functionality
  deleteItems(id){
    const filterItem = this.state.items.filter((item) => item.key !== id)

    this.setState({
      items : filterItem
    });
  }

  // edit item functionality
  editItems(value, id){
    const items = this.state.items;
    items.map((item) => {
      
      if(item.key === id){
        item.text = value;
      }
    })

    this.setState({
      items : items
    })
  }
  render(){
    return (
      <>
        <div className="App">
          <header>
            <h3 style={{ color:"#fff",textAlign:"center",padding:"25px" }}>React To-Do-List</h3>
            <form id="todoForm" onSubmit={this.addItems}>
              <input type="text" placeholder="Enter Text" value={this.state.currentItem.text} onChange = {this.handleInput}/>
              <Button variant="contained" color="primary" type="submit"> ADD </Button>
            </form>
          </header>
          <Listitems items = {this.state.items} deleteItem={this.deleteItems} editItem = {this.editItems}/>
        </div>
        
      </>
    )
  }
}



export default App;
