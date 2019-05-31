import styled from 'styled-components';

export const HomeWrapper=styled.div`
	width: 960px;
	margin: 0 auto;
	overflow: hidden;
`;

export const HomeLeft=styled.div`
	margin-left: 15px;
	padding-top: 30px;
	width: 625px;
	float: left;
	.banner-img{
		width: 625px;
		height: 270px;
	}
`;

export const HomeRight=styled.div`
	width: 280px;
	float: right;
`;


//Topic
export const TopicWrapper=styled.div`
	overflow: hidden;
	padding: 20px 0 10px 0;
	margin-left: -18px;
border-bottom: 1px solid #dcdcdc;
`
export const TopicItem=styled.div`
	float: left;
	background: #f7f7f7;
	height: 32px;
	line-height: 32px;
	margin-left: 18px;
	padding-right: 10px;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
    margin-bottom: 18px;
	.topic-pic{
		width: 32px;
		height: 32px;
		display: block;
		float: left;
		margin-right: 10px;
	}
`

//List
export const ListItem=styled.div`
	padding: 20px 0;
	overflow: hidden;
	border-bottom: 1px solid #dcdcdc;
	.pic{
		display: block;
		width: 120px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`

export const ListInfo=styled.div`
	width: 500px;
	float: left;
	.title{
		font-size: 18px;
		line-height: 27px;
		font-weight: bold;
		color: #333;
	}
	.desc{
		font-size: 13px;
		line-height: 24px;
		color: #999;
	}
`

export const LoadMore=styled.div`
	width: 100%;
height: 40px;
line-height: 40px;
margin: 30px 0;
text-align: center;
background: #a5a5a5;
border-radius: 20px;
color: #fff;
cursor: pointer;
`

//recommend
export const RecommendWrapper=styled.div`
	margin: 30px 0 -15px 0;
	width: 280px;
`

export const RecommendItem=styled.div`
	width: 280px;
	height: 40px;
	background: ${(props)=>props.color};
	line-height: 40px;
	text-align: center;
	font-weight: bold;
	border-radius: 5px;
    font-size: 14px;
`


//writer
export const WriterWrapper=styled.div`
	width: 278px;
	border: 1px solid #dcdcdc;
	border-radius: 3px;
	height: 300px;
	line-height: 300px;
	text-align: center;
	margin-top: 50px;
`

//backtop
export const BackTop=styled.div`
position: fixed;
right: 100px;
bottom: 100px;
width: 60px;
height: 60px;
line-height: 60px;
text-align: center;
border: 1px solid #ccc;
font-size: 14px;
`