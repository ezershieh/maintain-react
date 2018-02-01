import $ from 'jquery';

const api = "http://10.100.1.217:8080";

export const getProjects = (data) => $.post(`${api}/project/select`, data)

export const getProjectsCompany = (data) => $.post(`${api}/project_company/select`, data)
export const remove =(id) => $.ajax({url: `${api}/project_company/select/${id}`,type: 'DELETE'})