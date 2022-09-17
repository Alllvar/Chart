import { Link } from 'react-router-dom';
import { getFormattedDate, isBoolean, stateStyles } from '../../helper';
import './index.scss'

const TableBody = ({ tableData, columns }) => {
 return (
  <tbody>
   {tableData.map((item) => {
     return (
       <Link key={item.id} className="list-element-link" to={`/item/${item.id}`}>
        {columns.map(({ accessor }) => {

         item.date = getFormattedDate(new Date(item.date))

          const tData = item[accessor] || item[accessor] === false
              ? isBoolean(item, accessor)
              : "——";

          return <td key={accessor} className={stateStyles(tData)}>{tData}</td>;
        })}
    </Link>
   );
   })}
  </tbody>
 );
};

export default TableBody;