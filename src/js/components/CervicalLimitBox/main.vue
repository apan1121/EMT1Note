<template>
    <div class="note-box">
        <div class="note-header">
            <h3 class="title">
                頸椎限制
            </h3>
            <small>
            </small>
        </div>
        <div class="note-body">
            <grid-info :memos="memos"></grid-info>
        </div>
    </div>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';
import BoxDefault from 'lib/common/mixins/BoxDefault';

// import $ from 'jquery';
// import 'bootstrap';

// import 'app';
// import { string, jsVars, popup, trackJS, localStorage, ppPanel } from 'lib/common/util';

export default {
    components: {},
    mixins: [BoxDefault],
    filters: {},
    props: {},
    data(){
        return {
            memos: [
                {
                    title: '加拿大頸椎守則',
                    content: ``,
                    items: [
                        {
                            title: '高危險因子',
                            content: `65歲以上
四肢麻木
危險機轉
`,
                        },
                        {
                            title: '低危險因子',
                            content: `非簡單後方追撞
脖子疼痛
無法自由走動
後頸中線壓痛
`,
                        },
                        {
                            title: '無任何問題',
                            content: '頸部緩慢左右45度會痛',
                        }
                    ],
                },
                {
                    title: '頸椎步驟',
                    content: ``,
                    items: [{
                        title: '一',
                        content: '頭頸一直線',
                    },{
                        title: '測',
                        content: '測量下巴到肩膀距離',
                    },{
                        title: '組',
                        content: '組裝',
                    },{
                        title: '捲',
                        content: '新的要捲鬆',
                    },{
                        title: '套',
                        content: '套上',
                    }],
                },
                {
                    title: '台北市緊急救護',
                    content: ``,
                    items: [{
                        title: '老',
                        content: '65歲老人肩頸以上疼痛',
                    },{
                        title: '大',
                        content: '明顯大傷勢',
                    },{
                        title: '頭',
                        content: '頭頸部明顯外傷疼痛',
                    },{
                        title: '昏',
                        content: '意識不清 GCS 非滿分',
                    },{
                        title: '變',
                        content: '脊椎變形',
                    },{
                        title: '麻',
                        content: '神經學異常發麻無力',
                    }
                    ,{
                        title: '機',
                        content: '外傷機轉',
                    }],
                },
            ],
        };
    },
    computed: {
        ...mapGetters([
            'PageSetting_width',
        ]),
        isMobile(){
            return this.PageSetting_width < 700;
        },
    },
    watch: {
    },
    created(){},
    mounted(){

    },
    updated(){},
    destroyed(){},
    methods: {
        ...mapActions({}),
        ...mapMutations({}),
    },
};
</script>
<style lang="scss" scoped>
</style>