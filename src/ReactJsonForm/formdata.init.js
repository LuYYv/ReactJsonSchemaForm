/**
 * 根据最初的formData和schema的默认值，生成一份初始化的formData，并作简单的格式校验
 * 根级的type必须为object，array的子集type必须是object，default类型必须对应
*/

const typeParser = {
    number: numberParser,
    string: stringParser,
    array: arrayParser,
    boolean: booleanParser
}

/**
 * 此函数根据schema中的default值生成一份formData
*/
export function getDefaultFormDataBySchema({ schema }) {
    if (schema.type !== 'object') {   //根级type校验
        console.error(schema);
        throw `schema's root type must be object !`;
    }
    let defaultFormData = {};
    const { properties = {} } = schema;
    defaultFormData = objectParser({ schema: properties }) || {};
    console.log(defaultFormData);
    return defaultFormData;
}

function objectParser({ schema }) {
    let res = {};
    Object.keys(schema).map(k => {
        if (schema[k].type === 'object') {   //object类型，递归
            res[k] = objectParser({ schema: schema[k].properties });
        } else if (typeParser[schema[k].type] != undefined) {  //基础类型， 直接获取
            res[k] = typeParser[schema[k].type]({ schema: schema[k] });
        } else {  //类型错误， 报错
            console.error(schema[k]);
            throw `schema's type must be one of string. number, boolean, object and array !`
        }
    })
    return JSON.stringify(res) === '{}' ? undefined : JSON.parse(JSON.stringify(res));
}

function numberParser({ schema }) {
    if (schema.default && typeof schema.default !== 'number') {
        console.error(schema);
        throw `schema's default type error`
    }
    return schema.default;
}

function stringParser({ schema }) {
    if (schema.default && typeof schema.default !== 'string') {
        console.error(schema);
        throw `schema's default type error`
    }
    return schema.default;
}

function booleanParser({ schema }) {
    if (schema.default && typeof schema.default !== 'boolean') {
        console.error(schema);
        throw `schema's default type error`
    }
    return schema.default;
}

function arrayParser({ schema }) {
    //array类型的，默认没有child，必须点击添加，但是如果配置了minItems，则会生成defaultFormData
    if (schema.items == undefined) {   //判断是否有items
        throw `array schema must have items`;
    }
    const { items } = schema;
    if (items.type !== 'object') {  //判断item.type是否为object
        console.error(items);
        throw `array's items's type must be object`;
    }
    if (schema.minItems && typeof schema.minItems === 'number') {  //如果minItems存在且为数字
        // let res = [];
        let singleDefault = objectParser({ schema: items.properties });
        let res = Array.apply(null, Array(schema.minItems)).map(() => singleDefault);  //填充
        return res;
    }
    return undefined;
}