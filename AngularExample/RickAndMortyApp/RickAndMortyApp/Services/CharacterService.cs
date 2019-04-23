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

        public void CreateCharacter(string userName, Character character)
        {
            character.UserName = userName;
            _context.Characters.Add(character);
            _context.SaveChanges();
        }

        public IEnumerable<Character> SelectAll(string userName)
        {
            return _context.Characters.Where(ch => ch.UserName == userName).ToList();
        }

        public Character SelectCharacter(int id)
        {
            return _context.Characters.Where(character => id == character.Id).FirstOrDefault();
        }

        public void DeleteCharacter(string userName, int id)
        {
            var characterToDelete = SelectCharacter(id);
            if(characterToDelete != null)
            {
                if(characterToDelete.UserName != userName)
                {
                    throw new Exception();
                }
                _context.Characters.Remove(characterToDelete);
                _context.SaveChanges();
            }
        }

        public void UpdateCharacter(string userName, int id, Character character)
        {
            var characterToUpdate = SelectCharacter(id);
            if(characterToUpdate.UserName != userName)
            {
                throw new Exception();
            }
            characterToUpdate.Name = character.Name;
            characterToUpdate.CreatedDate = character.CreatedDate;
            _context.SaveChanges();
        }

        public IEnumerable<Character> SelectAllWithTraits(string[] traitList)
        {
            var characters = _context.Characters.Where(character => traitList.All(trait => character.CharacterTraits.Any(charTrait => charTrait.Trait == trait)));
            return characters;
        }
    }
}
