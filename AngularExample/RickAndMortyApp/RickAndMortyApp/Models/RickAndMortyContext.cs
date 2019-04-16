using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RickAndMortyApp.Models
{
    public class RickAndMortyContext : IdentityDbContext<RickAndMortyUser>
    {
        public RickAndMortyContext(DbContextOptions<RickAndMortyContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Character> Characters { get; set; }
        public DbSet<CharacterTrait> CharacterTraits { get; set; }
    }
}
