import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FirstScreen from './src/screens/FirstScreen';

const App = () => {
    return (
        <SafeAreaProvider>
             
             // This is how to use the components that have been made
             // in the FirstScreen.js File and use it in the App.js File
             <FirstScreen/>

        </SafeAreaProvider> 
    )
}

export default App;