using System;
using Microsoft.EntityFrameworkCore;
using MOW_Cheyenne.Models;

namespace MOW_Cheyenne.Data
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
        }

        public DbSet<BoardMember> BoardMembers { get; set; }
        public DbSet<MetaData> MetaDatas { get; set; }
    }
}