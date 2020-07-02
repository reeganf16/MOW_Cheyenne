using System;
namespace MOW_Cheyenne.Models
{
    public class BoardMember
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FullName => $"{FirstName} {LastName}";
        public string BoardPosition { get; set; }
        public string ImageUrl { get; set; }

        public override string ToString()
        {
            return FullName;
        }
    }
}