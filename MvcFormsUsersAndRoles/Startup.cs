using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MvcFormsUsersAndRoles.Startup))]
namespace MvcFormsUsersAndRoles
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
