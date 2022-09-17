import React from 'react';
import TableBody from '../TableBody';
import TableHead from '../TableHead';
import './index.scss'

export function Table ({ tableData }) {
    const columns = [
        { label: 'Name', accessor: 'name' },
        { label: 'Date', accessor: 'date' },
        { label: 'State', accessor: 'isActive' },
    ];

    return (
        <>
            <table className='table'>
                <TableHead
                    columns={columns}
                    tableData={tableData}
                />
                <TableBody
                    columns={columns}
                    tableData={tableData}
                />
            </table>
        </>
    );
};

