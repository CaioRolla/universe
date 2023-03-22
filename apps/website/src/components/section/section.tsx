import { component$, Slot, useStylesScoped$ } from '@builder.io/qwik';
import Container, { ContainerTheme } from '../container/container';
import styles from './section.css?inline';

export interface SectionProps {
  id?: string;
  theme?: ContainerTheme;
  fullWidth?: boolean;
  topPadding?: boolean;
}

export default component$((props: SectionProps) => {
  useStylesScoped$(styles);

  return (
    <Container fullWidth={props.fullWidth} theme={props.theme}>
      <section id={props.id} class={`flex flex-col items-center gap-10 ${props.topPadding ? 'pt-14 md:pt-28' : 'py-14 md:py-28'}`}>
        <div class="empty:hidden">
          <Slot name="header" />
        </div>
        <div class="w-full">
          <Slot />
        </div>
      </section>

      <span q:slot="background">
        <Slot name="background" />
      </span>
    </Container>
  );
});

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader = component$((props: SectionHeaderProps) => {
  return (
    <div class="flex flex-col items-center gap-4 md:gap-10 text-center">
      <h2 class="text-blue-grey-900 font-bold text-4xl leading-tight md:leading-none">{props.title}</h2>
      {props.subtitle && (
        <p class="text-blue-grey-900 text-lg font-medium max-w-4xl">
          {props.subtitle}
        </p>
      )}
    </div>
  );
});
