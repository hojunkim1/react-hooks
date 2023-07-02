import axios from "axios";
import { useEffect, useState } from "react";

export function useAxios(options, axiosInstance = axios) {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null,
  });

  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
    setState({ ...state, loading: true });
    setTrigger(Date.now());
  };

  useEffect(() => {
    axiosInstance(options)
      .then((data) => {
        setState({ ...state, loading: false, data });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [options, axiosInstance, state, trigger]);

  return { ...state, refetch };
}
