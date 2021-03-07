import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from '@ngrx/store';
export const COUNTER_KEY = 'counter';

export const increment = createAction('[COUNTER] increment');
export const decrement = createAction('[COUNTER] decrement');
export const clear = createAction('[COUNTER] clear');
export const changeUpdatedAt = createAction('[COUNTER] change updated at', props<{updatedAt: number}>());

export interface CounterState {
    count: number;
    updatedAt?: number;
}

export const initialState: CounterState = {
    count: 0,
};

export const counterReducer = createReducer(
    initialState,
    on(increment, (state: CounterState) => ({
        ...state,
        count: state.count + 1
    })),
    on(decrement, (state: CounterState) => ({
        ...state,
        count: state.count - 1
    })),
    on(clear, (state: CounterState) => ({
        ...state,
        count: 0
    })),
    on(changeUpdatedAt, (state: CounterState, action) => ({
        ...state,
        updatedAt: action.updatedAt
    }))
);

export const featureSelector = createFeatureSelector<CounterState>(COUNTER_KEY);
export const countSelector = createSelector(
    featureSelector,
    state => state.count
    );
export const updatedAtSelector = createSelector(
    featureSelector,
    state => state.updatedAt
    );
