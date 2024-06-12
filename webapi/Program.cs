using AutoMapper;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.CookiePolicy;
using Microsoft.EntityFrameworkCore;
using UKnow.Data;
using webapi.DTO;
using webapi.Extensions;
using webapi.Interfaces;
using webapi.Utility;

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;
var services = builder.Services;

// Add services to the container.
services.Configure<JwtOptions>(configuration.GetSection(nameof(JwtOptions)));
services.AddScoped<JwtProvider>();
services.AddScoped<IUsersService, UsersService>();
services.AddScoped<IUsersRepository, UsersRepository>();

services.AddApiAuthentication(configuration);

builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("WebApiDatabase")));
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllHeaders",
        builder =>
        {
            builder.WithOrigins("https://localhost:5173")
                   .AllowAnyHeader()
                   .AllowAnyMethod()
                   .AllowCredentials();

        });
});


//builder.Services.AddAuthentication
//    (options =>
//    {
//        options.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
//        options.DefaultChallengeScheme = "oidc";

//    }).AddOpenIdConnect("oidc", options =>
//    {
//        options.Authority = builder.Configuration["ServiceUrls:IdentityAPI"];
//        options.GetClaimsFromUserInfoEndpoint = true;
//        options.ClientId = "teacher";
//        options.ClientSecret = "secret";
//        options.ResponseType = "code";

//        options.TokenValidationParameters.NameClaimType = "name";
//        //options.TokenValidationParameters.RoleClaimType = "role";
//        options.Scope.Add("teacher");
//        options.SaveTokens = true;

//        //options.ClaimActions.MapJsonKey("role", "role");
//    });




var app = builder.Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCookiePolicy(new CookiePolicyOptions
{
    MinimumSameSitePolicy = SameSiteMode.Strict,
    HttpOnly = HttpOnlyPolicy.Always,
    Secure = CookieSecurePolicy.Always
});

app.UseCors("AllowAllHeaders");


app.UseAuthentication();

app.UseAuthorization();



app.MapControllers();

app.Run();
