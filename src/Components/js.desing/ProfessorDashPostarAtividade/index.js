import style from "./index.module.css"

export default function PostActivity() {
    return (
        <section className={style.conteudo}>
            <div className={style.conteudocards}>
                <div className={style.CardUm}>
                    <h1 className={style.nome_cardUm}>ATIVIDADES POSTADAS</h1>
                    <a className={style.itens}></a>
                </div>
                <div className={style.CardDois}>
                    <button className={style.poste_atividades}>POSTE UM ATIVIDADE AQUI</button>
                </div>
            </div>
            <div className={style.CardTres}>
                <h1 className={style.nome_cardTres}>EDITAR SUAS ATIVIDADES</h1>
                <div className={style.atividadeeditar}>
                    <a className={style.tituloatividade}>VIDEO AULA NOME</a>
                    <button className={style.botaoeditar}>Editar</button>
                    <button className={style.botaoapagar} >Apagar</button>                
                </div>
            </div>
        </section>
    );
};
