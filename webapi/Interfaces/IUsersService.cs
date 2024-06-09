namespace webapi.Interfaces
{
    public interface IUsersService
    {
        Task Register(string userName, string email, string password);
        Task<string> Login(string email, string password);

    }
}
