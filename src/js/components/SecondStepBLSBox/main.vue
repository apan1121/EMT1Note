<template>
    <div class="note-box">
        <div class="note-header">
            <h3 class="title">
                二度評估-非創傷(BLS)
            </h3>
            <small>
                八大生命體徵＋身體檢查<br>
                <strong>視診  聽診  觸診</strong><br>
                <strong>意識、呼吸、瞳孔、體溫、膚色、脈搏、血壓、血氧</strong>
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
                    title: '外觀',
                    content: `皮膚是否異常 紅疹、紫斑、針孔`,
                    items: [],
                },
                {
                    title: '頸部',
                    content: `氣管有無偏移、頸動脈怒張或塌陷`,
                    items: [],
                },
                {
                    title: '胸部',
                    content: `呼吸胸部起伏對稱？聽診兩側肺音`,
                    items: [],
                },
                {
                    title: '腹部',
                    content: `視診是否腫脹、十字四區塊觸診壓痛`,
                    items: [],
                },
                {
                    title: '四肢',
                    content: `上下肢感覺與運動功能
上下肢水腫浮腫紅疹紫斑針孔
`,
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