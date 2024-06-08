using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UKnow.Data;

namespace webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TestController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Test>>> GetTests()
        {
            var asr = HttpContext.Request;
            return Ok(await _context.Test.ToListAsync());
        }
    }
}
