import styles from './Quiz.module.css';

const TextInput = ({ value, onChange }) => {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.inputLabel}>IDENTIFICAÇÃO DO AGENTE / PROTOCOLO:</label>
      <input
        type="text"
        className={styles.textField}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Digite aqui..."
        maxLength={30}
      />
      <div className={styles.inputLine}></div>
    </div>
  );
};

export default TextInput;