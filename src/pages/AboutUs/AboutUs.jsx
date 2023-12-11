import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './AboutUs.module.css';

import CustomButton from '../../components/CustomButton/CustomButton';
import ContactModal from '../../components/ContactModal/ContactModal';

function AboutUs() {
  const navigate = useNavigate('');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="about-us" className={styles.aboutUsBox}>
      <div className={styles.aboutUsDetails}>
        <div className={styles.aboutUsTitleBox}>
          <h1 className={styles.aboutUsTitle}>Despre noi</h1>
        </div>
        <section className={styles.aboutUsBoxesContainer}>
          <div className={styles.aboutUsDetailsBox1}>
            <h2>Descoperiți Arte și Tehnică în Sudură</h2>
            <p>
              Suntem mândri să vă aducem o experiență de peste 25 de ani în
              industria de confecții metalice. La AVR Weld Solutions, sudura
              devine artă, iar metalul prinde viață în mâinile noastre pricepute
            </p>
          </div>
          <div className={styles.aboutUsDetailsBox2}>
            <h2>Ce Ne Diferențiază? Expertiză și Inovație</h2>
            <p>
              Deținem autorizație ISCIR și am lăsat amprente remarcabile în
              Europa și Africa. Suntem pionieri în fabricarea și montarea
              traseelor de tuburi metalice destinate transportului lichidelor și
              gazelor industriale, oferind soluții la cheie pentru proiectele
              industriale
            </p>
          </div>
          <div className={styles.aboutUsDetailsBox3}>
            <h2>Cum Vă Putem Ajuta?</h2>
            <p>
              Dacă sunteți în căutarea unor parteneri dedicați pentru proiectele
              dvs. industriale, suntem aici pentru a vă oferi expertiza noastră.
            </p>
            <p>
              {' '}
              Concentrându-ne pe fabricarea și instalarea sistemelor de conducte
              metalice, aducem inovație și eficiență în transportul lichidelor
              și gazelor industriale.
            </p>
          </div>
          <div className={styles.aboutUsDetailsBox4}>
            <h2>Experiența AVR Weld Solutions:</h2>
            <p>
              <strong>Expertiză în Sudură:</strong> Certificați ISCIR și
              realizări remarcabile.
            </p>
            <p>
              <strong>Soluții Personalizate:</strong> Concentrăm eforturile pe
              proiectele dvs. pentru a aduce valoare adăugată.
            </p>
            <p>
              <strong>Inovație în Conducerea Metalică:</strong> Transformăm
              metalele în soluții durabile și eficiente.
            </p>
          </div>
          <div className={styles.aboutUsDetailsBox5}>
            <h2>Dăm Formă Viselor Dvs. cu Foc și Metal!</h2>
            <p>
              Descoperiți{' '}
              <Link to="/Services">
                <mark>serviciile noastre</mark>
              </Link>{' '}
              și luați legătura pentru a începe împreună o călătorie în lumea
              sudurii și a confecțiilor metalice.
            </p>
            <p>
              <Link to="/Contact">
                <mark>Contactați-ne</mark>
              </Link>{' '}
              pentru a discuta despre proiectul dvs.!
            </p>
          </div>
        </section>
      </div>
      <div className={styles.aboutUsBtnBox}>
        <CustomButton
          text="Gallery"
          textColor="black"
          bgColor="white"
          borderColor="black"
          fontWeight={700}
          hoverTextColor="white"
          hoverBgColor="black"
          borderSolid="1px solid black"
          borderRadius="15px"
          onClick={() => navigate('/Gallery')}
        />
        <CustomButton
          text="Services"
          textColor="black"
          bgColor="white"
          borderColor="black"
          fontWeight={700}
          hoverTextColor="white"
          hoverBgColor="black"
          borderSolid="1px solid black"
          borderRadius="15px"
          onClick={() => navigate('/Services')}
        />

        <CustomButton
          text="Contact"
          textColor="black"
          bgColor="white"
          borderColor="black"
          fontWeight={700}
          hoverTextColor="white"
          hoverBgColor="black"
          borderSolid="1px solid black"
          borderRadius="15px"
          onClick={handleOpenModal}
          // onClick={() => navigate('/Contact')}
        />
      </div>
      {isModalOpen && <ContactModal onClose={handleCloseModal} />}
    </div>
  );
}

export default AboutUs;
