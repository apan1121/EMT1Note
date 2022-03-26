<template>
    <div class="main-page">
        <h1>EMT-1 學習筆記</h1>
        <div class="alert alert-primary" role="alert">
            <strong>筆記來由：</strong><br>
            因為作者想考救援潛水員，所以先來考初級救護證照。這張證照真的沒有想像中的簡單，在非醫護相關科系的情況下，書中的內容對我來說都是另一個世界，努力做了一份自己認為重要內容的筆記，也想釋出這份筆記希望能幫助到接下來要考試的救護夥伴，謝謝你們對這社會的用心，希望這份證照能讓你能幫助到更多需要幫助的人。
        </div>

        <div class="row">
            <div class="col-12 mb-3">
                <flow-box></flow-box>
            </div>
            <div class="col-12">
                <div ref="gridWrapper" class="grid-wrapper">
                    <div v-for="(component_name, index) in componentList" :key="component_name" class="grid">
                        <component :is="component_name" :style="{ background: color[index % color.length]}"></component>
                    </div>
                    <!-- <div class="grid mb-3">
                        <env-safe-box></env-safe-box>
                    </div>
                    <div class="grid mb-3">
                        <out-of-trouble-box></out-of-trouble-box>
                    </div>
                    <div class="grid mb-3">
                        <start-rule-box></start-rule-box>
                    </div>
                    <div class="grid mb-3">
                        <a-v-p-u-box></a-v-p-u-box>
                    </div>
                    <div class="grid mb-3">
                        <first-step-b-l-s-box></first-step-b-l-s-box>
                    </div>
                    <div class="grid mb-3">
                        <first-step-a-l-s-box></first-step-a-l-s-box>
                    </div>
                    <div class="grid mb-3">
                        <auxiliary-inspection-box></auxiliary-inspection-box>
                    </div>

                    <div class="grid mb-3">
                        <ask-medical-history-box></ask-medical-history-box>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Masonry from 'masonry-layout';
import { mapActions, mapMutations, mapGetters } from 'vuex';
import { detectAnyAdblocker } from 'just-detect-adblock';

// import $ from 'jquery';
// import 'bootstrap';

// import 'app';
// import { string, jsVars, popup, trackJS, localStorage, ppPanel } from 'lib/common/util';

export default {
    components: {
        FlowBox: () => import('components/FlowBox/main.vue'),
        EnvSafeBox: () => import('components/EnvSafeBox/main.vue'),
        OutOfTroubleBox: () => import('components/OutOfTroubleBox/main.vue'),
        StartRuleBox: () => import('components/StartRuleBox/main.vue'),
        AVPUBox: () => import('components/AVPUBox/main.vue'),
        FirstStepBLSBox: () => import('components/FirstStepBLSBox/main.vue'),
        FirstStepALSBox: () => import('components/FirstStepALSBox/main.vue'),
        AuxiliaryInspectionBox: () => import('components/AuxiliaryInspectionBox/main.vue'),
        AskMedicalHistoryBox: () => import('components/AskMedicalHistoryBox/main.vue'),
        DesperateCheckBox: () => import('components/DesperateCheckBox/main.vue'),
        SecondStepBLSBox: () => import('components/SecondStepBLSBox/main.vue'),
        SecondStepALSBox: () => import('components/SecondStepALSBox/main.vue'),
        ISBARBox: () => import('components/ISBARBox/main.vue'),
        StretcherAndCardBox: () => import('components/StretcherAndCardBox/main.vue'),
        GoToHospitalBox: () => import('components/GoToHospitalBox/main.vue'),
        OHCACheckBox: () => import('components/OHCACheckBox/main.vue'),
        GCSCheckBox: () => import('components/GCSCheckBox/main.vue'),
        CervicalLimitBox: () => import('components/CervicalLimitBox/main.vue'),
        ShockCheckBox: () => import('components/ShockCheckBox/main.vue'),
        BreathCheckBox: () => import('components/BreathCheckBox/main.vue'),
        ChildCheckBox: () => import('components/ChildCheckBox/main.vue'),
        PregnantCheckBox: () => import('components/PregnantCheckBox/main.vue'),
        OlderCheckBox: () => import('components/OlderCheckBox/main.vue'),
    },
    filters: {},
    props: {},
    data(){
        return {
            color: [
                'rgba(247, 195, 37, 0.2)',
                'rgba(101, 88, 245, 0.2)',
                'rgba(44, 136, 217, 0.2)',
                'rgba(232, 131, 58, 0.2)',
                'rgba(211, 69, 91, 0.2)',
                'rgba(26, 174, 159, 0.2)',
                'rgba(137, 122, 95, 0.2)',
            ],
            componentList: [
                'EnvSafeBox',
                'OutOfTroubleBox',
                'StartRuleBox',
                'AVPUBox',
                'FirstStepBLSBox',
                'FirstStepALSBox',
                'AuxiliaryInspectionBox',
                'AskMedicalHistoryBox',
                'DesperateCheckBox',
                'SecondStepBLSBox',
                'SecondStepALSBox',
                'ISBARBox',
                'StretcherAndCardBox',
                'GoToHospitalBox',
                'OHCACheckBox',
                'GCSCheckBox',
                'CervicalLimitBox',
                'ShockCheckBox',
                'BreathCheckBox',
                'ChildCheckBox',
                'PregnantCheckBox',
                'OlderCheckBox',
            ],
        };
    },
    computed: {
        ...mapGetters([
        ]),
        route(){
            return this.$route;
        },
    },
    watch: {
    },
    created(){},
    mounted(){
        this.init();

        // this.$nextTick(() => {
        //     new Masonry(this.$refs.gridWrapper, {
        //         itemSelector: '.grid',
        //     });

        // });
    },
    updated(){},
    destroyed(){},
    methods: {
        ...mapActions({}),
        ...mapMutations({
            SetPageSetting: 'SetPageSetting',
            CheckAdBlock: 'CheckAdBlock',
        }),
        init(){
            const that = this;
            // $(window).bind('resize', () => {
            //     clearTimeout(that.windowResizeTimer);
            //     that.windowResizeTimer = setTimeout(() => {
            //         let mode_type = 'pc';
            //         const width = $('body').width();
            //         if (width < pc_min_size) {
            //             mode_type = 'mobile';
            //         }
            //         that.SetPageSetting({ mode_type, width });
            //     }, 100);
            // }).trigger('resize');

            /* 偵測 adblocker */
            detectAnyAdblocker().then((detected) => {
                that.CheckAdBlock(detected);
            });
        },
    },
};
</script>
<style lang="scss" scoped>
</style>