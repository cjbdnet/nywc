# api接口文档

## 通过wx.login获得openid以及其他用户信息。

`/api/member/memberinfo？js_code=...`

```json
{"openId":"oPL165XH7WzJiFHWBwQAiMmT5fh0","nickName":"未授权","role":"user","bonus":0,"avatarURL":"https://wx.qlogo.cn/mmopen/vi_32/mb1BYYNugkz6icqUndwg1nVX5cTBuDBY4qhSVTx4HRIGicbaElcKCXkfwB3sNEj9Sk6Q39E0ZVvNuoQBkibFePH9g/0"}
```

## 更新access_token（一般不需要前端调用）

`/api/weixin/updateaccesstoken`

```json
{"access_token":"9_otNI4kiAdULS7IYeoPxSFnek7E6Uj_QbioRWC3cSgi3fHfo3hvMbJtKdLT-BM6x9oz1pxHz5g_IPL4GE9fhUoaXSjt93axzuW_XMXdsJi0IjUOO_Lp2c7BOgnCNwQSye4qyyTlx1fsTHY5jYNFEiAHAVNM","expires_in":7200}
```

## 取得access_token

`/api/weixin/accesstoken`

```json
{"access_token":"9_otNI4kiAdULS7IYeoPxSFnek7E6Uj_QbioRWC3cSgi3fHfo3hvMbJtKdLT-BM6x9oz1pxHz5g_IPL4GE9fhUoaXSjt93axzuW_XMXdsJi0IjUOO_Lp2c7BOgnCNwQSye4qyyTlx1fsTHY5jYNFEiAHAVNM","expires_in":7200}
```
## 查看尚未开始和正在进行的秒杀活动

`api/miaosha/unendmiaosha`

```json
[{"pname":"港欢的打火机","startTime":"2018-05-01T02:00:00.000+0000","num":20,"status":"正在进行"}]
```

## 查看秒杀结果

`api/miaosha/checkresult`

## 请求秒杀

`api/miaosha/checkresult?pname=港欢的打火机&openId=abcdddd`