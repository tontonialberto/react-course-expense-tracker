import './ExpenseItem.css';

/**
 * 
 * @param {Object} props
 * @param {Date} props.date
 * @param {string} props.title
 * @param {number} props.priceUSD 
 */
function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <div>{props.date.toUTCString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.priceUSD}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;