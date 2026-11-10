import ExpensesFilter from "./ExpensesFIlter";
import ExpenseItem from "./ExpenseItem";
import { useState } from "react";

export default function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    function handleFilterChange(selectedYear) {
        setFilteredYear(selectedYear);
    }
    
    return (
        <div>
            <ExpensesFilter handleFilterChange={handleFilterChange}></ExpensesFilter>
            <h1>Expenses</h1>
            <ExpenseItem 
                title = {props.items[0].title}>
                amount = {props.items[0].amount}
                date = {props.items[0].date}
            </ExpenseItem>
            <ExpenseItem 
                title = {props.items[1].title}>
                amount = {props.items[1].amount}
                date = {props.items[1].date}
            </ExpenseItem>
        </div>
    );
}