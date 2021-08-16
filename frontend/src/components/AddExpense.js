import React from 'react';
import axios from 'axios';

import './AddExpense.css';

class AddExpense extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: '0',
        };

    }

    handleChange = (event) => {
        this.setState({
            amount: event.target.value
        })
    }

    handleSubmit = (event) => {
        const payload = {};

        payload.amount = this.state.amount;
        
        axios.post("http://localhost:1337/add", payload).then( (res) => {
            console.log(res);
        }).catch( (err) => {
            alert(err);
        });
    }

    render() {
        return (
            <form class="add-expense" onSubmit={this.handleSubmit}>
                <label>Amount: 
                    <input type="number" value={this.state.amount} onChange={this.handleChange} step="0.01" />
                </label>

                <br/>

                <label>
                    Income
                    <input type="checkbox" />
                </label>

                <br/>

                <input type="submit" />
            </form>
        );
    }
}

export default AddExpense;