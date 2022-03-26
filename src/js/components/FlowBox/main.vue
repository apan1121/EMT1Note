<template>
    <div class="emt-flow-box">
        <div class="view-area"
            :style="viewStyle"
            @dblclick="resetZoom"
        >
        </div>

        <div v-if="position" class="control-mask" @click.stop="zoomIn">
            <div class="control-button" rel="up" @click.stop="moveView('top', -10)">
                <i class="fas fa-caret-up"></i>
            </div>
            <div class="control-button" rel="down" @click.stop="moveView('top', +10)">
                <i class="fas fa-caret-down"></i>
            </div>
            <div class="control-button" rel="left" @click.stop="moveView('left', -10)">
                <i class="fas fa-caret-left"></i>
            </div>
            <div class="control-button" rel="right" @click.stop="moveView('left', 10)">
                <i class="fas fa-caret-right"></i>
            </div>
        </div>


        <div
            v-if="!isMobile"
            ref="previewArea"
            class="preview-area"
            @click.stop="checkPosition"
        >
            <img :src="flowPic">
        </div>
        <div v-else class="download-btn" @click="download">
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

            if (zoom > 6) {
                zoom = 6;
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
    },
};
</script>
<style lang="scss" scoped>
</style>