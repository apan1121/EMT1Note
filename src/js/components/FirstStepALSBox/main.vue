<template>
    <div class="note-box">
        <div class="note-header">
            <h3 class="title">
                初步檢查-創傷(ALS)
            </h3>
            <small>
                評估外科
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
                    title: '頸椎限制（須先處理）',
                    content: `懷疑頸椎損傷先給予限制`,
                    items: [],
                },
                {
                    title: 'Ｘ 大量出血（須先處理）',
                    content: `立即可見持續外出現，直接加壓止血`,
                    items: [],
                },
{
                    title: 'Ａ 評估呼吸道 （須先處理）',
                    content: ``,
                    items: [{
                        title: '打開呼吸道：',
                        content: `當呼吸道有雜音時，打開呼吸道，必要時抽吸
先給氧後抽吸，不超過15秒
壓額抬下顎法：非創傷
下顎推舉法：頸椎傷患
`,
                    }, {
                        title: '輔助呼吸道：',
                        content: `鼻咽呼吸道(有痛反射)：鼻尖到耳垂距離
口咽呼吸道(無痛反射)：嘴角到耳垂距離
`,
                    }],
                },
                {
                    title: 'Ｂ 評估呼吸（須先處理）',
                    content: `評估呼吸深淺快慢，異常呼吸音，呼吸次數
評估時間不超過10秒
`,
                    items: [],
                },
                {
                    title: 'Ｃ 評估循環（知道就好）',
                    content: ``,
                    items: [{
                        title: '橈動脈：是否摸的到脈搏對稱',
                    },{
                        title: '末端肢體是否濕冷',
                    },{
                        title: '微血管填充大於2秒（CTR 壓指甲）',
                        content: ``,
                    },{
                        title: '膚色蒼白發紺異常',
                        content: ``,
                    }],
                },
                {
                    title: 'Ｄ 評估失能',
                    content: ``,
                    items: [{
                        title: '昏迷指數（ＧＣＳ）',
                    },{
                        title: '兩側瞳孔是否等大、對光反應',
                    },{
                        title: '上下肢感覺運動是否正常',
                        content: ``,
                    }],
                },
                {
                    title: 'Ｅ 評估傷患身體',
                    content: ``,
                    items: [{
                        title: '頭頸胸腹骨腔四肢是否有致命傷',
                    },{
                        title: '頸靜脈怒張塌陷',
                    },{
                        title: '氣管偏移',
                    },{
                        title: '皮下氣腫',
                    },{
                        title: '頸椎壓痛',
                    },{
                        title: '骨盆是否穩固疼痛',
                    },{
                        title: '必要時保護傷患隱私移除衣物',
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