export const dataParser = (schema)=>{
  if(schema.type !== 'object')
      throw "JsonSchema root type must be object";
  return objectTranser({schema});
}


export const objectTranser = ({schema, beforePath})=> {
  // if (!schema.properties) return ;
  let formData = {};
  Object.keys(schema.properties).map(i => {
      let p = schema.properties[i];
      let path = beforePath ? `${beforePath}-${i}` : i;
      switch (p.type) {
          case "object":
              formData[i] = objectTranser({schema: p, beforePath: path});
              break;
          case "array":
              formData[i] = arrayTranser(p, path);
              break;
          case "number":
          case "string":
          case "boolean":
              formData[i] = itemsTranser(p);
              break;
          default:
              throw `${path} type error`
      }
  })
  return JSON.stringify(formData)==="{}" ? undefined : JSON.parse(JSON.stringify(formData));
}

export const itemsTranser = (schema, path) => {
  return schema.default;
}

const arrayTranser = (schema, path)=> {
  const { items } = schema;
  let singleDefault = items.type == 'object' ?  objectTranser({schema: items, beforePath: path}) : itemsTranser(items);
  return new Array(schema.minLens).fill(items.type == 'object' ? JSON.parse(JSON.stringify(singleDefault)) : singleDefault); 
}