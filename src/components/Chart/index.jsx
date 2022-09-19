import React, { useMemo, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { DAYS_IN_MONTH,
    DAYS_IN_WEEK,
    DAYS_IN_YEAR,
    getFormattedDate,
    getPastDate
} from '../../helper';
import Stats from '../Stats';
import './index.scss'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: false,
        title: {
            display: true,
            text: 'Revenue',
        },
    },
    datasets: {
        line: {
            pointRadius: 0,
        }
    }
};

const PERIOD_OPTIONS = [
    { value: 'week', label: 'Week', daysCount: DAYS_IN_WEEK },
    { value: 'month', label: 'Month', daysCount: DAYS_IN_MONTH },
    { value: 'year', label: 'Year', daysCount: DAYS_IN_YEAR },
]

const DATASETS_OPTIONS = {
    fill: true,
    label: "Revenue",
    borderColor: 'rgb(53, 162, 235)',
    backgroundColor: 'rgba(53, 162, 235, 0.5)',
    tension: 0.5,

}

export function BarChart({ rawData }) {
    const [periodValue, setPeriodValue] = useState(PERIOD_OPTIONS[0])
    const onChangeValue = (event) => setPeriodValue(PERIOD_OPTIONS.find(o => o.value === event.target.value))

    const { chartData, stats } = useMemo(() => {
        const lastDate = rawData.at(-1)?.date
        const pastDate = getPastDate(lastDate, periodValue.daysCount)

        const relevantData = rawData.filter(item => new Date(item.date) > pastDate)
        const chartData = {
            labels: relevantData.map(el => getFormattedDate(el.date)),
            datasets: [
                {
                    data: relevantData.map(el => el.curency),
                    ...DATASETS_OPTIONS
                }
            ],
        }

        const { min, max, total } = relevantData.reduce(
            (acc, { curency }) => ({
                min: Math.min(acc.min, curency),
                max: Math.max(acc.max, curency),
                total: acc.total + curency,
            }),
            { min: Infinity, max: -Infinity, total: 0 },
        )
        const stats = { min, max, total, avg: total / relevantData.length }

        return { chartData, stats }
    }, [rawData, periodValue]);

    return (
        <div>
            <form className="form">
                {PERIOD_OPTIONS.map(option => (
                    <label className='radio-toolbar' key={option.value}>
                        <input
                            type="radio"
                            value={option.value}
                            checked={periodValue.value === option.value}
                            onChange={onChangeValue}
                        />
                        {option.label}
                    </label>
                ))}
            </form>
            <Line options={options} data={chartData} className="chart" />
            <Stats stats={stats} />
        </div>
    )
}
