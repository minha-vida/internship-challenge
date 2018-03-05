(function ($, window, container) {
    "use strict";

    var $container = $(container),
        $ui = null;

    var ui = {
        eventos: {
            obterPessoas: "obterPessoas",
            ExcluirPessoa: "excluirPessoa"
        },
        init: function () {
            $ui = $(this);

            $ui.trigger(ui.eventos.obterPessoas);
            ui.addEvents();            
        },
        addEvents: function () {
            $container
                .on("click", '#Excluir', function () {
                    var id = $(this).attr('data-id');

                    $("#modal-excluir").modal('show');

                    $("#modal-btn-sim").attr('data-id', id);
                })
                .on("click", "#modal-btn-sim", function () {
                    var id = $(this).attr('data-id');

                    $ui.trigger(ui.eventos.ExcluirPessoa, id);

                    $("#modal-excluir").modal('hide');
                })
                .on("click", "#modal-btn-nao", function () {
                    $("#modal-excluir").modal('hide');
                });
        },
        carregarListagem: function (dados) {
            if (dados.length > 0) {
                $("#listagem-pessoas tbody").html(
                    $("#listagem-template").render(dados)
                );
            } else {
                $("#listagem-pessoas tbody").html(
                    $("#sem-resultado-template").render()
                );
            }
        }
    };

    window.listagemPessoa = {};
    window.listagemPessoa.ui = ui;

})(jQuery, window, window.document);