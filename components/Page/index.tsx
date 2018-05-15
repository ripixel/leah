import React, {Fragment} from 'react';
import Meta from '../Meta';
import Header from '../Header';

interface IProps {
    children: any;
}

export const Page: React.SFC<IProps> = (props) => {
    return <Fragment>
        <Meta />
        <Header />

        <main>
            {props.children}
        </main>
    </Fragment>;
};

export default Page;
