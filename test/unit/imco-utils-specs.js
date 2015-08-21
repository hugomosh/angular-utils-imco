describe('imco', function() {

    beforeEach(module('imco'));
    var utils;
    beforeEach(inject(function(_utils_) {
        utils = _utils_;
    }));
    it('Deberia capitalizar azul', function() {
        var color = 'azul';
        expect(color.capitalize()).toBe('Azul');
    });

    it('Deberia quitar acentos de  "Me gusta la comprobación -> "Me gusta la comprobacion"', function() {
        var color = 'Me gusta la comprobación';
        expect(color.removeDiacritics()).toBe('Me gusta la comprobacion');
    });
    it('Deberia convertir "Me gusta la comprobación" a url "me_gusta_la_comprobacion"', function() {
        var color = 'Me gusta la comprobación';
        expect(color.toURL()).toBe('me_gusta_la_comprobacion');
    });

    it('Deberia decir que "[]" esta vacio ', function() {
        var variable = [];
        expect(utils.isEmpty(variable)).toBe(true);
    });
    it('Deberia decir que "variable no asignada" esta vacio ', function() {
        var variable;
        expect(utils.isEmpty(variable)).toBe(true);
    });
    it('Deberia decir que "null" esta vacio ', function() {
        var variable = null;
        expect(utils.isEmpty(variable)).toBe(true);
    });

    it('Debería imprimir en consola ', function() {

        console.log = jasmine.createSpy("log");
        var imprimeIMCO = utils.imprimeIMCO("blue");
        expect(console.log).toHaveBeenCalledWith('%c                                                                                                    \n' +
            '                                                             .                                      \n' +
            '                                                            ::                                      \n' +
            '                                                           ,7                                       \n' +
            '                                                          .7                                        \n' +
            '                                                          $,                                        \n' +
            '                                                          I                                         \n' +
            '                                                         :?::,                 I$$$$$=              \n' +
            '     :+7Z$$Z?  ,+$Z$$$O                Z$$Z        ,IZZZ$777$$$$ZZ$         77,       :7+           \n' +
            '        ,$$$+      77$$?              7$$$$      ?$$=    ~I    :Z7$      ~$,        .    :Z         \n' +
            '         $7$+      I77$$+             $?7$$    =$7$      :7,   : =$     I          ,+      ?+       \n' +
            '         $7$+      I$ $$Z:           $7 77$    $$$        7=   :. 7    ?=          ~+       ++      \n' +
            '         $7$+      I$  $7Z          I$  7$$   I7$7        77:   I :   +=           $         ?      \n' +
            '         $7$+      I$  ?$$?        ?$?  7$$   $$$~        ,77   ?7.   $           $~     ,=   ?     \n' +
            '         $7$+      I$   $$$:       $$   7$$  :$$$:         +77   77   I         ,7+     .7    $     \n' +
            '         $7$+      I$    $$Z:     ?Z    7$$  :$7$~          ,77?  :77++       +7$=     :+     $     \n' +
            '         $7$+      I$     $7Z    +Z,    7$$   $$$I           ,77$+  ~I777$77777,     +$=      ?     \n' +
            '         $7$+      I$     $$$:   $$     77$   777$             ?777+  Z,~++=.      +77       :.     \n' +
            '         $7$+      I$      $$$: $$      77$   ,77$,              ?77I7I7?~:::~+7$77I         $      \n' +
            '         $$$+      I$       $$$+Z,      7$$    I$7$~                ~?$7777777$I=,         ~7       \n' +
            '         $7$+      I$       :$$7+       77$     ?$$$             ~Z    ,Z$,               ,+        \n' +
            '         $$7$,     I$I       7$$        77$=      7$7Z7:,  ,:?$Z$+       $$Z~           II          \n' +
            '         ZZZZZZZ:  7ZZZZ$     Z+        $ZZZOZI     ?$Z$$$$ZZ$?,          ~Z7$$+:, ,:I$$$           \n' +
            '                                                                             +$$$$$7HM$$I:          \n' +
            '                                                                                                    \n' +
            '                                                                                                    \n', 'color:' + "blue" + ';'
        );

    });

});
