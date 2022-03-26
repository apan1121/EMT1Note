<template>
    <div class="main-page">
        <h1>EMT-1 學習筆記</h1>
        <div class="alert alert-primary" role="alert">
            <strong>筆記來由：</strong><br>
            因為作者想考救援潛水員，所以先來考初級救護證照。這張證照真的沒有想像中的簡單，在非醫護相關科系的情況下，書中的內容對我來說都是另一個世界，努力做了一份自己認為重要內容的筆記，也想釋出這份筆記希望能幫助到接下來要考試的救護夥伴，謝謝你們對這社會的用心，希望這份證照能讓你能幫助到更多需要幫助的人。
        </div>

        <div class="row mb-4">
            <div class="col-12">
                <template v-for="tab in tabs">
                    <button :key="tab.key"
                        class="btn mr-3"
                        :class="{
                            'btn-secondary': tab.key !== focusTab,
                            'btn-primary': tab.key === focusTab
                        }"
                        @click="focusTab = tab.key"
                    >
                        <i :class="tab.icon"></i> {{ tab.text }}
                    </button>
                </template>
            </div>
        </div>
        <div v-show="focusTab === 'note'" class="row">
            <div class="col-12 mb-3">
                <select2
                    v-model="NoteGotoBox"
                    :options="NoteComponentList"
                    :settings="{ placeholder: '移動到' }"
                    style="max-width: 200px;"
                />
            </div>
            <div class="col-12 mb-3">
                <flow-box></flow-box>
            </div>
            <div class="col-12">
                <div ref="gridWrapper" class="grid-wrapper">
                    <template v-for="(componentInfo, index) in NoteComponentList">
                        <div :key="componentInfo.id" class="grid">
                            <component
                                :is="componentInfo.id"
                                :name="componentInfo.id"
                                :style="{ background: color[index % color.length]}"
                                :class="{ focus: componentInfo.id === QuickGotoBox }"
                            ></component>
                        </div>
                        <template v-if="index % 4 == 3">
                            <div :key="`ads_${componentInfo.id}`" class="grid">
                                <ads-box></ads-box>
                            </div>
                        </template>
                    </template>
                </div>
            </div>
        </div>

        <div v-show="focusTab === 'quick'" class="row">
            <div class="col-12 mb-3">
                <select2
                    v-model="QuickGotoBox"
                    :options="QuickComponentList"
                    :settings="{ placeholder: '移動到', width: '100%' }"
                    style="max-width: 200px; min-width: 200px;"
                />
            </div>
            <div class="col-12 mb-3">
                <div ref="gridWrapper" class="grid-wrapper">
                    <template v-for="(componentInfo, index) in QuickComponentList">
                        <div :key="componentInfo.id" class="grid">
                            <component
                                :is="componentInfo.id"
                                :name="componentInfo.id"
                                :style="{ background: color[index % color.length]}"
                                :class="{ focus: componentInfo.id === QuickGotoBox }"
                            ></component>
                        </div>
                    </template>
                </div>
            </div>
        </div>

        <div v-show="focusTab === 'other'" class="row">
            <!-- <div class="col-12 mb-3">
                <select2
                    v-model="QuickGotoBox"
                    :options="QuickComponentList"
                    :settings="{ placeholder: '移動到', width: '100%' }"
                    style="max-width: 200px; min-width: 200px;"
                />
            </div> -->
            <div class="col-12 mb-3">
                <div ref="gridWrapper" class="grid-wrapper">
                    <div v-for="(componentInfo, index) in OtherComponentList" :key="componentInfo.id" class="grid">
                        <component
                            :is="componentInfo.id"
                            :name="componentInfo.id"
                            :style="{ background: color[index % color.length]}"
                            :class="{ focus: componentInfo.id === QuickGotoBox }"
                        ></component>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Masonry from 'masonry-layout';
import { mapActions, mapMutations, mapGetters } from 'vuex';
import { detectAnyAdblocker } from 'just-detect-adblock';

import Select2 from 'v-select2-component';
// import $ from 'jquery';
// import 'bootstrap';

// import 'app';
// import { string, jsVars, popup, trackJS, localStorage, ppPanel } from 'lib/common/util';

