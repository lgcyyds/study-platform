import requests from '../api/request.js'
// <------------------------------------用户接口---------------------------------------->
//登录
export const userLogin = (params) => requests({url: '/users/login', method: 'get', params })
//签到
export const userSignIn = (params) => requests({url: '/users/signin', method: 'post', params })

// <------------------------------------文章接口---------------------------------------->
//新增文章(具体看后端)
export const addArticle = (data) => requests(({url:'/articles/add',method:'post',data}))
//获取文章（id, collected, liked, keywords, page）
export const getArticle = (data) => requests(({url:'/articles/get',method:'get',data}))
//收藏、点赞文章（userId, articleId, type）
export const collectOrLikeArticle = (data) => requests(({url:'/articles/comment',method:'post',data}))
//评论文章(userId, articleId, content)
export const commentArticle = (data) => requests(({url:'/articles/collectOrLike',method:'post',data}))
//获取点赞的文章(id)
export const commentArticle = (params) => requests(({url:'/articles/getliked',method:'get',params}))
//获取收藏的文章和题目(id)
export const commentArticle = (params) => requests(({url:'/articles/getAllCollect',method:'get',params}))

// <------------------------------------题目接口---------------------------------------->
//获取题目(id, page, level, tag)
export const getQuestion = (params) => requests(({url:'/articles/get',method:'get',params}))
//获取收藏题目(userId, questionId)
export const getCollectQuestion = (data) => requests(({url:'/articles/collect',method:'post',data}))