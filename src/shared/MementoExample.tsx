import { useState } from "react";

// Компонент для демонстрации использования Memento
const MementoExample = () => {
  const [state, setState] = useState(""); // Текущее состояние
  const [history, setHistory] = useState([]); // История состояний

  // Обработчик изменений ввода
  const handleChange = (e: unknown) => {
    setHistory([...history, state]); // Сохраняем текущее состояние в историю
    setState(e.target.value); // Обновляем состояние на новое значение
  };

  // Обработчик для кнопки "Undo"
  const handleUndo = () => {
    if (history.length > 0) {
      const previousState = history.pop(); // Извлекаем последнее состояние из истории
      setState(previousState); // Восстанавливаем состояние
      setHistory([...history]); // Обновляем историю
    }
  };

  return (
    <div>
      <h3>Пример использования Memento в React</h3>
      <input
        type="text"
        value={state}
        onChange={handleChange}
        placeholder="Введите текст"
      />
      <button onClick={handleUndo} disabled={history.length === 0}>
        Undo
      </button>
      <p>Текущее состояние: {state}</p>
    </div>
  );
};

export default MementoExample;
