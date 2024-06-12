using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using UKnow.Data;
using webapi.DTO;
using webapi.Interfaces;
using webapi.Utility;


namespace webapi.Controllers
{
    [ApiController]
    [Route("auth")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly PasswordHasher _passwordHasher;
        private readonly IUsersService _usersService;

        public AuthController(AppDbContext context, IUsersService usersService)
        {
            _context = context;
            _passwordHasher = new PasswordHasher();
            _usersService = usersService;
        }

        [HttpPost("register")]
        [EnableCors("AllowAllHeaders")]
        public async Task<IResult> Register([FromBody] RegisterModel model)
        {
            await _usersService.Register(model.Name, model.Email, model.Password);

            return Results.Ok();
        }

        [HttpPost]
        [EnableCors("AllowAllHeaders")]
        public async Task<IResult> Login(LoginModel model)
        {
            var token = await _usersService.Login(model.Email, model.Password);

            HttpContext.Response.Cookies.Append("cookies", token);



            return Results.Ok(token);



        }

        //public async Task<IActionResult> Logout()
        //{
        //    await HttpContext.SignOutAsync();
        //    SignOut("Cookies", "oidc");
        //    return RedirectToAction("Index", "Home");
        //}

        //[HttpGet("request")]
        //public async Task<string> Request()
        //{
        //    var res = new Gemini();
        //    string response = await res.GetResponse();
        //    return response;
        //}


    }
}
