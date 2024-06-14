using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.IdentityModel.Tokens.Jwt;
using UKnow.Data;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfilleController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProfilleController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("{userId}")]
        [Authorize]
        public async Task<ActionResult<IEnumerable<Profile>>> GetInfo(int userId)
        {
            var profile = await _context.Profile.FirstOrDefaultAsync(p => p.UserId == userId);

            if (profile == null)
            {
                return NotFound("Profile not found.");
            }

            return Ok(profile);
        }
    }
}
