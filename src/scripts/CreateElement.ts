interface Element {
    render(): void
}

export class CreateElement implements Element {
    private readonly tags;
    private readonly classElement;

    public constructor(tags: string, classElement?: string) {
        this.tags = tags;
        this.classElement = classElement;
    }

    public render(): HTMLElement {
        const element: HTMLElement = document.createElement(this.tags);
        this.classElement ? element.classList.add(this.classElement) : "";

        return element;
    }
}


