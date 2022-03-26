<template>
    <div class="emt-flow-box"
    >

        <image-zoom
        	:regular="flowPic"
	        :zoom="flowPic"
            :zoom-amount="zoom"
            img-class="img-fluid"
        ></image-zoom>

        <div class="download-btn" @click.stop="download">
            <i class="fas fa-cloud-download-alt"></i>
        </div>
    </div>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';

import imageZoom from 'vue-image-zoomer';

// import $ from 'jquery';
// import 'bootstrap';

// import 'app';
// import { string, jsVars, popup, trackJS, localStorage, ppPanel } from 'lib/common/util';

export default {
    components: {
        imageZoom,
    },
    filters: {},
    props: {},
    data(){
        return {
            flowPic: './dist/img/flow/EMT-Flow@2x-min.png',
            position: false,
            zoom: 6,
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
                'background-image': `url('${that.flowPic}')`,
                'background-repeat': 'none',
            };

            if (that.position === false) {
                style['background-size'] = 'cover';
                style['background-position'] = 'center';
            } else {
                style['background-size'] = `${that.zoom * 100}%`;
                style['background-position'] = `${that.position.X}% ${that.position.Y}%`;
            }

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

            if (zoom > 10) {
                zoom = 10;
            }

            this.zoom = zoom;
        },
        resetZoom(){
            this.zoom = 3;
            this.position = false;
        },
        moveView(direction, amount){
            const position = JSON.parse(JSON.stringify(this.position));
            console.log('move', position, direction, amount);
            switch (direction) {
                case 'left':
                    position['X'] += amount * this.zoom;
                    break;
                case 'top':
                    position['Y'] += amount * this.zoom;
                    break;
            }
            console.log(position);
            if (position.X < 0) {
                position.X = 0;
            }

            if (position.Y < 0) {
                position.Y = 0;
            }

            this.position = position;
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
        download(){
            const link = document.createElement('a');
            link.href = this.flowPic;
            link.download = "EMT-1 筆記.png";
            link.click();
        },
        test(){
            console.log('test');
        },
    },
};
</script>
<style lang="scss" scoped>
</style>