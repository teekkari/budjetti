import React from 'react';
import axios from 'axios';

import Expense from './Expense.js';

import './ExpenseList.css';

class ExpenseList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expenses: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:1337/list').then((res) => {
            console.log(res);
            this.setState({ expenses: res.data });
        }).catch((err)=> {
            alert(err);
        })
    }

    renderExpenses() {
        const output = [];

        this.state.expenses.forEach( (value, index) => {
            var sign = "";
            if (value.amount >= 0) sign = "+";

            output.push(
                <Expense key={value.id} id={value.id} amount={value.amount} />
            );
        })

        return output;
    }

    render() {
        return <div className="expense-list">
            {this.renderExpenses()}
        </div>;
    }
}

export default ExpenseList;