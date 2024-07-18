import { useEffect, useState } from 'react';

interface Props {
    url: string;
}

const UseFetchData = ({ url }: Props) => {
    const [data, setData] = useState<any>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<unknown>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok)
                    throw new Error(`HTTP error! status${response.status}`);
                const result = await response.json();
                console.log(result);

                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        const intervalId = setInterval(fetchData, 5000);

        return () => clearInterval(intervalId);
    }, [url]);

    return { data, error, loading };
};

export default UseFetchData;
