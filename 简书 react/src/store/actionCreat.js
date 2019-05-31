import { GET_INIT_LIST,CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION } from './actionTypes';



export const getIputChangeAction = (value) => ({
	type: CHANGE_INPUT_VALUE,
	value
}) 

export const getAddItemAction = () => ({
	type: ADD_TODO_ITEM
}) 

export const getDeletItemAction = (index) => ({
	type: DELETE_TODO_ITEM,
	index
}) 

export const initListAction = (data) => ({
	type: INIT_LIST_ACTION,
	data
}) 

export const getInitList=()=>({
	type: GET_INIT_LIST
})

//export const getToDoList=()=>{
//	return (dispatch)=>{
//		axios.get('/todolist.json').then((res)=>{
//			const data=res.data;
//			const action=initListAction(data);
//			dispatch(action);
//		})
//	}
//}
