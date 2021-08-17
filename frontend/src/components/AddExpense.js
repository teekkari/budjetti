import React from 'react';
import axios from 'axios';

import './AddExpense.css';

class AddExpense extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: '0',
            isIncome: false,
        };

    }

    handleAmountChange = (event) => {
        this.setState({
            amount: event.target.value
        })
    }

    handleIncomeCheckboxChange = (event) => {
        this.setState({
            isIncome: event.target.checked
        });
    }

    handleSubmit = (event) => {
        const payload = {};

        const sign = this.state.isIncome ? '+' : '-';
        payload.amount = sign + this.state.amount;

        axios.post("http://localhost:1337/add", payload).then( (res) => {
            console.log(res);
        }).catch( (err) => {
            alert(err);
        });
    }

    render() {
        return (
            <form className="add-expense" onSubmit={this.handleSubmit}>
                <label>Amount: 
                    <input type="number" value={this.state.amount} onChange={this.handleAmountChange} step="0.01" />
                </label>

                <br/>

                <label>
                    Income
                    <input type="checkbox" onChange={this.handleIncomeCheckboxChange} />
                </label>

                <br/>

                <input type="submit" />
            </form>
        );
    }
}

export default AddExpense;