
const checker = ({schema, formData}) => { 
  const errorSchema = checkerMap[schema.type]({schema, formData});  
  return errorSchema;
}

const stringChecker = ({ schema, formData })=> {
  const {length, minLength, maxLength, require} = schema;
  if (require && formData == undefined) {
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
          return {errorConfig: `长度应小于${maxLength}`};
      }
  }
  return undefined;
}

const numberChecker = ({schema, formData})=> {
  const {length, minLength, maxLength, require} = schema;
  if (require && formData == undefined) {
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
          return {errorConfig: `长度应小于${maxLength}`};
      }
  }
  return undefined;
}

const objectChecker = ({schema, formData={}})=> {
  const {properties, require=[]} = schema;
  let errorSchema = {};
  let props = {};
  Object.keys(properties).map (i=>{
      const _require = require.indexOf(i) !== -1 ? true : false ;
      const _schema = JSON.parse(JSON.stringify(properties[i]));
      _schema.require = _schema.require || _require;

      const errorConfig = checker({schema: _schema, formData: formData[i]});
      if (errorConfig != undefined) {
          props[i] = errorConfig;
      }
  })
  if (JSON.stringify(props) != '{}')  errorSchema.properties = props;
  return JSON.stringify(errorSchema) === '{}' ? undefined : errorSchema;
}

const arrayChecker = ({schema, formData})=> {
  const {items} = schema;
  let errorConfig = [];
  Array.from(items).map ( (item, index) => {
      let config = checker({schema: item, formData: formData[index]});
      if (config !== undefined){
          errorConfig[index] = config;
      }
  } )
  return errorConfig.length === 0 ? undefined : {errorConfig};
}

const checkerMap = {
  string: stringChecker,
  number: numberChecker,
  object: objectChecker,
  array: arrayChecker,
}





export default checker;