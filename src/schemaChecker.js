export const schemaChecker = (schema) => {
    if(schema.type !== "object")
        throw `jsonschema root must be object`;
    check({schema,path: `root`});
    return true;
}


const check = ({schema, path}) => {
    if (schema.type == undefined)
        throw `type is required at ${path}`

    const checker = checkerMap[schema.type];
    if (checker == undefined) {
        throw `type of "${schema.type}" is undefined at ${path}`
    }
    checker({schema, path: schema.title ? `${path}.${schema.title}` : path});
}

const typeCheck = ({schema, props, path}) =>{
    Object.keys(schema).map( i=> {
        const type = props[i];
        if(type == undefined) 
            throw `"${i}" is undefined at ${path}`;
        if(typeof schema[i] !== type)
            throw `typeof ${i} error at ${path}`;
    })
}

const numberCheck = ({schema, path}) => {
    typeCheck({schema, props: numberProps, path});
}

const stringCheck = ({schema, path}) => {
    typeCheck({schema, props: stringProps, path});
}

const arrayCheck = ({schema, path}) => {
    typeCheck({schema, props: arrayProps, path});
    const {items} = schema
    if (items && items.type && items.type === `array`){
        throw `items error at ${path}`;
    }
    check({schema: items, path: items.title ? `${path}.${items.title}` : path});
}

const objectCheck = ({schema, path}) => {
    typeCheck({schema, props: objectProps, path});
    const {properties, require} = schema

    if(properties == undefined || JSON.stringify(properties)==="{}") 
        throw `properties error at ${path}`;
    Object.keys(properties).map(i => {
        check({schema: properties[i], path: `${path}.${i}`});
    })

    if(require) {
        Array.from(require).map( i=> {
            if (properties[i] == undefined) 
                throw `require ${i}  is redundancy at ${path}`
            if (properties[i].type !=undefined && properties[i].type === "object" )
                throw `object cannot be required at ${path}`;
        })
    }
}

const checkerMap = {
    object: objectCheck,
    number: numberCheck,
    string: stringCheck,
    array: arrayCheck,
}

const objectProps = {
    title: "string",
    type: "string",
    properties: "object",
    require: "object"
}

const numberProps = {
    title: "string",
    type: "string",
    default: "number",
    length: "number"
}

const stringProps = {
    title: "string",
    type: "string",
    default: "string",
    length: "number"
}

const arrayProps = {
    title: "string",
    type: "string",
    minItems: "number",
    items: "object",
}



