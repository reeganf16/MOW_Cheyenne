using System;
using System.Linq;
using MOW_Cheyenne.Models;

namespace MOW_Cheyenne.Data
{
    public static class InitializeDb
    {
        public static void Initialize(ApplicationContext context)
        {
            context.Database.EnsureCreated();

            if(context.BoardMembers.Any()) {
                return;
            }

            var boardMembers = new BoardMember[]
            {
                new BoardMember
                {
                    FirstName = "Tyler",
                    LastName = "Gibbs",
                    BoardPosition = "President",
                    ImageUrl = "../ClientApp/src/images/placeholder.png"
                },

                new BoardMember
                {
                    FirstName = "Ralph",
                    LastName = "Atchley",
                    BoardPosition = "Vice President",
                    ImageUrl = "#"
                },

                new BoardMember
                {
                    FirstName = "Kristen",
                    LastName = "Begger",
                    BoardPosition = "Secretary",
                    ImageUrl = "#"
                },

                new BoardMember
                {
                    FirstName = "Matt",
                    LastName = "Behrends",
                    BoardPosition = "Treasurer",
                    ImageUrl = "#"
                },

                new BoardMember
                {
                    FirstName = "Sue",
                    LastName = "Conrad",
                    BoardPosition = "Director",
                    ImageUrl = "#"
                },

                new BoardMember
                {
                    FirstName = "Chris",
                    LastName = "Lovas",
                    BoardPosition = "Director",
                    ImageUrl = "#"
                },

                new BoardMember
                {
                    FirstName = "David",
                    LastName = "Kling",
                    BoardPosition = "Director",
                    ImageUrl = "#"
                },

                new BoardMember
                {
                    FirstName = "Amy",
                    LastName = "Shaw",
                    BoardPosition = "Director",
                    ImageUrl = "#"
                },

                new BoardMember
                {
                    FirstName = "Donna",
                    LastName = "Shippen",
                    BoardPosition = "Director",
                    ImageUrl = "#"
                },

                new BoardMember
                {
                    FirstName = "Katye",
                    LastName = "Brown",
                    BoardPosition = "Director",
                    ImageUrl = "#"
                },

                new BoardMember
                {
                    FirstName = "Meg",
                    LastName = "Kylander",
                    BoardPosition = "Executive Director",
                    ImageUrl = "#"
                }
            };

            var metaDatas = new MetaData[]
            {
                new MetaData
                {
                    Key = "officeHours",
                    Value = "Monday - Friday 6:30 a.m. - 2:30 p.m"
                },

                new MetaData
                {
                    Key = "martHours",
                    Value = "Mart (Thrift Store) is closed until further notice for COVID-19 safety."
                },

                new MetaData
                {
                    Key = "phoneNumber",
                    Value = "(307) 635-5542"
                },

                new MetaData
                {
                    Key = "email",
                    Value = "info@mealsonwheelsofcheyenne.com"
                },

                new MetaData
                {
                    Key = "address",
                    Value = "2015 South Greeley Highway Cheyenne, Wyoming 82007"
                }
            };

            context.BoardMembers.AddRange(boardMembers);
            context.MetaDatas.AddRange(metaDatas);
            context.SaveChanges();
        }
    }
}
