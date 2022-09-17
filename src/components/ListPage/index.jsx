import React, { useMemo, useState } from 'react';
import { SearchBar } from '../SearchBar';
import { Table } from '../Table';
import { useFetchList } from '../../api/useFetchList';
import { isSubstring } from '../../helper';
import './index.scss'

export default function ListPage () {
    const [query, setQuery] = useState('');
    const { data, isLoading } = useFetchList()

    const filteredData = useMemo(() => data.filter(dataPoint => isSubstring(dataPoint.name, query)), [data])

    if (isLoading) {
        return <div className="loading">Loading...</div>
    }

    if (!data) {
        return <div className="loading">Failed to load data</div>
    }

    return (
        <div className="list-container">
            <SearchBar setQuery={setQuery} />
            <Table tableData={filteredData}/>
        </div>
    )
}