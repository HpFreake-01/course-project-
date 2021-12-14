export const required = (value) =>{
    if(value) return undefined;

    return 'Fiel is reauired'
}

export const maxLengthCreator = (maxLegth) => (value) =>{
    if(value.length > maxLegth) return `Max leght is ${maxLegth}`;

    return undefined;
}