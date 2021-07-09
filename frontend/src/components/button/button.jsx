import classNames from 'classnames';
import './button.css';
function Button({ size, text, color, background, hover, onClick }) {
  const buttonClassnames = classNames({
    s_size: size === 'small',
    m_size: size === 'middle',
    b_size: size === 'big',
    color_red: color === 'red',
    background_color_transperent: background === 'transperent',
  });

  return (
    <button onClick={onClick} type="button" className={buttonClassnames}>
      {text}
    </button>
  );
}

export default Button;
