import './ExpenseItem.css';

const ExpenseItem = () => {
    return (
        <div className="expense-item">
            <div>Volks UP 2020</div>
            <div className='expense-item__description'>
                <h2>Car Insurance</h2>
                <div className='expense-item__price'>$200.00</div>
            </div>
        </div>
    );
}

export default ExpenseItem;