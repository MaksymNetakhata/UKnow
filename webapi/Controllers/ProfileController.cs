using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

        [HttpGet]
        [Authorize]
        public async Task<ActionResult<IEnumerable<Profile>>> GetInfo()
        {
            return Ok(await _context.Profile.ToListAsync());
        }
    }
}
