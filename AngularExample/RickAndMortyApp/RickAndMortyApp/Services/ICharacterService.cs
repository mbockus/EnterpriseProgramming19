using RickAndMortyApp.Controllers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RickAndMortyApp.Services
{
    public interface ICharacterService
    {
        void CreateCharacter(Character character);
        IEnumerable<Character> SelectAll();
        Character SelectCharacter(int id);
        void DeleteCharacter(int id);
        void UpdateCharacter(int id, Character character);
    }
}
