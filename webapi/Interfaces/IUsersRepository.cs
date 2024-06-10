using UKnow.Data;

namespace webapi.Interfaces
{
    public interface IUsersRepository
    {
        Task<User> GetByEmail(string email);
    }
}
