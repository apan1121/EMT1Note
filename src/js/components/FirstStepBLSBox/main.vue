<template>
    <div class="note-box">
        <div class="note-header">
            <h3 class="title">
                初步檢查-非創傷
            </h3>
            <small>
                著重迅速
            </small>
        </div>
        <div class="note-body">
            <div class="grid-wrapper">
                <div v-for="(memo, memosIndex) in memos" :key="memosIndex" class="grid">
                    <div
                        class="memo"
                    >
                        <div class="memo-title" v-text="memo.title"></div>
                        <pre v-if="memo.content" class="memo-content" v-text="memo.content"></pre>
                        <template v-if="memo.items">
                            <div v-for="(item, itemIndex) in memo.items" :key="itemIndex" class="memo-item">
                                <div class="memo-item-title" v-text='item.title'></div>
                                <pre class="memo-item-content" v-text='item.content'></pre>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
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