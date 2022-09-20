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
        public string itemCode { get; set; }
        [Required,  Column(TypeName ="nvarchar(25)")]
        public string description{ get; set; }
        [Required,  Column(TypeName = "nvarchar(300)")]
        public string active{ get; set; }
        [Required,  Column(TypeName ="bit")]
        public string customerDescription{ get; set; }
        [Column(TypeName ="nvarchar(300)")]
        public string salesItem{ get; set; }
        [Required,  Column(TypeName = "bit")]
        public string stockItem { get; set; }
        [Required,  Column(TypeName = "bit")]
        public string purchasedItem { get; set; }
        [Required,  Column(TypeName = "bit")]
        public string barcode{ get; set; }
        [Required,  Column(TypeName = "nvarchar(100)")]
        public string manageItemBy { get; set; }
        [Required,  Column(TypeName = "int")]
        public string minimumInventory { get; set; }
        [Required,  Column(TypeName = "decimal")]

        public string maximumInventory{ get; set; }
        [Required,  Column(TypeName = "decimal")]
        public string remarks { get; set; }
        [Column(TypeName = "nvarchar(max)")]
        public string imagePath{ get; set; }
        [Required,  Column(TypeName = "nvarchar(max)")]





    }

}