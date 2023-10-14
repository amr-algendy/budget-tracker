import './BudgetTable.scss';

import { Table } from 'antd';

const BudgetTable = (props) => {
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
  ];

  const dataSource = props.tableData;

  if (props.shouldShowTotal) {
    dataSource.push({
      name: 'Total',
      amount: props.tableData.reduce((acc, curr) => acc + curr.amount, 0),
    });
  }
  
  return (
    <div className='budget-table'>
      <h2>{props.tableTitle}</h2>
      <Table className='budget-table__table' dataSource={dataSource} columns={columns}  pagination={{position: ['none', 'none']}} />
    </div>
  );
}

export default BudgetTable;