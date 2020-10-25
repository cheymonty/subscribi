import React from 'react';
import styles from './App.module.css';
import {Home} from './components';


class App extends React.Component {

    render() {
        const subs = this.state;
        return (
            <div className={styles.container}>
                <Home subs={subs}/>
            </div>
        );
    }
}

export default App;