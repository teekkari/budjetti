import React from 'react';
import axios from 'axios';

import './AddExpense.css';

class AddExpense extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            amount: 0,
        };

    }

    handleChange = (event) => {
        this.setState({
            amount: event.target.value
        })
    }

    handleSubmit = (event) => {

    }

    render() {
        return (
            <form class="add-expense" onSubmit={this.handleSubmit}>
                <label>Amount: 
                    <input type="number" value={this.state.amount} onChange={this.handleChange} />
                </label>


                <label>
                    <input type="checkbox" />
                </label>


                <input type="submit" />
            </form>
        );
    }
}

export default AddExpense;