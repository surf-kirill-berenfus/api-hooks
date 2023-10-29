import { TServerError } from 'shared/types/TServerError';

export const isServerError = (error: any): error is TServerError => {
    if (typeof error.code === 'number' && typeof error.message === 'string') return true;
    return false;
};
