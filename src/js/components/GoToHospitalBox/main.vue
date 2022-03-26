<template>
    <div class="note-box">
        <div class="note-header">
            <h3 class="title">
                轉送與無線電報告
            </h3>
            <small>
                讓醫院準備
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
                    title: '自我介紹、傷病患性別、年齡、主要問題、簡單病史',
                    content: `XX91現在載送一名男性患者，年約20歲，車禍，疑似右小腿開放骨折，無過去傷病史`,
                    items: [],
                },
                {
                    title: '已做處理',
                    content: `現場已為病人實施面罩給養、包紮止血骨折固定`,
                    items: [],
                },
                {
                    title: '目前生命跡象',
                    content: `目前生命跡象：意識清楚，呼吸每分鐘24次脈搏每分鐘120下，血壓100/70mmHg，瞳孔等大對光有反應，體溫37度，膚色蒼白`,
                    items: [],
                },
                {
                    title: '大約多久到醫院',
                    content: `XX91 預計10分鐘到達醫院，請醫院準備`,
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