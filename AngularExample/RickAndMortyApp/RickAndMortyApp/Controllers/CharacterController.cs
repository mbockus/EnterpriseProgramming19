using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RickAndMortyApp.Controllers
{
    [Route("api/[controller]")]
    public class CharacterController : Controller
    {
        private Dictionary<int, Character> characters = new Dictionary<int, Character>();

        // GET: api/<controller>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(characters.Values);
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            if(characters.TryGetValue(id, out Character character))
            {
                return Ok(character);
            }
            return NotFound();
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]Character value)
        {
            characters.Add(value.Id, value);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Character value)
        {
            characters.Add(id, value);
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            characters.Remove(id);
        }
    }
}
