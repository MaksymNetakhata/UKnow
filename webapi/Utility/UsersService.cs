using UKnow.Data;
using webapi.DTO;
using webapi.Interfaces;

namespace webapi.Utility
{
    public class UsersService : IUsersService
    {
        private readonly AppDbContext _context;
        private readonly PasswordHasher _passwordHasher;
        private readonly IUsersRepository _usersRepository;
        private readonly JwtProvider _jwtProvider;

        public UsersService(AppDbContext context, IUsersRepository usersRepository, JwtProvider jwtProvider)
        {
            _context = context;
            _passwordHasher = new PasswordHasher();
            _usersRepository = usersRepository;
            _jwtProvider = jwtProvider;
        }

        public async Task Register(string userName, string email, string password)
        {
            var hashedPassword = _passwordHasher.Generate(password);
            var user = new User
            {
                Email = email,
                Password = hashedPassword,
                Name = userName
            };

            _context.User.Add(user);
            _context.SaveChanges();
        }

        public async Task<string> Login(string email, string password)
        {
            var user = await _usersRepository.GetByEmail(email);

            var result = _passwordHasher.Verify(password, user.Password);

            if (result == false)
            {
                throw new Exception("Failed to login");
            }

            var token = _jwtProvider.GenerateToken(user);

            return token;
        }
    }
}
