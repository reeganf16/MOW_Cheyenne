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
    public class MetaDataController : ControllerBase
    {
        private readonly MetaDataRepository _dataRepo;

        private readonly ILogger _logger;

        public MetaDataController(MetaDataRepository dataRepo, ILogger<MetaDataController> logger)
        {
            _dataRepo = dataRepo;
            _logger = logger;
        }

        [HttpGet("")]
        public IActionResult Get()
        {
            return Ok(_dataRepo.GetAllMetaData());
        }

        [HttpGet("{key}")]
        public IActionResult Get(string key)
        {
            try
            {
                return Ok(_dataRepo.GetMetaDataByKey(key));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpPost("")]
        public ActionResult<MetaData> Post(MetaData data)
        {
            try
            {
                var newData = _dataRepo.AddMetaData(data);
                return CreatedAtAction("MetaData", new { id = newData.Id }, newData);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("{id:int}")]
        public IActionResult Put(int id, MetaData data)
        {
            if (id != data.Id)
            {
                return BadRequest();
            }

            try
            {
                _dataRepo.UpdateMetaData(data);
                return NoContent();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id:int}")]
        public IActionResult Delete(int id, MetaData data)
        {
            if (id != data.Id)
            {
                return BadRequest();
            }

            try
            {
                _dataRepo.DeleteMetaData(data);
                return NoContent();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
