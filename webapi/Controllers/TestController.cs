using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UKnow.Data;

namespace webapi.Controllers
{
    public class TestController : Controller
    {
        private readonly AppDbContext _context;

        public TestController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("test")]
        public async Task<ActionResult<IEnumerable<Test>>> GetTests()
        {
            return Ok(await _context.Test.ToListAsync());
        }
    }
}
