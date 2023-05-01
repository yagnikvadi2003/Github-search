import { useState, useEffect, useCallback } from 'react';
import { AxiosResponse, AxiosError } from 'axios';
import { instance } from '../container/commas';
import { AxiosProps } from '../@types/Type';

const useAxios = ({
  url,
  method = 'get',
  data,
  headers,
  onSuccess,
  onError,
}: AxiosProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<AxiosError | null>(null);

  const fetchData = useCallback(() => {
    setLoading(true);

    instance
      .request({
        url,
        method,
        data,
        headers,
      })
      .then((res: AxiosResponse) => {
        setResponse(res.data);
        setLoading(false);
        if (onSuccess) {
          onSuccess(res.data);
        }
      })
      .catch((err: AxiosError) => {
        setError(err);
        setLoading(false);
        if (onError) {
          onError(err);
        }
      });
  }, [url, method, data, headers, onSuccess, onError]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { loading, response, error };
};

export default useAxios;

/*
 *
 *   Usage:=>
 *   const { loading, response, error } = useAxios({
 *    url: '/query-parameters',
 *    method: 'post',
 *    data: { foo: 'bar' },
 *    headers: { Authorization: 'Bearer token' },
 *    onSuccess: (data) => {
 *      console.log(data);
 *    },
 *    onError: (error) => {
 *      console.log(error);
 *    },
 *  });
 *
 */
