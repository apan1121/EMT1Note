<template>
    <div class="note-box">
        <div class="note-header">
            <h3 class="title">
                呼吸評估
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
                    title: '氧氣治療',
                    content: ``,
                    items: [{
                        title: '氧氣組',
                        content: `氧氣容器 調節器 殘壓錶
流量計 高壓管 手動氧氣驅動器
氣動抽吸器 潮濕瓶
`,
                    },{
                        title: '給氧',
                        content: `開 開開關
看 看殘壓
接 接導管
開 開流量
戴 戴上呼吸器
`,
                    },{
                        title: '給氧耗材',
                        content: `氧氣鼻導管
- 低氧需求
- 1-6 L/min
- 每增加 1L/min 提升4%濃度
- 低氧需求
- 流量大鼻腔不適

一般型氧氣面罩
- 張口呼吸 呼吸困難
- 6-10 L/min
- 每增加 1L/min 提升4%濃度
- 最高60%
- 鋁片鬆緊帶沒戴好影響濃度

非再吸入型面罩（NRM）
- 一般型無用血氧沒改善一氧化碳中毒
- 10-15 L/min
- 每增加 1L/min 提升10%濃度
- 最高100%
- 鋁片鬆緊帶沒戴好影響濃度

袋辦甦醒球（BVM）
- 非再吸入型無用呼吸衰竭
- 心肺停止無法自行呼吸
- 每分鐘10次 6秒一次
- 最高100%
- 觀察胸部起伏
`,
                    }],
                }, {
                    title: '呼吸三要素',
                    content: ``,
                    items: [{
                        title: '道  呼吸道',
                        content: `呼吸道阻塞呼吸困難`,
                    }, {
                        title: '力  呼吸動力',
                        content: `呼吸動力不足
（腦疝脫壓迫呼吸中樞）
`,
                    }, {
                        title: '氣  氧氣',
                        content: `增加氧氣濃度`,
                    }],
                },
                {
                    title: '呼吸道',
                    content: ``,
                    items: [{
                        title: '徒手開呼吸道',
                        content: `壓額抬下顎法（非創傷）
下顎推舉法（頸椎傷）`,
                    },{
                        title: '輔助呼吸道',
                        content: `鼻咽呼吸道(有痛反射)：
- 鼻尖到耳垂距離

口咽呼吸道(無痛反射)：
- 嘴角到耳垂距離

`,
                    },{
                        title: '抽吸',
                        content: `口咽分泌物影響呼吸
先面罩給氧氣
吸導管嘴角到耳垂長度
抽吸 < 15秒
`,
                    }],
                },
                {
                    title: '注意',
                    content: ``,
                    items: [{
                        title: '慢性阻塞性肺疾病',
                        content: `給低流量氧氣太高反而抑制呼吸`,
                    },{
                        title: '巴拉刈中毒',
                        content: `氧氣加速惡化`,
                    },{
                        title: '氧氣存量',
                        content: `留意存量是否足夠救護需求`,
                    },{
                        title: '嚴禁油脂或潤滑',
                        content: `避免意外`,
                    },{
                        title: '避免高溫日直照',
                        content: `適當固定避免傾倒`,
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