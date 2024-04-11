
export const instance = async <T>({
    url,
    method,
    params,
    data,
    headers,
  }: {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    params?: any;
    data?: unknown;
    headers?: any;
    responseType?: string;
  }): Promise<T> => {
    headers = headers || {};
    headers["User-Agent"] = headers["User-Agent"] || "grax-js/1.0"

    const response = await fetch(
      url + new URLSearchParams(params),
      {
        method,
        headers,
        ...(data ? { body: JSON.stringify(data) } : {}),
      },
    );
  
    return response.json();
  };
  
  export default instance;
 