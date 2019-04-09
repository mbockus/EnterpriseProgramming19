using RickAndMortyApp.Controllers;
using RickAndMortyApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RickAndMortyApp.Services
{
    public class CharacterService : ICharacterService
    {
        private RickAndMortyContext _context;

        public CharacterService(RickAndMortyContext context)
        {
            _context = context;
        }

        public void CreateCharacter(Character character)
        {
            _context.Characters.Add(character);
            _context.SaveChanges();
        }

        public IEnumerable<Character> SelectAll()
        {
            return _context.Characters.ToList();
        }

        public Character SelectCharacter(int id)
        {
            return _context.Characters.Where(character => id == character.Id).FirstOrDefault();
        }

        public void DeleteCharacter(int id)
        {
            var characterToDelete = SelectCharacter(id);
            if(characterToDelete != null)
            {
                _context.Characters.Remove(characterToDelete);
                _context.SaveChanges();
            }
        }

        public void UpdateCharacter(int id, Character character)
        {
            var characterToUpdate = SelectCharacter(id);
            characterToUpdate.Name = character.Name;
            characterToUpdate.CreatedDate = character.CreatedDate;
            _context.SaveChanges();
        }
    }
}
