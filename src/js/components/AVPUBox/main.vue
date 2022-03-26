<template>
    <div class="note-box">
        <div class="note-header">
            <h3 class="title">
                意識檢查
            </h3>
            <small>
                身體對於外在的意識反應
            </small>
        </div>
        <div class="note-body">
            <p>叫他、拍他、疼痛刺激</p>
            <grid-info :memos="memos"></grid-info>
        </div>
    </div>
</template>
<script>
import Masonry from 'masonry-layout';
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
                    title: 'Alert 清醒',
                    content: `自發性的產生反應`,
                },
                {
                    title: 'Verbal 聲音',
                    content: `無法自發性的產生反應，需要聲音刺激`,
                    items: [],
                },
                {
                    title: 'Pain 疼痛刺激',
                    content: `聲音無反應，按壓斜方肌疼痛才有反應`,
                    items: [],
                },
                {
                    title: 'Unresponsive 無反應',
                    content: `呼喚聲音疼痛皆無反應`,
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