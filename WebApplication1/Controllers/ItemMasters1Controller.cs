using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemMasters1Controller : ControllerBase
    {
        private readonly DonationDBContext _context;

        public ItemMasters1Controller(DonationDBContext context)
        {
            _context = context;
        }

        // GET: api/ItemMasters1
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ItemMaster>>> GetItemMasters()
        {
            return await _context.ItemMasters.ToListAsync();
        }

        // GET: api/ItemMasters1/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ItemMaster>> GetItemMaster(string id)
        {
            var itemMaster = await _context.ItemMasters.FindAsync(id);

            if (itemMaster == null)
            {
                return NotFound();
            }

            return itemMaster;
        }

        // PUT: api/ItemMasters1/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutItemMaster(string id, ItemMaster itemMaster)
        {
            id = itemMaster.itemCode;

            _context.Entry(itemMaster).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ItemMasterExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ItemMasters1
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ItemMaster>> PostItemMaster(ItemMaster itemMaster)
        {
            _context.ItemMasters.Add(itemMaster);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ItemMasterExists(itemMaster.itemCode))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetItemMaster", new { id = itemMaster.itemCode }, itemMaster);
        }

        // DELETE: api/ItemMasters1/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ItemMaster>> DeleteItemMaster(string id)
        {
            var itemMaster = await _context.ItemMasters.FindAsync(id);
            if (itemMaster == null)
            {
                return NotFound();
            }

            _context.ItemMasters.Remove(itemMaster);
            await _context.SaveChangesAsync();

            return itemMaster;
        }

        private bool ItemMasterExists(string id)
        {
            return _context.ItemMasters.Any(e => e.itemCode == id);
        }
    }
}
