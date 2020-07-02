using System;
using System.Collections.Generic;
using System.Linq;
using MOW_Cheyenne.Data;
using MOW_Cheyenne.Models;

namespace MOW_Cheyenne.Repositories
{
    public class BoardMemberRepository
    {
        private readonly ApplicationContext _context;

        public BoardMemberRepository(ApplicationContext context)
        {
            _context = context;
        }

        public List<BoardMember> GetBoardMembers()
        {
            return _context.BoardMembers.ToList();
        }

        public BoardMember GetBoardMemberById(int id)
        {
            try
            {
                return _context.BoardMembers.Where(member => member.Id == id).Single();
            }
            catch
            {
                throw new Exception($"Board member id: {id} not found");
            }
        }

        public BoardMember AddBoardMember(BoardMember member)
        {
            try
            {
                _context.BoardMembers.Add(member);
                _context.SaveChanges();
                return member;
            }
            catch
            {
                throw new Exception($"Board member: {member} could not be added to the database");
            }

        }

        public BoardMember UpdateBoardMember(BoardMember member)
        {
            try
            {
                _context.BoardMembers.Update(member);
                _context.SaveChanges();
                return member;
            }
            catch
            {
                throw new Exception($"Board member: {member} could not be updated");
            }
            
        }

        public void DeleteBoardMember(BoardMember member)
        {
            try
            {
                _context.Remove(member);
                _context.SaveChanges();
            }
            catch
            {
                throw new Exception($"Board member: {member} could not be deleted");
            }
        }
    }
}