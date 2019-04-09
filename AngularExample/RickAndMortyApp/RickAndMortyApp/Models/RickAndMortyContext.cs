using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RickAndMortyApp.Models
{
    public class RickAndMortyContext : DbContext
    {
        public RickAndMortyContext(DbContextOptions<RickAndMortyContext> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Character> Characters { get; set; }
    }
}
