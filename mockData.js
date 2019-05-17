export const schema = {
    "type": "object",
    "title": "测试表单",
    "properties": {
        "group1": {
            "type": "object",
            "title": "GROUP1",
            "properties": {
                "name1": {
                    "type": "string",
                    "title": "姓名1",
                    "default": "Cavendichun"
                },
                "mobile1": {
                    "type": "string",
                    "title": "手机号1"
                },
                "other1": {
                    "type": "string",
                    "title": "其他1"
                }
            }
        },
        "group2": {
            "type": "object",
            "title": "GROUP2",
            "properties": {
                "name2": {
                    "type": "string",
                    "title": "姓名2"
                },
                "mobile2": {
                    "type": "string",
                    "title": "手机号2",
                    "default": "18811743357"
                },
                "other2": {
                    "type": "string",
                    "title": "其他2"
                }
            }
        },
        "array1": {
            "type": "array",
            "minItems": 2,
            "items": {
                "type": "object",
                "properties": {
                    "luyy": {
                        "type": "string",
                        "title": "luyy",
                        "default": "dashabi"
                    },
                    "biwang": {
                        "type": "string",
                        "title": "biwang"
                    }
                }
            }
        }
    }
}