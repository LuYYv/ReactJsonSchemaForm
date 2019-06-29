export const schema = {
    "type": "object",
    "title": "schema-测试",
    "properties": {
        "ObjectField": {
            "type": "object",
            "title": "object-测试",
            "require": [
                "StringField",
            ],
            "properties": {
                "StringField": {
                    "type": "string",
                    "title": "string-测试",
                    "default": "string",
                },
                "NumberField": {
                    "type": "number",
                    "title": "number-测试",
                    "default": "250",
                    "minLength": "2",
                    "maxLength": "5",
                    "widget": "number",
                    "help": "长度为2-5位的数字",
                },
                "BooleanField": {
                    "type": "boolean",
                    "title": "boolean-测试",
                    "default": false,
                    "widget": "radio",
                },
                "ArrayField1": {
                    "type": "array",
                    "title": "array-string-测试",
                    "minLens": 2,
                    "items": {
                        "type": "string",
                        "default": "array-string"
                    }
                }
            }
        }
    }
}

export const formData = {
    "ObjectField":{
        "ArrayField": [
            "a",
            "b",
            "c"
        ]
    }
}
