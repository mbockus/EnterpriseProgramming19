using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RickAndMortyApp.Models;
using RickAndMortyApp.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RickAndMortyApp.Controllers
{
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
            var characters = _characterService.SelectAll();
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
            _characterService.CreateCharacter(value);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Character value)
        {
            _characterService.UpdateCharacter(id, value);
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _characterService.DeleteCharacter(id);
        }
    }
}
