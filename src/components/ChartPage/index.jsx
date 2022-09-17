import React from 'react';
import { useFetchChartData } from '../../api/useFetchChartData';
import { BarChart } from '../Chart';
import { useParams } from "react-router-dom";

export default function ChartPage () {
    const urlParams = useParams()
    const { data } = useFetchChartData(urlParams.id)
    return (
        <div className="chart-container">
            <BarChart rawData={data} />
        </div>
    )
}