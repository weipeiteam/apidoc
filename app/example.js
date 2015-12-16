/**
 * @api {post}  token  1.获取验证token
 * @apiVersion 0.1.0
 * @apiName getToken
 * @apiGroup ALL
 * @apiPermission none
 *
 * @apiSampleRequest token
 *
 * @apiDescription 访问接口需要提供指定的账号与密码，用于验证使用者身份信息。
 *
 * @apiExample Example usage:
 *     endpoint: http://api.dev.weipei.cc/dev/v1/token
 *
 *     body:
 *     {
 *       "code": "WeiPeiWebClient",
 *       "api_key": "0b1378ed6a2872620292990baea972a2"
 *     }
 *
 * @apiParam (Request Body Fields) {String=WeiPeiWebClient} code code.
 * @apiParam (Request Body Fields) {String=0b1378ed6a2872620292990baea972a2} api_key api_key.
 *
 * @apiSuccess {String}   token 身份令牌.
 * @apiSuccess {String}   exipiry_time 过期时间，时间戳.
 *
 *
 */
function token() { return; }

/**
 * @api {post} login 2.账号登陆
 * @apiVersion 0.1.0
 * @apiName login
 * @apiGroup ALL
 * @apiPermission none
 *
 * @apiSampleRequest login
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "de6821a970634cb19619b1023ebdfb82b1ae2f05"
 *       "eg"："@apiHeader (Request Header Fields) {String} [Authorization="de6821a970634cb19619b1023ebdfb82b1ae2f05"]   Authorization."
 *     }
 *
 *
 *
 * @apiDescription 用户输入账号登陆.
 * Define 用户需要修改现有的手机号码,需要提交新的手机号码到服务器.
 *
 * @apiParam (Request Body Fields) {String} account account.
 * @apiParam (Request Body Fields) {String} password password.
 *
 * @apiSuccess {String} account_id  用户ID.
 *
 */
function login() { return; }

