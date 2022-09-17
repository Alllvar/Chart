import './index.scss'

const TableHead = ({ columns, tableData }) => {
    const handleSort = (accessor) => {
        tableData.sort((a, b) => {
            if (a[accessor] < b[accessor]) {
                return -1;
            }
            if (a[accessor] > b[accessor]) {
                return 1;
            }
            return 0;
        })
    }


    return (
        <thead>
            <tr>
                {columns.map(({ label, accessor }) => {
                    return <th onClick={() => handleSort(accessor)} key={accessor}>{label}</th>;
                })}
            </tr>
        </thead>
    );
};

export default TableHead;