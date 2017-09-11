import { Action, Reducer } from 'redux';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface SemaphoreState {
    status: number;
    textDecoration: string;
}

/// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

interface ToRedAction { type: 'TO_RED' }
interface ToYellowAction { type: 'TO_YELLOW' }
interface ToGreenAction { type: 'TO_GREEN' }

type KnownAction = ToRedAction | ToYellowAction | ToGreenAction;

export const actionCreators = {
    toRed: () => <ToRedAction>{ type: 'TO_RED' },
    toYellow: () => <ToYellowAction>{ type: 'TO_YELLOW' },
    toGreen: () => <ToGreenAction>{ type: 'TO_GREEN' }
};

export const reducer: Reducer<SemaphoreState> = (state: SemaphoreState, action: KnownAction) => {
    switch (action.type) {
        case 'TO_RED':
            return { status: 0,
                     textDecoration:"semaphoreRed" 
                   };
        case 'TO_YELLOW':
            return { status: 1,
                     textDecoration:"semaphoreYellow"
                   };
        case 'TO_GREEN':
            return { status: 2,
                     textDecoration:"semaphoreGreen"
                   };
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            const exhaustiveCheck: never = action;
    }

    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || { status: 0,
                      textDecoration: "semaphoreRed" };
};


