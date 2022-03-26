/* eslint-disable no-useless-escape */
import { marked } from 'marked';

const DenyWorkRender = {
    code(code, infostring, escaped){
        return `<div>${code}</div>\b`;
    },
    blockquote(quote){
        return `<p>${quote}</p>\n`;
    },
    html(html){
        return `<p>${escape(html)}</p>\n`;
    },
    heading(text, level, raw, slugger){
        let hash = '';
        for (let i = 0; i < level; i += 1) {
            hash += '#';
        }
        return `<div>${hash} ${raw}</div>\n`;
    },
    hr(){
        return '<br>';
    },
    list(body, ordered, start){
        // console.log('list', {body, ordered, start});
        if (ordered === false) {
            body = body.replace(/\[\[markdown-order\]\]/ig, '+ ');
        } else {
            do {
                body = body.replace(/\[\[markdown-order\]\]/i, `${start}. `);
                start += 1;
            } while (body.includes('[[markdown-order]]'));
        }

        return `<div>\n${body}</div>\n`;
    },
    listitem(text){
        return `<div>[[markdown-order]] ${text}</div>\n`;
    },
    checkbox(checked){
        return `<span>[${checked ? 'V' : ' '}]</span> &nbsp;`;
    },
    paragraph(text){
        return `&nbsp;&nbsp;${text}\n`;
    },

    table(header, body){
        if (body) body = `<tbody>${body}</tbody>`;
        return `<div>\n<div>\n${header}</div>\n${body}</div>\n`;
    },
    tablerow(content){
        return `<div>\n${content}</div>\n`;
    },
    tablecell(content, flags){
        return `<span>${content}</span>`;
    },

    // span level renderer
    strong(text){
        return `<span>${text}</span>`;
    },

    em(text){
        return `<span>${text}</span>`;
    },

    codespan(text){
        return ` <span>${text}</span> `;
    },

    br(){
        return '&nbsp;';
    },

    del(text){
        return `<span>${text}</span>`;
    },
    link(href, title, text){
        return `<span>${text} (link to: ${href})</span>`;
    },

    image(href, title, text){
        const alt = [];
        if (title) {
            alt.push(title);
        }
        if (text) {
            alt.push(text);
        }
        return `<span>${href} (${alt.join('-')})</span>\n`;
    },

    text(text){
        return `<span>${text}</span>`;
    },
};

const defaultRenderKeys = Object.keys(DenyWorkRender);
const defaultArrayRenderStatus = {};
defaultRenderKeys.forEach((key) => {
    defaultArrayRenderStatus[key] = false;
});

const main = {
    defaultArrayRenderStatus,
    defaultOptions: {
        breaks: true,
    },

    extendMatchKey: {
        table: ['table', 'tablerow', 'tablecell'],
        tablerow: ['table', 'tablerow', 'tablecell'],
        tablecell: ['table', 'tablerow', 'tablecell'],

        list: ['list', 'listitem'],
        listitem: ['list', 'listitem'],
    },

    createRender(renderOpts){
        const that = this;
        let opts = {};

        if (Array.isArray(renderOpts)) {
            opts = JSON.parse(JSON.stringify(this.defaultArrayRenderStatus));
            renderOpts.forEach((key) => {
                if (!!that.extendMatchKey[key] && 1) {
                    that.extendMatchKey[key].forEach((subKey) => {
                        opts[subKey] = true;
                    });
                    opts[key] = true;
                } else {
                    opts[key] = true;
                }
            });
        } else if (typeof renderOpts === 'object') {
            opts = renderOpts;
        }

        const renderer = {};
        if (Object.keys(opts).length > 0) {
            for (const key in opts) {
                if (opts[key] === false && !!DenyWorkRender[key]) {
                    renderer[key] = DenyWorkRender[key];
                } else if (typeof opts[key] === 'function') {
                    renderer[key] = opts[key];
                }
            }
        }

        return renderer;
    },

    parse(text, renderOpts, opts){
        let content = text;
        const renderer = this.createRender(renderOpts);

        // marked.use({ renderer });
        content = marked.parse(content, { ...this.defaultOptions, ...opts });

        if (!!opts && !!opts.inline) {
            content = this.parseInline(content);
        }

        return content;
    },

    parseInline(text){
        let content = text;

        content = content.replace(/<p[^>]*>/ig, '<span>').replace(/<\/p>/ig, '</span>');
        content = content.replace(/<br[\/]}{0,1}>/ig, '<span> </span>');
        content = content.replace(/<div[^>]*>/ig, '<span>').replace(/<\/div>/ig, '</span>');

        return content;
    },
};

const markdown = (text, renderOpts, opts) => main.parse(text, renderOpts, opts);

export default markdown;
