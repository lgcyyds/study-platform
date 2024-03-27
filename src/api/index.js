import requests from '../api/request.js'
// <------------------------------------用户接口---------------------------------------->
//登录
export const userLogin = (params) => requests({url: '/users/login', method: 'get', params })
//签到
export const userSignIn = (params) => requests({url: '/users/signin', method: 'post', params })
//查询用户其他信息（签到天数、收藏数量、文章数量）
export const getUserOtherInfo = (params) => requests({url: '/users/getOtherInfo', method: 'post', params })

// <------------------------------------文章接口---------------------------------------->
//新增文章(具体看后端)
export const addArticle = (data) => requests(({url:'/articles/add',method:'post',data}))
//获取文章（id, collected, liked, keywords, page）
export const getArticle = (params) => requests(({url:'/articles/get',method:'get',params}))
//收藏、点赞文章（userId, articleId, type）
export const collectOrLikeArticle = (form) => requests({url:'/articles/collectOrLike',method:'post',data:form})
//评论文章(userId, articleId, content)
export const commentArticle = (data) => requests(({url:'/articles/comment',method:'post',data}))
//获取文章评论列表
export const getArticleCommentList = (params) => requests(({url:'/articles/getComment',method:'get',params}))
//获取点赞的文章(id)
export const getLiked = (params) => requests(({url:'/articles/getliked',method:'get',params}))
//获取收藏的文章和题目(id)
export const getAllCollect = (params) => requests(({url:'/articles/getAllCollect',method:'get',params}))
//编辑文章
export const editArticle = (data) => requests(({url:'/articles/edit',method:'post',data}))
//删除文章
export const delArticle = (params) => requests(({url:'/articles/delete',method:'post',params}))
//获取阅读历史
export const getHistoryList = (params) => requests(({url:'/articles/getHistory',method:'get',params}))
//获取点赞我的文章的列表
export const getLikeArticleMsgList = (params) => requests(({url:'/articles/getLikeArticleMsg',method:'get',params}))
//获取收藏我的文章的列表
export const getcollectArticleMsgList = (params) => requests(({url:'/articles/getcollectArticleMsg',method:'get',params}))
//获取评论我的文章的列表
export const getCommentArticleMsgList = (params) => requests(({url:'/articles/getCommentArticleMsg',method:'get',params}))
// <------------------------------------题目接口---------------------------------------->
//获取题目(id, page, level, tag,keywords)
export const getQuestion = (params) => requests(({url:'/question/get',method:'get',params}))
//获取收藏题目(userId, questionId)
export const getCollectQuestion = (data) => requests(({url:'/question/collect',method:'post',data}))