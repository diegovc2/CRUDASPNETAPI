using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class ItemMasterMig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ItemMasters",
                columns: table => new
                {
                    itemCode = table.Column<string>(type: "nvarchar(25)", nullable: false),
                    description = table.Column<string>(type: "nvarchar(300)", nullable: false),
                    active = table.Column<bool>(type: "bit", nullable: false),
                    customerDescription = table.Column<string>(type: "nvarchar(300)", nullable: true),
                    salesItem = table.Column<bool>(type: "bit", nullable: false),
                    stockItem = table.Column<bool>(type: "bit", nullable: false),
                    purchasedItem = table.Column<bool>(type: "bit", nullable: false),
                    barcode = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    manageItemBy = table.Column<int>(type: "int", nullable: false),
                    minimumInventory = table.Column<decimal>(type: "decimal", nullable: false),
                    maximumInventory = table.Column<decimal>(type: "decimal", nullable: false),
                    remarks = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    imagePath = table.Column<string>(type: "nvarchar(100)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ItemMasters", x => x.itemCode);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ItemMasters");
        }
    }
}
