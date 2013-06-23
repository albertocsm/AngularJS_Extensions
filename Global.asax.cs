using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;
using System.Web.Security;
using System.Web.SessionState;

namespace AngularJS_1
{
    public class Global : System.Web.HttpApplication
    {
        #region members
        private const string _WebApiPrefix = "api";
        private static string _WebApiExecutionPath = String.Format("~/{0}", _WebApiPrefix);
        #endregion

        private void RegisterRoutes(RouteCollection routes)
        {
            routes.MapHttpRoute(
               name: "DefaultApi",
               routeTemplate: String.Format("{0}/{{controller}}/{{action}}/{{id}}", _WebApiPrefix),
               defaults: new { id = RouteParameter.Optional }
            );
        }

        protected void Application_Start(object sender, EventArgs e)
        {
            RegisterRoutes(RouteTable.Routes);
        }

        protected void Session_Start(object sender, EventArgs e)
        {

        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {

        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {

        }

        protected void Application_Error(object sender, EventArgs e)
        {

        }

        protected void Session_End(object sender, EventArgs e)
        {

        }

        protected void Application_End(object sender, EventArgs e)
        {

        }
    }
}