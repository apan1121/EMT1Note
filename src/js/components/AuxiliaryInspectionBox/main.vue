<template>
    <div class="note-box">
        <div class="note-header">
            <h3 class="title">
                輔助檢查
            </h3>
            <small>
                透過儀器或方式得知更多資訊<br>
                意識、呼吸、瞳孔、體溫、膚色、脈搏、血壓、血氧
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
                    title: '血壓',
                    content: `收縮壓 90~120mmHg
舒張壓 60~80mmHg
`,
                    items: [],
                },
                {
                    title: '血氧',
                    content: `低於90% 危急，94%以下就要注意`,
                    items: [],
                },
                {
                    title: '血糖',
                    content: `< 60，初級不能檢查須家屬處理`,
                    items: [],
                },
                {
                    title: '體溫',
                    content: `36-37.5c （32 ~ 41）`,
                    items: [],
                },
                {
                    title: '瞳孔',
                    content: `**正常2-5mm**
是否等大，對光有反應
不等大腦疝脱
針狀腦幹出血有機磷中毒呀片中毒
散大藥物中毒腦病變甲蟲中毒憂鬱症藥物

                    `,
                    items: [],
                },
                {
                    title: '聽診肺音',
                    content: ``,
                    items: [],
                },
                {
                    title: '膚色',
                    content: `蒼白心血管系統循環不良
發紺缺氧 蠟黃肝臟疾病`,
                    items: [],
                },
                {
                    title: '身體檢查',
                    content: `視診觸診檢查是否有異狀`,
                    items: [],
                },
                {
                    title: '辛辛那提（中風指數 微笑殭屍）',
                    content: `中風檢查要排除低血糖跟抽蓄`,
                    items: [{
                        title: 'Gaze 動眼測試',
                    },{
                        title: 'Face 微笑',
                    },{
                        title: 'Arm 手平舉',
                    },{
                        title: 'Speech 說話',
                    },{
                        title: 'Time 發作時間',
                    }],
                },
                {
                    title: '意識不清',
                    content: `昏迷指數（ＧＣＳ）-> EVM 分數`,
                    items: [],
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