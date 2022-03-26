<template>
    <div class="note-box">
        <div class="note-body">
            <div
                ref="ads"
                class="power-info-promote"
                :class="{ 'ad-blocked': adBlocked }"
            >
                <ins class="adsbygoogle"
                    style="display:block"
                    data-ad-format="fluid"
                    data-ad-layout-key="-fb+5w+4e-db+86"
                    data-ad-client="ca-pub-3068501078221920"
                    data-ad-slot="1897408904"></ins>
            </div>
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
        };
    },
    computed: {
        ...mapGetters([
            'PageSetting_width',
            'adBlocked',
        ]),
        isMobile(){
            return this.PageSetting_width < 700;
        },
    },
    watch: {
    },
    created(){
        setTimeout(() => {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }, 500);
    },
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