import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getCommentData } from '../../../fetch/detail/detail.js'

import ListComponent from '../../../components/CommentList'
import LoadMore from '../../../components/LoadMore'

import './style.less'

class Comment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false,
            isLoadMore: false,
            page: 0
        }
    }
    render() {
        return (
            <div className="detail-comment-subpage">
                <h2>用户点评</h2>
                {
                    this.state.data.length
                    ? <ListComponent data={this.state.data}/>
                    : <div>{/* 加载中... */}</div>
                }
                {
                    this.state.hasMore
                    ? <LoadMore isLoadMore={this.state.isLoadMore} loadMorePageData={this.loadMorePageData.bind(this)}/>
                    : ''
                }
                <div style={{"height": "45px"}}></div>
            </div>
        )
    }
    componentDidMount() {
        this.loadFirstPageData();
    }
    // 获取首页数据
    loadFirstPageData() {
        const id = this.props.id
        const result = getCommentData(0, id)
        this.resultHandle(result)
    }
    // 加载更多数据
    loadMorePageData() {
        console.log(1)
        // 记录状态
        this.setState({
            isLoadMore: true
        })

        const id = this.props.id
        const page = this.state.page
        const result = getCommentData(page, id)
        this.resultHandle(result)

        // 增加 page 技术
        this.setState({
            isLoadMore: false
        })
    }
    // 处理数据
    resultHandle(result) {
        result.then(res => {
            return res.json()
        }).then(json => {
            // 增加 page 技术
            const page = this.state.page
            this.setState({
                page: page + 1
            })
            const hasMore = json.data[0].hasMore
            const data = json.data[0].data
            console.log(hasMore)
            this.setState({
                hasMore: hasMore,
                // 注意，这里讲最新获取的数据，拼接到原数据之后
                data: [...this.state.data, ...data]
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('详情页获取用户评论数据出错, ', ex.message)
            }
        })
    }
}

export default Comment