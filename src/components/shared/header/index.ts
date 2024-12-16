import {ClassesStyles, CreateElement} from "@scripts/index.ts"

import className from "./header.module.scss";

interface Props {
    menuList: Array<object>,
}

class Header implements Props {
    private classes: object | string;
    private menuList: Array<object>;

    constructor(menuList) {
        this.classes = className;
        this.menuList = menuList;
    }

    renderMenuList(menuList: object) {
        const menu = new CreateElement('nav', this.classes.header__menu);

        return ;
    }

    render () {
        return (
            `
            <div ${ClassesStyles.checkClassesInStyles(this.classes.header)}>
                <div ${ClassesStyles.checkClassesInStyles(this.classes.container)}>
                    <div ${ClassesStyles.checkClassesInStyles(this.classes.header__content)}>
                        <a ${ClassesStyles.checkClassesInStyles(this.classes.header__logo)} href = '/'>Digital School</a>
                        <nav ${ClassesStyles.checkClassesInStyles(this.classes.header__menu)}>
                            ${this.renderMenuList(this.menuList)}               
                        </nav>
                    </div>
                </div> 
            </div>  
        `);
    }
}

export default Header;