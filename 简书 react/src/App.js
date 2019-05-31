import React,{ Component } from 'react';
import { Provider } from 'react-redux';
import { Globalstyle } from './style';
import store from './store';
import { Globalstyle2 } from './statics/iconfont/iconfont.js';
import Header from './common/header/index.js';
import { BrowserRouter,Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/writer';


class App extends Component{
	
	render(){
		return(
			<Provider store={store}>
				<Globalstyle/>
			    <Globalstyle2/>  
				<BrowserRouter>
			      <div>
			        <Header />
					<Route path='/' exact component={Home}></Route>
			        <Route path='/login' exact component={Login}></Route>
					<Route path='/write' exact component={Write}></Route>
			        <Route path='/detail/:id' exact component={Detail}></Route>
			      </div>
				</BrowserRouter>
			</Provider>
		)
	}
	
}

export default App;