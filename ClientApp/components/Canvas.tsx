import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState }  from '../store';
import * as CanvasStore from '../store/Canvas';
import '../store/Graphics';

type CanvasProps =
    CanvasStore.CanvasState
    & typeof CanvasStore.actionCreators
    & RouteComponentProps<{}>;

class Canvas extends React.Component<CanvasProps, {}> {

    myCanvas : any;

    componentDidMount()
    {
       this.updateCanvas();
    }
    render() {
        return <div>
            <h1>Counter Testing</h1>

            <p>This is a simple example of a canvas using react.</p>

            <canvas ref= { canvas => this.myCanvas = canvas } />
            </div>;
    }
    updateCanvas() {
       var ctx = this.myCanvas.getContext('2d');
       paintGraphics(ctx);
    }
}

// Wire up the React component to the Redux store
export default connect(
    (state: ApplicationState) => state.canvas, // Selects which state properties are merged into the component's props
    CanvasStore.actionCreators                 // Selects which action creators are merged into the component's props
)(Canvas) as typeof Canvas;
