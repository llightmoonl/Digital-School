import className from "./header.module.scss";
import {ClassesStyles, CreateElement} from "@scripts"

export class Header {
    private readonly classes: CSSModuleClasses;
    private readonly menuList: object[];

    constructor(menuList: object[]) {
        this.classes = className;
        this.menuList = menuList;
    }

    renderMenuList(menuList: object[]) {
        const menuElement: HTMLElement = new CreateElement('nav', this.classes.header__menu).render();
        const menuListElement: HTMLElement = new CreateElement('ul', this.classes.menu__list).render();
        menuElement.append(menuListElement);

        menuList.map((menuListElement: object)=> {
            const listElement = new CreateElement('li', this.classes.menu__element).render();
            const linkListElement = new CreateElement('a', this.classes.menu__list).render();
        })
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
