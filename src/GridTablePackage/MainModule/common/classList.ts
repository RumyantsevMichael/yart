type ClassList = { [className: string]: boolean };

export const classList = (list: ClassList) => {
    return Object.keys(list)
        .filter(className => list[className] === true)
        .join(' ');
};
