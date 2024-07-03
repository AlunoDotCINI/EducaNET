import style from "./index.module.css"
import { useEffect, useState } from 'react';
import api from "../../Service/api";

export default function VerClass(params){
    const [post, setPost] = useState([]);
    
    useEffect(() => {
        api.get('/course/AllCourses')
            .then((response) => {
                setPost(response.data);
            })
            .catch(() => {
                console.log('Erro ao buscar os cursos');
            });
    }, []);

    return (
        <section className={style.conteudo}>
            <div className={style.conteudocards}>
                <div className={style.CardUm}>
                <h1 className={style.nome_cardUm}>Video Aulas</h1>
                <a className={style.itens}></a>
                    {post.map((course, key) => {
                            return (
                    <a className={style.itens}>{course.courseName}</a>
                            );
                        })}
                </div>
            </div>
            <div className={style.CardDois}>
                <h1 className={style.nome_cardDois}>Video Aulas para você ver</h1>
                <div className={style.veraula}>
                    <a className={style.tituloaula}>VIDEO AULA NOME</a>
                    <button className={style.botaoveraula}>Ver Aula</button>
                </div>
            </div>
        </section>
    );
};
