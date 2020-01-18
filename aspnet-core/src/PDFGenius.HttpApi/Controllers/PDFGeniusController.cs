using PDFGenius.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace PDFGenius.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class PDFGeniusController : AbpController
    {
        protected PDFGeniusController()
        {
            LocalizationResource = typeof(PDFGeniusResource);
        }
    }
}