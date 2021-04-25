import Vue from "vue";
import FooterHtml from './footer.html';
import './footer.css';

const FooterComponent = Vue.component('footer-component', {
    template: FooterHtml,
    data: () => ({
        links: [
            'Imprint',
            'contact',
            'FAQ',
            'Diclainer',
        ],
    }),
});

export default FooterComponent;
