export const schema = {
    "type": "object",
    "title": "test",
    "properties": {
        "base_info": {
            "type": "object",
            "title": "基本信息",
            "properties": {
                "name": {
                    "type": "string",
                    "title": "姓名",
                    "default": "bichun"
                },
                "age": {
                    "type": "number",
                    "title": "age"
                }
            }
        }
    }
}

export const formData = {
    "base_info":{
        "name":"bibichun",
        "age": "20"
    }
}