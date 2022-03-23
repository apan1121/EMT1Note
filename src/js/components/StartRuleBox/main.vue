<template>
    <div class="note-box">
        <div class="note-header">
            <h3 class="title">
                START 檢傷分類原則
            </h3>
            <small>簡單分類快速治療</small>
        </div>
        <div class="note-body">
            <img style="width: 100%;" :src="'./dist/img/flow/EMT-Start.png'">
        </div>
    </div>
</template>
<script>
import Masonry from 'masonry-layout';
import { mapActions, mapMutations, mapGetters } from 'vuex';

// import $ from 'jquery';
// import 'bootstrap';

// import 'app';
// import { string, jsVars, popup, trackJS, localStorage, ppPanel } from 'lib/common/util';

export default {
    components: {},
    filters: {},
    props: {},
    data(){
        return {
            memos: [
                {
                    title: '脫困流程',
                    content: `評估現場佈置安全救援環境
接近傷患
 (頸椎限制＋XABCDE)
傷患照護
 (包紮固定)
脫困
移動傷患
`,
                },
                {
                    title: '脫困選擇',
                    content: ``,
                    items: [{
                        title: '一般車輛脫困',
                        content: `確認車輛穩固
使用脫困器材
(頸椎固定＋KED)
移至長背板
`,
                    },
                    {
                        title: '快速車輛脫困',
                        content: `確認車輛穩固
頸椎限制上頸圈
意識初步評估
移至長背板
`,
                    }],
                },
                {
                    title: '搬運傷患',
                    content: `儘速離開現場避免二次傷害`,
                    items: [{
                        title: '對自己',
                        content: `能力重心肌肉背打直`,
                    },{
                        title: '對傷患',
                        content: `可目視前方平穩前進`,
                    },{
                        title: '運送技巧',
                        content: `腳部先行：讓傷患可知行走方向
頭部先行：上下坡時
`,
                    },{
                        title: '單人搬運法',
                        content: `意識清楚可行走或無法行走傷患
單人攙扶(拉腰握手腕)
背負法(繞過腳下握手腕)
肩負法
抱持法(頸部支撐)
拖曳法(無意識)
`,
                    },{
                        title: '雙人搬運法',
                        content: `意識不清非外傷患者
雙人攙扶(有意識)
肢端搬運法(無意識)
`,
                    },{
                        title: '器材搬運法',
                        content: `長背板搬運
搬運椅搬運
搬運毯搬運
`,
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