export function getRandomArrayItem<T>(array: T[]): T {
    const index = Math.round((array.length - 1) * Math.random());

    return array[index];
}
