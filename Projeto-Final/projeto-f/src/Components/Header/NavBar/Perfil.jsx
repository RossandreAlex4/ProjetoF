import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import styles from '../NavBar/perfil.module.css';

export default function Perfil() {
  // funçao que remove o card do carriho
  const { cartoesNoCarrinho, removerCartao } = useContext(CartContext);

  // função que calcula o total dos cartões
  const calcularTotal = () => {
    return cartoesNoCarrinho.reduce((total, cartao) => total + parseFloat(cartao.preco.replace('R$ ', '').replace(',','.')), 0).toFixed(2);
  };

  return (
    <div className={styles.perfil}>
      <div className={styles.perfilInfo}>
        <img className={styles.avatar} src="assets/img/gamer.png" alt="Avatar" />
        <strong>Seu nome</strong>
        <span>Nível da conta</span>
        <p>E-mail: exemplo@gmail.com</p>
      </div>
      <div className={styles.carrinho}>
        <img src="assets/img/carrinho.png" alt="Carrinho" />
        <h1>Meu carrinho</h1>
      </div>
      {/* cards dos jogos */}
      <div className={styles.cardContainer}>
        {cartoesNoCarrinho.map(cartao => (
          <div key={cartao.id} className={styles.carrinhoCards}>
            <img src={cartao.img} alt={cartao.nome} className={styles.imgCard} />
            <h2 className={styles.cardNome}>{cartao.nome}</h2>
            <div className={styles.btns}>
              <a className={styles.cardPreco}>{cartao.preco}</a>
              <button onClick={() => removerCartao(cartao.id)} className={styles.removerBtn}>X</button>
            </div>
            
          </div>
        ))}
      </div>
      {/* calculadora */}
      <div className={styles.total}>
        <h2>Total: R$ {calcularTotal()}</h2>
        <button className={styles.totalBtn}>Finalizar compra</button>
      </div>
    </div>
  );
}
