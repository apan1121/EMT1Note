import Vue from 'vue';
import { mapActions, mapGetters, mapMutations } from 'vuex';
import router from 'router';


import app from './app';

import { createStore } from 'lib/store/index';
import { jsVars } from 'lib/common/util';

import 'jquery';
import 'bootstrap';


const store = createStore([
    'common',
]);

const pc_min_size = 765;

const Page = new Vue({
    el: '#appBox',
    components: {
        MainPage: () => import('components/MainPage/main.vue'),
    },
    data(){
        return {
            input: 'here',
        };
    },
    computed: {
        ...mapGetters([
        ]),
    },
    watch: {

    },
    mounted(){
        this.init();
    },
    methods: {
        ...mapMutations({
            SetPageSetting: 'SetPageSetting',
        }),
        init(){
            const that = this;
            $(window).bind('resize', () => {
                clearTimeout(that.windowResizeTimer);
                that.windowResizeTimer = setTimeout(() => {
                    let mode_type = 'pc';
                    const width = $('body').width();
                    if (width < pc_min_size) {
                        mode_type = 'mobile';
                    }
                    console.log(width);
                    that.SetPageSetting({ mode_type, width });
                }, 100);
            }).trigger('resize');

            // /* 偵測 adblocker */
            // detectAnyAdblocker().then((detected) => {
            //     that.CheckAdBlock(detected);
            // });
        },
    },
    store,
    router,
});