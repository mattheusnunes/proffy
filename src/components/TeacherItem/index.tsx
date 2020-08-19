import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
            <article className="teacher-item">
                <header>
                    <img src="https://avatars0.githubusercontent.com/u/19689455?s=460&u=c4d19bd11975968727c2b86eb6db5142c18aa1f2&v=4" alt="Mattheus Nunes" />
                    <div>
                        <strong>Mattheus Nunes</strong>
                        <span>Computação</span>
                    </div>
                </header>

                <p>
                    Entusiasta das melhores tecnologias.
                    <br /><br />
                    Apaixonado por computação e por mudar a vida das pessoas. 
                </p>

                <footer>
                    <p>    
                        Preço/Hora
                        <strong>R$ 80,00</strong>
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp" />
                        Entrar em contato
                    </button>
                </footer>
            </article>
                    
    );
}

export default TeacherItem;