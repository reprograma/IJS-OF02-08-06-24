const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');
const { HORAS_POR_FUNCIONALIDADE } = require('../../dominio/calculadora/constantes/constantes');


describe('Calcular horas de projeto', () => {
    test('deve retornar o total de horas para uma lista de funcionalidades', () => {
        const listaDeFuncionalidades = ['integracao_api_propria', 'formulario', 'responsividade'];
        
        const horasEsperadas = HORAS_POR_FUNCIONALIDADE['integracao_api_propria'] 
                             + HORAS_POR_FUNCIONALIDADE['formulario'] 
                             + HORAS_POR_FUNCIONALIDADE['responsividade'];

        const horasCalculadas = calcularHorasDeProjeto(listaDeFuncionalidades);

        expect(horasCalculadas).toBe(horasEsperadas);
    });

    test('deve retornar 0 para uma lista de funcionalidades vazia', () => {
        const listaDeFuncionalidades = [];
        
        const horasEsperadas = 0;
        const horasCalculadas = calcularHorasDeProjeto(listaDeFuncionalidades);

        expect(horasCalculadas).toBe(horasEsperadas);
    });

    test('deve retornar o total de horas para todas as funcionalidades', () => {
        const listaDeFuncionalidades = [
            'setup', 'formulario', 'responsividade', 'otimizacao_seo', 
            'construcao_1_pagina', 'integracao_mailchimp', 'ssr', 'integracao_api_propria'
        ];
        
        const horasEsperadas = listaDeFuncionalidades
            .map(func => HORAS_POR_FUNCIONALIDADE[func])
            .reduce((sum, currentValue) => sum + currentValue, 0);
        
        const horasCalculadas = calcularHorasDeProjeto(listaDeFuncionalidades);

        expect(horasCalculadas).toBe(horasEsperadas);
    });

    test('deve retornar o total de horas para funcionalidades duplicadas', () => {
        const listaDeFuncionalidades = ['setup', 'setup', 'formulario'];
        
        const horasEsperadas = HORAS_POR_FUNCIONALIDADE['setup'] * 2 
                             + HORAS_POR_FUNCIONALIDADE['formulario'];
        const horasCalculadas = calcularHorasDeProjeto(listaDeFuncionalidades);

        expect(horasCalculadas).toBe(horasEsperadas);
    });

    test('deve retornar o total de horas para uma combinação de todas as funcionalidades, com funcionalidades repetidas', () => {
        const listaDeFuncionalidades = [
            'setup', 'formulario', 'responsividade', 'otimizacao_seo', 
            'construcao_1_pagina', 'integracao_mailchimp', 'ssr', 'integracao_api_propria',
            'setup', 'formulario', 'responsividade', 'otimizacao_seo', 
            'construcao_1_pagina', 'integracao_mailchimp', 'ssr', 'integracao_api_propria'
        ];
        
        const horasEsperadas = listaDeFuncionalidades
            .map(func => HORAS_POR_FUNCIONALIDADE[func])
            .reduce((sum, currentValue) => sum + currentValue, 0);
        
        const horasCalculadas = calcularHorasDeProjeto(listaDeFuncionalidades);

        expect(horasCalculadas).toBe(horasEsperadas);
    });

});