using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1
{

    public class ItemMaster
    {
        [Key]
        [Column(TypeName = "nvarchar(25)")]
        public string itemCode { get; set; }
        [Required, Column(TypeName = "nvarchar(300)")]
        public string description { get; set; }

        [Required, Column(TypeName = "bit")]
        public bool active { get; set; }

        [Column(TypeName = "nvarchar(300)")]
        public string customerDescription { get; set; }

        [Required, Column(TypeName = "bit")]
        public bool salesItem { get; set; }

        [Required, Column(TypeName = "bit")]
        public bool stockItem { get; set; }

        [Required, Column(TypeName = "bit")]
        public bool purchasedItem { get; set; }
        [Required, Column(TypeName = "nvarchar(100)")]
        public string barcode { get; set; }
        [Required, Column(TypeName = "int")]
        public int manageItemBy { get; set; }

        [Required, Column(TypeName = "decimal")]
        public float minimumInventory { get; set; }

        [Required, Column(TypeName = "decimal")]
        public float maximumInventory { get; set; }

        [Column(TypeName = "nvarchar(max)")]
        public string remarks { get; set; }

        [Required, Column(TypeName = "nvarchar(100)")]
        public string imagePath { get; set; }



    }

}