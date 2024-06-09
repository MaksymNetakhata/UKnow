using Duende.IdentityServer;
using Duende.IdentityServer.Models;
using IdentityModel;
using static System.Net.WebRequestMethods;

namespace Identification
{
    public static class SD
    {
        public const string Admin = "admin";
        public const string Student = "student";

        public static IEnumerable<IdentityResource> IdentityResources =>
            new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Email(),
                new IdentityResources.Profile(),
            };
        public static IEnumerable<ApiScope> ApiScopes =>

            new List<ApiScope>
            {
                new ApiScope("teacher", "Teacher Server"),
                new ApiScope(name: "read",   displayName: "Read your data."),
                new ApiScope(name: "write",  displayName: "Write your data."),
                new ApiScope(name: "delete", displayName: "Delete your data.")
            };


        public static IEnumerable<Client> Clients =>

        new List<Client>
        {
            new Client
            {
                ClientId = "teacher",
                ClientSecrets = { new Secret("secret".Sha256()) },
                AllowedGrantTypes = GrantTypes.Code,
                AllowedScopes = { "teacher", 
                    IdentityServerConstants.StandardScopes.OpenId,
                    IdentityServerConstants.StandardScopes.Profile,
                    IdentityServerConstants.StandardScopes.Email
                    //JwtClaimTypes.Role
                },
                RedirectUris = {"http://localhost:5208/signin-oidc" },
                PostLogoutRedirectUris={ "http://localhost:5208/signout-callback-oidc" },
                //RequirePkce = true,
                //AllowAccessTokensViaBrowser = true
            }
        };
    }
}
