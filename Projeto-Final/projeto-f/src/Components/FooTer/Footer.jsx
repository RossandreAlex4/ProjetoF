import style from "./footer.module.css";

export default function Footer() {
  return (
    <>
 <footer className={style.containerFooterPai}>
        <div className={style.containerfooter}>
            <div className={style.rowfooter}>
                <div className={style.footercol}>
                    <h4>Empresa</h4>
                    <ul>
                        <li><a href="#"> Quem somos </a></li>
                        <li><a href=""> nossos serviços </a></li>
                        <li><a href=""> política de privacidade </a></li>
                    </ul>
                </div>
                <div className={style.footercol}>
                    <h4>Obter ajuda</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">devoluções</a></li>
                        <li><a href="#">Status De Pedido</a></li>
                        <li><a href="#">Opções De Pagamento</a></li>
                    </ul>
                </div>
                <div className={style.footercol}>
                    <h4>Desenvolvedor</h4>
                    <ul>
                        <li><a href="#">Rossandre Alex</a></li>
                        <li><a href="#">rossandrefilho4 @gmail.com</a></li>
                        <li><a href="https://github.com/RossandreAlex4?tab=repositories" target="blank">Meu GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/rossandre-filho-717338329/" target="blank">Meu LinkedIn</a></li>
                        
                    </ul>
                </div>
                <div className={style.footercol}>
                    <h4>Se Cadastre</h4>
                    <div className={style.formsub}>
                        <form>
                            <input type="e-mail" name="e-mail" placeholder="Email" autoComplete="e-mail"/>
                          <button type="submit" value="e-mail">Cadastrar</button>
                        </form>
                        <br />
                        <p>Telefone (21) 91503-7782</p>
                    </div>

                    <div className={style.mediassocias}>
                        <a href="#"><img src="/assets/img/email.png" alt="Email" /></a>
                        <a href="#"><img src="/assets/img/whatsapp.png" alt="WhatsApp" /></a>
                        <a href="#"><img src="/assets/img/instagram.png" alt="Instagram" /></a>
                        <a href="#"><img src="/assets/img/facebook.png" alt="Facebook" /></a>
                    </div>

                </div>
            </div>
        </div>
    </footer>
    </>
  );

}