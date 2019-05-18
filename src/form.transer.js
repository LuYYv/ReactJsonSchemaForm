export const transDefData = (schema)=>{
    if(schema.type !== 'object')
        throw "JsonSchema root type must be object";
    return objectTranser(schema) || {};
}

const objectTranser = (schema, beforePath)=> {
    let formData = {};
    Object.keys(schema.properties).map(i => {
        let p = schema.properties[i];
        let path = beforePath ? `${beforePath}.${i}` : i;
        switch (p.type) {
            case "object":
                formData[i] = objectTranser(p, path);
                break;
            case "array":
                formData[i] = arrayTranser(p, path);
                break;
            case "number":
            case "string":
            case "boolen":
                formData[i] = itemsTranser(p, path, p.type);
                break;
            default:
                throw `${path} type error`
        }
    })
    return JSON.stringify(formData)==="{}" ? undefined : JSON.parse(JSON.stringify(formData));
}

const itemsTranser = (schema, path, type) => {
    if(schema.default !== undefined && typeof schema.default !== type)
        throw `${path} default value type error`
    return schema.default;
}

const arrayTranser = (schema, path)=> {
    return "array";
}