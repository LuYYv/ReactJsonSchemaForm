import DefaultLayout from './DefaultLayout';

const ArrayLayoutMap = {
  "default": DefaultLayout,
}

const getArrayLayout = ({ layout=`default` }) => {
  return ArrayLayoutMap[layout];
}

export default getArrayLayout;