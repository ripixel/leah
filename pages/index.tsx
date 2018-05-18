import React from 'react';
import Page from 'components/Page';

import Link from 'next/link';

export class Index extends React.Component<any> {
    public static async getInitialProps(props) {
        return { isFromServer: !!props.req };
    }

    public render() {
        return <Page>
            <h2>Ooh look at me!</h2>
            <p>Isn't next.js shiny</p>
                {this.props.isFromServer ? <p>From Server</p> : <p>From Client</p>}
        </Page>;
    }
}

export default Index;
