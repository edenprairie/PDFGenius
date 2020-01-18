using Volo.Abp.Modularity;

namespace PDFGenius
{
    [DependsOn(
        typeof(PDFGeniusApplicationModule),
        typeof(PDFGeniusDomainTestModule)
        )]
    public class PDFGeniusApplicationTestModule : AbpModule
    {

    }
}