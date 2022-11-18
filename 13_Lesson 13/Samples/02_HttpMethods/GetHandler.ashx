<%@ WebHandler Language="C#" Class="GetHandler" %>

using System;
using System.Web;

public class GetHandler : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "text/plain";

        // Чтение данных из строки запроса.
        string aParam = context.Request.Form["a"];
        string bParam = context.Request.Form["b"];

        // Формирование ответа.
        context.Response.Write("<b>GET</b> параметры переданные с запросом: hello=" + aParam + ", b=" + bParam);
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}