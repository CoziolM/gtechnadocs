import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './Button.module.css'; // Import the CSS module

type ButtonProps = {
  size?: 'sm' | 'lg' | 'small' | 'medium' | 'large' | null;
  outline?: boolean;
  variant?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'link' | string;
  block?: boolean;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  link: string;
  label: string;
};

export default function Button({
  size = null,
  outline = false,
  variant = 'primary',
  block = false,
  disabled = false,
  className,
  style,
  link,
  label,
}: ButtonProps) {
  const sizeMap = {
    sm: 'sm',
    small: 'sm',
    lg: 'lg',
    large: 'lg',
    medium: null,
  };
  const buttonSize = size ? sizeMap[size] : '';
  const sizeClass = buttonSize ? styles[`button--${buttonSize}`] : '';
  const outlineClass = outline ? styles['button--outline'] : '';
  const variantClass = variant ? styles[`button--${variant}`] : '';
  const blockClass = block ? styles['button--block'] : '';
  const disabledClass = disabled ? styles['disabled'] : '';
  const destination = disabled ? undefined : link;

  return (
    <Link to={destination}>
      <button
        className={clsx(
          styles.button,
          sizeClass,
          outlineClass,
          variantClass,
          blockClass,
          disabledClass,
          className
        )}
        style={style}
        role="button"
        aria-disabled={disabled}
      >
        {label}
      </button>
    </Link>
  );
}
