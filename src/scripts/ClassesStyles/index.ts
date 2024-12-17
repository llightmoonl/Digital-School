export class ClassesStyles {
    public static checkClassesInStyles (className: string): string {
        return className ? `class = ${className}` : '';
    }
}