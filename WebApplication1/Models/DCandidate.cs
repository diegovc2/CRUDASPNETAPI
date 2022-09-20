using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1
{

    public class DCandidate
    {
        [Key]
        public int id { get; set; }
        [Column(TypeName ="nvarchar(100)")]
        public string fullName { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string phoneNumber { get; set; }
        [Column(TypeName ="nvarchar(100)")]
        public string address { get; set; }
        [Column(TypeName ="nvarchar(100)")]
        public string company{ get; set; }    }

}