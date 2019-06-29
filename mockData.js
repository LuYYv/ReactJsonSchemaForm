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
                    "minLength": "2",
                    "maxLength": "5",
                },
                "NumberField": {
                    "type": "number",
                    "title": "number-测试",
                    "default": "250",
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
                },
                "ArrayField2": {
                    "type": "array",
                    "title": "array-object-测试",
                    "minLens": 1,
                    "items": {
                        "type": "object",
                        "require": [
                            "StringField",
                        ],
                        "properties": {
                            "StringField": {
                                "type": "string",
                                "title": "a-o-string-测试",
                                "default": "string",
                                "minLength": "2",
                                "maxLength": "5",
                            },
                            "NumberField": {
                                "type": "number",
                                "title": "a-o-number-测试",
                                "default": "250",
                                "widget": "number",
                                "help": "长度为2-5位的数字",
                            },
                            "BooleanField": {
                                "type": "boolean",
                                "title": "a-o-boolean-测试",
                                "default": false,
                                "widget": "radio",
                            },
                        }
                    }
                }
            }
        }
    }
}

export const formData = {
    "ObjectField":{
        "ArrayField1": [
            "a",
            "b",
            "c"
        ]
    }
}
