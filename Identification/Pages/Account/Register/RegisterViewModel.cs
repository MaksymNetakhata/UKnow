﻿using System.ComponentModel.DataAnnotations;

namespace Identification.Pages.Account.Register
{
    public class RegisterViewModel
    {
        [Required]
        public string Email { get; set; }
        public string Name { get; set; }
        [Required]
        public string Password { get; set; }
        public string ReturnURL { get; set; }
        //public string RoleName { get; set; }
    }
}
