export const schema = {
    "type": "object",
    "title": "test",
    "properties": {
        "ObjectField": {
            "type": "object",
            "title": "基本信息",
            "properties": {
                "StringField": {
                    "type": "string",
                    "title": "StringField",
                    "default": "string"
                },
                "NumberField": {
                    "type": "number",
                    "title": "NumberField",
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