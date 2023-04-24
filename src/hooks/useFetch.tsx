import React from 'react';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { api } from '../container/commas';

const useAxios = (axiosParams: AxiosRequestConfig) => {
    const [response, setResponse] = React.useState<AxiosResponse>();
    const [error, setError] = React.useState<AxiosError>();
    const [loading, setLoading] = React.useState<boolean>(false);

    const fetchData = async (params: AxiosRequestConfig) => {
        try {
            setLoading(true);
            const result = await api.request(params);
            setResponse(result);
        } catch (error) {
            setLoading(true);
            setError(error as AxiosError);
        } finally {
            setLoading(false);
        }
    };

    const sendData = () => {
        fetchData(axiosParams);
    }

    React.useEffect(() => {
        if (axiosParams.method === "GET" || axiosParams.method === "get") {
            fetchData(axiosParams);
        };
    }, [axiosParams]);

    return { response, error, loading, sendData };
    /* replace the previous return statement with this */
};

export default useAxios;