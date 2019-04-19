using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using RickAndMortyApp.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RickAndMortyApp.Controllers
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        private UserManager<RickAndMortyUser> _userManager;
        private SignInManager<RickAndMortyUser> _signInManager;

        public LoginController(SignInManager<RickAndMortyUser> signinManager, UserManager<RickAndMortyUser> userManager)
        {
            this._userManager = userManager;
            this._signInManager = signinManager;
        }

        // POST api/<controller>
        [HttpPost("create")]
        public async Task<IActionResult> PostAsync([FromBody]RickAndMortyUserLogin loginCreds)
        {
            var result = await _userManager.CreateAsync(new RickAndMortyUser()
            {
                UserName = loginCreds.userName
            }, loginCreds.password);
            if(result.Succeeded)
            {
                return Ok();
            } else
            {
                return BadRequest();
            }
            
        }

        
        [HttpPost()]
        public async Task<IActionResult> AuthenticateUserAsync([FromBody]RickAndMortyUserLogin loginCreds)
        {
            var result = await _signInManager.CheckPasswordSignInAsync(new RickAndMortyUser()
            {
                UserName = loginCreds.userName
            }, loginCreds.password, false);
            return Ok();
        }
        
    }
}
