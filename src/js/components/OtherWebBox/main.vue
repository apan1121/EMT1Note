<template>
    <div class="note-box">
        <div class="note-header">
            <h3 class="title">
                參考資料
            </h3>
            <small>
            </small>
        </div>
        <div class="note-body">
            <a href="https://www.youtube.com/channel/UC_HZnqu05VawWrdloAjRY8Q/featured"
                class="other-web-box"
                target="_blank"
            >
                <div class="other-cover">
                    <img src="https://yt3.ggpht.com/ytc/AKedOLSjunh2AYMUE8YvCbi5zqr9HPu-QFPH7jL6mUwBEA=s176-c-k-c0x00ffffff-no-rj">
                </div>
                <div class="other-info">
                    安妮怎麼了? -線上急救教育平台
                </div>
            </a>
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