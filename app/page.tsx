'use client'

import { useRef } from "react"
import Image from 'next/image'

import './styles.scss'

export default function Page() {


  const menuRef = useRef<HTMLUListElement>(null)

  function openMenu() {
    menuRef?.current?.classList.toggle("menu-mobile")
  }



  return (
    <div className='page-container'>
      <div className='home-container' id='home'>
        <div className='menu-container'>
          <Image width={118}
            height={22} className="gallery-img" src='/assets/logo.svg' alt="" />
          <ul ref={menuRef}>
            <button className='close-menu-button' onClick={openMenu}></button>
            <li><a href="#home">Início</a></li>
            <li><a href="#about-me">Sobre</a></li>
            <li><a href="#experience">Galeria</a></li>
            <li><a href="#projects">Contato</a></li>
          </ul>
          <button className='open-menu-button' onClick={openMenu}></button>
        </div>
        <div className='home-content' >
          
          <div className='social-links'>
            <Image width={800}
              height={500} className="gallery-img" src='/assets/home-img1.svg' alt="" />
            <Image width={800}
              height={500} className="gallery-img" src='/assets/home-img2.svg' alt="" />
            <Image width={800}
              height={500} className="gallery-img" src='/assets/home-img3.svg' alt="" />
            <Image width={800}
              height={500} className="gallery-img" src='/assets/home-img4.svg' alt="" />
          </div>
        </div>
      </div>

      <div className='about-container' id='about-me'>
        
        <div className='texts-about'>
          <h3>SOBRE</h3>
            <h2>Transformamos a
            sua casa dos sonhos em realidade</h2>
          <p>Móveis apenas essenciais e com design moderno, além de revestimentos bonitos e em cores neutras para manter a casa sempre com um estilo clean e suave.</p>
        </div>

        <Image width={800}
          height={500} src='/assets/about-img1.svg' alt="" />
        <Image width={800}
          height={500} src='/assets/about-img2.svg' alt="" />
      </div>

      <div className='gallery-container' id='gallery'>
        <h3>  GALERIA</h3>
        <h2>Alguns de nossos trabalhos feitos
com amor</h2>
        <div className='gallery-contents'>
          <div className='gallery-item'>
            <Image width={800}
              height={500} className="gallery-img" src='/assets/gallery-img1.svg' alt="" />
            <h4 className='gallery-name'>Móveis e interiores</h4>
            <p className='gallery-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu variC</p>
          </div>

          <div className='gallery-item'>
            <Image width={800}
              height={500} className="gallery-img" src='/assets/gallery-img2.svg' alt="" />
            <h4 className='gallery-name'>Nome do projeto</h4>
            <p className='gallery-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.</p>
          </div>

          <div className='gallery-item'>
            <Image width={800}
              height={500} className="gallery-img" src='/assets/gallery-img3.svg' alt="" />
            <h4 className='gallery-name'>Nome do projeto</h4>
            <p className='gallery-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.</p>
            
          </div>


        </div>
      </div>

      <footer>
        <div className='footer-content'><p>@ 2024 - Helliton Cruz</p></div>
      </footer>
    </div>
  );
}
