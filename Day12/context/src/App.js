import {ThemeProvider} from './common/provider/ThemeProvider.js'
import { Content } from './component/Content';

function App() {
  return (

    <ThemeProvider>
      <Content/>
    </ThemeProvider>
  );
}

export default App;
