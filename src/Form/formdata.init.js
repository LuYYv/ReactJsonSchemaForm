/**
 * 根据最初的formData和schema的默认值，生成一份初始化的formData，并作简单的格式校验
 * 根级的type必须为object，array的子集type必须是object，default类型必须对应
*/

import _ from 'lodash';

/**
 * @constructor
 * @param {object} props.schema
 * @param {object} props.formData
 */
class FormDataInit {
    constructor(props) {
        this.props = props;
        this.objectParser = this.objectParser.bind(this);
        this.typeParser = {   //number, string, boolean的方法大致相同，先不拆了，防止个性化
            number: this.numberParser.bind(this),
            string: this.stringParser.bind(this),
            array: this.arrayParser.bind(this),
            boolean: this.booleanParser.bind(this)
        }
    }

    /**
     * 此函数根据getDefaultFormDataBySchema中生成的defaultFormData，与传入的formData合并成一份初始化值
     * @return {object} 返回合并后的formData
    */
   getInitFormData() {
       const { schema, formData = {} } = this.props;
       if (!schema) throw `props.schema must be included`;
       let defaultFormData = this.getDefaultFormDataBySchema({ schema });
       return _.merge(defaultFormData, formData);
   }

    /**
     * 此函数根据schema中的default值生成一份formData
     * @return {object} 返回用schema生成的defaultFormData
    */
    getDefaultFormDataBySchema() {
        const schema = this.props.schema;
        if (schema.type !== 'object') {   //根级type校验
            console.error(schema);
            throw `schema's root type must be object !`;
        }
        let defaultFormData = {};
        const { properties = {} } = schema;
        defaultFormData = this.objectParser({ schema: properties }) || {};
        return defaultFormData;
    }

    /**
     * object类型解析器
     * @param {object} parama.schema
     * @return {object} //部分formData
    */
    objectParser({ schema }) {
        let res = {};
        Object.keys(schema).map(k => {
            if (schema[k].type === 'object') {   //object类型，递归
                res[k] = this.objectParser({ schema: schema[k].properties });
            } else if (this.typeParser[schema[k].type] != undefined) {  //基础类型， 直接获取
                res[k] = this.typeParser[schema[k].type]({ schema: schema[k] });
            } else {  //类型错误， 报错
                console.error(schema[k]);
                throw `schema's type must be one of string. number, boolean, object and array !`
            }
        })
        return JSON.stringify(res) === '{}' ? undefined : JSON.parse(JSON.stringify(res));
    }

    /**
     * number类型解析器
     * @param {object} parama.schema
     * @return {object} //部分formData
    */
    numberParser({ schema }) {
        if (schema.default && typeof schema.default !== 'number') {
            console.error(schema);
            throw `schema's default type error`
        }
        return schema.default;
    }

    /**
     * string类型解析器
     * @param {object} parama.schema
     * @return {object} //部分formData
    */
    stringParser({ schema }) {
        if (schema.default && typeof schema.default !== 'string') {
            console.error(schema);
            throw `schema's default type error`
        }
        return schema.default;
    }

    /**
     * boolean类型解析器
     * @param {object} parama.schema
     * @return {object} //部分formData
    */
    booleanParser({ schema }) {
        if (schema.default && typeof schema.default !== 'boolean') {
            console.error(schema);
            throw `schema's default type error`
        }
        return schema.default;
    }

    /**
     * array类型解析器
     * @param {object} parama.schema
     * @return {object} //部分formData
    */
    arrayParser({ schema }) {
        //array类型的，默认没有child，必须点击添加，但是如果配置了minItems，则会生成defaultFormData
        if (schema.items == undefined) {   //判断是否有items
            throw `array schema must have items`;
        }
        const { items } = schema;
        if (items.type != 'object' && this.typeParser[items.type] == undefined) {  //判断item.type是否为object
            console.error(items);
            throw `items's type must be one of string. number, boolean, object and array !`
        }
        if (schema.minItems && typeof schema.minItems === 'number') {  //如果minItems存在且为数字
            let singleDefault = items.type == 'object' ? this.objectParser({ schema: items.properties }) || {} : this.typeParser[items.type]({ schema: items });
            let res = Array.apply(null, Array(schema.minItems)).map(() => singleDefault);  //填充
            return res;
        }
        return undefined;
    }
}

export default FormDataInit;