export default {
    components: {
        Select2,

        AdsBox: () => import('components/AdsBox/main.vue'),

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


        BLSFlowBox: () => import('components/BLSFlowBox/main.vue'),
        ALSFlowBox: () => import('components/ALSFlowBox/main.vue'),
        OHCAFlowBox: () => import('components/OHCAFlowBox/main.vue'),
        CriticalShorthandBox: () => import('components/CriticalShorthandBox/main.vue'),

        OtherWebBox: () => import('components/OtherWebBox/main.vue'),
    },
    filters: {},
    props: {},
    data(){
        return {
            tabs: [
                {
                    key: 'note',
                    icon: 'fas fa-book-open',
                    text: '筆記',
                },
                {
                    key: 'quick',
                    icon: 'fas fa-rocket',
                    text: '速記',
                },
                {
                    key: 'other',
                    icon: 'fas fa-info-circle',
                    text: '其他',
                },
            ],
            focusTab: 'note',
            color: [
                'rgba(247, 195, 37, 0.2)',
                'rgba(101, 88, 245, 0.2)',
                'rgba(44, 136, 217, 0.2)',
                'rgba(232, 131, 58, 0.2)',
                'rgba(211, 69, 91, 0.2)',
                'rgba(26, 174, 159, 0.2)',
                'rgba(137, 122, 95, 0.2)',
            ],
            NoteComponentList: [
                {
                    id: 'EnvSafeBox',
                    text: '現場安全評估',
                },
                {
                    id: 'OutOfTroubleBox',
                    text: '脫困與搬運傷患',
                },
                {
                    id: 'StartRuleBox',
                    text: 'START 檢傷分類原則',
                },
                {
                    id: 'AVPUBox',
                    text: '意識檢查',
                },
                {
                    id: 'FirstStepBLSBox',
                    text: '初步檢查-非創傷(BLS)',
                },
                {
                    id: 'FirstStepALSBox',
                    text: '初步檢查-創傷(ALS)',
                },
                {
                    id: 'AuxiliaryInspectionBox',
                    text: '輔助檢查',
                },
                {
                    id: 'AskMedicalHistoryBox',
                    text: '詢問病史',
                },
                {
                    id: 'DesperateCheckBox',
                    text: '危急評估',
                },
                {
                    id: 'SecondStepBLSBox',
                    text: '二度評估-非創傷(BLS)',
                },
                {
                    id: 'SecondStepALSBox',
                    text: '二度評估-創傷(ALS)',
                },
                {
                    id: 'ISBARBox',
                    text: 'ISBAR',
                },
                {
                    id: 'StretcherAndCardBox',
                    text: '上擔架床與救護車',
                },
                {
                    id: 'GoToHospitalBox',
                    text: '轉送與無線電報告',
                },
                {
                    id: 'OHCACheckBox',
                    text: '到院前心肺停止(OHCA)',
                },
                {
                    id: 'GCSCheckBox',
                    text: '昏迷指數(GCS)',
                },
                {
                    id: 'CervicalLimitBox',
                    text: '頸椎限制',
                },
                {
                    id: 'ShockCheckBox',
                    text: '失血包紮與休克',
                },
                {
                    id: 'BreathCheckBox',
                    text: '呼吸評估',
                },
                {
                    id: 'ChildCheckBox',
                    text: '小兒評估',
                },
                {
                    id: 'PregnantCheckBox',
                    text: '孕婦評估',
                },
                {
                    id: 'OlderCheckBox',
                    text: '老人評估',
                },
            ],
            QuickComponentList: [
                {
                    id: 'ALSFlowBox',
                    text: '創傷流程速記',
                },
                {
                    id: 'BLSFlowBox',
                    text: '非創傷流程速記',
                },
                {
                    id: 'OHCAFlowBox',
                    text: 'OHCA 流程速記',
                },
                {
                    id: 'CriticalShorthandBox',
                    text: '危急評估速記',
                },
            ],
            OtherComponentList: [
                {
                    id: 'OtherWebBox',
                    text: '參考網站',
                },
            ],


            NoteGotoBox: '',
            QuickGotoBox: '',
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
        NoteGotoBox(){
            if (!!this.NoteGotoBox && 1) {
                const { NoteGotoBox } = this;
                const { top } = $(`.note-box[name="${NoteGotoBox}"]`).offset();

                $('html, body').stop().animate({ scrollTop: top - 30 }, 500, 'swing');

                setTimeout(() => {
                    this.NoteGotoBox = '';
                }, 5000);
            }
        },
        QuickGotoBox(){
            if (!!this.QuickGotoBox && 1) {
                const { QuickGotoBox } = this;
                const { top } = $(`.note-box[name="${QuickGotoBox}"]`).offset();

                $('html, body').stop().animate({ scrollTop: top - 30 }, 500, 'swing');

                setTimeout(() => {
                    this.QuickGotoBox = '';
                }, 5000);
            }
        },
    },
    created(){
        setTimeout(() => {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }, 500);
    },
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