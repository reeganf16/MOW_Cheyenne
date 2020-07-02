using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MOW_Cheyenne.Models;
using MOW_Cheyenne.Repositories;

namespace MOWCheyenne.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BoardMembersController : ControllerBase
    {
        private readonly BoardMemberRepository _membersRepo;

        private readonly ILogger _logger;

        public BoardMembersController(BoardMemberRepository membersRepo, ILogger<BoardMembersController> logger)
        {
            _membersRepo = membersRepo;
            _logger = logger;
        }

        [HttpGet("")]
        public IActionResult Get()
        {
            return Ok(_membersRepo.GetBoardMembers());
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok(_membersRepo.GetBoardMemberById(id));
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpPost("")]
        public ActionResult<BoardMember> Post(BoardMember member)
        {
            try
            {
                var newMember = _membersRepo.AddBoardMember(member);
                return CreatedAtAction("boardMembers", new { id = newMember.Id }, newMember);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("{id:int}")]
        public IActionResult Put(int id, BoardMember member)
        {
            if (id != member.Id)
            {
                return BadRequest();
            }

            try
            {
                _membersRepo.UpdateBoardMember(member);
                return NoContent();
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id:int}")]
        public IActionResult Delete(int id, BoardMember member)
        {
            if (id != member.Id)
            {
                return BadRequest();
            }

            try
            {
                _membersRepo.DeleteBoardMember(member);
                return NoContent();
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}