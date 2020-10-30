import React,{Component} from 'react';
import './App.css';
import axios from 'axios';
import {Icon, Header, HeaderContent, List} from "semantic-ui-react";

class App extends Component {
  state = {
    values : []
  }

  componentDidMount() {
    axios.get('https://localhost:5010/Productos')
        .then((response)=>{
          this.setState({
            values : response.data
          });
        });
  }

  render(){
    return (
        <div>
            <Header as='h2'>
                <Icon name='users'/>
                <HeaderContent>Productos</HeaderContent>
            </Header>
            <List>
                {this.state.values.map((value : any) => (
                    <List.Item key={value.idProducto}>{value.nombreProducto}</List.Item>
                ))}
            </List>
        </div>
    );
  }
}

export default App;
