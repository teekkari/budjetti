import React from 'react';

class Expense extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            amount: props.amount
        };
    }

    render() {
        return (
        <div className="expense-item">
            <span className="expense-item-amount">{this.state.amount}</span>
            <span className="expense-item-actions">
                <button>Remove</button>
                <button>Edit</button>
            </span>
        </div>
        );
    }

}

export default Expense;