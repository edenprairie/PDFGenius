using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace PDFGenius.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(PDFGeniusHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class PDFGeniusConsoleApiClientModule : AbpModule
    {
        
    }
}
