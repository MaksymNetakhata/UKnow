using Identification.Models;
using IdentityModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Security.Claims;

namespace Identification.Pages.Account.Register
{
    public class IndexModel : PageModel
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public IndexModel (
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            RoleManager<IdentityRole> roleManager
            )
        {
            _roleManager = roleManager;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [BindProperty]
        public RegisterViewModel Input { get; set; }



        public async Task<IActionResult> OnGet(string returnUrl)
        {
            Input = new RegisterViewModel
            {
                ReturnURL = returnUrl
            };
            return Page();
        }
        public async Task<IActionResult> OnPost(string returnUrl)
        {
            if(ModelState.IsValid)
            {
                var user = new ApplicationUser()
                {
                    UserName = Input.Name,
                    Email = Input.Email,
                    EmailConfirmed = true,
                    Name = Input.Name,
                };

                var result = await _userManager.CreateAsync(user, Input.Password);

                if (result.Succeeded)
                {
                    //await _userManager.AddToRoleAsync(user, Input.RoleName);

                    await _userManager.AddClaimsAsync(user, new Claim[]
                    {
                        new Claim(JwtClaimTypes.Name, Input.Name),
                        new Claim(JwtClaimTypes.Email, Input.Email),
                       // new Claim(JwtClaimTypes.Role, Input.RoleName)
                    });

                    var loginresult = await _signInManager.PasswordSignInAsync(Input.Email, 
                        Input.Password, false, lockoutOnFailure: true);
                    if (loginresult.Succeeded)
                    {
                        if (Url.IsLocalUrl(Input.ReturnURL))
                        {
                            return Redirect(Input.ReturnURL);
                        }
                        else if (string.IsNullOrEmpty(Input.ReturnURL))
                        {
                            return Redirect("~/");
                        }
                        else
                        {
                            throw new Exception("invalid return URL");
                        }
                    }
                }

            }

            return Page();
        }
    }
}
