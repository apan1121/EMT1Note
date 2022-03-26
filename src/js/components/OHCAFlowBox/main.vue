<template>
    <div class="note-box">
        <div class="note-header">
            <h3 class="title">
                OHCA 流程速記
            </h3>
            <small>
            </small>
        </div>
        <div class="note-body">
            <div class="video-player-box">
                <iframe class="video-player" width="100%" src="https://www.youtube.com/embed/eCrqVUuuCPQ" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    戴手套口罩 必要時戴護目鏡穿隔離衣
    先生你好 我們是救護人員來協助你
~~~~



----- 意識 -----
~~~~
    叫 > 先生先生
    拍 > 先生先生
    痛 > 疼痛刺激
    學長 病患沒有反應 請準備急救器材
~~~~

---- 評估脈搏 呼吸 ------
~~~~
    > 同時評估頸動脈及有無適當呼吸
    副手 > 準備 BVM 甦醒球
    評估時間不超過10秒
~~~~

---- 主手 C  副手 D ------
~~~~
    > 學長 病患OHCA 請使用AED
    主手 > 按壓胸部 (1上 2上 3上 ...)
    副手 > 準備 AED
    (將電極片貼在病人胸部的皮膚上)
    (將電極片的插頭插入閃燈旁的插孔內)
    (正在分析病人心律)
    主手 > 離開
~~~~

~~~~
    (不要碰觸病人)
    (建議電擊)
    (正在充電)
    (不要碰觸病人身體)
    (立刻進行電擊 立刻按下橘色按鈕)
    副手 > 離開
~~~~

~~~~
    (完成電擊)
    (暫停)
    (開始心肺復甦)
    主手 > 繼續心肺復書 (1上 2上 3上 ...)
    副手 > 開啟氧氣瓶接上 BVM
~~~~

---- 主手 A 副手 A ------
~~~~
    主手 > 確認口中有無異物
    沒有
    主手 > 壓一
    壓二
    主手 > 氣吹得進去 胸部有起伏
    副手 > 放入口咽
~~~~

---- 主手 C ------
~~~~
    主手 > 繼續心肺復書 (1上 2上 3上 ...)
~~~~

---- 副手病史 ------
~~~~
    副手 > 請問現場有家屬嗎？
    有
    主訴 > 請問他哪裡不舒服？怎麼不舒服？不舒服多久了？
    他10分鐘前突然覺得胸口痛就倒下來了
~~~~

~~~~
    之前 > 他之前在做什麼？
    看電視

    吃 > 他上一餐什麼時候吃的？
    早上9點

    過 > 請問他有什麼過去病史嗎？
    心臟病

    藥 > 有在服用什麼藥物嗎？
    心臟病的藥

    敏 > 有沒有對什麼食物藥物過敏？
    沒有

    感 > 請問他還有哪裡不舒服嗎？
    沒有
    好 謝謝你
~~~~

---- 主手 C 副手 B ------
~~~~
    副手 > 給氣
    吹一
    吹二
    主手 > 按壓
    副手 > 給氣
    吹一
    吹二
    主手 > 按壓
    副手 > 給氣
    吹一
    吹二
~~~~

---- E 二次評估 ------
~~~~
    主副手交換
    (停止心肺復甦)
    (正在分析病人心律)
    (不要碰觸病人身體)
    (正在分析病人心律 不建議電擊 暫停)
    (如有需要 開始心肺復甦)

    主手 > 評估脈搏
    沒有脈搏 持續急救
    ....
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