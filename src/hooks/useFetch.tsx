import { useState, useEffect } from 'react';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { api } from '../container/comman';
import Loading from '../container/common/Loading';

const useAxios = (axiosParams: AxiosRequestConfig) => {  
    const [response, setResponse] = useState<AxiosResponse>();
    const [error, setError] = useState<AxiosError>();
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = async (params: AxiosRequestConfig) => {
        try {
            setLoading(true);
            const result = await api.request(params);
            setResponse(result);
        } catch(error) {
            setLoading(true);
            setError(error as AxiosError);
        } finally {
            setLoading(false);
        }
    };

    const sendData = () => {
        fetchData(axiosParams);
    }

    useEffect(() => {
        loading ?? <Loading />;
        if(axiosParams.method === "GET" || axiosParams.method === "get"){
            fetchData(axiosParams);
        };
    }, [axiosParams, loading]);

    return { response, error, loading, sendData };
    /* replace the previous return statement with this */
};

export default useAxios;