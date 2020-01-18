using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace PDFGenius.Data
{
    /* This is used if database provider does't define
     * IPDFGeniusDbSchemaMigrator implementation.
     */
    public class NullPDFGeniusDbSchemaMigrator : IPDFGeniusDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}