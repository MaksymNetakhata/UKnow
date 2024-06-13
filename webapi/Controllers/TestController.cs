using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.Internal;
using System.IdentityModel.Tokens.Jwt;
using UKnow.Data;
using webapi.DTO;

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
        [Authorize]
        public async Task<ActionResult<IEnumerable<Test>>> GetTests()
        {
            var asr = HttpContext.Request;
            return Ok(await _context.Test.ToListAsync());
        }


        [HttpPost]
        [Authorize]
        public async Task<IActionResult> SaveResults([FromBody] SaveResultRequest request)
        {
            if (request == null || request.Score < 0)
            {
                return BadRequest("Invalid request");
            }

            var existingProfile = await _context.Profile.FirstOrDefaultAsync(p => p.UserId == request.UserId);

            if (existingProfile != null)
            {
                // Обновляем существующую запись
                //existingProfile.ScoreIn1 = request.Score;
                Profile markedProfile = SetMark(existingProfile, request);
                _context.Profile.Update(markedProfile);
            }
            else
            {
                // Создаем новую запись
                var profile = new Profile
                {
                    UserId = request.UserId,
                };
                Profile markedProfile = SetMark(profile, request);
                _context.Profile.Add(markedProfile);
            }

            await _context.SaveChangesAsync();
            return Ok(new { Message = "Results saved successfully" });
        }

        private Profile SetMark(Profile profile, SaveResultRequest request)
        {
            switch (request.TestId)
            {
                case 1:
                    profile.ScoreIn1 = request.Score;
                    break;
                case 2:
                    profile.ScoreIn2 = request.Score;
                    break;
                case 3:
                    profile.ScoreIn3 = request.Score;
                    break;
                case 4:
                    profile.ScoreIn4 = request.Score;
                    break;
                case 5:
                    profile.ScoreIn5 = request.Score;
                    break;
                case 6:
                    profile.ScoreIn6 = request.Score;
                    break;
                case 7:
                    profile.ScoreIn7 = request.Score;
                    break;
                case 8:
                    profile.ScoreIn8 = request.Score;
                    break;
                case 9:
                    profile.ScoreIn9 = request.Score;
                    break;
                case 10:
                    profile.ScoreIn10 = request.Score;
                    break;
                default:
                    
                    break;
            }
            return profile;
        }
    }
}
