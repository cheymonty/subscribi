import React from 'react';
import styles from './App.module.css';
import {Home} from './components';


class App extends React.Component {

    render() {
        return (
            <div className={styles.container}>
                <Home/>
            </div>
        );
    }
}

export default App;