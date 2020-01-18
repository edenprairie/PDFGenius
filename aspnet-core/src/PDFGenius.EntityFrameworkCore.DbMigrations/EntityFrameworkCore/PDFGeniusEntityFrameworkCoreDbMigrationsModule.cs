using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace PDFGenius.EntityFrameworkCore
{
    [DependsOn(
        typeof(PDFGeniusEntityFrameworkCoreModule)
        )]
    public class PDFGeniusEntityFrameworkCoreDbMigrationsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<PDFGeniusMigrationsDbContext>();
        }
    }
}
