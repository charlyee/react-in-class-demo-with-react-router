import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface RouteParams {
    id: string;
};

export interface IActvityDetailsProps extends RouteComponentProps<RouteParams> {
}

export default class ActvityDetails extends React.Component<IActvityDetailsProps> {
    public render() {
        const { match: { params } } = this.props;

        return (
            <div>
                The Activity ID in the URL is: {params.id}
            </div>
        );
    }
}
