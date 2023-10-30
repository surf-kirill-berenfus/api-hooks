'use client';
import { PropsWithChildren } from 'react';
import { SWRConfig } from 'swr';
import { alertService } from 'shared/lib/alertService';
import { isServerError } from 'shared/lib/isServerError';

export const SwrProvider = ({ children }: PropsWithChildren) => {
    return (
        <SWRConfig
            value={{
                // fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
                // useSWR(shouldFetch ? '/api/data' : null, fetcher)
                revalidateOnMount: true,
                // useSWRImmutable:
                revalidateOnReconnect: false,
                revalidateOnFocus: false,
                revalidateIfStale: false,
                // Error Handling => doc
                onError: (error) => {
                    if (!isServerError(error)) return;
                    alertService.error(error.message);
                },
            }}
        >
            {children}
        </SWRConfig>
    );
};
