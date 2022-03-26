<template>
    <div class="note-box">
        <div class="note-header">
            <h3 class="title">
                非創傷流程速記
            </h3>
            <small>
            </small>
        </div>
        <div class="note-body">
            <div class="video-player-box">
                <iframe class="video-player" width="100%" src="https://www.youtube.com/embed/boVzxInsoDs" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <markdown
                class="memo-content"
                :content="content"
            ></markdown>
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
            content: `

---- 現場評估 ----
~~~~
    評估現場是否安全
    住家 安全
    戴手套口罩
    必要時戴護目鏡穿隔離衣
    先生你好
    我們是救護人員來協助你
~~~~


---- 意識 (**輕聲痛否**) ----
~~~~
    先生先生
    幫幫我 我好喘
    意識清楚
~~~~

---- 呼吸道 ----
~~~~
    **評估呼吸道有無鼾音雜音**
    沒有異音
~~~~

---- 呼吸 ----
~~~~
    **評估呼吸深淺快慢 評估時間不超過10秒**
    10秒4次張口呼吸 請副手給予簡單面罩
~~~~

----循環----
~~~~
    **評估兩側橈動脈**
    摸得到對等
~~~~

~~~~
    **微血管回填充時間**
    1秒
~~~~

~~~~
    **末梢是否濕冷**
    正常
~~~~

~~~~
    **膚色是否蒼白 臉色是否發紺**
    正常
~~~~


---- 進階評估 ----
~~~~
    **測量血壓 脈搏**
    **測量血氧**
    **測量體溫**
    體溫36.5°C
    血氧89%
    血壓105/53mm-Hg
    脈搏92次/分
~~~~



----副手： 詢問病史-----
~~~~
    請問現場有家屬嗎？
    有
~~~~

主訴
~~~~
    請問他哪裡不舒服？怎麼不舒服？不舒服多久了？
    突然覺得喘 已經15分鐘了
~~~~

過去
~~~~
    請問他之前在做什麼？
    看電視
~~~~

吃
~~~~
    請問他上一餐什麼時候吃的？
    早上9點
~~~~

過
~~~~
    請問他有過去病史嗎？
    心臟病
~~~~

藥
~~~~
    有在服用什麼藥物嗎？
    心臟病的藥
~~~~

敏
~~~~
    有對什麼食物藥物過敏嗎？
    沒有
~~~~

感
~~~~
    請問他還有哪裡不舒服嗎？
    沒有
~~~~
~~~~
    好 謝謝
~~~~


---- 評估 ASL BSL ---
~~~~
    學姊 病患15分鐘前開始覺得喘 有心臟病史
    好
    由於病患血氧低於90% 為危急個案
    現在上車後送醫院
    好
~~~~

---- 二評 八大生命徵象 -----

設備檢查
~~~~
    ** 測量血壓脈搏 **
    ** 測量血氧 **
    ** 測量體溫 **
    體溫36.5°C
    血氧94%
    血壓105/90mm-Hg 脈搏93次/分
~~~~

GCS
~~~~
    先生 你眼睛可以看著我
    跟我說你的名字 手動一下嗎？
    我叫李大強 手可以動
    意識清楚 GCS15分
~~~~

瞳孔
~~~~
    檢查兩側瞳孔是否等大 對光是否有反應
    3mm等大
    正常
~~~~

呼吸
~~~~
    評估呼吸
    10秒約4下
~~~~

膚色
~~~~
    檢查膚色
    正常
~~~~

---- 二評 身體檢查 ----

頸部
~~~~
    檢查氣管是否偏移 頸靜脈是否怒張
    正常
    先生 我要檢查你的胸部 需要拉開你的衣服一下
~~~~

胸
~~~~
    視診胸部是否有紅疹紫斑
    呼吸起伏是否對稱
    聽診兩側肺音是否對等清晰
    正常
~~~~

腹
~~~~
    先生 現在檢查你的腹部
    ** 視診腹部是否腫脹 **
    ** 先生 以你的肚臍為基準分為四個象限 **
    有沒有哪邊比較不舒服
    沒有
    ** 觸診腹部是否壓痛 **
    正常
~~~~

四肢檢查
~~~~
    檢查上肢是否有紅疹紫斑針孔水腫浮腫
    正常
    檢查下肢是否有紅疹紫斑針孔水腫浮腫
    正常
~~~~

四肢運動檢查
~~~~
    先生 我這樣摸你的手有感覺請動一下
    先生 我這樣摸你的腳有感覺請動一下
~~~~

----通報-----
~~~~
    指揮中心 旺英91車上載送男性50歲
    主要問題 呼吸喘 血氧89%
    過去有心臟病史
    已給簡單面罩6公升/分鐘
    目前血氧94% 其他生命徵象正常
    預計5分鐘後到達醫院
~~~~
`,
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