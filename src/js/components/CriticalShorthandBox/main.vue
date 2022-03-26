<template>
    <div class="note-box">
        <div class="note-header">
            <h3 class="title">
                OHCA 流程速記
            </h3>
            <small>
            </small>
        </div>
        <div class="note-body">

            <markdown
                class="memo-content"
                :content="content"
            ></markdown>
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
            flowPic: './dist/img/flow/EMT-OHCAFlow@2x.png',
            content: `
呼吸    < 10    > 29
脈搏     < 50   > 150
收縮壓  < 90  > 200
體溫     < 32   > 41
血氧  < 90
CRT  > 2 sec
GCS  < 14
`,
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