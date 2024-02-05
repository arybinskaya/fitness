import styles from "./Promotext.module.css";

const Promotext = () => {
  return (
    <section className={styles.promoText}>
      <p>Привет, меня зовут Александра, я помогу тебе добиться фигуры мечты.</p>
      <p>
        Если тебе надоели диеты, ограничении в питании, нет сил терпеть
        длительнные тренировки? Тогда тебе ко мне! Я помогу тебе сделать это
        осознанно и максимально комфортно!
      </p>
    </section>
  );
};

export default Promotext;
