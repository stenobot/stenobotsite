import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface BitSynthState {
    currentCount: number;
}

export class BitSynth extends React.Component<RouteComponentProps<{}>, BitSynthState> {
    constructor() {
        super();
    }

    public render() {
        return <div className="page-cont page-bitsynth">
            <div className="bitsynth-content-cont">
                <h1>BitSynth content</h1>

                <p>This is an empty React component. This is an empty React component. This is an empty React component. This is an empty React component. This is an empty React component. This is an empty React component.</p>

           </div>
        </div>;
    }
}
