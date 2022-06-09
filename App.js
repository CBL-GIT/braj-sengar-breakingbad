import * as React from 'react';
import { View } from "react-native";
import Routes from './src/Routes/Routes';
import SplashScreen from 'react-native-splash-screen';


const App = () => {
    React.useEffect(() => {
        if (!__DEV__) {
            console.log = () => { };
        }
        _hideSplashScreen();
    }, []);

    const _hideSplashScreen = () => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 3000);
    }

    return (
        <View style={{ flex: 1 }}>
            <Routes />
        </View>
    );
}

export default App;