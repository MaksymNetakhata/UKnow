using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.EntityFrameworkCore;
using UKnow.Data;
using webapi.Interfaces;

namespace webapi.DTO
{
    public class UsersRepository : IUsersRepository
    {
        private readonly AppDbContext _context;
        public UsersRepository(AppDbContext context)
        {
            _context = context;
        }
        public async Task<User> GetByEmail(string email)
        {
            var userEntity = await _context.User.AsNoTracking()
                .FirstOrDefaultAsync(u => u.Email == email) ?? throw new Exception();

            return userEntity;
        }
    }
}
