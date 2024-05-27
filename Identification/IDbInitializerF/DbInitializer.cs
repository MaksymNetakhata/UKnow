using Identification.Data;
using Identification.Models;
using IdentityModel;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;

namespace Identification.IDbInitializerF
{
    public class DbInitializer : IDbInitializer
    {
        private readonly ApplicationDbContext _db;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public DbInitializer(ApplicationDbContext db, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            _db = db;
            _userManager = userManager;
            _roleManager = roleManager;

        }


        public void Initialize()
        {
            if (_roleManager.FindByNameAsync(SD.Admin).Result == null)
            {
                _roleManager.CreateAsync(new IdentityRole(SD.Admin)).GetAwaiter().GetResult();
                _roleManager.CreateAsync(new IdentityRole(SD.Student)).GetAwaiter().GetResult();
            }
            else { return; }

            ApplicationUser adminUser = new()
            {
                UserName = "admin1@gmail.com",
                Email = "admin1@gmail.com",
                EmailConfirmed = true,
                PhoneNumber = "1111111111",
                Name = "Ben",
            };

            _userManager.CreateAsync(adminUser, "Admin123*").GetAwaiter().GetResult();
            _userManager.AddToRoleAsync(adminUser, SD.Admin).GetAwaiter().GetResult();

            var claims1 = _userManager.AddClaimsAsync(adminUser, new Claim[]
            {
                new Claim(JwtClaimTypes.Name, adminUser.Name),
                new Claim(JwtClaimTypes.Role, SD.Admin),
            }).Result;


            ApplicationUser studentUser = new ApplicationUser()
            {
                UserName = "student1@gmail.com",
                Email = "student1@gmail.com",
                EmailConfirmed = true,
                PhoneNumber = "1111111111",
                Name = "Ben Student",
            };

            _userManager.CreateAsync(studentUser, "Student123*").GetAwaiter().GetResult();
            _userManager.AddToRoleAsync(studentUser, SD.Student).GetAwaiter().GetResult();

            var temp2 = _userManager.AddClaimsAsync(studentUser, new Claim[]
            {
                new Claim(JwtClaimTypes.Name, studentUser.Name),
                new Claim(JwtClaimTypes.Role, SD.Student),
            }).Result;
        }
    }
}
