import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { $translate as t } from 'qwik-speak';

import Button, { ButtonTheme } from '../../button/button';
import Card from '../../card/card';
import { ContainerTheme } from '../../container/container';
import { IconName } from '../../icon/data';
import Icon from '../../icon/icon';
import Section, { SectionHeader } from '../../section/section';

import styles from './doc-summary.css?inline';
import { centerShape } from './shapes';

export default component$(() => {
  useStylesScoped$(styles);

  const cards = [
    {
      title: t(
        'doc-summary.cards.decentralized.title@@Decentralized code sharing'
      ),
      desc: t(
        'doc-summary.cards.decentralized.desc@@Module Federation allows developers to share code between multiple projects in a decentralized manner, making it easier to manage complex applications.'
      ),
      actionHref: '#',
      actionTitle: t('doc-summary.cards.decentralized.action@@Documentation'),
    },
    {
      title: t(
        'doc-summary.cards.modular-architecture.title@@Modular architecture'
      ),
      desc: t(
        'doc-summary.cards.modular-architecture.desc@@Applications can be split into smaller, self-contained modules that can be developed, tested, and deployed independently.'
      ),
      actionHref: '#',
      actionTitle: t(
        'doc-summary.cards.modular-architecture.action@@Documentation'
      ),
    },
    {
      title: t('doc-summary.cards.federated-runtime.title@@Federated runtime'),
      desc: t(
        'doc-summary.cards.federated-runtime.desc@@The modules can be combined and federated at runtime, allowing for greater collaboration and faster development times.'
      ),
      actionHref: '#',
      actionTitle: t(
        'doc-summary.cards.federated-runtime.action@@Documentation'
      ),
    },
    {
      title: t('doc-summary.cards.flexibility.title@@Flexibility'),
      desc: t(
        'doc-summary.cards.flexibility.desc@@Module Federation gives developers the freedom to choose and implement the architecture that best suits their needs, promoting a modular and scalable approach to application development.'
      ),
      actionHref: '#',
      actionTitle: t('doc-summary.cards.flexibility.action@@Documentation'),
    },
    {
      title: t('doc-summary.cards.team-colaboration.title@@Team collaboration'),
      desc: t(
        'doc-summary.cards.team-colaboration.desc@@Independent teams can be assigned responsibility for specific microfrontends, making it easier to manage the development process and promote collaboration between team members.'
      ),
      actionHref: '#',
      actionTitle: t(
        'doc-summary.cards.team-colaboration.action@@Documentation'
      ),
    },
  ];

  return (
    <Section theme={ContainerTheme.OPAQUE}>
      <SectionHeader
        q:slot="header"
        title={t('doc-summary.title@@Scalability with Module Federation')}
        subtitle={t(
          'doc-summary.subtitle@@Module Federation brings scalability to not only code but also individual and organizational productivity'
        )}
      />

      <div class="flex flex-col items-center gap-3 md:gap-10">
        {cards.map((card) => {
          return (
            <div class="w-full">
              <Card>
                <div class="flex flex-col gap-6 items-start md:flex-row md:items-center p-10">
                  <div class="flex flex-col gap-4 w-full">
                    <h3 class="text-blue-gray-900 font-bold text-xl">
                      {card.title}
                    </h3>
                    <p class="font-medium text-blue-gray-900 text-lg max-w-3xl">
                      {card.desc}
                    </p>
                  </div>

                  <Button
                    theme={ButtonTheme.NAKED}
                    href={card.actionHref}
                    type="link"
                  >
                    {card.actionTitle}

                    <Icon
                      q:slot="suffix"
                      name={IconName.ARROW_NARROW_RIGHT}
                      size="24px"
                    />
                  </Button>
                </div>
              </Card>
            </div>
          );
        })}

        <Button
          class="w-full md:w-auto"
          theme={ButtonTheme.SOLID}
          href="#"
          type="link"
        >
          {t('doc-summary.action@@Scalability with Module Federation')}
        </Button>
      </div>

      <div q:slot="background">
        <div class="w-2/6 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 blur-lg hidden md:block">
          {centerShape}
        </div>
      </div>
    </Section>
  );
});
