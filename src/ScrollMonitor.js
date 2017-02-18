import React from 'react';
import { Watch } from 'scrollmonitor-react';

export default Watch(class MyComponent extends React.Component {

    render () {
        var text;
        if (this.props.isInViewport) {
            text = 'I AM in the viewport!';
        } else {
            text = 'You will never see this because it gets replaced when it enters the viewport.'
        }

        return (<span>
            <h1>dcs</h1>
        </span>);
    }
});
