
const formateCheck = ({schema, formData, mustFill}) => { 
    const checker = formateMap[schema.type];
    const errorSchema = checker({schema, formData, mustFill});  
    return errorSchema;
}

const stringFormateCheck = ({schema,formData, mustFill})=> {
    const {length, minLength, maxLength} = schema;
    if (mustFill && formData == undefined) {
        // console.log({...schema});
        // let errohema = {...schema};
        return {errorConfig: `不能为空`};
    }
    if (formData) {
        if(length && length !== formData.length) {
            return {errorConfig:`长度应等于${length}`};
        } 
        if (minLength && minLength > formData.length) {
            return { errorConfig: `长度应大于${minLength}`};
        }
        if (maxLength && maxLength < formData.length) {
            return {errorConfig: `长度应小于${minLength}`};
        }
    }
    return undefined;
}

const numberFormateCheck = ({schema, formData, mustFill})=> {
    const {length, minLength, maxLength} = schema;
    if (mustFill && formData == undefined) {
        return {errorConfig: `不能为空`};
    }
    if (formData) {
        if(length && length !== formData.length) {
            return {errorConfig:`长度应等于${length}`};
        } 
        if (minLength && minLength > formData.length) {
            return { errorConfig: `长度应大于${minLength}`};
        }
        if (maxLength && maxLength < formData.length) {
            return {errorConfig: `长度应小于${minLength}`};
        }
    }
    return undefined;
}

const objectFormateCheck = ({schema, formData={}})=> {
    const {properties, require=[]} = schema;
    let errorSchema = {};
    let props = {};
    Object.keys(properties).map (i=>{
        const mustFill = require.indexOf(i) !== -1 ? true : false ;
        const errorConfig = formateCheck({schema: properties[i], formData: formData[i],  mustFill});
        if (errorConfig != undefined) {
            props[i] = errorConfig;
        }
    })
    if (JSON.stringify(props) != '{}')  errorSchema.properties = props;
    return JSON.stringify(errorSchema) === '{}' ? undefined : errorSchema;
}

const arrayFormateCheck = ({schema, formData})=> {
    const {items} = schema;
    let errorConfig = [];
    Array.from(items).map ( (item, index) => {
        let config = formateCheck({schema: item, formData: formData[index]});
        if (config !== undefined){
            errorConfig[index] = config;
        }
    } )
    return errorConfig.length === 0 ? undefined : {errorConfig};
}

const formateMap = {
    string: stringFormateCheck,
    number: numberFormateCheck,
    object: objectFormateCheck,
    array: arrayFormateCheck,
}


export default formateCheck;