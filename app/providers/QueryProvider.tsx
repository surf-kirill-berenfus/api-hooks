'use client';
import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { alertService } from 'shared/lib/alertService';
import { isServerError } from 'shared/lib/isServerError';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            // enabled - only manual fetch
            // retry retryOnMount cacheTime
            // select: (data: TData) => unknown
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            onError: (error) => {
                if (!isServerError(error)) return;
                alertService.error(error.message);
            },
        },
    },
});

export const QueryProvider = ({ children }: PropsWithChildren) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
