export function SortByProp<T>(array: any[], prop: string): any[] {
    return array.sort((a,b) => a[prop] - b[prop]); // b - a for reverse sort
} 
