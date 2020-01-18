using PDFGenius.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace PDFGenius.Permissions
{
    public class PDFGeniusPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(PDFGeniusPermissions.GroupName);

            //Define your own permissions here. Example:
            //myGroup.AddPermission(PDFGeniusPermissions.MyPermission1, L("Permission:MyPermission1"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<PDFGeniusResource>(name);
        }
    }
}
