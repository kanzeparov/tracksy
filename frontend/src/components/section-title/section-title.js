import styles from './section-title.module.css';

function SectionTitle({ title }) {
  return (
    <div className={styles.section_title}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}
export default SectionTitle;
