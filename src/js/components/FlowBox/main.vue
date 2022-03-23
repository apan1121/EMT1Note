<template>
    <div class="emt-flow-box">
        <div class="view-area"
            :style="viewStyle"
            @dblclick="resetZoom"
        >
        </div>
        <div
            v-if="!isMobile"
            ref="previewArea"
            class="preview-area"
            @mousemove="checkPosition"
            @click="zoomIn"
        >
            <img :src="flowPic">
        </div>

        <div v-else class="download-btn">
            <i class="fas fa-cloud-download-alt"></i>
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
            flowPic: './dist/img/flow/EMT-Flow@2x-min.png',
            position: false,
            zoom: 3,
        };
    },
    computed: {
        ...mapGetters([
            'PageSetting_width',
        ]),
        isMobile(){
            return this.PageSetting_width < 700;
        },
        viewStyle(){
            const that = this;
            const style = {
                'background-image': `url('${that.flowPic}')`
            };

            if (that.position === false) {
                style['background-size'] = 'cover';
                style['background-position'] = 'center';
            } else {
                style['background-size'] = `${that.zoom * 100}%`;
                style['background-position'] = `${that.position.X}% ${that.position.Y}%`;
            }

            console.log(style);
            return style;
        },
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
        zoomIn(){
            let { zoom } = this;

            zoom += 1;

            if (zoom > 6) {
                zoom = 6;
            }

            this.zoom = zoom;
        },
        resetZoom(){
            this.zoom = 3;
            this.position = false;
        },
        checkPosition(e){
            const { clientX, clientY } = e;
            const { left, right, top, bottom } = this.$refs.previewArea.getBoundingClientRect();
            const maxX = right - left;
            const maxY = bottom - top;

            const X = ((clientX - left) / maxX) * 100;
            const Y = ((clientY - top) / maxY) * 100;

            console.log( {
                X,
                Y,
            });
            this.position = {
                X,
                Y,
            };
        },
    },
};
</script>
<style lang="scss" scoped>
</style>