export const maxLengthCreator = (max) => (value)=>{
    if (value.length > max){
        return `Value is more then ${max}`;
    }
    return undefined;
}
export const requered = (value) => {
    if (!value) return "Value is required!"
    return undefined;
}