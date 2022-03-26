<template>
    <div class="note-box">
        <div class="note-header">
            <h3 class="title">
                ISBAR
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
                    title: 'I 尊重邀請、表達訴求',
                    content: `我是民間EMT，傷患車禍`,
                    items: [],
                },
                {
                    title: 'S B 病人主訴、過去病史',
                    content: `傷患男性25歲腳踏車機車相撞
無過去病史
`,
                    items: [],
                },
                {
                    title: 'A 主要發現、初步臆測',
                    content: `意識清楚可對話(E4V5M6)
瞳孔等大(3mm/3mm)
對光有反應
呼吸24次/分 脈搏 120次/分
血壓110/70mmHg 膚色正常
體溫37度 右腿骨折
`,
                    items: [],
                },
                {
                    title: 'R 重要處置、再評結果',
                    content: `包紮止血固定;生命跡象穩定`,
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