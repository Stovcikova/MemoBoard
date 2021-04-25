import Vue from "vue";
import MemoHtml from './memo.html';
import './memo.css';

const MemoComponent = Vue.component('memo-component', {
    
    template: MemoHtml,
    data: () => ({
        links: [
            
        ],
    }),
});

export default MemoComponent;
