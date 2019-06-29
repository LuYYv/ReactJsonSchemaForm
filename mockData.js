export const schema = {
    "type": "object",
    "title": "schema-测试",
    "properties": {
        "ObjectField": {
            "type": "object",
            "title": "object-测试",
            "properties": {
                "StringField": {
                    "type": "string",
                    "title": "StringField",
                    "default": "string",
                    "minLength": "2",
                    "maxLength": "5",
                },
                "NumberField": {
                    "type": "number",
                    "title": "NumberField",
                    "require": true,
                    "default": "250",
                },
                "BooleanField": {
                    "type": "boolean",
                    "title": "BooleanField",
                    "default": false,
                },
                "ArrayField": {
                    "type": "array",
                    "title": "ArrayField",
                    "minLens": 2,
                    "items": {
                        "type": "string",
                        "title": "Array-StringField",
                        "require": true,
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