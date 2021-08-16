import React from 'react';
import axios from 'axios';

class ExpenseList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expenses: [],
        };


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
            var sign = "-";
            if (value.amount >= 0) sign = "+";

            output.push(<div className="expense-item">{sign + value.amount}</div>)
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