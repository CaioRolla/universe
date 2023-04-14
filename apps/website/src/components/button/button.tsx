import { component$, useStylesScoped$, Slot, QRL } from '@builder.io/qwik';
import Loader from '../loader/loader';
import styles from './button.css?inline';

export type ButtonType = 'submit' | 'button' | 'link';

export enum ButtonTheme {
  SOLID = 'solid',
  OUTLINE = 'outline',
  NAKED = 'naked',
  NAKED_ALT = 'naked-alt',
  NAV = 'nav'
}

export type ButtonPropsTarget =
  | '_blank'
  | '_self'
  | '_parent'
  | '_top'
  | 'framename';

export interface ButtonProps {
  type: ButtonType;
  theme: ButtonTheme;
  target?: ButtonPropsTarget;
  href?: string;
  disabled?: boolean;
  loading?: boolean;
  class?: string;
  small?: boolean;
  active?: boolean;
  onClick?: QRL<() => void>;
}

// TODO: Add support for icons on prefix, suffix and main

export default component$((props: ButtonProps) => {
  useStylesScoped$(styles);

  const defaultPadding = props.small ? 'py-3 px-4' : 'py-6 px-8';

  const themeClasses = {
    [ButtonTheme.SOLID]: [
      defaultPadding,
      'relative bg-blue-gray-900 text-white border-blue-gray-900 border outline-none',
      // Hover
      'hover:bg-blue-gray-600 hover:border-blue-gray-600',
      // Focus
      'focus-visible:shadow-outline',
      // Selected,
      'active:bg-blue-gray-700 active:border-blue-gray-700',
      // Disabled,
      props.disabled
        ? '!bg-blue-gray-400 !border-blue-gray-400 !pointer-events-none'
        : '',
      props.loading
        ? '!bg-blue-gray-900 !text-white !border-blue-gray-900 !pointer-events-none'
        : '',
    ].join(' '),
    [ButtonTheme.OUTLINE]: [
      defaultPadding,
      'relative bg-transparent text-blue-gray-900 border-blue-gray-900 border outline-none',
      // Hover
      'hover:bg-blue-gray-700 hover:text-white hover:border-blue-gray-700',
      // Focus
      'focus-visible:shadow-outline focus-visible:border-transparent',
      // Selected,
      'active:bg-blue-gray-900 active:border-blue-gray-900 active:text-white',
      // Disabled,
      props.disabled
        ? '!bg-transparent !border-blue-gray-400 !text-blue-gray-400 !pointer-events-none'
        : '',
      props.loading
        ? '!relative !bg-transparent !text-blue-gray-900 !border-blue-gray-900 !pointer-events-none'
        : '',
    ].join(' '),
    [ButtonTheme.NAKED]: [
      'p-0',
      
      'relative bg-transparent text-ui-blue !border-transparent outline-none',
      // Focus
      'focus-visible:shadow-outline',
      props.disabled ? 'text-deep-purple-700 !pointer-events-none' : '',
      '',
    ].join(' '),
    [ButtonTheme.NAKED_ALT]: [
      'relative text-blue-gray-900 border-transparent font-medium active:font-semibold text-lg outline-ui-blue',
      'hover:text-blue-gray-600',
      'active:text-blue-gray-700',
      props.active ? '!text-blue-gray-700' : '',
      props.disabled ? '' : '',
      props.loading ? '' : '',
    ].join(' '),
    [ButtonTheme.NAV]: [
      'relative text-blue-gray-900 border-transparent font-medium active:font-semibold text-lg outline-ui-blue',
      'hover:text-deep-purple-700',
      'active:text-deep-purple-300',
      props.active ? '!text-deep-purple-300' : '',
      props.disabled ? '' : '',
      props.loading ? '' : '',
    ].join(' '),
  };

  const content = (
    <div class={`flex justify-center items-center gap-3`}>
      <div class="flex empty:hidden">
        <Slot name="prefix" />
      </div>
      <div class="flex text-lg font-medium leading-snug text-center">
        <div class={`flex ${props.loading ? 'invisible' : ''}`}>
          <Slot />
        </div>
        {props.loading && (
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Loader />
          </div>
        )}
      </div>
      <div class="flex empty:hidden">
        <Slot name="suffix" />
      </div>
    </div>
  );

  return props.type === 'link' ? (
    <a
      class={`inline-block border-solid ${themeClasses[props.theme]} ${
        props.class || ''
      }`}
      href={props.href}
      target={props.target}
    >
      {content}
    </a>
  ) : (
    <button
      class={`inline-block border-solid ${themeClasses[props.theme]} ${
        props.class || ''
      }`}
      type={props.type}
      onClick$={props.onClick}
    >
      {content}
    </button>
  );
});
