import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
export const request = axios.create({
	baseURL: 'http://localhost:8888/api',
	// timeout: 600000,
});
//===================axios请求拦截器【发请求前将token加到请求头】===================
// 请求拦截器 在请求发送前进行必要操作处理
request.interceptors.request.use(
	async (res: AxiosRequestConfig) => {
		return res;
	},
	(error) => {
		return Promise.reject(error);
	}
);

//===============================axios响应拦截器===============================
// 响应拦截器 在请求得到响应之后，对响应体进行一些处理
request.interceptors.response.use(
	(res: AxiosResponse) => {
		// console.log('interceptors-response-true', res);
		return res;
	},
	async (res) => {
		const { response } = res;
		if (response.status === 401) {
		} else if (response.status === 503) {
		} else if (response.status === 403) {
		} else {
		}
		return Promise.reject(res);
	}
);
