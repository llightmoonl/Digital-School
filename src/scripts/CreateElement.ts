interface Element {
    tags: string
    classes: string | Array<string>,
}

class CreateElement implements Element{
    private tags;
    private classes;

    private constructor(tags, classes) {
        this.tags = tags;
        this.classes = classes
    }

    public render(){
        const menu: HTMLElement = document.createElement(this.tags);
        menu.classList.add(this.classes)
    }

}

export default CreateElement;