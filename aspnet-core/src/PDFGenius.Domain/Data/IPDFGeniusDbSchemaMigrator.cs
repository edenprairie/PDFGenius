using System.Threading.Tasks;

namespace PDFGenius.Data
{
    public interface IPDFGeniusDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
