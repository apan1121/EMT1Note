<template>
    <div class="note-box">
        <div class="note-header">
            <h3 class="title">
                危急評估
            </h3>
            <small>
                判斷是否危急儘速後送就近適當醫療機構途中執行二次評估<br>
                <strong>危急每 5 分鐘評估一次非危急15分鐘評估一次</strong>
            </small>
        </div>
        <div class="note-body">
            <grid-info :memos="memos"></grid-info>
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
            memos: [
                {
                    title: 'Ａ 呼吸道',
                    content: `呼吸道是否成功開啟`,
                },
                {
                    title: 'Ｂ 呼吸',
                    content: `呼吸每分鐘 > 29 or < 10
血氧 < 90%
吸入性傷害
發紺`,
                },
                {
                    title: 'Ｃ 循環',
                    content: `脈搏每分鐘>15 or <50
收縮壓 >200 or <90 mmHg
微血管填充 > 2秒（CTR 壓指甲）
體溫 > 41 or < 32 度c`,
                },
                {
                    title: 'Ｄ 失能',
                    content: `昏迷指數（ＧＣＳ） < 14
血糖 < 60 mg/dl 或顯示 high`,
                },
                {
                    title: 'E 傷患身體',
                    content: `顏面會陰體表 > 25% 二度灼傷以上
重大電擊
化學、吸入灼燙傷
穿刺傷
大量皮下氣腫
氣管支氣管損傷
內臟外露
手腕腳踝以上截肢
兩處以上骨折
上臂以上骨折
骨盆腔骨折
頭骨骨折
肢體無脈搏
癱瘓
壓碎或嚴重撕裂傷
`,
                },
                {
                    title: '病史',
                    content: `急性中風   缺血性休克
持續或剛結束抽緒
危及生命的中毒
小兒評估危急
急產或剛完成接生
毒蛇咬傷
溺水`,
                },
                {
                    title: '機轉',
                    content: `成人 > 6m 摔落
小兒 > 3m 或大於身高 x 2 摔落
脫困 > 20 min
高能量撞擊
- 肢體車輛輾過
- 被拋出車輛
- 同車有死亡
- 車體變形凹陷嚴重
- 車速 64 km/h 以上
- 行人被 35 km/h 撞擊
`,
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