import React from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';

function Pagina404() {
    return (
        <PageDefault>
            <h1>Página não encontrada :( </h1>

            <Link to="/">
                Voltar para home
            </Link>
        </PageDefault>
    );
}

export default Pagina404;