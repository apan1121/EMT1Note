<template>
    <div class="note-box">
        <div class="note-header">
            <h3 class="title">
                昏迷指數(GCS)
            </h3>
            <small>
            </small>
        </div>
        <div class="note-body">
            <table class="table table-hover bg-white">
                <thead>
                    <tr>
                        <th class="text-center" style="width: 10%">
                            分數
                        </th>
                        <th class="text-center" style="width: 30%">
                            張眼反應<br> （Ｅ）
                        </th>
                        <th class="text-center" style="width: 30%">
                            最佳語言反應<br>（Ｖ）
                        </th>
                        <th class="text-center" style="width: 30%">
                            最佳運動反應<br>（Ｍ）
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="text-center">1</th>
                        <td class="text-center">沒反應</td>
                        <td class="text-center">沒反應</td>
                        <td class="text-center">沒反應</td>
                    </tr>
                    <tr>
                        <th class="text-center">2</th>
                        <td class="text-center">對刺痛張眼</td>
                        <td class="text-center">只能發出聲音</td>
                        <td class="text-center">刺痛時關節下肢僵直</td>
                    </tr>
                    <tr>
                        <th class="text-center">3</th>
                        <td class="text-center">對呼喚張眼</td>
                        <td class="text-center">只能說單詞</td>
                        <td class="text-center">對痛刺激病態屈曲</td>
                    </tr>
                    <tr>
                        <th class="text-center">4</th>
                        <td class="text-center">自動張眼</td>
                        <td class="text-center">回答錯誤</td>
                        <td class="text-center">對痛刺激正常屈曲</td>
                    </tr>
                    <tr>
                        <th class="text-center">5</th>
                        <td class="text-center">--</td>
                        <td class="text-center">回答完整正確</td>
                        <td class="text-center">會定位痛刺激</td>
                    </tr>
                    <tr>
                        <th class="text-center">6</th>
                        <td class="text-center">--</td>
                        <td class="text-center">--</td>
                        <td class="text-center">聽從指示</td>
                    </tr>
                    <tr>
                        <th class="text-center">無法</th>
                        <td class="text-center">眼腫無法張眼</td>
                        <td class="text-center">影響溝通  氣管插管 氣切 失語</td>
                        <td class="text-center">癱瘓其他四肢限制</td>
                    </tr>
                </tbody>
            </table>
            <div class="text-danger">
                ＮＴ：無法計算 ，一分計算 <br>
                最佳語言反應：氣管內插管（Ｅ），氣切（Ｔ）
            </div>
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
                    title: '意識檢查',
                    content: `呼喚病患，確認意識`,
                    items: [],
                },
                {
                    title: '檢查呼吸',
                    content: `確認無呼吸`,
                    items: [],
                },
                {
                    title: '檢查頸動脈',
                    content: `數 1000 至 10007 ，確認無脈搏立刻壓胸`,
                    items: [],
                },
                {
                    title: '壓胸',
                    content: `透過壓胸製造血液循環，血液中剩餘的氧氣可以延緩腦損傷，**30下後給氧**。**每分鐘頻率 100~120**，**深度最少5公分**`,
                    items: [],
                },
                {
                    title: '叫 119 + AED',
                    content: `請周遭民眾打119 與拿 AED`,
                    items: [],
                },
                {
                    title: '暢通呼吸道',
                    content: `給兩口氣確認呼吸道是否暢通，無暢通給予**口咽**`,
                    items: [],
                },
                {
                    title: '人工給氧',
                    content: `透過甦醒球給予患者氧氣，**每 30 次壓胸後給予兩口氧氣**，**甦醒球只壓 1/3**`,
                    items: [],
                },
                {
                    title: 'AED',
                    content: `貼上 AED 貼片分析心律，由機器決定是否電擊，第一次無需電擊立即壓胸，後續無需電擊先檢查生命徵象`,
                    items: [],
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