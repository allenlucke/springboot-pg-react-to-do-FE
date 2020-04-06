import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './App.css';
import moment from 'moment';
//React-Router
// import { HashRouter as Router, Route } from 'react-router-dom';
//Material UI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// import './../../images/AW_RGB_Small';

class App extends Component {

  // Renders the entire app on the DOM
  componentDidMount() {
    this.props.dispatch({
        type: 'GET_TODOS'
    })
  }
  // changeField = (event, infoKey) => {
  //   this.setState({
  //     [infoKey]: event.target.value
  //   });
  // };



  render() {
    const toDoList = this.props.store.getToDosReducer.map((item, index) => {
      return(
          <TableBody key={index}>
              <TableRow>

                  <TableCell>{item.task}</TableCell>
                  <TableCell>{item.completed}</TableCell>

              </TableRow>
          </TableBody>
      )
  })
    console.log(toDoList)
    return (
      <div className="App">
        <h1>Java To-Do-List</h1>

          <Table>
              <TableHead className="tableHead">
                  <TableRow>
                      <TableCell>Task</TableCell>
                      <TableCell>Completed</TableCell>
                  </TableRow>
              </TableHead>
                  {toDoList}
          </Table>
        <div>

        </div>

      </div>
    );
  }
}
export default connect(mapStoreToProps)(App);
