import React, { Component } from 'react';
​
const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}
​
const TableBody = (props) => { 
    return (
        <tbody>
{props.zerrin.map((done,gul)=>{
  return (
    <tr key={gul}>
            <td>{done.name}</td>
            <td>{done.job}</td>
          </tr>
  )
  })}
​
        </tbody>
      )
}
​
class Table extends Component {
  render() {
  const maysa = this.props.users;
  console.log(maysa);
        return (
        <table>
          <TableHeader />
          <TableBody zerrin={maysa} />
        </table>
      )
    }
  }
​
export default Table;