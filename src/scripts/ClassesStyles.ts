class ClassesStyles{
    public static checkClassesInStyles (className: object): string {
        return className ? `class = ${className}` : '';
    }
}

export default ClassesStyles;