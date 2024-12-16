import {Header} from '@shared';
import '@styles/styles.scss'

const menuList = [
    {
        name: 'Главная',
        link: '#main'
    },
    {
        name: 'О себе',
        link: '#about'
    },
    {
        name: 'Кредо',
        link: '#main'
    },
    {
        name: 'Главная',
        link: '#main'
    },
];

const header = new Header(menuList);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${header.render()}
`