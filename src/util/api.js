import axios from 'axios'
import qs from 'qs'
import iView from 'iview'
import auth from '@/utils/auth'


axios.interceptors.request.use(config => {
    // 这里可以加一些动作, 比如来个进度条开始动作,
 	if (auth.get().token) {
        config.headers.Authorization = auth.get().token;
   }
    return config
}, error => {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {	
    return response
}, error => {
    // 这里我们把错误信息扶正, 后面就不需要写 catch 了
    return Promise.resolve(error.response)
})

export default {
    post(url, data) {    	
    	var acticleJsonString=JSON.stringify(data);		
		var params = new URLSearchParams();
		params.append('articleJson', acticleJsonString);    	
        return axios({
            method: 'post', // 请求协议
            url: url, // 请求的地址
            data: params, // post 请求的数据
            timeout: 30000, // 超时时间, 单位毫秒
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(checkStatus)
    },
    get(url, params) {
        return axios({
            method: 'get',
            url: url,
            params, // get 请求时带的参数
            timeout: 30000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(checkStatus)
    }
}


function checkStatus(response) {
    // 这里可以加一些动作, 比如来个进度条结束动作
	
    // 如果 http 状态码正常, 则直接返回数据
    if (response.status === 200 || response.status === 304) {
        return response
        // 这里, 如果不需要除 data 外的其他数据, 可以直接 return response.data, 这样可以让后面的代码精简一些
    }
    // 异常状态下, 把错误信息返回去
    // 因为前面我们把错误扶正了, 不然像 404, 500 这样的错误是走不到这里的
    return {
        data: {
            code: -404,
            message: response.statusText,
            data: response.statusText,
        }
    }
    // 如果上面你 return 的是 response.data, 那么这里可以写成
    // return {
    //    code: -404,
    //    message: response.statusText,
    //    data: response.statusText,
    //}
}
