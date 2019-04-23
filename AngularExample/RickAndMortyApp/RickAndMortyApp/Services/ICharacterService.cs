using RickAndMortyApp.Controllers;
using RickAndMortyApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RickAndMortyApp.Services
{
    public interface ICharacterService
    {
        void CreateCharacter(string userName, Character character);
        IEnumerable<Character> SelectAll(string userName);
        Character SelectCharacter(int id);
        void DeleteCharacter(string userName, int id);
        void UpdateCharacter(string userName, int id, Character character);
        IEnumerable<Character> SelectAllWithTraits(string[] traitList);
    }
}
