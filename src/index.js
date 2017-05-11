import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

app.model(require("./models/app"));
app.model(require("./models/bookType"));
app.model(require("./models/user"));
app.model(require("./models/bookManager/bookLabel"));

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
