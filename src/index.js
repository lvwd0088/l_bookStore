import dva from 'dva';
import { message } from 'antd';
import './index.css';

// 1. Initialize
const app = dva({
  onError (msg,dispatch) {
    if(msg){
      console.log(msg);
    }
    message.success('This is a prompt message for success, and it will disappear in 10 seconds', 5);
    // dispatch({
    //   type:'app/showErrorMessage',
    //   payload:{
    //     msg
    //   }
    // })
  }
});

app.model(require("./models/app"));
app.model(require("./models/user"));
app.model(require("./models/bookManager/book"));
app.model(require("./models/bookManager/bookType"));
app.model(require("./models/bookManager/bookLabel"));

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
