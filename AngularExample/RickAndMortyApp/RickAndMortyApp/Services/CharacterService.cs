using RickAndMortyApp.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RickAndMortyApp.Services
{
    public class CharacterService : ICharacterService
    {
        private Dictionary<int, Character> characters = new Dictionary<int, Character>();

        public CharacterService()
        {
            characters.Add(1, new Character()
            {
                Id = 1,
                Name = "Rick",
                CreatedDate = DateTime.UtcNow
            });

            characters.Add(2, new Character()
            {
                Id = 2,
                Name = "Morty",
                CreatedDate = DateTime.UtcNow
            });
        }
        public void CreateCharacter(Character character)
        {
            characters.Add(character.Id, character);
        }

        public IEnumerable<Character> SelectAll()
        {
            return characters.Values;
        }

        public Character SelectCharacter(int id)
        {
            return characters.GetValueOrDefault(id);
        }

        public void DeleteCharacter(int id)
        {
            characters.Remove(id);
        }

        public void UpdateCharacter(int id, Character character)
        {
            characters[id]=character;
        }
    }
}
