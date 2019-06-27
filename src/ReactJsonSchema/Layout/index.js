import ArrayLayout from './ArrayLayout';
// import BooleanLayout from './BooleanLayout';
// import NumberLayout from './NumberLayout';
// import ObjectLayout from './ObjectLayout';
// import StringLayout from './StringLayout';
// import SchemaLayout from './SchemaLayout';

const LayoutMap = {
  "array": ArrayLayout,
  // "boolean": BooleanLayout,
  // "number": NumberLayout,
  // "object": ObjectLayout,
  // "string": StringLayout,
  // "schema": SchemaLayout,
}

const getLayout = ({type, layout}) => {
  return (LayoutMap[type]({ layout }));
}

export default getLayout;