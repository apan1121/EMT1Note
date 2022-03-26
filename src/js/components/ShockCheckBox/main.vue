<template>
    <div class="note-box">
        <div class="note-header">
            <h3 class="title">
                失血包紮與休克
            </h3>
            <small>
            </small>
        </div>
        <div class="note-body">
            <img style="width: 100%;" :src="'./dist/img/flow/BloodLose.png'">
            <grid-info :memos="memos"></grid-info>
            <table class="table table-hover bg-white">
                <thead>
                    <tr>
                        <th class="text-center" style="width: 4%">

                        </th>
                        <th class="text-center" style="width: 24%">
                            第一級
                        </th>
                        <th class="text-center" style="width: 24%">
                            第二級
                        </th>
                        <th class="text-center" style="width: 24%">
                            第三級
                        </th>
                        <th class="text-center" style="width: 24%">
                            第四級
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="text-center">失血</th>
                        <td class="text-center">< 15%</td>
                        <td class="text-center">15-30%</td>
                        <td class="text-center">31-40%</td>
                        <td class="text-center">>40%</td>
                    </tr>
                    <tr>
                        <th class="text-center">心跳</th>
                        <td class="text-center">正常</td>
                        <td class="text-center">正常/上升</td>
                        <td class="text-center">上升</td>
                        <td class="text-center">上升</td>
                    </tr>
                    <tr>
                        <th class="text-center">血壓</th>
                        <td class="text-center">正常</td>
                        <td class="text-center">正常</td>
                        <td class="text-center">正常/下降</td>
                        <td class="text-center">下降</td>
                    </tr>
                    <tr>
                        <th class="text-center">脈搏</th>
                        <td class="text-center">正常</td>
                        <td class="text-center">下降</td>
                        <td class="text-center">下降</td>
                        <td class="text-center">下降</td>
                    </tr>
                    <tr>
                        <th class="text-center">呼吸</th>
                        <td class="text-center">正常</td>
                        <td class="text-center">正常</td>
                        <td class="text-center">正常/上升</td>
                        <td class="text-center">上升</td>
                    </tr>
                    <tr>
                        <th class="text-center">尿量</th>
                        <td class="text-center">正常</td>
                        <td class="text-center">正常</td>
                        <td class="text-center">減少</td>
                        <td class="text-center">少許</td>
                    </tr>
                    <tr>
                        <th class="text-center">GCS</th>
                        <td class="text-center">不變</td>
                        <td class="text-center">不變</td>
                        <td class="text-center">變差</td>
                        <td class="text-center">變差</td>
                    </tr>
                </tbody>
            </table>
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
            memos: [
                {
                    title: '出血定義',
                    items: [{
                        title: '動脈出血',
                        content: '湧泉、鮮紅',
                    },{
                        title: '靜脈出血',
                        content: '緩慢暗紅',
                    },{
                        title: '微血管出血',
                        content: '滲出赤紅',
                    }],
                },
                {
                    title: '控制出血',
                    items: [{
                        title: '直接加壓止血',
                        content: '',
                    },{
                        title: '止血帶止血法',
                        content: `- 紗布→彈繃→止血帶
- 止血帶寬度>2.5cm
- 止血帶打到血止住末端無脈搏寫上日期到醫院才解開
                        `,
                    }],
                },
                {
                    title: '包紮',
                    items: [{
                        title: '彈性繃帶',
                        content: `環狀包紮、螺旋包紮、8字包紮
包紮從遠到近`,
                    },{
                        title: '三角巾包紮',
                        content: `頭部包紮、肩部包紮、肢體包紮、懸臂吊帶包紮、腹部內臟外露包紮、異物穿刺包紮`,
                    }],
                },
                {
                    title: '固定',
                    items: [{
                        title: '固定目的',
                        content: `減少疼痛
避免二次傷害
避免傷害惡化`,
                    },{
                        title: '固定原則',
                        content: `遠端脈搏
肢體感覺
運動功能
觀察末梢循環`,
                    },{
                        title: '固定器材',
                        content: `捲式護木
抽氣式護木
骨盆固定帶
(勿用兒童孕婦)
`,
                    }],
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