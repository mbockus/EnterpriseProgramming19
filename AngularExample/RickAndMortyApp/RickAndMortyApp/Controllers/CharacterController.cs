using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RickAndMortyApp.Models;
using RickAndMortyApp.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RickAndMortyApp.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class CharacterController : Controller
    {
        private ICharacterService _characterService;

        public CharacterController(ICharacterService characterService)
        {
            _characterService = characterService;
        }

        // GET: api/<controller>
        [HttpGet]
        public IActionResult Get()
        {
            var userName = this.User.Identity.Name;
            var characters = _characterService.SelectAll(userName);
            return Ok(characters);
        }

        // GET: api/<controller>
        [HttpGet("traits")]
        public IActionResult GetCharactersWithTraits([FromQuery]string traits)
        {
            var traitList = traits.Split(',');
            var characters = _characterService.SelectAllWithTraits(traitList);
            return Ok(characters);
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var character = _characterService.SelectCharacter(id);
            if(character != null)
            {
                return Ok(character);
            }
            return NotFound();
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]Character value)
        {
            var userName = this.User.Identity.Name;
            _characterService.CreateCharacter(userName, value);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Character value)
        {
            try { 
                var userName = this.User.Identity.Name;
                _characterService.UpdateCharacter(userName, id, value);
                return Ok();
            } catch(Exception)
            {
                return Unauthorized();
            }
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try { 
                var userName = this.User.Identity.Name;
                _characterService.DeleteCharacter(userName, id);
                return Ok();
            } catch(Exception e)
            {
                return Unauthorized();
            }
        }
    }
}
