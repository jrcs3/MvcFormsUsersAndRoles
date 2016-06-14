Congratulations, you are almost done. There are a couple of things that I can't do in an item template. You 
will have to make these changes yourself.

1. In the file App_Start/Startup.Auth.cs, in the StartUp class, there is a method called ConfigureAuth(), add 
the following line after "app.CreatePerOwinContext(ApplicationDbContext.Create);":

	app.CreatePerOwinContext<ApplicationRoleManager>(ApplicationRoleManager.Create);

2. You will also need to add navigation to your new pages. In Views/Shared/_Layout.cshtml, add the following 
code in the "navbar-nav" ul:

	@if (Request.IsAuthenticated && User.IsInRole("Admin"))
	{
		<li>@Html.ActionLink("RolesAdmin", "Index", "RolesAdmin")</li>
		<li>@Html.ActionLink("UsersAdmin", "Index", "UsersAdmin")</li>
	}

