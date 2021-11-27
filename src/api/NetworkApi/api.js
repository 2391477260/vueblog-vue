import http from "../NetWorkUtils/http";


// get请求
export function GetBlogs(params){
    return http.get("/getBlogs",params)
}
// get请求
export function GetBlogByArtId(params){
    return http.get("/getBlogByArtid",params)
}
