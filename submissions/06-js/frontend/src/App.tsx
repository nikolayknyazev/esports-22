import {HashRouter} from 'react-router-dom';

import {AppLayout} from './components/AppLayout';
import { ThemeProvider } from './contexts/ThemeContext';

const App = () => {
    return (
        <HashRouter>
            <ThemeProvider>
                <AppLayout/>
            </ThemeProvider>
        </HashRouter>
    );
};

export default App;
