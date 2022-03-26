<template>
    <div class="note-box">
        <div class="note-header">
            <h3 class="title">
                老人評估
            </h3>
            <small>
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
                    title: '評估原則',
                    items: [{
                        title: '病史',
                        content: `年紀 慢性病 藥物史
聽力視力下降 增加困難度
`,
                    },{
                        title: '理學檢查',
                        content: `區分 急性疾病 慢性疾病
病人易累 保暖衣多 增加困難度
`,
                    }],
                },
                {
                    title: '理學評估處置 1',
                    items: [{
                        title: '肺炎',
                        content: `死亡主因，呼吸道細菌感染。
不易察覺
治療：注意呼吸道、維持氧濃度
`,
                    },{
                        title: '慢性阻塞性肺病',
                        content: `抽菸史
過度焦慮發紺氣喘異常呼吸音
呼吸困難 使用輔助肌呼吸
使用支氣管擴張劑治療
`,
                    },{
                        title: '肺栓塞',
                        content: `呼吸困難致命原因
維持呼吸道呼吸循環支持
下肢靜脈栓塞(經濟艙症候群)
`,
                    },{
                        title: '鬱血性心臟衰竭',
                        content: `急性心肌梗塞
呼吸短促 端坐呼吸 四肢水腫
呼吸濕囉音
給氧半坐臥必要時正壓呼吸
`,
                    },{
                        title: '主動脈剝離',
                        content: `常發於沒控制高血壓
高血壓  動脈中魔壞死 動脈粥狀硬化
嚴重轉移後背胸痛 高血壓 心衰竭
休克 主動脈閉鎖不全 末梢脈搏異常
`,
                    }
                    ],
                },
                {
                    title: '理學評估處置 2',
                    items: [
{
                        title: '創傷',
                        content: `###### 頭部外傷
硬腦膜上出血(EDH)
    - 4至6小時蜜月期(清明期),死亡率最高腦出血
硬腦膜下出血(SDH)
    - 靜脈出血，幾天至週才會影響神經
蜘蛛膜下腔出血(SDH)
    - 可能是動脈瘤

###### 胸部外傷

###### 腹部外傷

###### 肌肉骨骼外傷
骨盆腔骨折很高機率死亡
`,
                    },
                    {
                        title: '腦中風',
                        content: `缺血性中風（阻塞）
出血性中風（腦血管滲漏破裂）
3hr 血栓溶解劑 6hr 動脈取栓術
要排除低血糖與抽蓄

- 眼歪嘴斜
- 單/兩側肢體無力
- 意識模糊昏迷
- 語言不清構音障礙溝通困難
- 吞嚥困難流口水
- 眩暈嘔吐頭痛
- 步態運動失調
- 失禁
- 視力障礙
- 抽蓄
- 情緒驟變
`,
                    }
                    ],
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