import React, { useState, useContext } from 'react';
import styles from '../NavBar/navbar.module.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../NavBar/CartContext';

export default function Navbar() {
  // Obtem os jogos disponíveis e filtrados do contexto
  const { cartoesDisponiveis, setCartoesFiltrados } = useContext(CartContext);
  // Estado para armazenar a pesquisa do usuário
  const [pesquisa, setPesquisa] = useState('');
  
  // Função para atualizar a pesquisa do usuário e filtrar os jogos disponíveis
  const handlePesquisaChange = (event) => {
    const query = event.target.value;
    setPesquisa(query);

    // Filtra os jogos com base na pesquisa
    const jogosFiltrados = cartoesDisponiveis.filter((cartao) =>
      cartao.nome.toLowerCase().includes(query.toLowerCase())
    );
    
    // Atualiza os jogos filtrados no contexto
    setCartoesFiltrados(jogosFiltrados);
  };


  

  return (
    // Atalhos para pagina principal/carrinho
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/"><img src="assets/img/logo.png" alt="" /></Link>
        <Link to="./Perfil"><img src="assets/img/perfil.png" alt="" /></Link>
      </div>
        
      {/* Barra de pesquisa */}
      <div className={styles.pesquisa}>
        <img className={styles.pesquisaImg} src="assets\img\lupa.png" alt="" />
        <input
          type="text"
          value={pesquisa}
          onChange={handlePesquisaChange}
          placeholder="Buscar jogos..."
          className={styles.campoPesquisa}
        />
      </div>
    </header>
  );
}
