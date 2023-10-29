import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { TAppDispatch, TAppRootState } from 'redux/store';

export const useAppDispatch = (): TAppDispatch => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TAppRootState> = useSelector;
