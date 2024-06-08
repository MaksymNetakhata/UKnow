using Microsoft.AspNetCore.Identity;

namespace Identification.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string Name { get; set; }

        public Marks Marks { get; set; }
    }
}
