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
            case "boolean":
                formData[i] = itemsTranser(p, path, p.type);
                break;
            default:
                throw `${path} type error`
        }
    })
    return JSON.stringify(formData)==="{}" ? undefined : JSON.parse(JSON.stringify(formData));
}

const itemsTranser = (schema) => {
    return schema.default;
}

const arrayTranser = (schema, path)=> {
    const { items } = schema;
    
    if (schema.minItems && typeof schema.minItems === 'number') {  //如果minItems存在且为数字
        let singleDefault = this.objectParser({ schema: items.properties });
        return new Array(schema.minItems).fill(JSON.parse(JSON.stringify(singleDefault))); 
    }
    return undefined;
}