import { useEffect, useState } from 'react';

export const useFetchList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            const getData = async () => {
                try {
                    const response = await fetch(
                        'https://oril-coins-test.herokuapp.com/list'
                    );
                    if (!response.ok) {
                        throw new Error(
                            `This is an HTTP error: The status is ${response.status}`
                        );
                    }
                    const data = await response.json();
                    setData(data);
                } finally {
                    setLoading(false);
                }
            }

            getData()
        },
        []
    );

    return { data, loading };
};


