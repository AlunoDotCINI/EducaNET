import style from "./index.module.css"
import { useState } from 'react';
import api from "../../Service/api";
import { useEffect } from "react";

export default function VerClass(params){
    const [openModal,setOpenModal] = useState(false) 
//coursos por id
    const [postu, setPostu] = useState([]);

    useEffect(() => {
        api.get("/course/AllCourses")
            .then((response) => {
                setPostu(response.data);
            })
            .catch(() => {
                console.log('Erro ao buscar os cursos');
            });
    }, []);
    return (
        <section className={style.conteudo}>
            <div className={style.conteudocards}>
                <div className={style.CardUm}>
                    <h1 className={style.nome}>CURSOS CADASTRADOS</h1>
                    {postu.map((course, key) => {
                            return (
                        <a className={style.itens}>{course.courseName}</a>
                            );
                        })}
                </div>
                <div className={style.CardDois}>
                    <button className={style.poste_curso}>POSTE UM CURSO</button>
                </div>
            </div>
            <div className={style.CardTres}>
                <h1 className={style.nome_cardTres}>EDITE SEUS CURSOS</h1>
                <div className={style.cursoeditar}>
                    <a className={style.titulocurso}>CURSO A</a>
                    <button className={style.botaoeditar}>Editar</button>
                    <button className={style.botaoapagar} >Apagar</button>
                </div>
            </div>
        </section>
    );
};
