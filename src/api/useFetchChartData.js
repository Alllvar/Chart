import { useEffect, useState } from 'react';
import { normalizeDataPoint } from '../helper';

export const useFetchChartData = (itemId) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(
        () => {
            if (!itemId) return
            const fetchData = async () => {
                try {
                    const response = await fetch(
                        `https://oril-coins-test.herokuapp.com/item/${itemId}`
                    );
                    if (!response.ok) {
                        throw new Error(
                            `This is an HTTP error: The status is ${response.status}`
                        );
                    }
                    const { data } = await response.json();
                    const sortedData = data
                        .sort((a, b) => {
                            if (a.date < b.date) return -1
                            if (a.date > b.date) return 1
                            return 0
                        })
                        .map(normalizeDataPoint);

                    setData(sortedData);
                } finally {
                    setIsLoading(false);
                }
            }

            fetchData()
        }, [itemId]
    );

    return { data, isLoading };
};


