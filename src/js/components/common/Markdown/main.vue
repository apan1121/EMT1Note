<template>
    <div v-html="parse(content, customSetting, setting)"></div>
</template>
<script>
import { markdown, string } from 'lib/common/util';

const exclude_host = [
];

export default {
    name: 'Markdown',
    components: {},
    filters: {},
    props: {
        content: {
            type: String,
            default(){
                return '';
            },
            required: false,
        },
        customSetting: {
            type: [Array, Object],
            default(){
                return {};
            },
            required: false,
        },
        setting: {
            type: Object,
            default(){
                return {};
            },
            required: false,
        },
    },
    data(){
        return {
            exclude_host,
        };
    },
    computed: {
        filter(){
            const { content } = this;
            // // content = this.nl2br(this.content, true);
            // // console.log('nl2br', content);
            // content = this.brToFlag(content, true);
            // // console.log('brToFlag', content);
            // content = this.escapeHtml(content);
            // // console.log('escapeHtml', content);
            // content = this.brToFlag(content, false);
            // // console.log('brToFlag', content);
            return content;
        },
    },
    watch: {},
    created(){},
    mounted(){},
    updated(){},
    destroyed(){},
    methods: {
        nl2br: string.nl2br,
        parse(content, customSetting, setting){
            const that = this;
            const dom = string.stringToHTML(markdown(this.filter, customSetting, setting));

            // dom.querySelectorAll('a').forEach((element) => {
            //     element.classList.add('js-outsite-link');

            //     if (!element.href.includes('pressplay.cc') || exclude_host.includes(element.host)) {
            //         element.setAttribute('target', '_blank');
            //     }

            //     if (string.validURL(element.href)) {
            //         element.classList.add('break-all');
            //     }
            // });

            setTimeout(() => {
                that.$emit('done');
            }, 1);

            return dom.innerHTML;
        },
        escapeHtml(text){
            const map = {
                // '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;',

                '.': '&#046;',
            };
            return text.replace(/[<>"'.]/g, m => map[m]);
        },
        brToFlag(text, flag){
            if (flag) {
                return text.replace(/<br \/>/g, '[br]');
            }
            return text.replace(/\[br\]/g, '<br />');
        },
    },
};
</script>
<style lang="scss" scoped>
    // ::v-deep strong {
    //     color: $gray-900;
    // }
</style>