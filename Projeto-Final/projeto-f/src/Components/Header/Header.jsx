import React, { useState, useContext } from 'react';
import { CartContext } from './NavBar/CartContext';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import styles from '../Header/header.module.css'

// estilo da barra de pesquisa
const contentStyle = {
  height: '470px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function Header() {
  // função para exibir os cards
  const { cartoesFiltrados, adicionarCartao } = useContext(CartContext);

  // função para exibir alert
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // Estado para gerenciar quais cartões foram clicados
  const [clickedCards, setClickedCards] = useState(new Set()); 

  
  // funçao para colocar jogos no carrinho
  const adicionarNoCarrinho = (cartao) => {
    adicionarCartao(cartao);
    setAlertMessage(`"${cartao.nome}" foi adicionado ao carrinho!`);
    setOpen(true);

    // Atualiza o estado para marcar o cartão como clicado
    setClickedCards((prev) => new Set(prev).add(cartao.id));
  };

  

  // função para fechar o alert
  const handleClose = () => {
    setOpen(false);
  };

  // imagens dos destaques no carrossel
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      image: 'src/assets/img/GTA.jpg',
      title: 'Grand Theft Auto V',
      description: 'O game se passa no estado ficcional de San Andreas, baseado na Califórnia do Sul, nos EUA. Traz a história de campanha simultânea de três criminosos: o ladrão de bancos aposentado Michael De Santa, o gângster de rua Franklin Clinton e o traficante de armas psicopata Trevor Philips.',
    },
    {
      image: 'src/assets/img/injustice.jpg',
      title: 'Injustice 2',
      description: 'Injustice 2 continua a história iniciada em Injustice: Gods Among Us, enquanto Batman e seus aliados se esforçam para reconstruir a sociedade e têm dificuldades para combater os que querem restaurar o Regime do Superman.',
    },
    {
      image: 'src/assets/img/fifa.jpg',
      title: 'FC 25',
      description: 'O EA SPORTS FC™ 25 traz para você o Jogo de Todo Mundo, a experiência mais realista de futebol de todos os tempos com o HyperMotionV, Estilos de Jogo otimizados pela Opta e uma Frostbite™',
    },
    {
      image: 'src/assets/img/mine.jpg',
      title: 'Minecraft',
      description: ' é um jogo em que você constrói coisas com blocos, em um mundo virtual aberto e livre para explorar. É o que os gamers chamam de sandbox, porque funciona mesmo como uma caixa de areia, em que o único limite para o jogador é a própria imaginação e a prática.',
    },
    {
      image: 'src/assets/img/sonic.jpg',
      title: 'Sonic Generations',
      description: 'Sonic Generations traz o Sonic Clássico que contém o mesmo visual dos primeiros jogos do console doméstico Mega Drive, e o Sonic Moderno que tem o seu Spin-Dash e o Spin-Attack que são vistos lá em Sonic Adventure em Sonic 4 "em ambos episódios".',
    },
    {
      image: 'src/assets/img/macaco.jpeg',
      title: 'Black Myth: Wukong',
      description: 'Você assume o papel do Predestinado e tem a responsabilidade de encarar os desafios e as maravilhas do mundo para desvendar a verdade obscura por trás de uma lenda gloriosa do passado.',
    },
    {
      image: 'src/assets/img/cyberpunk.jpg',
      title: 'Cyberpunk 2077',
      description: 'A trama segue a luta de V enquanto tenta lidar com um misterioso implante cibernético que ameaça substituir seu corpo com a personalidade e as memórias de uma celebridade falecida perceptível apenas por V.',
    },
    {
      image: 'src/assets/img/GOW.jpg',
      title: 'God Of War: Ragnarök',
      description: 'Em God of War: Ragnarok, acompanhe a jornada de Kratos e Atreus pelos Nove Reinos em busca de respostas, enquanto as forças asgardianas preparam-se para a guerra. Atreus está à procura de conhecimento para entender a profecia de Loki e o papel dele no Ragnarok.',
    },
    {
      image: 'src/assets/img/asscreed.jpg',
      title: 'Assassins Creed: Valhalla',
      description: 'O movimento do Grande Exército Pagão na Inglaterra durante as expansoes Vikings. O mapa mostra alguns dos reinos que o jogador pode explorar em Valhalla. Em Assassins Creed Valhalla, a história acontece perto do final do século IX, durante as Invasões Vikings da Grã Bretanha.',
    },
    {
      image: 'src/assets/img/mk.jpg',
      title: 'Mortal Kombat 1',
      description: 'Mortal Kombat 1 dá continuidade aos eventos de Aftermath, a expansão de Mortal Kombat 11. Depois de absorver os poderes de Raiden para derrotar Kronika, que controlava a Ampulheta responsável por moldar o tempo.',
    },
  ];

  // Botões para movimentar os cards
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  // função que verifica se o total de cards é menor que 22, se for, aparecerão apenas os cards
  const isSearching = cartoesFiltrados.length < 28;

  const jogosFiltrados = isSearching ? true : false;

  return (
    <>
    
      {/* alert */}
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" color='info' sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>

      {/* Serve para deixar só os cards dos jogos aparecendo ao pesquisar*/}
      {!isSearching && (
        <>

      <div className={styles.destq}>
        <h1>Destaques do mês</h1>
      </div>

      {/* carrossel */}
      <div className={styles.carouselContainer}>
        <div className={styles.carouselInner}>
        <div className={styles.carouselCards}>
          {cards.concat(cards).slice(currentIndex, currentIndex + 3).map((card, index) => (
          <div className={styles.card} key={index}>
            <img className={styles.cardImage} src={card.image} alt="Card" />
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.description}</p>
          </div>
          ))}
        </div>
        </div>
      </div>
      <div className={styles.carouselControls}>
          <button className={styles.controlButtonPrev} onClick={handlePrev}>&lt;</button>
          <button className={styles.controlButtonNext} onClick={handleNext}>&gt;</button>
      </div>

      

      
      <div className={styles.promo}>
        <h1>Jogos mais vendidos</h1>
      </div>
      </>
      )}

      {jogosFiltrados && (
        <>

      <div className={styles.resultados}>
        <h1>Jogos encontrados</h1>
      </div>

      </>
      )}


      {/* cards dos jogos */}
      <div className={styles.cardContainer}>
        {cartoesFiltrados.map(cartao => (
          <div key={cartao.id} className={styles.carrinhoCards}>
            <img src={cartao.img} alt={cartao.nome} className={styles.imgCard} />
            <h2 className={styles.cardNome}>{cartao.nome}</h2>
            <div className={styles.btns}>
              <a className={styles.cardPreco}>{cartao.preco}</a>
              <button 
                onClick={() => adicionarNoCarrinho(cartao)}
                className={`${styles.adicionarBtn} ${clickedCards.has(cartao.id) ? styles.clicked : ''}`}
               >
                <span className={styles.adicionarNoCarrinho}>Adicionar no carrinho</span>
                <span className={styles.adicionado}>Adicionado</span>
                <i className={styles.carrinhoBtn}><img className={styles.carrinhoBtnCss} src="src\assets\img\carrinho2.png" alt="" /></i>
                <i className={styles.sacolaBtn}><img className={styles.sacolaBtnCss} src="src\assets\img\manete.png" alt="" /></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}