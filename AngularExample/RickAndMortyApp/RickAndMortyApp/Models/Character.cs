using System;
using System.Collections.Generic;

namespace RickAndMortyApp.Models
{
    public class Character
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime CreatedDate { get; set; }
        public List<CharacterTrait> CharacterTraits { get; set; }
    }
}