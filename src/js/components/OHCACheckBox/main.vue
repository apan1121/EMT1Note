<template>
    <div class="note-box">
        <div class="note-header">
            <h3 class="title">
                到院前心肺停止(OHCA)
            </h3>
            <small>
                心肺復甦＋電擊
            </small>
        </div>
        <div class="note-body">
            <grid-info :memos="memos"></grid-info>

            <image-zoom
                :regular="flowPic"
                :zoom="flowPic"
                :zoom-amount="2"
                img-class="img-fluid"
            ></image-zoom>
        </div>
    </div>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';
import BoxDefault from 'lib/common/mixins/BoxDefault';

import imageZoom from 'vue-image-zoomer';
// import $ from 'jquery';
// import 'bootstrap';

// import 'app';
// import { string, jsVars, popup, trackJS, localStorage, ppPanel } from 'lib/common/util';

export default {
    components: {
        imageZoom,
    },
    mixins: [BoxDefault],
    filters: {},
    props: {},
    data(){
        return {
            flowPic: './dist/img/flow/EMT-OHCAFlow@2x.png',
            memos: [
                {
                    title: '意識檢查',
                    content: `呼喚病患，確認意識`,
                    items: [],
                },
                {
                    title: '檢查呼吸',
                    content: `確認無呼吸`,
                    items: [],
                },
                {
                    title: '檢查頸動脈',
                    content: `數 1000 至 10007 ，確認無脈搏立刻壓胸`,
                    items: [],
                },
                {
                    title: '壓胸',
                    content: `透過壓胸製造血液循環，血液中剩餘的氧氣可以延緩腦損傷，**30下後給氧**。**每分鐘頻率 100~120**，**深度最少5公分**`,
                    items: [],
                },
                {
                    title: '叫 119 + AED',
                    content: `請周遭民眾打119 與拿 AED`,
                    items: [],
                },
                {
                    title: '暢通呼吸道',
                    content: `給兩口氣確認呼吸道是否暢通，無暢通給予**口咽**`,
                    items: [],
                },
                {
                    title: '人工給氧',
                    content: `透過甦醒球給予患者氧氣，**每 30 次壓胸後給予兩口氧氣**，**甦醒球只壓 1/3**`,
                    items: [],
                },
                {
                    title: 'AED',
                    content: `貼上 AED 貼片分析心律，由機器決定是否電擊，第一次無需電擊立即壓胸，後續無需電擊先檢查生命徵象`,
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