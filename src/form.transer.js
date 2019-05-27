export const transDefData = (schema)=>{
    if(schema.type !== 'object')
        throw "JsonSchema root type must be object";
    return {defFormData: objectTranser(schema) || {}, dependencyMap};
}

let dependencyMap = {};

export const objectTranser = (schema, beforePath)=> {
    let formData = {};
    Object.keys(schema.properties).map(i => {
        let p = schema.properties[i];
        let path = beforePath ? `${beforePath}-${i}` : i;
        switch (p.type) {
            case "object":
                formData[i] = objectTranser(p, path);
                break;
            case "array":
                formData[i] = arrayTranser(p, path);
                break;
            case "number":
            case "string":
            case "boolean":
                formData[i] = itemsTranser(p, path, p.type);
                break;
            default:
                throw `${path} type error`
        }
    })
    return JSON.stringify(formData)==="{}" ? undefined : JSON.parse(JSON.stringify(formData));
}

export const itemsTranser = (schema, path) => {
    if (schema.dependency != undefined)   dependencyMap[schema.dependency] = path;
    return schema.default;
}

 const arrayTranser = (schema, path)=> {
    const { items } = schema;
    let singleDefault = items.type == 'object' ?  objectTranser(items.properties, ) : itemsTranser(items);
    return new Array(schema.minItems).fill(items.type == 'object' ? JSON.parse(JSON.stringify(singleDefault)) : singleDefault); 
}