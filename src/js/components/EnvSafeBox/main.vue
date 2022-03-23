<template>
    <div class="note-box">
        <div class="note-header">
            <h3 class="title">
                現場安全評估
            </h3>
            <small>
                到達現場評估前救護人員要先保護自己
            </small>
        </div>
        <div class="note-body">
            <div v-for="(memo, memosIndex) in memos" :key="memosIndex" class="memo">
                <div class="memo-title" v-text="memo.title"></div>
                <pre class="memo-content" v-text="memo.content"></pre>
            </div>

        </div>
    </div>
</template>
<script>
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
                    title: '適當的防護裝備',
                    content: `基本：手套口罩
進階：護目鏡、防護衣
還沒完備前，要保持一公尺安全距離
`,
                },
                {
                    title: '進行現場環境評估',
                    content: `觀察環境，確定患者與救護員安全
在危險現場需要保持警戒
`,
                },
                {
                    title: '檢視現場傷患數量',
                    content: `確認現場患者數量，請求支援或多重傷患程序
處理與後送優先次序
`,
                },
            ],
        };
    },
    computed: {
        ...mapGetters([
        ]),
    },
    watch: {
    },
    created(){},
    mounted(){},
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