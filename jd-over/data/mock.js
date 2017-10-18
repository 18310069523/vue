import axios from 'axios'
import axiosMock from 'axios-mock-adapter'

import data from "./dataConfig"
import dataMock from "./dataMock"

import Mock from "mockjs"
let Loginuser = [{
        id: "1",
        username: "15098950322",
        passworld: "123456"
    },
    {
        id: "2",
        username: "13908793030",
        passworld: "123456"
    },
    {
        id: "3",
        username: "15099903456",
        passworld: "123456"
    }
]
var num = 3
var codedata
export default {
    getdata() {
        let mock = new axiosMock(axios)
        mock.onGet("/api/user/img").reply(200, dataMock)
        mock.onGet("/api/index").reply(200, { data: data.index })
        mock.onGet("/api/code").reply(config => {
            let { username } = JSON.parse(config.data) //把字符串转

            num++
            var state = Math.random() > 0.5 ? true : false;

            if (state) {
                codedata = Mock.Random.integer(1000, 10000)
                console.log(codedata)
                return [200, { code: 200, msg: "发送成功" }]
            } else {
                return [200, { code: 201, msg: "发送失败" }]
            }




        })
        mock.onPost("/api/register").reply(config => {
            let { username, passworld, code } = JSON.parse(config.data) //把字
            num++
            var state = true
            console.log(username == Loginuser[0].username)
            Loginuser.some(i => {
                if (i.username == username) {
                    state = false
                }
            })
            if (state) {

                if (codedata == code) {
                    Loginuser.push({ id: num, username: username, passworld: passworld })
                    console.log(Loginuser)
                    return [200, { code: 200, msg: "注册成功", id: num }]
                } else {
                    console.log(Loginuser)
                    return [200, { code: 202, msg: "验证码错误" }]
                }


            } else {
                console.log(Loginuser)
                return [200, { code: 201, msg: "手机号已存在" }]
            }


        })
        mock.onPost("/api/login").reply(config => {
            //config是post传过来的参数
            let { username, passworld } = JSON.parse(config.data) //把字符串转化为一个对象
                //返回一个promise对象监听值的变换
            return new Promise((resolve, reject) => {
                let headers = null
                let udata = null
                setTimeout(() => {
                    Loginuser.some(u => {
                        console.log(u.username)
                        if (u.username === username && u.passworld === passworld) {
                            headers = true
                            udata = u
                        }
                    })
                    if (headers) {
                        resolve([200, { code: 200, msg: "登陆成功", data: udata }])
                    } else {
                        reject([500, { code: 500, msg: "账户或密码错误" }])
                    }
                }, 500)
            })
        })
        mock.onPost("/api/pc").reply(config => {
            //config是post传过来的参数
            let { id } = JSON.parse(config.data) //把字符串转化为一个对象
            var state = false
            var everyData = null
            console.log(dataMock.dataPC)
            dataMock.dataPC().some(i => {
                if (i.id == id) {
                    state = true
                    everyData = i
                }
            })
            if (state) {
                return ([200, { code: 200, msg: "查找成功", data: everyData }])
            } else {
                return ([500, { code: 500, msg: "查找失败" }])
            }
        })
        mock.onPost("/api/collect").reply(config => {
            //config是post传过来的参数
            let { id } = JSON.parse(config.data) //把字符串转化为一个对象
            var state = false
            var everyData = null
            dataMock.dataCollect.personalC.some(i => {
                if (i.id == id) {
                    state = true
                    everyData = i
                }
            })
            if (state) {
                return ([200, { code: 200, msg: "查找成功", data: everyData }])
            } else {
                return ([500, { code: 500, msg: "查找失败" }])
            }
        })
    }
}