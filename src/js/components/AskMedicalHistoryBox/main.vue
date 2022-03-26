<template>
    <div class="note-box">
        <div class="note-header">
            <h3 class="title">
                詢問病史
            </h3>
            <small>
                訪談患者或家屬收集臨床訊息
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
                    title: '主要',
                    items: [
                        {
                            title: '主訴',
                            content: `哪裡不舒服、怎麼不舒服`,
                            items: [],
                        },
                        {
                            title: '之前（不舒服之前）',
                            content: `不舒服之前在做什麼`,
                            items: [],
                        },
                        {
                            title: '吃（最後一次進食）',
                            content: `最後一次進食是什麼時候`,
                            items: [],
                        },
                        {
                            title: '過（過往病史）',
                            content: `有無疾病或家族遺傳疾病`,
                            items: [],
                        },
                        {
                            title: '藥（用藥史）',
                            content: `有無服藥  上一次服用何時`,
                            items: [],
                        },
                        {
                            title: '敏（過敏史）',
                            content: `食物 藥物過敏`,
                            items: [],
                        },
                        {
                            title: '膚色',
                            content: `蒼白心血管系統循環不良
        發紺缺氧 蠟黃肝臟疾病`,
                            items: [],
                        },
                        {
                            title: '感（現在感覺）',
                            content: `除了主訴還有其他部分不舒服嗎？`,
                            items: [],
                        },
                    ],
                },
                {
                    title: '胸悶痛加碼',
                    items: [
                        {
                            title: '增（增減痛）',
                            content: `胸悶痛 何種姿勢比較舒服`,
                        },
                        {
                            title: '質（疼痛性質）',
                            content: `疼痛感覺？悶痛  刺痛  撕裂痛`,
                        },
                        {
                            title: '轉（有無轉移）',
                            content: `疼痛有無轉移至左肩背部頸部下巴`,
                        },
                        {
                            title: '嚴（疼動嚴重度）',
                            content: `最痛 10 分   不痛 0 分`,
                        },
                        {
                            title: '始（何時開始）',
                            content: `何時開始痛？`,
                        },
                    ],

                }
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