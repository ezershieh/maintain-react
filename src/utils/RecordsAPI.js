import $ from 'jquery';

const api = "http://10.100.1.217:8080";

export const getProjects = (data) => $.post(`${api}/project/select`, data)