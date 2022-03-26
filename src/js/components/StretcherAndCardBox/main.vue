<template>
    <div class="note-box">
        <div class="note-header">
            <h3 class="title">
                上擔架床與救護車
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
                    title: '內科（非創傷）',
                    content: `意識清醒：傷患最舒服姿勢
意識不清(GCS<15)不影響呼吸道暢通
- 復甦姿勢、半坐臥、平躺

呼吸困難 心臟病 中風
- 半坐臥

孕婦20週以上
- 左側躺

藥物過量嘔吐病患
- 左側躺
`,
                    items: [],
                },
                {
                    title: '外科（創傷）',
                    content: `最適合姿勢
- 仰躺

意識清醒
- 傷患最舒服姿勢

呼吸困難
- 半坐臥（無頸圈長背板）
長骨骨折不抬高
創傷呼吸困難＋長背板
- 不墊高
`,
                    items: [],
                },
                {
                    title: '注意',
                    content: `氧氣筒與器材放置適當位置
適當的搬運方法
適當的姿勢
毛毯覆蓋
手放肚子擔架床固定帶固定床欄拉起
攜帶氧氣筒換成車裝氧氣筒
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