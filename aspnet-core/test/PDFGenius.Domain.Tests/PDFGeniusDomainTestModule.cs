using PDFGenius.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace PDFGenius
{
    [DependsOn(
        typeof(PDFGeniusEntityFrameworkCoreTestModule)
        )]
    public class PDFGeniusDomainTestModule : AbpModule
    {

    }
}