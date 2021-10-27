function dateToFormatString(date, fmt, locale, pad) {
    // %fmt% ����t�����\�L�ɁB
    // ����
    //  date:  Date�I�u�W�F�N�g
    //  fmt:   �t�H�[�}�b�g������A%YYYY%�N%MM%��%DD%���A�ȂǁB
    //  locale:�n��w��B�f�t�H���g�i���͂Ȃ��j�̏ꍇ��ja-JP�i���{�j�B���ݑ��ɑΉ����Ă���̂�en-US�i�p��j�̂݁B
    //  pad:   �p�f�B���O�i�����𖄂߂�j������B�f�t�H���g�i���͂Ȃ��j�̏ꍇ��0�B
    // ��F2016�N03��02��15��24��09�b
    // %YYYY%:4���N�i2016�j
    // %YY%:2���N�i16�j
    // %MMMM%:���̒����\�L�A���{��ł͐����̂݁A�p��ł�March�Ȃǁi3�j
    // %MMM%:���̒Z���\�L�A���{��ł͐����̂݁A�p��ł�Mar.�Ȃǁi3�j
    // %MM%:2�����i03�j
    // %M%:���i3�j
    // %DD%:2�����i02�j
    // %D%:���i2�j
    // %HH%:2���ŕ\����24���ԕ\�L�̎��i15�j
    // %H%:24���ԕ\�L�̎��i15�j
    // %h%:2���ŕ\����12���ԕ\�L�̎��i03�j
    // %h%:12���ԕ\�L�̎��i3�j
    // %A%:AM/PM�\�L�iPM�j
    // %A%:�ߑO/�ߌ�\�L�i�ߌ�j
    // %mm%:2�����i24�j
    // %m%:���i24�j
    // %ss%:2���b�i09�j
    // %s%:�b�i9�j
    // %W%:�j���̒����\�L�i���j���j
    // %w%:�j���̒Z���\�L�i���j
    var padding = function(n, d, p) {
        p = p || '0';
        return (p.repeat(d) + n).slice(-d);
    };
    var DEFAULT_LOCALE = 'ja-JP';
    var getDataByLocale = function(locale, obj, param) {
        var array = obj[locale] || obj[DEFAULT_LOCALE];
        return array[param];
    };
    var format = {
        'YYYY': function() { return padding(date.getFullYear(), 4, pad); },
        'YY': function() { return padding(date.getFullYear() % 100, 2, pad); },
        'MMMM': function(locale) {
            var month = {
                'ja-JP': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                'en-US': ['January', 'February', 'March', 'April', 'May', 'June',
                          'July', 'August', 'September', 'October', 'November', 'December'],
            };
            return getDataByLocale(locale, month, date.getMonth());
        },
        'MMM': function(locale) {
            var month = {
                'ja-JP': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                'en-US': ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June',
                          'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'],
            };
            return getDataByLocale(locale, month, date.getMonth());
        },
        'MM': function() { return padding(date.getMonth()+1, 2, pad); },
        'M': function() { return date.getMonth()+1; },
        'DD': function() { return padding(date.getDate(), 2, pad); },
        'D': function() { return date.getDate(); },
        'HH': function() { return padding(date.getHours(), 2, pad); },
        'H': function() { return date.getHours(); },
        'hh': function() { return padding(date.getHours() % 12, 2, pad); },
        'h': function() { return date.getHours() % 12; },
        'mm': function() { return padding(date.getMinutes(), 2, pad); },
        'm': function() { return date.getMinutes(); },
        'ss': function() { return padding(date.getSeconds(), 2, pad); },
        's': function() { return date.getSeconds(); },
        'A': function() {
            return date.getHours() < 12 ? 'AM' : 'PM';
        },
        'a': function(locale) {
            var ampm = {
                'ja-JP': ['�ߑO', '�ߌ�'],
                'en-US': ['am', 'pm'],
            };
            return getDataByLocale(locale, ampm, date.getHours() < 12 ? 0 : 1);
        },
        'W': function(locale) {
            var weekday = {
                'ja-JP': ['���j��', '���j��', '�Ηj��', '���j��', '�ؗj��', '���j��', '�y�j��'],
                'en-US': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            };
            return getDataByLocale(locale, weekday, date.getDay());
        },
        'w': function(locale) {
            var weekday = {
                'ja-JP': ['��', '��', '��', '��', '��', '��', '�y'],
                'en-US':  ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
            };
            return getDataByLocale(locale, weekday, date.getDay());
        },
    };
    var fmtstr = ['']; // %%�i%�Ƃ��ďo�͂����j�p�ɋ󕶎����Z�b�g�B
    Object.keys(format).forEach(function(key) {
        fmtstr.push(key); // ['', 'YYYY', 'YY', 'MMMM',... 'W', 'w']�̂悤�Ȕz�񂪐��������B
    })
    var re = new RegExp('%(' + fmtstr.join('|') + ')%', 'g');
    // /%(|YYYY|YY|MMMM|...W|w)%/g �̂悤�Ȑ��K�\�������������B
    var replaceFn = function(match, fmt) {
    // match �ɂ�%YYYY%�Ȃǂ̃}�b�`���������񂪁Afmt�ɂ�YYYY�Ȃǂ�%�������t�H�[�}�b�g�����񂪓���B
        if(fmt === '') {
            return '%';
        }
        var func = format[fmt];
        // fmt��YYYY�Ȃ�Aformat['YYYY']��func�ɑ�������B�܂�A
        // function() { return padding(date.getFullYear(), 4, pad); }�Ƃ����֐�����������B
        if(func === undefined) {
            //���݂��Ȃ��t�H�[�}�b�g
            return match;
        }
        return func(locale);
    };
    return fmt.replace(re, replaceFn);
}