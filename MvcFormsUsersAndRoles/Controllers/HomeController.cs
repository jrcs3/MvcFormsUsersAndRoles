using System.Web.Mvc;

namespace MvcFormsUsersAndRoles.Controllers
{
    //[Authorize]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Another page to navigate to.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}