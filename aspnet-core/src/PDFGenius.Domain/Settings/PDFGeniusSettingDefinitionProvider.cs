using Volo.Abp.Settings;

namespace PDFGenius.Settings
{
    public class PDFGeniusSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            //Define your own settings here. Example:
            //context.Add(new SettingDefinition(PDFGeniusSettings.MySetting1));
        }
    }
}
