namespace PMMS.Common {
    export class FontSelection extends Serenity.Widget<any> {
        constructor(select: JQuery) {
            super(select);

            this.change(e => {
                var path = Q.Config.applicationPath;
                if (path && path != '/' && Q.endsWith(path, '/'))
                    path = path.substr(0, path.length - 1);

                $.cookie('FontPreference', select.val(), {
                    path: path,
                    expires: 365
                });

                var theme = select.val() || '';
                var darkSidebar = theme.indexOf('light') < 0;
                $('body').removeClass('FontPreference-' + this.getCurrentTheme());
                $('body').addClass('FontPreference-' + theme)
                   
            });

            Q.addOption(select, 'Default', 'Default');
            Q.addOption(select, 'Cairo', 'Cairo');
            Q.addOption(select, 'Sanserif', 'Sanserif');
            Q.addOption(select, 'Tahoma', 'Tahoma');
            Q.addOption(select, 'another', 'another');


            select.val(this.getCurrentTheme());
        }

        protected getCurrentTheme() {
            var skinClass = Q.first(($('body').attr('class') || '').split(' '), x => Q.startsWith(x, 'FontPreference-'));
           

            if (skinClass) {
                return skinClass.substr(15);
            }

            return 'Default';
        }
    }
}