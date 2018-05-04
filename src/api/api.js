import axios from 'axios';

let baseUrl = window.Api.ApiUrl; //api域名
//获取医用冰箱博物馆首页的侧边栏菜单
export const getFridgesIndexMenu = params => {
  return axios.get(`${baseUrl}` + window.AxiosApi.Fridges_IndexMenu, {timeout: 60000}).then(res => res.data);
};
//获取医用冰箱博物馆首页的列表信息
export const getFridgesIndexList = params => {
  return axios.get(`${baseUrl}` + window.AxiosApi.Fridges_IndexList, {timeout: 60000}).then(res => res.data);
};
//获取医用冰箱博物馆厂家的列表信息
export const getManufacturerData = params => {
  return axios.get(`${baseUrl}` + window.AxiosApi.Fridges_ManufacturerData, {timeout: 60000}).then(res => res.data);
};
