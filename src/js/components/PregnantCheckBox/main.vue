<template>
    <div class="note-box">
        <div class="note-header">
            <h3 class="title">
                孕婦評估
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
                    title: '與孕婦解釋',
                    items: [
                        {
                            title: '自我介紹安撫孕婦',
                        }
                    ],
                },
                {
                    title: '與孕婦詢問',
                    items: [
                        {
                            title: '判斷是否急產',
                        },
                        {
                            title: '陣痛 < 5min',
                        },
                    ],
                },
                {
                    title: '初檢與孕婦解釋',
                    items: [
                        {
                            title: '檢查破水出血',
                        },
                        {
                            title: '檢查胎頭有無產出',
                        },
                        {
                            title: '決定是否現場接生',
                        },
                    ],
                },
                {
                    title: '對家屬詢問',
                    items: [
                        {
                            title: '歲  產婦幾歲',
                        },
                        {
                            title: '月 懷孕幾個月',
                        },
                        {
                            title: '胎 懷孕幾胎',
                        },
                        {
                            title: '次 生產幾次',
                        },
                        {
                            title: '病  有哪些疾病',
                        },
                    ],
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