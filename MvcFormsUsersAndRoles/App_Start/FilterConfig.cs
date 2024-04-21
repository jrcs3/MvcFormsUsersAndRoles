using System.Web.Mvc;
using System.Web.Routing;

namespace MvcFormsUsersAndRoles
{

    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
            filters.Add(new HandleAntiforgeryTokenErrorAttribute()
                { ExceptionType = typeof(HttpAntiForgeryException) }
            );
        }
    }

    // To avoid the dreaded anti-forgery token error message
    // See: http://stackoverflow.com/a/24376825
    public class HandleAntiforgeryTokenErrorAttribute : HandleErrorAttribute
    {
        public override void OnException(ExceptionContext filterContext)
        {
            filterContext.ExceptionHandled = true;
            filterContext.Result = new RedirectToRouteResult(
                new RouteValueDictionary(new { action = "TokenError", controller = "Account" }));
        }
    }
}
