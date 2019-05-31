import { put,takeEvery } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreat';
import axios from 'axios';

function* getInitList(){
 try{
	const res=yield axios.get('/todolist.json');
	const action=initListAction(res.data);
	yield put(action);
 }catch{
	 console.log('404');
	 }
	
//	axios.get('/todolist.json').then((res)=>{
//		const data=res.data;
//		const action=initListAction(data);
//		put(action);
//	})
}

function* mySaga() {
	yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
