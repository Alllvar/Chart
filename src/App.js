import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListPage from './components/ListPage';
import ChartPage from './components/ChartPage';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListPage />} />
                <Route path="/item/:id" element={<ChartPage />} />
            </Routes>
        </BrowserRouter>
    );
}