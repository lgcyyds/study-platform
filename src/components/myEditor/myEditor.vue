<template>
    <view class="richtext">
        <piaoyiEditor :values="values" :maxlength="3000" @changes="saveContens" :readOnly="readOnly" :photoUrl="photoUrl" :api="api" :name="name"/>
    </view>
</template>

<script>
    import piaoyiEditor from '@/uni_modules/piaoyi-editor/components/piaoyi-editor/piaoyi-editor.vue';
    export default {
		props:['arrticleContent'],
        data() {
            return {
                readOnly: false, //是否只读
                photoUrl: 'http://test.com', //服务器图片域名或者ip
                api: '/upload', //上传图片接口地址
                txt: '',
                name: 'file',
                values: this.arrticleContent
            };
        },
        components: {
            piaoyiEditor
        },
        methods: {
            saveContens(e) {
                this.txt = e.html
            }
        },
        onShareAppMessage(res) {
            if (res.from === 'button') { // 来自页面内分享按钮
                console.log(res.target)
            }
            return {
                title: '多功能富文本编辑器！',
                path: '/pages/editor/editor'
            }
        },
        onShareTimeline(res) {
            if (res.from === 'button') { // 来自页面内分享按钮
                console.log(res.target)
            }
            return {
                title: '多功能富文本编辑器！'
            }
        }
    }
</script>

<style lang="less">
</style>