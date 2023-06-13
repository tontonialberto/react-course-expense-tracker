export type ExpenseAddQuery = {
    title: string;
    amount: number;
    date: Date;
};

export type OnExpenseDataHandler = (expense: ExpenseAddQuery) => void;

export type OnExpenseFilterChangeHandler = (year: number) => void;