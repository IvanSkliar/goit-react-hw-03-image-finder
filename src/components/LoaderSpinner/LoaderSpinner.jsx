import { PureComponent } from 'react';

import  Loader  from 'react-loader-spinner';
import s from './LoaderSpinner.module.css';

class LoaderSpinner extends PureComponent {
    render() {
        return (
            <Loader
                type="BallTriangle"
                color="#3f51b5"
                height={200}
                width={200}
                className={s.loaderSpinner}
            />
        );
    }
}

export default LoaderSpinner;
