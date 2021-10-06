import React from 'react';
import { Link } from 'react-router-dom';
import '../LoginPageComponent/styles.css'


// imagens

import logoPng from "../../assets/imagens/Prancheta-8 1.png";
import fundoPretoJpg from "../../assets/imagens/Rectangle 3.jpg";
import compPng from "../../assets/imagens/image 6.png"


export default function LoginPageComponent() {



  return (
    <section className="login">
      
      <div className="container login">
        <div className="row">
          <div className="box-content">
            <div className="col box-l">
              <img style={{marginLeft:'25px'}} src={logoPng} alt="" />

              <p style={{marginTop:'43px'}} className="font-primary">Bem Vindo ao <strong>painel</strong> </p>
              <input style={{marginTop:'21px'}} className="form-control" type="email" placeholder="Digite seu e-mail" />
              <input className="form-control" type="text" placeholder="Digite sua senha" />

              <button className="btn"><Link  to="/home">acessar</Link></button>
              

            </div>
            <div className="col box-r">
              <img className="box-img" src={compPng} alt=""  />
              <img  src={fundoPretoJpg} alt="" />

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

