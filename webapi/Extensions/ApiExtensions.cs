using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using webapi.Utility;

namespace webapi.Extensions
{
    public static class ApiExtensions
    {
        //public static void AddApiAuthentication(
        //    this IServiceCollection services,
        //    IOptions<JwtOptions> jwtOptions)
        //{
        //    services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
        //        .AddJwtBearer(JwtBearerDefaults.AuthenticationScheme, options =>
        //        {
        //            options.TokenValidationParameters = new()
        //            {
        //                ValidateIssuer = false,
        //                ValidateAudience = false,
        //                ValidateLifetime = true,
        //                ValidateIssuerSigningKey = true,
        //                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtOptions.Value.SecretKey))
        //            };

        //            options.Events = new JwtBearerEvents()
        //            {
        //                OnMessageReceived = context =>
        //                {
        //                    context.Token = context.Request.Cookies["cookies"];

        //                    return Task.CompletedTask;
        //                }
        //            };
        //        });

        //    services.AddAuthorization();
        //}
        public static void AddApiAuthentication(this IServiceCollection services,
    IConfiguration configuration)
        {
            var jwtSettings = configuration.GetSection(nameof(JwtOptions)).
                Get<JwtOptions>();

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)

                .AddJwtBearer(JwtBearerDefaults.AuthenticationScheme, options =>
                {
                    options.TokenValidationParameters = new()
                    {
                        ValidateIssuer = false,
                        ValidateActor = false,
                        ValidateAudience = false,
                        ValidateIssuerSigningKey = true,
                        ValidateLifetime = true,
                        IssuerSigningKey = new SymmetricSecurityKey(
                            Encoding.UTF8.GetBytes(jwtSettings.SecretKey)),
                    };

                    options.Events = new JwtBearerEvents
                    {
                        OnMessageReceived = context =>
                        {
                            context.Token = context.Request.Cookies["cookies"];

                            return Task.CompletedTask;
                        }
                    };
                });

            services.AddAuthorization();
        }
    }
}
