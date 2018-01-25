import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import { Link } from 'react-router'

import './css/style.less'

export default class Category extends React.Component {
	constructor(props) {
	  super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {
	  	index: 0,
        cityName: ''
	  };
	}
    componentDidMount() {
        this.setState({
            cityName: this.props.cityName
        })
    }
	render() {
		let opt = {
			continuous: true,
			auto: 3500,
			callback: (index) => {
				this.setState({
					index
				})
			}
		}
		return (
			<div className="category">
				<ReactSwipe className="carousel" swipeOptions={opt}>
                <div className="carousel-item">
                	<ul>
                		<li className="meishi"><Link to={`/search/meishi/no/${this.state.cityName}/0`}>美食</Link></li>
                		<li className="maoyandianying"><Link to={`/search/maoyandianying/no/${this.state.cityName}/0`}>猫眼电影</Link></li>
                		<li className="jiudian"><Link to={`/search/jiudian/no/${this.state.cityName}/0`}>酒店</Link></li>
                		<li className="xiuxianyule"><Link to={`/search/xiuxianyule/no/${this.state.cityName}/0`}>休闲娱乐</Link></li>
                		<li className="waimai"><Link to={`/search/waimai/no/${this.state.cityName}/0`}>外卖</Link></li>
                		<li className="huoguo"><Link to={`/search/huoguo/no/${this.state.cityName}/0`}>火锅</Link></li>
                		<li className="liren"><Link to={`/search/liren/no/${this.state.cityName}/0`}>丽人</Link></li>
                		<li className="gouwu"><Link to={`/search/gouwu/no/${this.state.cityName}/0`}>购物</Link></li>
                		<li className="zhoubianyou"><Link to={`/search/zhoubianyou/no/${this.state.cityName}/0`}>周边游</Link></li>
                		<li className="ktv"><Link to={`/search/ktv/no/${this.state.cityName}/0`}>KTV</Link></li>
                	</ul>
                </div>
                <div className="carousel-item">
                	<ul>
                		<li className="hunshasheying"><Link to={`/search/hunshasheying/no/${this.state.cityName}/0`}>婚纱摄影</Link></li>
                		<li className="shenghuofuwu"><Link to={`/search/shenghuofuwu/no/${this.state.cityName}/0`}>生活服务</Link></li>
                		<li className="jingdian"><Link to={`/search/jingdian/no/${this.state.cityName}/0`}>景点</Link></li>
                		<li className="aiche"><Link to={`/search/aiche/no/${this.state.cityName}/0`}>爱车</Link></li>
                		<li className="yundongjianshen"><Link to={`/search/yundongjianshen/no/${this.state.cityName}/0`}>运动健身</Link></li>
                		<li className="qinzi"><Link to={`/search/qinzi/no/${this.state.cityName}/0`}>亲子</Link></li>
                		<li className="jiazhuang"><Link to={`/search/jiazhuang/no/${this.state.cityName}/0`}>家装</Link></li>
                		<li className="xuexipeixun"><Link to={`/search/xuexipeixun/no/${this.state.cityName}/0`}>学习培训</Link></li>
                		<li className="yiliaojiankang"><Link to={`/search/yiliaojiankang/no/${this.state.cityName}/0`}>医疗健康</Link></li>
                		<li className="daojia"><Link to={`/search/daojia/no/${this.state.cityName}/0`}>到家</Link></li>
                	</ul>
                </div>
                <div className="carousel-item">
                	<ul>
                		<li className="xiaochikuaican"><Link to={`/search/xiaochikuaican/no/${this.state.cityName}/0`}>小吃快餐</Link></li>
                		<li className="zizhucan"><Link to={`/search/zizhucan/no/${this.state.cityName}/0`}>自助餐</Link></li>
                		<li className="ribenliaoli"><Link to={`/search/ribenliaoli/no/${this.state.cityName}/0`}>日本料理</Link></li>
                		<li className="meifa"><Link to={`/search/meifa/no/${this.state.cityName}/0`}>美发</Link></li>
                		<li className="meijiameitong"><Link to={`/search/meijiameitong/no/${this.state.cityName}/0`}>美甲美瞳</Link></li>
                		<li className="meirong"><Link to={`/search/meirong/no/${this.state.cityName}/0`}>美容SPA</Link></li>
                		<li className="shoushenxianti"><Link to={`/search/shoushenxianti/no/${this.state.cityName}/0`}>瘦身纤体</Link></li>
                		<li className="qinzisheying"><Link to={`/search/qinzisheying/no/${this.state.cityName}/0`}>亲子摄影</Link></li>
                		<li className="qinziyoule"><Link to={`/search/qinziyoule/no/${this.state.cityName}/0`}>亲子游乐</Link></li>
                		<li className="quanbufenlei"><Link to={`/search/quanbufenlei/no/${this.state.cityName}/0`}>全部分类</Link></li>
                	</ul>
                </div>
         </ReactSwipe>
         <div className="pointContainer">
     		<ul>
     			<li className={this.state.index === 0 ? 'selected' : ''}></li>
     			<li className={this.state.index === 1 ? 'selected' : ''}></li>
     			<li className={this.state.index === 2 ? 'selected' : ''}></li>
     		</ul>
         </div>
		</div>
		)
	}
}