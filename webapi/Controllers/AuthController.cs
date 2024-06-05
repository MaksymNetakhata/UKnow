﻿using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using UKnow.Data;
using webapi.DTO;
using webapi.Utility;


namespace webapi.Controllers
{
    public class AuthController : Controller
    {
        private readonly AppDbContext _context;
        private readonly PasswordHasher _passwordHasher;

        public AuthController(AppDbContext context)
        {
            _context = context;
            _passwordHasher = new PasswordHasher();
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterModel model)
        {
            var hashedPassword = _passwordHasher.Generate(model.Password);
            var user = new User
            {
                Email = model.Email,
                Password = hashedPassword,
                Name = model.Name
            };

            _context.User.Add(user);
            _context.SaveChanges();

            return Ok(new { message = "Registration successful" });
        }

        [HttpPost("login")]
        [Authorize]
        public async Task<IActionResult> Login()
        {

            var accessToken = await HttpContext.GetTokenAsync("access_token");
            return RedirectToAction(nameof(Index), "Home");

            //var user = _context.User.SingleOrDefault(u => u.Email == model.Email);
            //if (user == null)
            //{
            //    return Unauthorized();
            //}


            //return Ok(new { message = "Login successful" });
            //var token = GenerateToken(user);
            //return Ok(new { token });
        }

        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync();
            SignOut("Cookies", "oidc");
            return RedirectToAction("Index", "Home");
        }

        [HttpGet("request")]
        public async Task<string> Request()
        {
            var res = new Gemini();
            string response = await res.GetResponse();
            return response;
        }


    }
}
