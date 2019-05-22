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
    if (schema.items == undefined) {   //判断是否有items
        throw `${path} array schema must have items`;
    }
    const { items } = schema;
    if (items.type !== 'object') {  //判断item.type是否为object
        console.error(items);
        throw `${path} array's items's type must be object`;
    }
    if (schema.minItems && typeof schema.minItems === 'number') {  //如果minItems存在且为数字
        let singleDefault = this.objectParser({ schema: items.properties });
        return new Array(schema.minItems).fill(JSON.parse(JSON.stringify(singleDefault))); 
    }
    return undefined;
}