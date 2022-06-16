import { useEffect, useState } from 'react';

// TODO: make useEffectParam accept multiple variables for re-rendering logic.
export const useFetch = <T>(url: string, useEffectParam?: any) => {
  const [state, setState] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      const res = await fetch(url);
      const data = await res.json();

      setState(data);
      setIsLoading(false);
    })();
  }, [useEffectParam]);

  return { state, isLoading } as const;
};
