import * as WeatherForecasts from './WeatherForecasts';
import * as Counter from './Counter';
import * as Semaphore from './Semaphore';
import * as Canvas from './Canvas';

// The top-level state object
export interface ApplicationState {
    counter: Counter.CounterState;
    weatherForecasts: WeatherForecasts.WeatherForecastsState;
    semaphore: Semaphore.SemaphoreState; // added to applicationState
    canvas: Canvas.CanvasState;
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    counter: Counter.reducer,
    weatherForecasts: WeatherForecasts.reducer,
    semaphore: Semaphore.reducer,
    canvas: Canvas.reducer
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
