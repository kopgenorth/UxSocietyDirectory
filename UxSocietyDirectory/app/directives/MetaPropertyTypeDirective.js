(function () {
    var MetaPropertyTypeDirective = function () {
        return {
            restrict: 'A',
            scope: { metaPropertyType: '=metatype' },
            link: function (scope, element, attr, ctrl) {
                if (scope.metaPropertyType.Type === 'Date')
                {
                    element.attr('type', 'date')
                }
                else
                {
                    element.attr('type', 'text')
                }
            }
        }
    }

    angular.module("SdsDocumentRepository").directive("metaPropertyTypeDirective", MetaPropertyTypeDirective)
})();
