import BudgetTable from "./BudgetTable/BudgetTable";

const App = () => {
  const currentAmountTable = [
    {name: 'Bank balance', amount: 2300},
    {name: 'Cash', amount: 1300},
  ];

  return (
    <div className="App" >
      <BudgetTable tableTitle="Current Amount" tableData={currentAmountTable} shouldShowTotal={true} />
    </div>
  );
}

export default App;
