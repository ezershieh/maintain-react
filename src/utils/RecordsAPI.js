import $ from 'jquery';

// const api = "http://localhost:8080";
const api = "http://10.100.1.217:8080";

export const uId = 1;
export const companyId = 34;

export const getProjects = (data) => $.post(`${api}/project/select`, data)

export const delectProjects = (data) => $.post(`${api}/project/delect`, data)

export const getCompanyMember = (data) => $.post(`${api}/userinfo/list`, data)

export const getProjectsCompany = (data) => $.post(`${api}/project_company/select`, data)

export const remove =(id) => $.ajax({url: `${api}/project_company/select/${id}`,type: 'DELETE'})