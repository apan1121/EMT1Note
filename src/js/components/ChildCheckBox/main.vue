<template>
    <div class="note-box">
        <div class="note-header">
            <h3 class="title">
                小兒評估
            </h3>
            <small>
            </small>
        </div>
        <div class="note-body">
            <img style="width: 100%;" :src="'./dist/img/flow/ChildCheck.png'">
            <grid-info :memos="memos"></grid-info>
            <table class="table table-hover bg-white">
                <thead>
                    <tr>
                        <th class="text-center" style="width: 5%">
                            A
                        </th>
                        <th class="text-center" style="width: 5%">
                            B
                        </th>
                        <th class="text-center" style="width: 5">
                            C
                        </th>
                        <th class="text-center" style="width: 85%">
                            初步臆測
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="text-center">正常</td>
                        <td class="text-center text-danger">異常</td>
                        <td class="text-center">正常</td>
                        <td class="text-center">呼吸問題（呼吸窘迫）</td>
                    </tr>
                    <tr>
                        <td class="text-center text-danger">異常</td>
                        <td class="text-center text-danger">異常</td>
                        <td class="text-center">正常</td>
                        <td class="text-center">嚴重呼吸問題（呼吸衰竭）</td>
                    </tr>
                    <tr>
                        <td class="text-center">正常</td>
                        <td class="text-center">正常</td>
                        <td class="text-center text-danger">異常</td>
                        <td class="text-center">循環問題（代償性休克）</td>
                    </tr>
                    <tr>
                        <td class="text-center text-danger">異常</td>
                        <td class="text-center">正常</td>
                        <td class="text-center text-danger">異常</td>
                        <td class="text-center">嚴重循環問題（低血壓性休克）</td>
                    </tr>
                    <tr>
                        <td class="text-center text-danger">異常</td>
                        <td class="text-center text-danger">異常</td>
                        <td class="text-center text-danger">異常</td>
                        <td class="text-center">心肺衰竭（考慮立即CPR）</td>
                    </tr>
                    <tr>
                        <td class="text-center text-danger">異常</td>
                        <td class="text-center">正常</td>
                        <td class="text-center">正常</td>
                        <td class="text-center">中樞神經系統中毒或代謝問題</td>
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
                    title: 'Ａ 外觀評估',
                    items: [{
                        title: '肌張力',
                    },{
                        title: '與人互動性',
                    },{
                        title: '是否容易安撫',
                    },{
                        title: '是否眼神呆滯',
                    },{
                        title: '說話情況',
                    },{
                        title: '是否持續哭鬧',
                    }],
                },
                {
                    title: 'Ｂ 呼吸評估',
                    items: [{
                        title: '呼吸音',
                    },{
                        title: '輔助肌',
                    },{
                        title: '鼻煽動',
                    },{
                        title: '氣喘率',
                    }],
                },
                {
                    title: 'Ｃ 循環評估',
                    items: [{
                        title: '膚色',
                    },{
                        title: '脈搏',
                    },{
                        title: '微血管填充',
                        content: '手腳掌按壓',
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