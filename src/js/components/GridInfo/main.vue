<template>
    <div class="grid-wrapper">
        <div v-for="(memo, memosIndex) in memos" :key="memosIndex" class="grid">
            <div
                class="memo"
            >
                <div class="memo-title" v-text="memo.title"></div>
                <markdown
                    v-if="memo.content"
                    class="memo-content"
                    :custom-setting="['link', 'strong', 'paragraph']"
                    :content="memo.content"
                ></markdown>
                <template v-if="memo.items">
                    <div v-for="(item, itemIndex) in memo.items" :key="itemIndex" class="memo-item">
                        <div class="memo-item-title" v-text='item.title'></div>
                        <markdown
                            v-if="item.content"
                            class="memo-item-content"
                            :custom-setting="['link', 'strong', 'paragraph']"
                            :content="item.content"
                        ></markdown>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
import Markdown from 'components/common/Markdown/main.vue';
import { mapActions, mapMutations, mapGetters } from 'vuex';

// import $ from 'jquery';
// import 'bootstrap';

// import 'app';
// import { string, jsVars, popup, trackJS, localStorage, ppPanel } from 'lib/common/util';

export default {
    components: {
        Markdown,
    },
    filters: {},
    props: {
        memos: {
            type: Array,
            default: () => [],
        },
    },
    data(){
        return {};
    },
    computed: {
        ...mapGetters([
        ]),
    },
    watch: {
    },
    created(){},
    mounted(){},
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