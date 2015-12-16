define({ "api": [
  {
    "type": "post",
    "url": "token",
    "title": "1.获取验证token",
    "version": "0.1.0",
    "name": "getToken",
    "group": "ALL",
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://api.dev.weipei.cc/dev/v1/token"
      }
    ],
    "description": "<p>访问接口需要提供指定的账号与密码，用于验证使用者身份信息。</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "endpoint: http://api.dev.weipei.cc/dev/v1/token\n\nbody:\n{\n  \"code\": \"WeiPeiWebClient\",\n  \"api_key\": \"0b1378ed6a2872620292990baea972a2\"\n}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Request Body Fields": [
          {
            "group": "Request Body Fields",
            "type": "String",
            "allowedValues": [
              "WeiPeiWebClient"
            ],
            "optional": false,
            "field": "code",
            "description": "<p>code.</p>"
          },
          {
            "group": "Request Body Fields",
            "type": "String",
            "allowedValues": [
              "0b1378ed6a2872620292990baea972a2"
            ],
            "optional": false,
            "field": "api_key",
            "description": "<p>api_key.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>身份令牌.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "exipiry_time",
            "description": "<p>过期时间，时间戳.</p>"
          }
        ]
      }
    },
    "filename": "app/example.js",
    "groupTitle": "ALL"
  },
  {
    "type": "post",
    "url": "login",
    "title": "2.账号登陆",
    "version": "0.1.0",
    "name": "login",
    "group": "ALL",
    "permission": [
      {
        "name": "none"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://api.dev.weipei.cc/dev/v1/login"
      }
    ],
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"de6821a970634cb19619b1023ebdfb82b1ae2f05\"\n  \"eg\"：\"@apiHeader (Request Header Fields) {String} [Authorization=\"de6821a970634cb19619b1023ebdfb82b1ae2f05\"]   Authorization.\"\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>用户输入账号登陆. Define 用户需要修改现有的手机号码,需要提交新的手机号码到服务器.</p>",
    "parameter": {
      "fields": {
        "Request Body Fields": [
          {
            "group": "Request Body Fields",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>account.</p>"
          },
          {
            "group": "Request Body Fields",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "account_id",
            "description": "<p>用户ID.</p>"
          }
        ]
      }
    },
    "filename": "app/example.js",
    "groupTitle": "ALL"
  }
] });
