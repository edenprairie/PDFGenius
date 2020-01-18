using PDFGenius.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace PDFGenius.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(PDFGeniusEntityFrameworkCoreDbMigrationsModule),
        typeof(PDFGeniusApplicationContractsModule)
        )]
    public class PDFGeniusDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
