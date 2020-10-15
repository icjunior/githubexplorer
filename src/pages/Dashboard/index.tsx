import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img src="https://avatars1.githubusercontent.com/u/12253221?s=460&u=78c11e82814cc2d0dfb6c7304c620e736be7047b&v=4"
                        alt="Ismael Junior" />
                    <div>
                        <strong>RocketSeat/Unform</strong>
                        <p>Teste de descrição do repositório do Github</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>

                <a href="teste">
                    <img src="https://avatars1.githubusercontent.com/u/12253221?s=460&u=78c11e82814cc2d0dfb6c7304c620e736be7047b&v=4"
                        alt="Ismael Junior" />
                    <div>
                        <strong>RocketSeat/Unform</strong>
                        <p>Teste de descrição do repositório do Github</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>

                <a href="teste">
                    <img src="https://avatars1.githubusercontent.com/u/12253221?s=460&u=78c11e82814cc2d0dfb6c7304c620e736be7047b&v=4"
                        alt="Ismael Junior" />
                    <div>
                        <strong>RocketSeat/Unform</strong>
                        <p>Teste de descrição do repositório do Github</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
}

export default Dashboard;