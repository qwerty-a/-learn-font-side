import axios from 'axios';
import { fromJS } from 'immutable';
import * as constants from './constants';

const changeHomeData=(result)=>({
	type: constants.CHANGE_HOME_DATA,
	topicList: result.topicList,
	recomendList: result.recomendList,
	articleList: result.articleList
})

export const getHomeInfo=()=>{
	return (dispatch)=>{
		axios.get('/api/home.json').then((res)=>{
			const result=res.data.data;
			dispatch(changeHomeData(result));
		})
	}
}

export const getMoreList=(page)=>{
	return (dispatch)=>{
		axios.get('/api/homeList.json?page=' +page).then((res)=>{
			const result=res.data.data;
			const action={
				type: constants.ADD_ARTICLE_LIST,
	            list: fromJS(result),
	            nextPage: page+1
			}
			dispatch(action);
		})
	}
}

export const toggleTopShow=(show)=>({
	type: constants.TOGGLE_SCROLL_TOP,
	show
})