import React from 'react';
import './index.scss'

export default function Stats ({ stats }) {
    return (
        <div className="stats-container">
            <div className="total-container">
                <span className="stats-category">Total</span>
                <span className="total-value">$ {stats.total}</span>
            </div>
            <div className="stats-container">
                <span className="stats-wrap">
                    <span className="stats-category">Min</span>
                    <span className="value">$ {stats.min}</span>
                </span>
                <span className="stats-wrap">
                        <span className="stats-category">Medium</span>
                        <span className="value">$ {stats.avg.toFixed(2)}</span>
                    </span>
                <span className="stats-wrap">
                    <span className="stats-category">Max</span>
                    <span className="value">$ {stats.max}</span>
                </span>
            </div>
        </div>
    )
}