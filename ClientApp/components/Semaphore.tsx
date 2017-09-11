import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState }  from '../store';
import * as SemaphoreStore from '../store/Semaphore';

type SemaphoreProps =
    SemaphoreStore.SemaphoreState
    & typeof SemaphoreStore.actionCreators
    & RouteComponentProps<{}>;


  
 class Semaphore extends React.Component<SemaphoreProps, {}> {
    public render() {
        return <div>
            <h1>Semaphore</h1>
            <p>This is a simple example of a React component.</p>

            <p>Current status: <span className={this.props.textDecoration}>{ this.props.status }</span></p>

            <button onClick={ () => { this.props.toRed() } }>To Red</button>
            <button onClick={ () => { this.props.toYellow() } }>To Yellow</button>
            <button onClick={ () => { this.props.toGreen() } }>To Green</button>
        </div>;
    }
}

// Wire up the React component to the Redux store
export default connect(
    (state: ApplicationState) => state.semaphore, // Selects which state properties are merged into the component's props
    SemaphoreStore.actionCreators                 // Selects which action creators are merged into the component's props
)(Semaphore) as typeof Semaphore;