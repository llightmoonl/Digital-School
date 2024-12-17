import className from "./header.module.scss";
import {ClassesStyles, CreateElement} from "@scripts"
import {Menu} from "@types";

export class Header {
    private readonly classes: CSSModuleClasses;
    private readonly menuList: Menu;

    constructor(menuList: Menu) {
        this.classes = className;
        this.menuList = menuList;
    }

    renderMenuList(): string {
        const menuElement: HTMLElement = new CreateElement('nav',
            {
                classList: this.classes.header__menu
            }
        ).render();

        const menuList: HTMLElement = new CreateElement('ul',
            {
                classList: this.classes.menu
            }
        ).render();

        this.menuList.map((menuItem)=> {
            const menuElementList: HTMLElement = new CreateElement('li',
                {
                    classList: this.classes.menu__element
                }
            ).render()

            const menuLinkList: HTMLElement = new CreateElement('a',
                {
                    textContent: menuItem.name,
                    classList:  this.classes.menu__link,
                    attributes: {
                        href: menuItem.link,
                    }
                }
            ).render()

            menuElementList.append(menuLinkList);
            menuList.append(menuElementList);
        })
        menuElement.append(menuList);
        return menuElement.outerHTML;
    }

    render () {
        return (
            `
            <div ${ClassesStyles.checkClassesInStyles(this.classes.header)}>
                <div ${ClassesStyles.checkClassesInStyles(this.classes.container)}>
                    <div ${ClassesStyles.checkClassesInStyles(this.classes.header__content)}>
                        <a ${ClassesStyles.checkClassesInStyles(this.classes.header__logo)} href = '/'>Digital School</a>
                        ${this.renderMenuList()}  
                    </div>
                </div> 
            </div>  
        `);
    }
}
