using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PDFGenius.Data;
using Volo.Abp.DependencyInjection;

namespace PDFGenius.EntityFrameworkCore
{
    [Dependency(ReplaceServices = true)]
    public class EntityFrameworkCorePDFGeniusDbSchemaMigrator 
        : IPDFGeniusDbSchemaMigrator, ITransientDependency
    {
        private readonly PDFGeniusMigrationsDbContext _dbContext;

        public EntityFrameworkCorePDFGeniusDbSchemaMigrator(PDFGeniusMigrationsDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task MigrateAsync()
        {
            await _dbContext.Database.MigrateAsync();
        }
    }
}