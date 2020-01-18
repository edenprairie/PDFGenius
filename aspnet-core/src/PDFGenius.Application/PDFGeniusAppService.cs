using System;
using System.Collections.Generic;
using System.Text;
using PDFGenius.Localization;
using Volo.Abp.Application.Services;

namespace PDFGenius
{
    /* Inherit your application services from this class.
     */
    public abstract class PDFGeniusAppService : ApplicationService
    {
        protected PDFGeniusAppService()
        {
            LocalizationResource = typeof(PDFGeniusResource);
        }
    }
}
